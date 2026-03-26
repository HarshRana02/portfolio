'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function IDEBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden border border-gray-800 bg-[#0d1117] shadow-2xl relative z-10"
    >
      <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center justify-center flex-1 space-x-2 text-xs text-gray-400 font-sans">
          <Terminal size={14} />
          <span>harsh_profile.py - VS Code</span>
        </div>
      </div>
      <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-gray-300">
        <pre>
          <code className="text-accent-cyan">{`class `}</code>
          <code className="text-yellow-200">HarshRana</code>
          <code className="text-gray-300">{`:\n`}</code>
          <code className="text-accent-cyan">{`    def `}</code>
          <code className="text-blue-300">__init__</code>
          <code className="text-gray-300">{`(self):\n`}</code>
          <code className="text-gray-300">{`        self.role = `}</code>
          <code className="text-green-300">"AI & ML Engineer"</code>{`\n`}          <code className="text-gray-300">{`        self.location = `}</code>
          <code className="text-green-300">"Mumbai, India"</code>{`\n`}
          <code className="text-gray-300">{`        self.focus = [`}</code>
          <code className="text-green-300">"Financial Systems"</code>{`, `}
          <code className="text-green-300">"Automated Compliance"</code>{`, `}
          <code className="text-green-300">"LLM Integrations"</code>{`]\n\n`}
          <code className="text-accent-cyan">{`    def `}</code>
          <code className="text-blue-300">get_current_status</code>
          <code className="text-gray-300">{`(self):\n`}</code>
          <code className="text-accent-cyan">{`        return `}</code>
          <code className="text-green-300">"Building intelligent systems with RAG and Generative AI."</code>
        </pre>
      </div>
    </motion.div>
  );
}
