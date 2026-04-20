import React from 'react';
import { motion } from 'motion/react';
import { Database, Layout, PenTool, Terminal, Sparkles, Cpu, Globe, Rocket, Brain, Wrench } from 'lucide-react';
import { GlassCard } from './GlassCard';

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            TOOLKIT<span className="text-violet-500">.</span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-rows-3">
          {/* Main Frontend Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2"
          >
            <GlassCard className="h-full bg-gradient-to-br from-violet-600/10 to-transparent">
              <Layout className="text-violet-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Frontend Engineering</h3>
              <p className="text-white/50 mb-8 max-w-sm text-sm">Crafting immersive, high-performance user interfaces with modern frameworks.</p>
              <div className="flex flex-wrap gap-3">
                {["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "HTML5", "CSS3"].map((s) => (
                  <span key={s} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-white/80 uppercase tracking-widest">{s}</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <GlassCard className="h-full bg-gradient-to-r from-blue-600/10 to-transparent">
              <div className="flex justify-between items-start">
                <div>
                  <Database className="text-blue-400 mb-4" size={32} />
                  <h3 className="text-2xl font-bold mb-2">Scalable Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "REST APIs", "Next.js API Routes", "MySQL", "MongoDB"].map((s) => (
                      <span key={s} className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">{s}</span>
                    ))}
                  </div>
                </div>
                <Cpu className="text-white/10" size={60} />
              </div>
            </GlassCard>
          </motion.div>

          {/* UI/UX Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="h-full bg-gradient-to-br from-emerald-600/10 to-transparent">
              <PenTool className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Figma • Design Systems</p>
            </GlassCard>
          </motion.div>

          {/* AI/CV Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard className="h-full bg-gradient-to-br from-pink-600/10 to-transparent">
              <Brain className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">AI / Computer Vision</h3>
              <p className="text-xs text-white/40 uppercase tracking-widest font-bold">YOLO • CV Pipelines</p>
            </GlassCard>
          </motion.div>

          {/* Dev Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <GlassCard className="h-full bg-gradient-to-r from-orange-600/10 to-transparent">
              <Wrench className="text-orange-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Dev Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Postman", "VS Code", "Cursor"].map((s) => (
                  <span key={s} className="text-[10px] font-black text-orange-400 uppercase tracking-[0.2em]">{s}</span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

