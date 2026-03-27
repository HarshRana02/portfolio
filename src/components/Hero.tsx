'use client';

import { motion } from 'framer-motion';
import { IDEBlock } from './IDEBlock';
import { ArrowDown, FileDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 py-20 bg-background overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
            <span>Available for new opportunities</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            Harsh Rana
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-400 font-mono mb-8">
            <span className="text-foreground">&gt; </span> AI & ML Engineer
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            AI Developer specializing in AI automation agents & enterprise LLM integrations. I build high-performance intelligent interfaces and robust backends.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded bg-foreground text-background font-medium hover:bg-gray-200 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/assets/resume.pdf"
              download="Harsh_Rana_Resume.pdf"
              className="px-8 py-3 rounded bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan font-medium hover:bg-accent-blue/20 transition-all flex items-center gap-2"
            >
              <FileDown size={18} />
              Resume
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded border border-gray-700 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* IDE Visual */}
        <div className="w-full">
          <IDEBlock />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="animate-bounce flex flex-col items-center text-gray-500 hover:text-foreground transition-colors">
          <span className="text-xs uppercase tracking-widest mb-2 font-mono">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}
