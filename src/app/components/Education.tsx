import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
          >
            EDUCATION<span className="text-violet-500">.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="border-white/5 bg-transparent">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="p-4 rounded-2xl bg-violet-500/10 border border-violet-500/20">
                <GraduationCap className="text-violet-400" size={40} />
              </div>
              <div className="flex-1">
                <span className="text-violet-500 font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">
                  2022 — 2026
                </span>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-1">
                  BSc Software Engineering
                </h3>
                <p className="text-white/50 font-bold uppercase tracking-widest text-sm mb-4">
                  Foundation University of Social Sciences & Technology (FUSST) · Rawalpindi, PK
                </p>
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-black text-sm tracking-widest">
                    CGPA: 3.65 / 4.0
                  </span>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 font-bold text-xs uppercase tracking-widest">
                    Final Year
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
