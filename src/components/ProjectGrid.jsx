// src/components/ProjectGrid.jsx
import React from 'react';
import './ProjectGrid.css';
import workflowVideo from '../assets/techWorkFlow.mp4';
import dashboardImg from '../assets/dashboard.png';

export default function ProjectGrid() {
  return (
    <div className="portfolio-grid-layout">
      
      {/* 🚀 LEFT COLUMN CARD: HORIZONTAL SIDE-BY-SIDE SPLIT */}
      <div className="bento-column-card card-horizontal-split">
        <div className="card-text-side">
          <span className="tag">Featured Project</span>
          <h3>Field Service Management Software</h3>
          <p className="project-description">
            Engineered a full-stack Field Service platform managing repair workflows for an Auckland-based generator company. Originally built with MySQL; currently migrating to Supabase to leverage a PostgreSQL database architecture and real-time state synchronization.
          </p>
        </div>
        
        <div className="card-video-side">
          <video 
            src={workflowVideo} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="bento-embedded-video"
          />
        </div>
      </div>

      {/* 🚀 RIGHT COLUMN CARD: VERTICAL ROWS SPLIT */}
      <div className="bento-column-card card-vertical-rows">
        <div className="card-top-text-row">
          <span className="tag">Interactive Preview</span>
          <h3>Admin Dashboard Management</h3>
          <p className="project-description">
            A comprehensive overview of the administrative command module interface. This control panel aggregates live task dispatches, service request tracking telemetry, and real-time client pipeline statuses.
          </p>
        </div>
        
        <div className="card-bottom-image-row">
          <div className="interactive-window-frame">
            <img 
              src={dashboardImg} 
              alt="Admin UI Panel Blueprint" 
              className="scrolling-screenshot" 
            />
          </div>
        </div>
      </div>

    </div>
  );
}
