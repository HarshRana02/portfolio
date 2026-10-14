'use client';

import { motion } from 'framer-motion';
import { Terminal, Database, BrainCircuit, Cloud, Layers, Cpu, Server, Code2 } from 'lucide-react';

interface SkillGroup {
  title: string;
  category: string;
  icon: any;
  description: string;
  skills: string[];
}

const skillCategories: SkillGroup[] = [
  {
    title: 'Generative AI & LLMs',
    category: 'Autonomous Agents & RAG',
    icon: BrainCircuit,
    description: 'Multi-agent orchestration, cyclic state machines, semantic vector search, and self-hosted inference.',
    skills: [
      'LangChain',
      'LangGraph',
      'CrewAI',
      'RAG Architectures',
      'Ollama',
      'llama.cpp',
      'Azure OpenAI (GPT-4.1)',
      'Vertex AI Vector Search',
      'Prompt Engineering'
    ],
  },
  {
    title: 'Cloud & Data Tools',
    category: 'Infrastructure & Storage',
    icon: Cloud,
    description: 'Enterprise cloud services, containerized autoscaling, message queues, and high-throughput databases.',
    skills: [
      'Azure',
      'GCP',
      'AWS',
      'Docker',
      'Kubernetes',
      'KEDA Autoscaling',
      'Azure Container Apps',
      'Redis',
      'Azure Cosmos DB',
      'PostgreSQL',
      'MS SQL',
      'Kafka',
      'Linux / Bash'
    ],
  },
  {
    title: 'Programming Languages',
    category: 'Core Systems & Logic',
    icon: Terminal,
    description: 'Systems programming, script automation, high-performance database querying, and logic implementation.',
    skills: [
      'Python',
      'SQL',
      'Java',
      'JavaScript',
      'TypeScript'
    ],
  },
  {
    title: 'Web Frameworks & APIs',
    category: 'Application Delivery',
    icon: Code2,
    description: 'Microservices architectures, high-performance REST APIs, fullstack React/Next.js interfaces, and cross-platform apps.',
    skills: [
      'FastAPI',
      'Flask',
      'REST APIs',
      'React',
      'Next.js',
      'Flutter',
      'HTML/CSS',
      'Tailwind CSS'
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 bg-offwhite-100 relative border-t border-sky-100 selection:bg-sky-500/20">
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
            <span className="text-sky-600 font-mono text-xs tracking-wider uppercase font-bold">04. Technical Capabilities</span>
            <div className="h-px w-12 bg-sky-200"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
            Verified production languages, agentic AI frameworks, enterprise cloud services, and database systems.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-sky-100 hover:border-sky-300 hover:shadow-sky-card transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-sky-50 rounded-2xl border border-sky-200 text-sky-600 group-hover:scale-105 group-hover:bg-sky-100 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-xs font-mono text-sky-700 font-semibold">
                        {category.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-sky-100/70">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-sky-50/80 text-sky-800 text-xs font-mono font-medium rounded-xl border border-sky-200/60 hover:bg-sky-100 hover:border-sky-300 transition-all cursor-default"
                    >
                      {skill}
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
