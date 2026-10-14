'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle, ArrowRight, Sparkles, Building2 } from 'lucide-react';

interface TimelineItem {
  role: string;
  organization: string;
  location?: string;
  period: string;
  badge?: string;
  badgeColor?: string;
  bullets: string[];
  tech: string[];
}

const workExperience: TimelineItem[] = [
  {
    role: 'Associate (Artificial Intelligence Engineer)',
    organization: 'PwC India (Entity: PWCA LLP)',
    location: 'Mumbai, India',
    period: 'Dec 2025 – Present',
    badge: 'Current Role',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    bullets: [
      'Architected an event-driven, pan-India AI pipeline using Python, Redis, and Azure Cosmos DB that leverages NLP to parse transcripts and automate task distribution.',
      'Containerized microservices via Docker and deployed across Azure Container Apps and Azure Container Jobs utilizing KEDA for dynamic event-driven autoscaling with a React frontend.',
      'Engineered a high-throughput data pipeline to automatically classify complaints against government compliance, deploying microservices to enforce immutable audit trails.'
    ],
    tech: ['Python', 'Redis', 'Azure Cosmos DB', 'Docker', 'Azure Container Apps', 'Azure Container Jobs', 'KEDA', 'React', 'NLP']
  },
  {
    role: 'Systems Engineer (Artificial Intelligence Engineer)',
    organization: 'Tata Consultancy Services',
    location: 'Mumbai, India',
    period: 'Dec 2024 – Nov 2025',
    bullets: [
      'Led Generative AI adoption across the SDLC by integrating LLM capabilities to drive automation, rapid prototyping, and enterprise innovation.',
      'Designed a low-latency RAG pipeline on GCP using LangChain and FAISS, migrating to Vertex AI Vector Search to slash query latency by 50% via Streamlit.',
      'Designed a secure, VNet-enclosed AI coding assistant using Azure OpenAI Service and private GPT-4.1 endpoints deployed via Azure Private Link for offline enterprise compliance.',
      'Built an Azure-native multimodal vision pipeline (Azure AI Vision, Azure AI Search) for zero-shot cataloging.'
    ],
    tech: ['Azure OpenAI', 'GPT-4.1', 'Azure Private Link', 'GCP Vertex AI Vector Search', 'LangChain', 'FAISS', 'Streamlit', 'Azure AI Vision']
  },
  {
    role: 'Intern (Data Engineer)',
    organization: 'Dytel Technology Group',
    location: 'Mumbai, India',
    period: 'May 2023 – June 2024',
    bullets: [
      'Engineered a high-performance data pipeline with Airbyte, Talend and PostgreSQL that cut processing latencies by 30% to support distributed machine learning and predictive analytics via PySpark.',
      'Delivered model insights by embedding interactive Metabase dashboards directly into the client application, creating a seamless user experience.'
    ],
    tech: ['Airbyte', 'Talend', 'PostgreSQL', 'PySpark', 'Metabase', 'Distributed ML']
  }
];

const educationData: TimelineItem[] = [
  {
    role: 'M.Tech in Artificial Intelligence and Data Science Engineering',
    organization: 'Indian Institute of Technology Patna (IIT Patna)',
    period: 'Jan 2027 – Commencing',
    badge: 'Upcoming • Premier Institute of National Importance',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-300 font-bold',
    bullets: [
      'Admitted to the upcoming Master of Technology (M.Tech) in Artificial Intelligence and Data Science Engineering at IIT Patna commencing in January 2027.',
      'Advanced specialized focus on Deep Learning Foundations, Distributed Large-Scale ML Systems, High-Performance Computing (HPC), and Frontier Generative Models.',
      'Engaging in institute research collaborations bridging academic theoretical breakthroughs with enterprise AI reliability.'
    ],
    tech: ['Advanced Deep Learning', 'Distributed ML', 'High-Performance Computing', 'Mathematical Foundations', 'Research']
  },
  {
    role: 'B.Tech - Artificial Intelligence and Data Science',
    organization: 'Thakur College of Engineering and Technology',
    period: 'May 2020 – June 2024',
    badge: 'CGPI: 9.46 / 10.0 • Academic Honors',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300 font-bold',
    bullets: [
      'Graduated with highest academic honors (CGPI 9.46 / 10.0), specializing in Deep Learning architectures, Distributed Computing, High-Dimensional Vector Search, and Statistical ML.',
      'Authored peer-reviewed healthcare big data analytics and visualization research indexed in Scopus and published in Taylor & Francis journal.'
    ],
    tech: ['Machine Learning', 'Data Science', 'Deep Learning', 'Big Data Engineering', 'Algorithms']
  }
];

export function Timeline() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  const currentList = activeTab === 'work' ? workExperience : educationData;

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 bg-offwhite-100 relative border-t border-sky-100 selection:bg-sky-500/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center sm:text-left mb-12"
        >
          <div className="flex items-center justify-center sm:justify-start space-x-3 mb-2">
            <span className="text-sky-600 font-mono text-xs tracking-wider uppercase font-bold">02. Career & Academic Track</span>
            <div className="h-px w-12 bg-sky-200"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Experience & Education
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
            Switch between industry enterprise tenures and academic credentials, including upcoming M.Tech at IIT Patna.
          </p>
        </motion.div>

        {/* Tab Switcher Controls */}
        <div className="flex justify-center sm:justify-start mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-sky-200 shadow-sm gap-1.5">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                activeTab === 'work' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {workExperience.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20'
                  : 'text-slate-600 hover:text-sky-700 hover:bg-sky-50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education & Academics</span>
              <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${
                activeTab === 'education' ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {educationData.length}
              </span>
            </button>
          </div>
        </div>

        {/* Tabbed Content with Smooth Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="relative border-l-2 border-sky-200/80 ml-3 sm:ml-6 md:ml-8 pl-6 sm:pl-10 space-y-10"
          >
            {currentList.map((item, index) => {
              const isWork = activeTab === 'work';
              return (
                <div
                  key={item.organization + item.role}
                  className="relative group"
                >
                  {/* Node Dot / Icon */}
                  <div className="absolute -left-[35px] sm:-left-[51px] md:-left-[51px] top-1.5 h-10 w-10 rounded-xl bg-white border-2 border-sky-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-50 transition-all duration-300 shadow-sm shadow-sky-500/10">
                    {isWork ? (
                      <Briefcase className="w-4 h-4 text-sky-600" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-amber-600" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="bg-white border border-sky-100 rounded-3xl p-6 sm:p-8 hover:border-sky-300 hover:shadow-sky-card transition-all">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                            {item.role}
                          </h3>
                          {item.badge && (
                            <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                              item.badgeColor || 'bg-sky-100 text-sky-800 border-sky-200'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-semibold text-sky-700 font-mono mt-1 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{item.organization}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs font-mono text-slate-500 shrink-0">
                        <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-sky-600" />
                          {item.period}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1 mt-1 text-slate-500">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            {item.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 my-4">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-xs sm:text-sm text-slate-600 leading-relaxed">
                          <ArrowRight className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-1 mr-2.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-sky-100">
                      {item.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-200/70 hover:bg-sky-100 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
