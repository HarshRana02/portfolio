'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Terminal, Sparkles, Database, Shield, Cpu, Activity, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Project {
  title: string;
  badge: string;
  category: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: any;
  github?: string;
  demo?: string;
}

const featuredProjects: Project[] = [
  {
    title: 'TraceLog Agent: Autonomous Log-Debugging Companion',
    badge: 'Multi-Agent AI Architecture',
    category: 'Autonomous Developer Tooling',
    description: 'A resident AI developer agent integrated natively into VS Code to perform real-time monitoring and semantic analysis of continuous terminal execution logs.',
    highlights: [
      'Orchestrated a cyclic multi-agent architecture combining LangGraph state machines with CrewAI specialized roles',
      'Automatically isolates runtime anomalies and traverses nested error stack-traces in milliseconds',
      'Synthesizes context-aware AST code remediations directly as native VS Code diffs, drastically cutting manual debugging time'
    ],
    tags: ['Python', 'LangGraph', 'CrewAI', 'VS Code API', 'LLMs', 'StateGraph'],
    icon: Terminal,
    github: 'https://github.com/HarshRana02'
  },
  {
    title: 'Scholarship Chatbot: GPU-Accelerated Semantic RAG',
    badge: 'RAG & Vector Search',
    category: 'Conversational Intelligence',
    description: 'An enterprise RAG chatbot engineered to automate complex scholarship eligibility assessments with zero-hallucination semantic grounding.',
    highlights: [
      'Orchestrated LangChain, Mistral LLM, and ChromaDB vector store into a sub-second semantic retrieval pipeline',
      'Leveraged CUDA-accelerated OpenAI embeddings for high-throughput similarity scoring',
      'Ingested and dynamically normalized scraped web JSON schemas into searchable vector indexes'
    ],
    tags: ['Python', 'OpenAI', 'LangChain', 'ChromaDB', 'CUDA', 'Mistral LLM'],
    icon: Sparkles,
    github: 'https://github.com/HarshRana02'
  },
  {
    title: 'Pan-India Event-Driven AI Pipeline',
    badge: 'PwC India Production',
    category: 'Cloud Microservices & Compliance',
    description: 'Nationwide event-driven AI ecosystem processing audio transcripts and enforcing automated government compliance classification.',
    highlights: [
      'Architected microservices containerized via Docker and deployed across Azure Container Apps and Container Jobs',
      'Utilized KEDA for dynamic event-driven autoscaling from zero based on Redis stream queue backlog',
      'Enforced immutable audit trails for government compliance using partitioned Azure Cosmos DB containers'
    ],
    tags: ['Python', 'Redis', 'Azure Cosmos DB', 'Docker', 'Azure Container Apps', 'KEDA', 'React'],
    icon: Activity
  },
  {
    title: 'Secure VNet AI Assistant & Vertex AI RAG',
    badge: 'TCS Enterprise SDLC',
    category: 'Secure Enterprise LLM',
    description: 'Enterprise developer enablement system combining private VNet-enclosed LLM endpoints with optimized cloud vector search.',
    highlights: [
      'Deployed Azure OpenAI Service with private GPT-4.1 endpoints inside a secured VNet via Azure Private Link',
      'Cut query latency by 50% by migrating GCP RAG pipelines to Vertex AI Vector Search with Streamlit frontends',
      'Engineered an Azure-native multimodal vision pipeline (Azure AI Vision, Azure AI Search) for zero-shot cataloging'
    ],
    tags: ['Azure OpenAI', 'GPT-4.1', 'Azure Private Link', 'GCP Vertex AI', 'LangChain', 'FAISS', 'Streamlit'],
    icon: Shield
  },
  {
    title: 'High-Performance Distributed Data Pipeline',
    badge: 'Dytel Tech Group',
    category: 'Distributed ML & ETL',
    description: 'Distributed data engineering pipeline supporting predictive machine learning models and embedded interactive dashboards.',
    highlights: [
      'Engineered data ingestion pipelines with Airbyte, Talend, and PostgreSQL, slashing processing latency by 30%',
      'Enabled distributed machine learning feature computation and predictive analytics via PySpark',
      'Embedded live interactive Metabase dashboards directly into client applications for real-time visibility'
    ],
    tags: ['Airbyte', 'Talend', 'PostgreSQL', 'PySpark', 'Metabase', 'Distributed ML'],
    icon: Database
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-8 bg-white relative border-t border-sky-100 selection:bg-sky-500/20">
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
            <span className="text-sky-600 font-mono text-xs tracking-wider uppercase font-bold">03. AI Systems & Architecture</span>
            <div className="h-px w-12 bg-sky-200"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured AI Systems & Platforms
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
            In-depth engineering breakdown of autonomous multi-agent systems, event-driven pipelines, and sub-60ms vector search.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
          {featuredProjects.map((project, idx) => {
            const Icon = project.icon;
            const isFeaturedLarge = idx === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative group bg-white border border-sky-100 rounded-3xl p-7 sm:p-8 hover:border-sky-300 hover:shadow-sky-card transition-all duration-300 flex flex-col justify-between ${
                  isFeaturedLarge ? 'md:col-span-2 bg-gradient-to-br from-white via-sky-50/20 to-blue-50/20 border-sky-200' : ''
                }`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-sky-50 border border-sky-200 rounded-2xl text-sky-600 group-hover:scale-105 group-hover:bg-sky-100 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-sky-100/70 text-sky-800 border border-sky-200">
                          {project.badge}
                        </span>
                        <div className="text-[11px] text-slate-500 font-mono mt-1 font-medium">{project.category}</div>
                      </div>
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-offwhite-100 border border-slate-200/80 text-slate-600 hover:text-sky-600 hover:border-sky-300 transition-colors shadow-sm"
                        title="View on GitHub"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className={`font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors ${
                    isFeaturedLarge ? 'text-2xl sm:text-3xl' : 'text-xl'
                  }`}>
                    {project.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights List */}
                  <div className="mb-6 space-y-2.5 bg-offwhite-100/70 p-4 rounded-2xl border border-sky-100/60">
                    <div className="text-xs font-mono font-bold text-sky-800 uppercase tracking-wider mb-1">
                      Key Technical Innovations:
                    </div>
                    {project.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="text-xs sm:text-sm text-slate-700 flex items-start leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 mr-2 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="pt-4 border-t border-sky-100 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-sky-50 text-sky-800 border border-sky-200/60 group-hover:bg-sky-100 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
