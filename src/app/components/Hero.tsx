import React, { Suspense } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Spline 
            scene="https://prod.spline.design/YPFmg2H3ZbNRMGJc/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
        {/* Overlays to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-5 py-2 mb-8 text-[10px] font-black tracking-[0.3em] uppercase bg-white/5 backdrop-blur-md border border-white/10 text-white/80 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            Design • Develop • Deploy
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter leading-none mix-blend-exclusion">
            MINAHIL<br />
            <span className="text-transparent stroke-text">SABA</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <div className="text-left md:border-l border-white/20 md:pl-8">
            <p className="text-lg md:text-xl font-light text-white/60 max-w-sm leading-tight">
              Crafting <span className="text-white font-medium">next-gen</span> digital architectures for the future web.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-widest rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/30">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.5);
        }
      `}} />
    </section>
  );
};
