import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { toast } from 'sonner';
import { projectId, publicAnonKey } from '/utils/supabase/info';

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-6ba1d58c`;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        toast.success("Message transmitted successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Transmission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-[0.8]"
            >
              LET'S<br />
              <span className="text-blue-500">TALK.</span>
            </motion.h2>
            
            <p className="text-lg text-white/40 font-light mb-20 max-w-md">
              Available for full-time roles and high-impact freelance projects starting <span className="text-white font-bold italic">Q3 2026.</span>
            </p>

            <div className="space-y-12">
              <div className="space-y-12">
                <motion.a 
                  whileHover={{ x: 10 }}
                  href="mailto:sabaminahil8@gmail.com"
                  className="block group"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-2">Direct Mail</p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter group-hover:text-blue-500 transition-colors underline decoration-white/10 underline-offset-8 break-all">sabaminahil8@gmail.com</p>
                </motion.a>

                <motion.a 
                  whileHover={{ x: 10 }}
                  href="https://wa.me/923330542268"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 mb-2">WhatsApp</p>
                  <p className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tighter group-hover:text-emerald-500 transition-colors underline decoration-white/10 underline-offset-8">03330542268</p>
                </motion.a>
              </div>

              <div className="flex gap-10 items-center">
                <motion.a 
                  whileHover={{ y: -5 }} 
                  href="https://wa.me/923330542268" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-emerald-400 font-black uppercase tracking-widest text-[10px] transition-all"
                >
                  <MessageCircle size={16} /> WhatsApp
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }} 
                  href="https://github.com/minahil-saba" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-white font-black uppercase tracking-widest text-[10px] transition-all"
                >
                  <Github size={16} /> GitHub
                </motion.a>
                <motion.a 
                  whileHover={{ y: -5 }} 
                  href="https://www.linkedin.com/in/minahil-saba-0748a625a/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-white font-black uppercase tracking-widest text-[10px] transition-all"
                >
                  <Linkedin size={16} /> LinkedIn
                </motion.a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center">
            <GlassCard className="w-full bg-white/[0.01] border-white/5 p-12">
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-violet-500 transition-colors">
                  <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Your Name</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value.toUpperCase()})}
                    placeholder="ALEX MERCER"
                    className="w-full bg-transparent text-2xl font-black tracking-tighter uppercase placeholder:text-white/5 focus:outline-none"
                  />
                </div>
                
                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-violet-500 transition-colors">
                  <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Your Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value.toUpperCase()})}
                    placeholder="ALEX@COMPANY.COM"
                    className="w-full bg-transparent text-2xl font-black tracking-tighter uppercase placeholder:text-white/5 focus:outline-none"
                  />
                </div>

                <div className="space-y-2 border-b border-white/10 pb-4 focus-within:border-violet-500 transition-colors">
                  <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">The Brief</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value.toUpperCase()})}
                    placeholder="TELL ME ABOUT YOUR VISION"
                    className="w-full bg-transparent text-2xl font-black tracking-tighter uppercase placeholder:text-white/5 focus:outline-none resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-4 text-3xl font-black tracking-tighter disabled:opacity-50"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'} 
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight size={24} />
                  </div>
                </motion.button>
              </form>
            </GlassCard>
          </div>
        </div>

        <footer className="mt-40 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
          <p>© 2026 MINAHIL SABA — ALL RIGHTS RESERVED</p>
          <div className="flex gap-8">
            <a href="https://wa.me/923330542268" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">WhatsApp</a>
            <a href="https://github.com/minahil-saba" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/minahil-saba-0748a625a/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
          <p>BUILT WITH PASSION & PIXELS</p>
        </footer>
      </div>
    </section>
  );
};
