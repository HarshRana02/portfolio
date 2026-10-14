'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, Menu, X, Sparkles, Send, BrainCircuit } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Agent Playground', href: '#playground' },
  { name: 'Experience', href: '#experience' },
  { name: 'AI Systems', href: '#projects' },
  { name: 'Arsenal', href: '#skills' },
  { name: 'Publications', href: '#publications' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-sky-100 shadow-sm shadow-sky-500/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center space-x-2.5 group focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            HR
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors text-base leading-tight">
              Harsh Rana
            </span>
            <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              AI Engineer @ PwC India
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/80 border border-sky-100/80 rounded-full px-3.5 py-1.5 shadow-sm shadow-sky-500/5 backdrop-blur-sm">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-sky-600 hover:bg-sky-50 rounded-full transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Quick Action CTAs */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="/assets/harshrana.pdf"
            download="Harsh_Rana_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-sky-700 bg-sky-50 border border-sky-200/80 hover:bg-sky-100 hover:border-sky-300 transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-sky-600" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 transition-all shadow-md shadow-sky-500/20"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Let&apos;s Connect</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/assets/harshrana.pdf"
            download="Harsh_Rana_Resume.pdf"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold text-sky-700 bg-sky-50 border border-sky-200"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-sky-100 text-slate-700 hover:text-sky-600 shadow-sm"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-sky-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-5 space-y-3">
              <div className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="pt-3 border-t border-sky-100 flex flex-col gap-2">
                <a
                  href="/assets/harshrana.pdf"
                  download="Harsh_Rana_Resume.pdf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-mono font-semibold text-sky-700 bg-sky-50 border border-sky-200"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Verified Resume</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
