import React, { useState } from 'react';
import './TechStack.css';
import HTMLIcon from '../assets/HTML5.svg';
import CSSIcon from '../assets/CSS3.svg';
import JSIcon from '../assets/JavaScript.svg';
import ReactIcon from '../assets/react.svg';
import NodeIcon from '../assets/Node.js.svg';
import ExpressIcon from '../assets/Express.svg';
import MySQLIcon from '../assets/MySQL.svg';
import TSIcon from '../assets/TypeScript (1).svg';
import NextIcon from '../assets/Next.js (1).svg';

export default function TechStack() {
  // Active tab state: 'all', 'frontend', 'backend', etc.
  const [activeTab, setActiveTab] = useState('all');

  const categories = ['all', 'frontend', 'backend', 'database'];

  return (
    <section className="stack-section">
      <div className="stack-header-wrapper">
        <div>
          <span className="comment-tag">//stack</span>
          <h2 className="stack-title">My Tech Stack</h2>
          <p className="stack-subtitle">This is what I am proficient in right now</p>
        </div>
        <div className="quote-box">
          <p className="quote-text">"Technology is best when it brings people together"</p>
          <span className="quote-author">– Matt Mullenweg</span>
        </div>
      </div>

      {/* Tabs Filter */}
      <div className="tabs-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stack Items Group */}
      <div className="skills-display">
        
      {/* --- FRONTEND GROUP --- */}
{(activeTab === 'all' || activeTab === 'frontend') && (
  <div className="stack-group">
    <h4>FRONTEND</h4>
    <div className="badges-grid">
      <div className="tech-badge">
        <span><img src={HTMLIcon} alt="HTML" className="badge-logo" /></span> HTML
      </div>
      <div className="tech-badge">
        <span><img src={CSSIcon} alt="CSS" className="badge-logo" /></span> CSS
      </div>
      <div className="tech-badge">
        <span><img src={JSIcon} alt="JS" className="badge-logo" /></span> JavaScript
      </div>
      <div className="tech-badge">
        <span><img src={TSIcon} alt="TypeScript" className="badge-logo" /></span> TypeScript
      </div>
      <div className="tech-badge">
        <span><img src={ReactIcon} alt="React" className="badge-logo" /></span> React
      </div>
      <div className="tech-badge">
        <span><img src={NextIcon} alt="Next.js" className="badge-logo" /></span> Next.js
      </div>
    </div>
  </div>  
)}

{/* --- BACKEND GROUP --- */}
{(activeTab === 'all' || activeTab === 'backend') && (
  <div className="stack-group">
    <h4>BACKEND</h4>
    <div className="badges-grid">
      <div className="tech-badge">
        <span><img src={NodeIcon} alt="Node" className="badge-logo" /></span> Node.js
      </div>
      <div className="tech-badge">
        <span><img src={ExpressIcon} alt="Express" className="badge-logo" /></span> Express
      </div>
      <div className="tech-badge">
        <span>API</span> REST APIs
      </div>
    </div>
  </div>
)}

{/* --- DATABASE GROUP --- */}
{(activeTab === 'all' || activeTab === 'database') && (
  <div className="stack-group">
    <h4>DATABASE</h4>
    <div className="badges-grid">
      <div className="tech-badge">
        <span>🍃</span> MongoDB
      </div>
      <div className="tech-badge">
        <span><img src={MySQLIcon} alt="MySQL" className="badge-logo" /></span> MySQL
      </div>
    </div>
  </div>
)}

        
      </div>
    </section>
  );
}
