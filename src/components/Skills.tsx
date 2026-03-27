'use client';

import { motion } from 'framer-motion';
import { Terminal, Database, BrainCircuit, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Terminal,
    skills: ['Python', 'SQL', 'Java', 'JavaScript', 'React', 'HTML/CSS'],
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    skills: ['Local LLMs (Ollama)', 'Generative AI', 'LangChain', 'LlamaIndex', 'RAG Systems', 'ChromaDB', 'PyTorch', 'TensorFlow'],
  },
  {
    title: 'Data Engineering',
    icon: Database,
    skills: ['PySpark', 'Airbyte', 'Talend', 'Kafka', 'Metabase'],
  },
  {
    title: 'Cloud & Environments',
    icon: Cloud,
    skills: ['Linux (Ubuntu)', 'AWS', 'GCP', 'Azure', 'Docker', 'Hardware Integration'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-8 bg-[#0a0f19] relative selection:bg-accent-cyan/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 flex flex-col md:flex-row md:items-center">
            <span className="text-accent-cyan font-mono text-xl md:text-3xl md:mr-4 mb-2 md:mb-0">03.</span>
            Technical Arsenal
          </h2>
          <div className="h-1 w-20 bg-accent-blue rounded mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0d1320] rounded-2xl p-8 border border-gray-800 hover:border-accent-cyan/50 transition-colors shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-[#111929] rounded-lg border border-gray-700 shadow-inner">
                  <category.icon className="w-6 h-6 text-accent-cyan" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#161f33] text-gray-300 text-sm font-mono rounded-md border border-gray-700 shadow-sm hover:border-accent-cyan hover:text-accent-cyan hover:-translate-y-1 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
