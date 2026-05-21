import React from 'react';
import { motion } from 'motion/react';
import { Github, ArrowUpRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { cn } from '../../lib/utils';

import imgCars from "figma:asset/51933cbaf7c8a48f7448bdff42c37e9fe953733e.png";
import imgRestaurant from "figma:asset/3edf37563480ec8119f198cf9f73469d90f39648.png";
import imgSolarPak from "../../assets/solarpak.png";
import imgZirconLabs from "../../assets/zirconlabs.png";
import imgStayhome from "../../assets/stayhome.png";

export const Projects = () => {
  const projects = [
    {
      title: "Solar Pak — Fault Detection & Optimization",
      description: "Full-stack AI solar energy platform — 7-class YOLOv8 fault detection (>85% mAP) with CLIP zero-shot validation, a 12-stage post-processing pipeline producing real-time Health Scores (0–100), a physics-based recommendation engine for 8 Pakistani cities, and a complete e-commerce + admin panel with cart, checkout, PDF invoices & analytics. Served via Python FastAPI microservice on Google Cloud Run with Docker.",
      tag: "AI / Computer Vision / FYP",
      tech: ["Next.js 15", "TypeScript", "Python FastAPI", "YOLOv8", "CLIP", "MongoDB Atlas", "Docker", "Google Cloud Run"],
      image: imgSolarPak,
      link: "https://solarpak.shop/",
      github: "https://github.com/minahil-saba",
      featured: true
    },
    {
      title: "ZR Cars Dealership",
      description: "A comprehensive client-based luxury automotive platform. Features high-performance vehicle filtering, dynamic inventory management, and immersive visual storytelling built for scale and speed.",
      tag: "Professional Client Work",
      tech: ["Next.js", "Three.js", "Tailwind 4", "Supabase", "TypeScript"],
      image: imgCars,
      link: "https://carwebsite-seven.vercel.app",
      github: "https://github.com/minahil-saba/carwebsite",
      featured: false
    },
    {
      title: "ZirconLabs — Premium Software Agency Website",
      description: "A complete, modern SaaS software company website built for a premium software agency. Features fluid 3D animations, a custom design system, and production-grade architecture with a Next.js 14 backend, MongoDB data layer, server-side rendering, and optimized performance.",
      tag: "Professional Client Work",
      tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "MongoDB"],
      image: imgZirconLabs,
      link: "https://companywebsite-indol.vercel.app/",
      github: "https://github.com/minahil-saba",
      featured: false
    },
    {
      title: "Restaurant Management System",
      description: "A complete order management web app featuring cart state management, product catalog, user session handling, and a MySQL-backed REST API with normalized data models and CRUD operations.",
      tag: "Full-Stack Development",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL", "Node.js"],
      image: imgRestaurant,
      link: "https://inquisitive-tapioca-88032c.netlify.app/",
      github: "https://github.com/minahil-saba",
      featured: false
    },
    {
      title: "Stayhome — Real Estate Agency Website",
      description: "A modern real estate agency website featuring dynamic property listings, location-based search, agent profiles, and an intuitive property browsing experience. Built with a component-driven architecture for seamless property discovery and inquiry management.",
      tag: "Frontend Development",
      tech: ["React", "TypeScript"],
      image: imgStayhome,
      link: "https://staticfile-fed5d.wasmer.app/",
      github: "https://github.com/minahil-saba",
      featured: false
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tighter"
          >
            FEATURED<br />PROJECTS<span className="text-blue-500">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 max-w-xs text-xs uppercase tracking-widest font-bold"
          >
            Showcasing real-world solutions and complex technical implementations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group",
                project.featured ? "md:col-span-12" : "md:col-span-6"
              )}
            >
              <GlassCard className="p-0 border-white/5 bg-transparent overflow-hidden h-full">
                <div className={cn(
                  "flex flex-col",
                  project.featured ? "md:flex-row" : ""
                )}>
                  {/* Image Part */}
                  <div className={cn(
                    "relative overflow-hidden",
                    project.featured ? "md:w-3/5 aspect-video md:aspect-auto" : "aspect-video"
                  )}>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Info Part */}
                  <div className={cn(
                    "p-8 md:p-10 flex flex-col justify-center",
                    project.featured ? "md:w-2/5" : ""
                  )}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 bg-white/10 rounded-full text-blue-400 border border-blue-400/20">
                        {project.tag}
                      </span>
                    </div>
                    
                    <h3 className={cn(
                      "font-black mb-4 tracking-tight",
                      project.featured ? "text-3xl md:text-4xl" : "text-2xl"
                    )}>
                      {project.title}
                    </h3>
                    
                    <p className="text-white/60 mb-6 text-base leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-bold text-white/30 uppercase tracking-widest border-b border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white font-bold group/btn text-sm"
                      >
                        Launch Site <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/40 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </motion.a>
                    </div>
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
