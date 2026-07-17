import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-24 px-6 max-w-6xl mx-auto border-t border-paper-300"
    >
      <h2 className="font-display text-3xl text-ink-900 mb-4">Get in touch</h2>
      <p className="text-ink-500 mb-10 max-w-xl">
        Immediate joiner, open to AI/ML Engineer and GenAI Developer roles anywhere in India.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <a href="mailto:rosesharmaa132003@gmail.com" className="bg-white border border-paper-300 hover:border-olive-400 p-5 rounded-lg transition-colors shadow-sm">
          <span className="font-mono text-[11px] text-olive-600 uppercase tracking-wide">Email</span>
          <p className="text-ink-900 mt-1 text-sm break-all">rosesharmaa132003@gmail.com</p>
        </a>
        <a href="https://linkedin.com/in/rose-sharma13" target="_blank" rel="noreferrer" className="bg-white border border-paper-300 hover:border-olive-400 p-5 rounded-lg transition-colors shadow-sm">
          <span className="font-mono text-[11px] text-olive-600 uppercase tracking-wide">LinkedIn</span>
          <p className="text-ink-900 mt-1 text-sm">linkedin.com/in/rose-sharma13</p>
        </a>
        <a href="https://github.com/Rosesharma13" target="_blank" rel="noreferrer" className="bg-white border border-paper-300 hover:border-olive-400 p-5 rounded-lg transition-colors shadow-sm">
          <span className="font-mono text-[11px] text-olive-600 uppercase tracking-wide">GitHub</span>
          <p className="text-ink-900 mt-1 text-sm">github.com/Rosesharma13</p>
        </a>
      </div>
      <a href="mailto:rosesharmaa132003@gmail.com?subject=Hiring%20Inquiry" className="inline-block bg-olive-600 hover:bg-olive-700 text-paper-50 px-6 py-3 rounded-md font-medium text-sm transition-colors">
        Hire Me
      </a>
    </motion.section>
  );
}
