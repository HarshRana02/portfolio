'use client';

import { motion } from 'framer-motion';
import { IDEBlock } from './IDEBlock';
import { ArrowDown, FileDown, Sparkles, MapPin, Briefcase, GraduationCap, Award, Play, ChevronRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 pt-32 pb-20 bg-offwhite-100 overflow-hidden">

      {/* Luminous Sky Blue Ambient Blooms */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[350px] md:h-[500px] bg-gradient-to-tr from-sky-300/25 via-blue-400/20 to-indigo-300/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 right-10 w-80 h-80 bg-sky-200/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">

        {/* Hero Bio & AI Engineering Value Proposition */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Associate AI Engineer @ PwC India</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-sky-50/70 border border-sky-200 text-sky-800 text-xs font-mono font-medium shadow-sm">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
              <span>Upcoming M.Tech @ IIT Patna (Jan 2027)</span>
            </div>
            <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 text-slate-600 text-xs font-mono shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>Mumbai, India</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-slate-900 leading-[1.08]">
            Harsh <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Rana</span>
          </h1>

          <div className="flex items-center gap-2 text-xl sm:text-2xl text-slate-700 font-mono mb-5">
            <span className="text-sky-600 font-bold">&gt;</span>
            <span className="font-semibold text-slate-900">AI & ML Engineer</span>
            <span className="text-slate-400 text-base font-normal hidden sm:inline">| Multi-Agent & Cloud</span>
          </div>

          <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
            Architecting autonomous multi-agent developer companions (LangGraph & CrewAI), pan-India event-driven cloud microservices (KEDA & Azure Container Apps), and sub-60ms enterprise RAG systems.
          </p>

          {/* Credential Highlights Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 max-w-lg">
            <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-sm flex items-center space-x-3">
              <GraduationCap className="w-5 h-5 text-sky-600 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-900">9.46 CGPI</div>
                <div className="text-[10px] text-slate-500 font-mono">B.Tech AI & DS</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-sm flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-blue-600 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-900">PwC & TCS</div>
                <div className="text-[10px] text-slate-500 font-mono">Enterprise AI</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white border border-sky-100 shadow-sm flex items-center space-x-3 col-span-2 sm:col-span-1">
              <Award className="w-5 h-5 text-amber-500 shrink-0" />
              <div className="text-xs">
                <div className="font-bold text-slate-900">Scopus Paper</div>
                <div className="text-[10px] text-slate-500 font-mono">Taylor & Francis</div>
              </div>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#playground"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold hover:from-sky-600 hover:to-blue-700 transition-all shadow-lg shadow-sky-500/25 text-sm flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 text-sky-200 group-hover:rotate-12 transition-transform" />
              <span>Test AI Agent Playground</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="/assets/harshrana.pdf"
              download="Harsh_Rana_Resume.pdf"
              className="px-5 py-3.5 rounded-xl bg-white border border-sky-200 text-sky-700 font-semibold hover:bg-sky-50 transition-all text-sm flex items-center gap-2 shadow-sm"
            >
              <FileDown size={17} className="text-sky-600" />
              <span>Download Resume</span>
            </a>

            <a
              href="#projects"
              className="px-5 py-3.5 rounded-xl border border-slate-200 bg-white/60 text-slate-700 hover:text-sky-700 hover:border-sky-300 transition-all text-sm font-medium"
            >
              Explore Systems
            </a>
          </div>

          {/* Code Feature Pill */}
          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            <span>Runnable in VS Code:</span>
            <span className="text-sky-700 font-semibold">RAG Pipeline</span>
            <span className="text-slate-300">•</span>
            <span className="text-sky-700 font-semibold">Ollama Chat</span>
            <span className="text-slate-300">•</span>
            <span className="text-sky-700 font-semibold">ReAct Agent</span>
          </div>
        </motion.div>

        {/* Interactive Code IDE */}
        <div className="w-full">
          <IDEBlock />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-14 flex flex-col items-center"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-slate-400 hover:text-sky-600 transition-colors group"
          aria-label="Scroll to About section"
        >
          <span className="text-[11px] uppercase tracking-widest mb-1 font-mono font-semibold text-slate-500 group-hover:text-sky-600">
            Explore Engineering
          </span>
          <ArrowDown size={16} className="animate-bounce text-sky-500" />
        </a>
      </motion.div>
    </section>
  );
}
