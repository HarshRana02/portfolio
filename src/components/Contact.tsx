'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, Phone, MapPin, Copy, Check, FileDown, ArrowUp, Sparkles } from 'lucide-react';

export function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-24 px-4 sm:px-8 bg-offwhite-100 border-t border-sky-100 relative selection:bg-sky-500/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-mono text-xs font-semibold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>06. Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let&apos;s Build Something Exceptional
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Interested in collaborating on enterprise Generative AI systems, autonomous agent architectures, or high-throughput cloud pipelines? Reach out directly.
          </p>
        </motion.div>

        {/* Contact Methods Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {/* Email Card */}
          <div className="p-6 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-sky-card transition-all flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-500 font-semibold mb-1">Direct Email</div>
              <a
                href="mailto:harshtrana0210@gmail.com"
                className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors break-all"
              >
                harshtrana0210@gmail.com
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-sky-100 flex items-center justify-between">
              <a
                href="mailto:harshtrana0210@gmail.com"
                className="text-xs text-sky-700 font-mono font-semibold flex items-center gap-1 hover:underline"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard('harshtrana0210@gmail.com', 'email')}
                className="text-xs font-mono text-slate-600 hover:text-slate-900 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-offwhite-100 border border-slate-200"
                title="Copy email to clipboard"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-sky-card transition-all flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-500 font-semibold mb-1">Direct Telephone</div>
              <a
                href="tel:+918452062333"
                className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors font-mono"
              >
                +91 8452062333
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-sky-100 flex items-center justify-between">
              <a
                href="tel:+918452062333"
                className="text-xs text-blue-700 font-mono font-semibold flex items-center gap-1 hover:underline"
              >
                <span>Call Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => copyToClipboard('+918452062333', 'phone')}
                className="text-xs font-mono text-slate-600 hover:text-slate-900 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-offwhite-100 border border-slate-200"
                title="Copy phone to clipboard"
              >
                {copiedType === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location & Timezone Card */}
          <div className="p-6 rounded-3xl bg-white border border-sky-100 hover:border-sky-300 hover:shadow-sky-card transition-all flex flex-col justify-between sm:col-span-2 lg:col-span-1 shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs font-mono text-slate-500 font-semibold mb-1">Base & Availability</div>
              <div className="text-sm font-bold text-slate-900">
                Mumbai, Maharashtra, India
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-sky-100 flex items-center justify-between text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                IST (UTC +5:30)
              </span>
              <span className="text-slate-500 font-medium">Open to Enterprise Roles</span>
            </div>
          </div>
        </div>

        {/* Resume Download Feature Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-50 via-white to-blue-50 border border-sky-200 mb-16 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sky-card">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900 mb-1">Looking for the official verified resume?</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Download the complete PDF detailing enterprise architectures, research citations, and technical certifications.
            </p>
          </div>
          <a
            href="/assets/harshrana.pdf"
            download="Harsh_Rana_Resume.pdf"
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold transition-all shadow-md shadow-sky-500/25 text-sm flex items-center gap-2 shrink-0"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        {/* Social Links Row */}
        <div className="flex flex-wrap items-center justify-between border-t border-sky-100 pt-8 gap-4">
          <div className="flex items-center space-x-3">
            <a
              href="https://linkedin.com/in/harshrana02"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white border border-sky-100 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-all shadow-sm"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/HarshRana02"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white border border-sky-100 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-all shadow-sm"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/RanaHarsh02"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white border border-sky-100 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-all shadow-sm"
              title="Twitter / X Profile"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>

          <div className="text-xs font-mono text-slate-500 text-center sm:text-right">
            <div>&copy; {new Date().getFullYear()} Harsh Rana. All rights reserved.</div>
            <div className="mt-0.5 text-slate-400">Architected with Next.js, TypeScript & Tailwind CSS</div>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white border border-sky-100 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-all flex items-center gap-1.5 text-xs font-mono shadow-sm"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-600" />
          </button>
        </div>
      </div>
    </footer>
  );
}
