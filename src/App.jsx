import ChatWidget from './components/ChatWidget'
import React, { useState } from 'react';
import ProjectGrid from './components/ProjectGrid';
import TechStack from './components/TechStack';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="portfolio-wrapper" data-theme={theme}>
      
      {/* 1. Header & Navigation */}
      <nav className="navbar">
        <div className="logo">const DevPortfolio = DavidTuisaula</div>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>

      {/* 2. Hero Section */}
      <header className="hero-section">
  <div className="hero-content">
    {/* Subtle, welcoming top label */}
    <span className="hero-greeting">// welcome to my space</span>
    
    {/* Massive, punchy title grouping */}
    <h1 className="hero-main-title">
      Hi, I'm <span className="highlight-name">David Tuisaula</span>.
      <span className="hero-role-break">A Full Stack Developer.</span>
    </h1>
    
    {/* Clear, business-driven explanation */}
    <p className="hero-subtext">
      From building relationships to building clean, functional digital products. 
      I close the gap between complex ideas and scalable software—one application at a time.
    </p>

    {/* Primary action buttons */}
    <div className="hero-cta-group">
      <a href="#projects" className="btn-hero btn-solid">Explore Projects</a>
      <a href="#tech-stack" className="btn-hero btn-outline">Tech Stack</a>
      <a href="#contact" className="btn-hero btn-outline">Let's Talk</a>
    </div>
  </div>
  
  {/* Minimalist interactive indicator at the bottom */}
  <div className="scroll-indicator">
    <span className="scroll-text">Scroll to explore</span>
    <div className="scroll-arrow">↓</div>
  </div>
</header>
<section id='tech-stack' className='section-container'>
<TechStack />
</section>
      {/* 3. Projects Section (Your Bento Grid) */}
      <section id="projects" className="section-container">
        <div className="section-header">
          <h2>Working on</h2>
          <p>A full-stack applications built from scratch, currently in development.</p>
        </div>
        <ProjectGrid />
      </section>

      {/* 4. Contact Section */}
      <footer id="contact" className="contact-footer">
        <h2>Let's collaborate.</h2>
        <p>I am currently open to junior developer roles and freelance projects.</p>
        <div className="contact-links">
          <a href="www.linkedin.com/in/david-tuisaula-5655bb3b5">LinkedIn</a>
          <a href="https://github.com/King5ula">GitHub</a>
          <a href="mailto:your-email@example.com">Email Me</a>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}
