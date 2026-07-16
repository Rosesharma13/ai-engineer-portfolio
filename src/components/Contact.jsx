import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-ink-700">
      <h2 className="font-display text-3xl text-sand-100 mb-4">Get in touch</h2>
      <p className="text-sand-500 mb-10 max-w-xl">
        Immediate joiner, open to AI/ML Engineer and GenAI Developer roles anywhere in India.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <a href="mailto:rosesharmaa132003@gmail.com" className="border border-ink-700 hover:border-moss-500 p-5 rounded-lg transition-colors">
          <span className="font-mono text-[11px] text-moss-500 uppercase tracking-wide">Email</span>
          <p className="text-sand-100 mt-1 text-sm break-all">rosesharmaa132003@gmail.com</p>
        </a>
        <a href="https://linkedin.com/in/rose-sharma13" target="_blank" rel="noreferrer" className="border border-ink-700 hover:border-moss-500 p-5 rounded-lg transition-colors">
          <span className="font-mono text-[11px] text-moss-500 uppercase tracking-wide">LinkedIn</span>
          <p className="text-sand-100 mt-1 text-sm">linkedin.com/in/rose-sharma13</p>
        </a>
        <a href="https://github.com/Rosesharma13" target="_blank" rel="noreferrer" className="border border-ink-700 hover:border-moss-500 p-5 rounded-lg transition-colors">
          <span className="font-mono text-[11px] text-moss-500 uppercase tracking-wide">GitHub</span>
          <p className="text-sand-100 mt-1 text-sm">github.com/Rosesharma13</p>
        </a>
      </div>
      <a href="mailto:rosesharmaa132003@gmail.com?subject=Hiring%20Inquiry" className="inline-block bg-moss-600 hover:bg-moss-500 text-ink-950 px-6 py-3 rounded-md font-medium text-sm transition-colors">
        Hire Me
      </a>
    </section>
  );
}
