import React from 'react';

export default function StatusBar() {
  return (
    <div className="sticky top-0 z-50 bg-ink-950/90 backdrop-blur border-b border-ink-700">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-sand-500">
        <span className="text-sand-300">RS_PORTFOLIO</span>
        <div className="hidden sm:flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-moss-400 animate-pulse" />
            Open to work
          </span>
          <span>Stack: Python · LangChain · Groq</span>
          <span>India</span>
        </div>
      </div>
    </div>
  );
}
