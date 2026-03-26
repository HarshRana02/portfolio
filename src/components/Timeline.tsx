'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const timeline = [
  {
    type: 'work',
    role: 'AI Automation Engineer',
    company: 'PwC',
    date: 'Dec 2025 - Present',
    description: 'Focusing on AI and enterprise integrations. Building scalable AI solutions and driving automated workflows within complex domains.',
    icon: Briefcase,
  },
  {
    type: 'work',
    role: 'Artificial Intelligence Engineer',
    company: 'Tata Consultancy Services',
    date: 'Dec 2024 - Dec 2025',
    description: 'Led GenAI integration, developed powerful RAG systems, and modernized legacy infrastructure using LangChain and Local LLMs.',
    icon: Briefcase,
  },
  {
    type: 'work',
    role: 'Data Engineer Intern',
    company: 'Dytel Technology Group',
    date: 'May 2023 - June 2024',
    description: 'Developed data pipelines and analytics solutions. Leveraged Airbyte, Talend, PySpark, and Metabase for rich data insights.',
    icon: Briefcase,
  },
  {
    type: 'education',
    role: 'B.Tech in AI & Data Science',
    company: 'Thakur College of Engineering and Technology',
    date: 'Graduated',
    description: 'Comprehensive study of artificial intelligence, machine learning, and data engineering architectures. (CGPA: 9.46)',
    icon: GraduationCap,
  },
];

export function Timeline() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8 bg-background relative selection:bg-accent-cyan/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-accent-cyan font-mono text-xl md:text-3xl mr-2">02.</span>
            Experience & Education
          </h2>
          <div className="h-1 w-20 bg-accent-blue rounded"></div>
        </motion.div>

        <div className="relative border-l border-gray-800 ml-3 md:ml-0">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-8 md:ml-12 relative group"
            >
              <div className="absolute -left-[41px] md:-left-[57px] top-1 h-10 w-10 rounded-full bg-[#111929] border border-gray-700 flex items-center justify-center group-hover:border-accent-cyan group-hover:bg-accent-cyan/10 transition-colors z-10">
                <item.icon className="w-5 h-5 text-gray-400 group-hover:text-accent-cyan transition-colors" />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  {item.role} <span className="text-accent-cyan">@ {item.company}</span>
                </h3>
                <span className="text-sm font-mono text-gray-500 mt-1 md:mt-0">{item.date}</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
