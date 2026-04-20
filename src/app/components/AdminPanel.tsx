import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare, 
  LogOut, 
  Plus, 
  Trash2, 
  Save, 
  X,
  ExternalLink,
  ChevronRight,
  User
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { GlassCard } from './GlassCard';
import { toast } from 'sonner';

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-6ba1d58c`;

export const AdminPanel = ({ onExit }: { onExit: () => void }) => {
  const [session, setSession] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'experience' | 'messages'>('projects');
  const [isLogin, setIsLogin] = useState(true);
  
  const [data, setData] = useState({
    projects: [],
    experience: [],
    messages: []
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchData(session.access_token);
    });
  }, []);

  const fetchData = async (token: string) => {
    try {
      const headers = { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };
      
      const [pRes, eRes, mRes] = await Promise.all([
        fetch(`${API_URL}/projects`, { headers: { 'Authorization': `Bearer ${publicAnonKey}` } }),
        fetch(`${API_URL}/experience`, { headers: { 'Authorization': `Bearer ${publicAnonKey}` } }),
        fetch(`${API_URL}/messages`, { headers })
      ]);
      
      const projects = await pRes.json();
      const experience = await eRes.json();
      const messages = await mRes.json();
      
      setData({ projects, experience, messages });
    } catch (err) {
      console.error('Error fetching admin data:', err);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const trimmedEmail = email.trim().toLowerCase();
    
    if (isLogin) {
      const { data: { session }, error } = await supabase.auth.signInWithPassword({ 
        email: trimmedEmail, 
        password 
      });
      
      if (error) {
        toast.error(`Login Error: ${error.message}`);
      } else {
        setSession(session);
        fetchData(session!.access_token);
        toast.success('Access Granted');
      }
    } else {
      try {
        const res = await fetch(`${API_URL}/signup`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({ email: trimmedEmail, password, name: 'Minahil Saba' })
        });
        
        const result = await res.json();
        if (!res.ok) {
          toast.error(`Setup Error: ${result.error || 'Check server logs'}`);
        } else {
          toast.success(result.message || 'Admin Profile Initialized!');
          setIsLogin(true);
        }
      } catch (err) {
        toast.error('Network Error: Could not reach auth server.');
        console.error('Fetch error:', err);
      }
    }
    setIsLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    onExit();
  };

  if (!session) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <GlassCard className="max-w-md w-full p-10 border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
                <LayoutDashboard className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-black tracking-tighter uppercase">{isLogin ? 'Admin Core' : 'Initialize Admin'}</h2>
            </div>
            
            <form onSubmit={handleAuth} className="space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Identifier</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-violet-500/50 transition-all"
                  placeholder="name@minahilsaba.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Access Key</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-violet-500/50 transition-all"
                  placeholder="••••••••"
                />
              </div>
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-violet-600 hover:text-white transition-all disabled:opacity-50"
              >
                {isLoading ? 'Processing...' : (isLogin ? 'Initiate Access' : 'Create Admin')}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-[10px] font-black uppercase tracking-widest text-violet-400 hover:text-violet-300"
              >
                {isLogin ? "Need to initialize first admin?" : "Back to Login"}
              </button>
            </div>

            <button onClick={onExit} className="mt-8 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-white/60 transition-colors w-full text-center">
              Return to Public View
            </button>
          </GlassCard>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col">
      <header className="px-8 py-6 border-b border-white/5 flex items-center justify-between bg-black/50 backdrop-blur-xl">
        <div className="flex items-center gap-6">
          <div className="text-lg font-black tracking-tighter">
            ADMIN<span className="text-violet-500">_SYSTEM</span>
          </div>
          <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
            {[
              { id: 'projects', icon: LayoutDashboard, label: 'Projects' },
              { id: 'experience', icon: Briefcase, label: 'Experience' },
              { id: 'messages', icon: MessageSquare, label: 'Inquiries' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all ${
                  activeTab === tab.id ? 'bg-white text-black' : 'text-white/40 hover:text-white'
                }`}
              >
                <tab.icon size={12} /> {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end mr-4">
            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Active Session</span>
            <span className="text-xs font-bold text-violet-400">{session.user.email}</span>
          </div>
          <button 
            onClick={handleLogout}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-red-500 hover:border-red-500/20 transition-all"
          >
            <LogOut size={18} />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'projects' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-black tracking-tighter uppercase">Project Inventory</h3>
                <button className="px-6 py-3 bg-violet-600 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-violet-700 transition-all">
                  <Plus size={16} /> New Entry
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.projects.map((p: any) => (
                  <GlassCard key={p.id} className="p-6 border-white/5 bg-white/[0.01] flex flex-col h-full">
                    <div className="h-40 rounded-lg overflow-hidden mb-6 bg-white/5">
                      <img src={p.image} className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700" alt="" />
                    </div>
                    <h4 className="text-xl font-black mb-2 uppercase tracking-tight">{p.title}</h4>
                    <p className="text-sm text-white/40 flex-1 line-clamp-3 mb-6">{p.description}</p>
                    <div className="flex gap-2">
                      <button className="flex-1 py-3 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Edit</button>
                      <button className="p-3 text-red-500/40 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-black tracking-tighter uppercase">Career Timeline</h3>
                <button className="px-6 py-3 bg-violet-600 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-violet-700 transition-all">
                  <Plus size={16} /> New Milestone
                </button>
              </div>
              
              <div className="space-y-4">
                {data.experience.map((e: any) => (
                  <GlassCard key={e.id} className="p-8 border-white/5 bg-white/[0.01] flex items-center justify-between group">
                    <div>
                      <span className="text-[10px] font-black text-violet-500 uppercase tracking-widest mb-1 block">{e.duration}</span>
                      <h4 className="text-2xl font-black uppercase tracking-tight mb-1">{e.role}</h4>
                      <p className="text-sm text-white/40 font-bold uppercase tracking-widest">{e.company}</p>
                    </div>
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all">
                      <button className="px-6 py-3 bg-white/5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black">Modify</button>
                      <button className="p-3 text-red-500/40 hover:text-red-500"><Trash2 size={18} /></button>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="space-y-8">
              <h3 className="text-3xl font-black tracking-tighter uppercase">Client Inquiries</h3>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.01]">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/40">Timestamp</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/40">Sender</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/40">Subject</th>
                      <th className="p-6 text-[10px] font-black uppercase tracking-widest text-white/40">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.messages.map((m: any) => (
                      <tr key={m.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                        <td className="p-6">
                          <span className="text-xs text-white/40">{new Date(m.timestamp).toLocaleDateString()}</span>
                        </td>
                        <td className="p-6">
                          <div className="flex flex-col">
                            <span className="font-bold text-sm text-white">{m.name}</span>
                            <span className="text-xs text-white/30">{m.email}</span>
                          </div>
                        </td>
                        <td className="p-6">
                          <span className="text-sm text-white/60 line-clamp-1">{m.message}</span>
                        </td>
                        <td className="p-6">
                          <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-violet-400 opacity-0 group-hover:opacity-100 transition-all">
                            View Thread <ChevronRight size={12} />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {data.messages.length === 0 && (
                      <tr>
                        <td colSpan={4} className="p-20 text-center text-white/20 font-black uppercase tracking-widest">No inquiries received yet</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
