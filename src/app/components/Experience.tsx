import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';

export const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "DataSpecc Software House",
      duration: "Jan 2025 — Present",
      description: "Shipped 5+ production features on AI-integrated web platforms, writing end-to-end code across Next.js frontend, REST API layer, and MongoDB data models. Diagnosed and resolved 20+ complex frontend/backend bugs, reducing open issue backlog by ~35% within the first two months. Designed and integrated scalable REST APIs consumed by multiple client-facing modules, coordinating with senior engineers on architecture decisions and code reviews."
    },
    {
      role: "Front-End Developer",
      company: "New Web Order — Bahria Phase 7",
      duration: "Mar 2024 — Aug 2024",
      description: "Engineered 4 React.js applications from scratch — handling component architecture, state management, API integration, and responsive styling with Tailwind CSS. Reduced UI rework cycles by standardizing component patterns and enforcing consistent Git branching across a 5-person team."
    },
    {
      role: "UI/UX Design Intern",
      company: "Tehzeeb Bakers",
      duration: "Aug 2025 — Oct 2025",
      description: "Produced 12 high-fidelity Figma screens for a customer-facing digital product, cutting design-to-handoff time by improving annotation quality and dev-ready specs."
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
          >
            PROFESSIONAL<br />JOURNEY<span className="text-violet-500">.</span>
          </motion.h2>
          <p className="text-white/40 text-xs uppercase tracking-widest font-bold">My track record in industry-grade development & design.</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <GlassCard className="p-0 border-white/5 bg-transparent group/exp overflow-hidden">
                <div className="flex flex-col lg:flex-row items-baseline justify-between p-8 md:p-12 group-hover/exp:bg-white/[0.02] transition-all duration-500">
                  <div className="flex-1 lg:pr-12">
                    <span className="text-violet-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">
                      {exp.duration}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-white/40 font-bold uppercase tracking-widest mb-6 lg:mb-0">{exp.company}</p>
                  </div>
                  
                  <div className="mt-4 lg:mt-0 max-w-xl text-white/60 text-base leading-relaxed">
                    <p>{exp.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
