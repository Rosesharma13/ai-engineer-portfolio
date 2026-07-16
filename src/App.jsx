import React from 'react';
import CursorTrail from './components/CursorTrail';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <CursorTrail />
      <Hero />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <ChatBot />
    </div>
  );
}
