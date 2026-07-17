import React from 'react';

export default function StatusBar() {
  return (
    <div className="sticky top-0 z-50 bg-paper-50/90 backdrop-blur border-b border-paper-300">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink-500">
        <span className="text-ink-700">RS_PORTFOLIO</span>
        <div className="hidden sm:flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-olive-500 animate-pulse" />
            Open to work
          </span>
          <span>Stack: Python · LangChain · Groq</span>
          <span>India</span>
        </div>
      </div>
    </div>
  );
}
