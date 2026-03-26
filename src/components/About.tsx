'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Cloud } from 'lucide-react';

const stats = [
  { label: 'Projects Completed', value: '15+', icon: Code2 },
  { label: 'Certifications', value: '5', icon: Cloud, subtext: 'AWS / GCP / Azure' },
  { label: 'Years Experience', value: '3+', icon: Cpu },
  { label: 'Tech Stack', value: '12+', icon: Database },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-[#0a0f19] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-accent-cyan font-mono text-xl md:text-3xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-1 w-20 bg-accent-blue rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg leading-relaxed space-y-6"
          >
            <p>
              I am a results-driven <span className="text-foreground font-medium">AI & ML Engineer</span> based in Mumbai, India. My journey in tech started with a deep fascination for data architecture and has evolved into building sophisticated AI ecosystems.
            </p>
            <p>
              Currently, I focus on integrating <span className="text-foreground font-medium">Generative AI and Local LLMs</span> into enterprise applications to automate complex workflows and ensure robust compliance. Whether it's designing highly efficient financial anomaly detection models or crafting scalable cloud architectures, I thrive at the intersection of data, AI, and scalable engineering.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="p-6 rounded-xl border border-gray-800 bg-[#0d1320] hover:border-accent-cyan/50 hover:bg-[#111929] transition-all group"
              >
                <stat.icon className="w-8 h-8 text-accent-blue mb-4 group-hover:text-accent-cyan transition-colors" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
                {stat.subtext && (
                  <div className="text-xs text-accent-blue mt-2">{stat.subtext}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
