'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, ArrowUpRight, Phone } from 'lucide-react';

export function Contact() {
  return (
    <footer id="contact" className="py-20 px-4 sm:px-8 bg-[#0a0f19] border-t border-gray-800 selection:bg-accent-cyan/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono">
            <span className="text-accent-cyan mr-2">05.</span>
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question about AI integration or just want to connect, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <a 
              href="mailto:harshtrana0210@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded bg-accent-blue/10 border border-accent-blue/30 text-accent-cyan font-mono hover:bg-accent-blue/20 transition-all w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>harshtrana0210@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 ml-1 opacity-50" />
            </a>
            
            <a 
              href="tel:+918452062333"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded bg-[#111929] border border-gray-700 text-gray-300 font-mono hover:border-gray-500 hover:text-white transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>+91 8452062333</span>
            </a>
          </div>

          <div className="flex justify-center space-x-8 mb-12">
            <a href="https://github.com/HarshRana02" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors group">
              <Github className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="https://linkedin.com/in/harshrana02" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors group">
              <Linkedin className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href="https://twitter.com/RanaHarsh02" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-cyan transition-colors group">
              <Twitter className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="text-gray-600 font-mono text-sm">
            <p className="mb-2">Designed & Built by Harsh Rana</p>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
