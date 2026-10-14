'use client';

import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Award, FileText, CheckCircle2, Bookmark } from 'lucide-react';

export function Publications() {
  return (
    <section id="publications" className="py-24 px-4 sm:px-8 bg-white relative border-t border-sky-100 selection:bg-sky-500/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-sky-600 font-mono text-xs tracking-wider uppercase font-bold">05. Scholarly Research</span>
            <div className="h-px w-12 bg-sky-200"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Publications & Research
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
            Peer-reviewed scientific research contributing to high-dimensional medical intelligence and automated diagnostic pipelines.
          </p>
        </motion.div>

        {/* Publication Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group rounded-3xl bg-gradient-to-br from-white via-sky-50/20 to-blue-50/20 border border-sky-200 p-7 sm:p-9 hover:border-sky-400 hover:shadow-sky-card transition-all shadow-sm"
        >
          {/* Top Status & Indexing Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 font-mono text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                Scopus Indexed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 font-mono text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                Taylor & Francis Journal
              </span>
            </div>

            <span className="text-xs font-mono text-slate-500 font-medium">
              Peer-Reviewed Scientific Journal
            </span>
          </div>

          {/* Paper Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors leading-snug">
            Healthcare Data Analytics and Visualization Tools and Application
          </h3>

          {/* Journal Attribution */}
          <div className="text-xs sm:text-sm font-mono text-sky-700 mb-5 flex flex-wrap items-center gap-2 font-medium">
            <span>Taylor & Francis Group</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600">Author: Harsh Rana et al.</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">Indexed in Scopus Database</span>
          </div>

          {/* Paper Description / Abstract summary */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            Investigated high-dimensional clinical datasets to formulate automated diagnostic data pipelines and interactive visualization architectures. Addressed latency bottlenecks in processing medical data, establishing reliable visualization patterns for diagnostic decision support.
          </p>

          {/* Key Highlights */}
          <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-sky-100">
            <div className="flex items-start space-x-2 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Scopus Database validated citation index</span>
            </div>
            <div className="flex items-start space-x-2 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>Clinical diagnostic visualization workflows</span>
            </div>
            <div className="flex items-start space-x-2 text-xs text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>High-dimensional statistical data modeling</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
