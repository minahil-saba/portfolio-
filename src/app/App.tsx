import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { AdminPanel } from './components/AdminPanel';
import { Toaster } from 'sonner';

// Suppress specific THREE.js WebGL warnings that are unavoidable in some environments
const originalWarn = console.warn;
console.warn = (...args) => {
  if (typeof args[0] === 'string' && (
    args[0].includes('THREE.WebGLProgram') || 
    args[0].includes('X3557') ||
    args[0].includes('loop only executes for 1 iteration')
  )) {
    return;
  }
  originalWarn(...args);
};

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <main className="dark bg-black min-h-screen text-white selection:bg-white selection:text-black scroll-smooth">
      <Toaster position="top-center" theme="dark" />
      
      {showAdmin ? (
        <AdminPanel onExit={() => setShowAdmin(false)} />
      ) : (
        <>
          <Navbar onAdminClick={() => setShowAdmin(true)} />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
      
      {/* Subtle Global Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </main>
  );
}

export default App;
