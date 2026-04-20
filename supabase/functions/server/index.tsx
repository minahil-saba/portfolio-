import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { createClient } from 'npm:@supabase/supabase-js';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', cors());

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

// --- AUTH ---

app.post('/signup', async (c) => {
  try {
    const { email, password, name } = await c.req.json();
    const normalizedEmail = email.trim().toLowerCase();
    
    const { data, error: createError } = await supabase.auth.admin.createUser({
      email: normalizedEmail,
      password: password,
      user_metadata: { name },
      email_confirm: true
    });

    if (createError) {
      if (createError.message.includes('already registered') || createError.status === 422) {
        const { data: { users }, error: listError } = await supabase.auth.admin.listUsers();
        const existingUser = users?.find(u => u.email?.toLowerCase() === normalizedEmail);
        
        if (existingUser) {
          const { error: updateError } = await supabase.auth.admin.updateUserById(existingUser.id, { password });
          if (updateError) return c.json({ error: updateError.message }, 400);
          return c.json({ success: true, message: 'Admin credentials refreshed' });
        }
      }
      return c.json({ error: createError.message }, 400);
    }
    
    return c.json({ success: true, message: 'Admin account initialized' });
  } catch (err) {
    return c.json({ error: 'Internal server error' }, 500);
  }
});

const authMiddleware = async (c, next) => {
  const accessToken = c.req.header('Authorization')?.split(' ')[1];
  if (!accessToken) return c.json({ error: 'Unauthorized' }, 401);
  
  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  if (error || !user) return c.json({ error: 'Invalid token' }, 401);
  
  c.set('user', user);
  await next();
};

// --- DATA ---

app.get('/projects', async (c) => {
  const projects = await kv.get('projects') || [];
  return c.json(projects);
});

app.post('/projects', authMiddleware, async (c) => {
  const project = await c.req.json();
  const projects = await kv.get('projects') || [];
  const existingIndex = projects.findIndex(p => p.id === project.id);
  if (existingIndex > -1) projects[existingIndex] = project;
  else projects.push({ ...project, id: crypto.randomUUID() });
  await kv.set('projects', projects);
  return c.json({ success: true });
});

app.get('/experience', async (c) => {
  const experience = await kv.get('experience') || [];
  return c.json(experience);
});

app.post('/experience', authMiddleware, async (c) => {
  const entry = await c.req.json();
  const experience = await kv.get('experience') || [];
  const existingIndex = experience.findIndex(e => e.id === entry.id);
  if (existingIndex > -1) experience[existingIndex] = entry;
  else experience.push({ ...entry, id: crypto.randomUUID() });
  await kv.set('experience', experience);
  return c.json({ success: true });
});

app.post('/contact', async (c) => {
  const message = await c.req.json();
  const messages = await kv.get('messages') || [];
  messages.push({ ...message, id: crypto.randomUUID(), timestamp: new Date().toISOString() });
  await kv.set('messages', messages);
  return c.json({ success: true });
});

app.get('/messages', authMiddleware, async (c) => {
  const messages = await kv.get('messages') || [];
  return c.json(messages);
});

Deno.serve(app.fetch);
