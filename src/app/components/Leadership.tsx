import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { Trophy, Users, Globe } from 'lucide-react';

export const Leadership = () => {
  const roles = [
    {
      icon: <Users className="text-violet-400" size={28} />,
      color: "from-violet-600/10",
      accent: "text-violet-400",
      border: "border-violet-500/20",
      title: "Campus Director",
      org: "PyDir Society — FUI",
      detail: "Scaled a Python & tech community to 200+ active student members.",
    },
    {
      icon: <Trophy className="text-yellow-400" size={28} />,
      color: "from-yellow-600/10",
      accent: "text-yellow-400",
      border: "border-yellow-500/20",
      title: "Vice President",
      org: "Sports Society — FUSST",
      detail: "Organized 5+ university-wide events. Gold Medalist in Basketball & Futsal (Sports Gala).",
    },
  ];

  const community = [
    "Google Developer Group (GDG) Islamabad",
    "Women Techmakers",
    "CodeWar S2 — HITEC",
    "NOMLogic 2024",
  ];

  return (
    <section id="leadership" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
          >
            LEADERSHIP &<br />RECOGNITION<span className="text-violet-500">.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {roles.map((role, idx) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className={`h-full bg-gradient-to-br ${role.color} to-transparent border-white/5`}>
                <div className={`inline-flex p-3 rounded-xl bg-white/5 border ${role.border} mb-5`}>
                  {role.icon}
                </div>
                <h3 className="text-xl font-black tracking-tight mb-1">{role.title}</h3>
                <p className={`text-xs font-black uppercase tracking-[0.2em] ${role.accent} mb-3`}>{role.org}</p>
                <p className="text-white/50 text-sm leading-relaxed">{role.detail}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="border-white/5 bg-transparent">
            <div className="flex items-center gap-3 mb-5">
              <Globe className="text-blue-400" size={24} />
              <h3 className="text-lg font-black uppercase tracking-widest">Community & Events</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {community.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest"
                >
                  {c}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
