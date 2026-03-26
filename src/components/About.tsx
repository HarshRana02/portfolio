'use client';

import { motion } from 'framer-motion';
import { Briefcase, Star, Cpu, Code } from 'lucide-react';
import Image from 'next/image';
import harshrana from '@/assets/harshrana.jpg';

const stats = [
  { label: 'Projects Completed', value: '5+', icon: Briefcase },
  { label: 'Certifications', value: '3+', icon: Star, subtext: 'AWS / GCP / Azure' },
  { label: 'Years Experience', value: '2+', icon: Cpu },
  { label: 'Tech Stack', value: '10+', icon: Code },
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

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-1"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src={harshrana}
                alt="Harsh Rana"
                width={400}
                height={400}
                className="relative rounded-lg object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 text-gray-400 text-lg leading-relaxed space-y-6"
          >
            <p>
              I am a results-driven <span className="text-foreground font-medium">AI & ML Engineer</span> based in Mumbai, India. My journey in tech started with a deep fascination for data architecture and has evolved into building sophisticated AI ecosystems.
            </p>
            <p>
              Currently, I focus on integrating <span className="text-foreground font-medium">Generative AI and Local LLMs</span> into enterprise applications to automate complex workflows and ensure robust compliance. Whether it's designing highly efficient financial anomaly detection models or crafting scalable cloud architectures, I thrive at the intersection of data, AI, and scalable engineering.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center space-x-3">
                  <div className="p-3 rounded-full bg-[#111929] border border-gray-800">
                    <stat.icon className="w-6 h-6 text-accent-cyan" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
                     {stat.subtext && (
                       <div className="text-xs text-accent-blue mt-1">{stat.subtext}</div>
                     )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
