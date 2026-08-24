'use client';

import { Zap, ShieldCheck, Database, Users } from 'lucide-react';
import { about, stats } from '../../lib/data';

export default function About() {
  const highlights = [
    { title: 'Database Optimization', desc: 'Accelerated SQL query performance by 15–20% using indexed views and execution plan tuning.', icon: <Database size={20} /> },
    { title: 'EDI System Reliability', desc: 'Reduced batch data errors from >5% to <2% for 20,000+ member upload pipelines.', icon: <Zap size={20} /> },
    { title: 'Enterprise Delivery', desc: 'Delivered 6+ major product increments across Medidata Clinical Platforms and Liberty Pension systems.', icon: <ShieldCheck size={20} /> },
    { title: 'Engineering Mentorship', desc: 'Mentored junior engineers, accelerating ramp-up times by ~20%.', icon: <Users size={20} /> },
  ];

  return (
    <section id="about" className="section-padding about-clean-section">
      <div className="container">
        <div className="section-header center-header">
          <span className="section-kicker">About Me</span>
          <h2 className="section-title">Senior Full Stack Engineer</h2>
          <p className="section-subtitle">
            5+ years of experience architecting enterprise software in Banking, Insurance, and Clinical Trials.
          </p>
        </div>

        {/* Quick Stats Row */}
        <div className="about-stats-row">
          {stats.map((s, idx) => (
            <div key={idx} className="clean-stat-card">
              <span className="stat-number">{s.value}</span>
              <span className="stat-name">{s.label}</span>
              <span className="stat-sub">{s.desc}</span>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="clean-highlights-grid">
          {highlights.map((h, idx) => (
            <div key={idx} className="clean-highlight-card">
              <div className="highlight-icon-box">{h.icon}</div>
              <h4>{h.title}</h4>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
