'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, Cpu, Activity } from 'lucide-react';

const currentInnovations = [
  {
    title: 'Financial AI OS',
    description: 'A sophisticated, locally-run AI operating system designed for High-Frequency Trading (HFT), arbitrage detection, and deep financial analysis.',
    tags: ['Python', 'Local LLMs', 'Processing', 'Data Engineering'],
    icon: Activity,
  },
  {
    title: 'NeevAI',
    description: 'A specialized AI-driven platform built to automate and ensure strict compliance with local building codes (like BMC) in India.',
    tags: ['Generative AI', 'Compliance', 'RAG', 'Next.js'],
    icon: FolderGit2,
  },
  {
    title: 'Hardware & IoT Labs',
    description: 'A showcase of hardware-meets-software engineering, including a custom-built home voice assistant, a programmable smartwatch, and an AI/ML optimized rig.',
    tags: ['C++', 'IoT', 'Hardware Integration', 'Linux'],
    icon: Cpu,
  },
];

const pastWork = [
  {
    title: 'Dynamic Healthcare Analysis',
    description: 'Developed scalable pipeline with PySpark & Kafka. Leveraged Generative AI for synthetic dataset creation and rigorous testing.',
    tags: ['PySpark', 'Kafka', 'Gen AI'],
  },
  {
    title: 'AI Based Attendance System',
    description: 'Robust facial recognition attendance tracker deployed with computer vision. Live data mapped directly to Tableau dashboards.',
    tags: ['Computer Vision', 'Flask', 'Tableau'],
  },
  {
    title: 'Financial Anomaly Detection',
    description: 'A real-time fraud detection engine streaming live transaction data directly to highly-tuned TensorFlow models for immediate flagging.',
    tags: ['TensorFlow', 'Kafka', 'Real-time ML'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-8 bg-background relative selection:bg-accent-cyan/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-accent-cyan font-mono text-xl md:text-3xl mr-2">04.</span>
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-accent-blue rounded"></div>
        </motion.div>

        {/* Current Innovations */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-wide mb-8 text-foreground/90 font-mono border-b border-gray-800 pb-2 inline-block"
          >
            &gt; Current Innovations
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentInnovations.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-[#0a0f19] border border-gray-800 rounded-xl p-6 hover:border-accent-cyan/60 hover:shadow-2xl hover:shadow-accent-cyan/10 transition-all flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-[#111929] rounded-lg border border-gray-700 text-accent-cyan group-hover:bg-accent-cyan/10 transition-colors">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div className="flex gap-3 text-gray-400">
                    <Github className="w-5 h-5 hover:text-accent-cyan cursor-pointer transition-colors" />
                    <ExternalLink className="w-5 h-5 hover:text-accent-cyan cursor-pointer transition-colors" />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-blue transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 text-xs font-mono text-accent-cyan/80 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-accent-cyan/5 px-2 py-1 rounded border border-accent-cyan/20">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Enterprise Work */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold tracking-wide mb-8 text-gray-500 font-mono border-b border-gray-800 pb-2 inline-block"
          >
            &gt; Past Enterprise Work
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastWork.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="group bg-[#0d1320] border border-gray-800 rounded-lg p-5 hover:border-gray-600 transition-all flex flex-col h-full"
              >
                <h4 className="text-lg font-bold text-gray-200 mb-2 group-hover:text-foreground transition-colors">{project.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-500 group-hover:text-gray-400 transition-colors">
                  {project.tags.map((tag, i) => (
                    <span key={tag}>
                      {tag}
                      {i < project.tags.length - 1 && <span className="mx-2 text-gray-700">|</span>}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
