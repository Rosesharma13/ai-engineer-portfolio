import React from 'react';

const certifications = [
  { title: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", date: "Dec 2023" },
  { title: "Fundamentals of Large Language Models", issuer: "Hugging Face", date: "Apr 2026" },
  { title: "AI Skills Fest 2026", issuer: "Microsoft", date: "2026" }
];

export default function Certifications() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-ink-700">
      <h2 className="font-display text-3xl text-sand-100 mb-12">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {certifications.map((cert, idx) => (
          <div key={idx} className="border border-ink-700 p-5 rounded-lg">
            <span className="font-mono text-[11px] text-moss-500 uppercase tracking-wide">{cert.date}</span>
            <h3 className="font-semibold text-sand-100 mt-2 mb-1 text-sm leading-snug">{cert.title}</h3>
            <p className="font-mono text-xs text-sand-700">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
