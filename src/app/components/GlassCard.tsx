import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { 
        y: -10, 
        scale: 1.01,
        transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } 
      } : {}}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl transition-all duration-500",
        className
      )}
    >
      {/* Dynamic border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-[-1px] bg-gradient-to-br from-violet-500/40 via-blue-500/20 to-transparent rounded-[2rem]" />
      </div>
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="relative z-10 p-8 h-full">
        {children}
      </div>
    </motion.div>
  );
};
