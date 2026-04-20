import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar = ({ onAdminClick }: { onAdminClick?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount + 1 >= 5) {
      onAdminClick?.();
      setClickCount(0);
    }
    // Reset click count after 2 seconds
    setTimeout(() => setClickCount(0), 2000);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[90%] max-w-4xl",
        isScrolled ? "top-4" : "top-8"
      )}
    >
      <div className={cn(
        "flex items-center justify-between px-8 py-4 rounded-full border transition-all duration-500",
        isScrolled 
          ? "bg-black/80 backdrop-blur-2xl border-white/10 shadow-2xl" 
          : "bg-white/5 backdrop-blur-md border-white/5"
      )}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleLogoClick}
          className="text-lg font-black tracking-tighter cursor-pointer select-none active:scale-95 transition-transform"
        >
          M<span className="text-violet-500">.</span>SABA
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://wa.me/923330542268"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block p-2 text-white/40 hover:text-emerald-400 transition-colors"
          >
            <MessageCircle size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/minahil-saba"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block p-2 text-white/40 hover:text-white transition-colors"
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/minahil-saba-0748a625a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block p-2 text-white/40 hover:text-white transition-colors"
          >
            <Linkedin size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/923330542268"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all"
          >
            Hire
          </motion.a>
          
          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 md:hidden bg-black/90 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden p-8"
          >
            <div className="flex flex-col space-y-6">
              <a
                href="https://wa.me/923330542268"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black tracking-tighter text-emerald-500"
              >
                WHATSAPP
              </a>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-black tracking-tighter text-white/70 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

