import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    index: "01",
    role: "Generative AI & Agentic Systems Engineering Intern",
    org: "Lenovo LEAP NextGen Scholar",
    meta: "Remote · AICTE Recognized",
    date: "June 2026 – July 2026",
    points: [
      "Selected for the Lenovo-BharatCares CSR program under AICTE and Skill India, covering RAG pipelines, autonomous AI agents, and GenAI development with Skill India certification.",
      "Built Vyrora AI, a multi-agent AI platform, using FastAPI and React, deployed across Render and Vercel."
    ]
  },
  {
    index: "02",
    role: "Machine Learning Intern",
    org: "CodeAlpha",
    meta: "Remote",
    date: "April 2026 – July 2026",
    points: [
      "Built a Credit Scoring model (XGBoost), a Customer Churn Predictor (82.6% accuracy, AUC 0.795), and a Heart Disease classifier evaluated across 4 ML algorithms."
    ]
  },
  {
    index: "03",
    role: "Artificial Intelligence Intern",
    org: "Codec Technologies Pvt. Ltd.",
    meta: "Remote · AICTE & ICAC Approved · Certificate & LOR",
    date: "April 2026 – May 2026",
    points: [
      "Built a Twitter Sentiment Analysis tool (Naive Bayes + SVM, TF-IDF) for 3-class sentiment classification, and developed an end-to-end Customer Churn pipeline."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-paper-300">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl text-ink-900 mb-12"
      >
        Experience
      </motion.h2>
      <div className="space-y-10">
        {experience.map((job, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="grid grid-cols-[auto_1fr] gap-6 border-b border-paper-200 pb-8 last:border-0"
          >
            <span className="font-mono text-olive-500 text-sm pt-1">{job.index}</span>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                <h3 className="text-lg font-semibold text-ink-900">{job.role}</h3>
                <span className="font-mono text-xs text-olive-600">{job.date}</span>
              </div>
              <p className="text-sm text-ink-700 font-medium">{job.org}</p>
              <p className="font-mono text-[11px] text-ink-300 mb-3 uppercase tracking-wide">{job.meta}</p>
              <ul className="space-y-1.5">
                {job.points.map((p, i) => (
                  <li key={i} className="text-sm text-ink-500 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-olive-400">{p}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
