import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { Zap, ShieldCheck, Code, Globe } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.02]">
        <h2 className="text-[10vw] font-black leading-none whitespace-nowrap">FULL STACK DEV</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
              ENGINEERING <span className="text-violet-500">DIGITAL</span> EXCELLENCE.
            </h2>
            <div className="space-y-6 text-base text-white/60 leading-relaxed font-light">
              <p>
                I am a <span className="text-white font-bold">Full-Stack Engineer</span> with 1+ year of industry experience building and shipping AI-integrated full-stack products. Final-year Software Engineering student at Foundation University of Social Sciences & Technology (CGPA 3.65/4.0) with expertise in React, Next.js, and Python.
              </p>
              <p>
                I specialize in <span className="text-white font-bold">bridging cutting-edge AI with production web systems</span>. I engineered a YOLO-based computer vision pipeline for real-world solar fault detection and contributed production features across React/Next.js platforms serving live users. Seeking a high-impact engineering role where technical depth and AI integration matter.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="mt-1 text-violet-400"><Code size={20} /></div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-widest text-[10px] mb-1">Architecture</h4>
                    <p className="text-[12px] text-white/40">Clean, maintainable component-based code.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="mt-1 text-blue-400"><Globe size={20} /></div>
                  <div>
                    <h4 className="font-black text-white uppercase tracking-widest text-[10px] mb-1">Performance</h4>
                    <p className="text-[12px] text-white/40">Optimized for speed, SEO, and user experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <GlassCard className="p-10 aspect-[4/5] flex flex-col justify-between bg-gradient-to-br from-violet-600/10 to-transparent">
                <div className="flex justify-between items-start">
                  <Zap className="text-violet-400" size={32} />
                  <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase">Focus Area</span>
                </div>
                
                <div>
                  <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase leading-none">Scalable<br />Systems</h3>
                  <p className="text-white/40 uppercase tracking-widest font-bold text-[10px]">Built for the modern web ecosystem.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      viewport={{ once: true }}
                      className="h-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" 
                    />
                  </div>
                  <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-white/30">
                    <span>Frontend</span>
                    <span>Backend</span>
                    <span>Design</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-500/20 rounded-full blur-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
