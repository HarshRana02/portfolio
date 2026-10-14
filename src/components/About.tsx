'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, Cpu, GraduationCap, CheckCircle2, BookOpen, Building2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import harshrana from '@/assets/harshrana.jpg';

const impactStats = [
  {
    label: 'Academic Track',
    value: '9.46 CGPI',
    subtext: 'TCET (B.Tech) • IIT Patna (M.Tech)',
    icon: GraduationCap,
    color: 'text-sky-600',
    bg: 'bg-sky-50',
  },
  {
    label: 'Enterprise AI Engineering',
    value: 'PwC & TCS',
    subtext: 'Big 4 & Global Tech Consulting',
    icon: Briefcase,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    label: 'Scopus Indexed Paper',
    value: 'Taylor & Francis',
    subtext: 'Healthcare Big Data Analytics',
    icon: BookOpen,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
  {
    label: 'Query Latency Reduction',
    value: '50% Cut',
    subtext: 'GCP Vertex AI Vector Search',
    icon: Cpu,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
];

const coreStrengths = [
  'Event-driven pan-India AI pipelines with KEDA & Azure Container Apps',
  'Autonomous multi-agent systems built with LangGraph & CrewAI',
  'VNet-enclosed private LLM endpoints (GPT-4.1) via Azure Private Link',
  'Low-latency RAG systems with FAISS & Vertex AI Vector Search',
  'Immutable compliance auditing & classification with Redis & Cosmos DB',
  'Distributed data engineering with Airbyte, Talend, PostgreSQL & PySpark',
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-white relative border-t border-sky-100 selection:bg-sky-500/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center space-x-3 mb-2">
            <span className="text-sky-600 font-mono text-xs tracking-wider uppercase font-bold">01. Engineering Profile</span>
            <div className="h-px w-12 bg-sky-200"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Harsh Rana
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
            Bridging the gap between cutting-edge AI research and resilient, event-driven enterprise production.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Profile Photo & Credential Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-[320px]">
              {/* Soft Sky Blue Halo */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-sky-300 via-blue-300 to-indigo-300 rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition duration-500"></div>

              <div className="relative rounded-2xl overflow-hidden border border-sky-100 bg-white shadow-sky-card">
                <Image
                  src={harshrana}
                  alt="Harsh Rana - AI & ML Engineer"
                  width={380}
                  height={420}
                  priority
                  className="w-full object-cover aspect-[4/5] object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Photo Caption */}
                <div className="p-4 bg-white/95 border-t border-sky-100">
                  <h3 className="font-bold text-slate-900 text-base">Harsh Rana</h3>
                  <p className="text-xs text-sky-700 font-mono font-medium mt-0.5">Associate AI Engineer @ PwC India</p>
                  <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Upcoming IIT Patna M.Tech Card */}
            <div className="w-full max-w-[320px] mt-4 p-4 rounded-2xl bg-sky-50 border border-sky-200 text-xs shadow-sm">
              <div className="flex items-center space-x-2 text-slate-900 font-bold mb-1">
                <GraduationCap className="w-4 h-4 text-sky-600" />
                <span>IIT Patna (Upcoming M.Tech)</span>
              </div>
              <div className="text-sky-800 font-mono text-[11px] font-semibold">AI & Data Science Engineering</div>
              <div className="mt-1 text-slate-500 font-mono text-xs">Commencing January 2027</div>
            </div>

            {/* B.Tech Callout */}
            <div className="w-full max-w-[320px] mt-3 p-3.5 rounded-2xl bg-offwhite-100 border border-sky-100 text-xs shadow-sm">
              <div className="flex items-center space-x-2 text-slate-800 font-semibold mb-1">
                <Building2 className="w-3.5 h-3.5 text-slate-500" />
                <span>Thakur College of Engineering & Tech (TCET)</span>
              </div>
              <div className="text-slate-500 font-mono text-[11px]">B.Tech AI & Data Science (2020 – 2024)</div>
              <div className="mt-0.5 text-sky-700 font-mono font-bold text-[11px]">Graduated with 9.46 CGPI</div>
            </div>
          </motion.div>

          {/* Narrative & Strategic Focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8 text-slate-700 space-y-6 text-base leading-relaxed"
          >
            <p>
              I am an <span className="text-slate-900 font-semibold">Artificial Intelligence Engineer</span> with deep specialization in architecting event-driven cloud systems and production-grade Generative AI applications. My engineering philosophy centers on measurable enterprise impact: cutting query latencies, guaranteeing compliance, and automating developer workflows with multi-agent intelligence.
            </p>

            <p>
              At <span className="text-slate-900 font-semibold">PwC India</span>, I design and deploy pan-India AI microservices handling nationwide transcript processing. By pairing <span className="text-sky-700 font-mono font-semibold text-sm">Redis</span> streams with <span className="text-sky-700 font-mono font-semibold text-sm">KEDA</span> event-driven autoscalers on Azure Container Apps, our pipelines dynamically scale from zero to high throughput while maintaining tamper-proof audit trails in <span className="text-sky-700 font-mono font-semibold text-sm">Azure Cosmos DB</span>.
            </p>

            <p>
              During my tenure at <span className="text-slate-900 font-semibold">Tata Consultancy Services</span>, I led SDLC Generative AI adoption, architecting private VNet developer companions using <span className="text-sky-700 font-mono font-semibold text-sm">Azure OpenAI GPT-4.1</span> endpoints with strict zero-egress compliance. Additionally, I slashed GCP RAG query latency by <span className="text-sky-700 font-bold">50%</span> via Google Cloud Vertex AI Vector Search optimization.
            </p>

            <p>
              Advancing my academic journey, I have been admitted to the prestigious <span className="text-slate-900 font-semibold">M.Tech in Artificial Intelligence and Data Science Engineering at IIT Patna (Indian Institute of Technology Patna)</span>, commencing in <span className="text-sky-700 font-semibold font-mono">January 2027</span>. My post-graduate focus targets scalable distributed deep learning, mathematical optimization, and high-performance computing.
            </p>

            {/* Core Architectural Pillars */}
            <div className="pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                Verified Architectural Pillars
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {coreStrengths.map((strength, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700 bg-offwhite-100 p-3 rounded-xl border border-sky-100/70">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-2xl bg-white border border-sky-100 shadow-sm hover:border-sky-300 hover:shadow-sky-card transition-all"
                >
                  <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center mb-2`}>
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  </div>
                  <div className="text-lg font-bold text-slate-900 tracking-tight">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1 leading-tight">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
