'use client';

import { Code2, ArrowRight } from 'lucide-react';
import { personalProjects } from '../../lib/data';

function ProjectCard({ project }) {
  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="personal-project-card"
    >
      {/* Front — landing page preview */}
      <div className="pp-card-front" style={{ background: project.gradient }}>
        <div className="pp-card-front-content">
          <h3 className="pp-card-name">{project.name}</h3>
          <p className="pp-card-tagline">{project.tagline}</p>
          <div className="pp-card-stack-row">
            {project.stack.slice(0, 3).map((s) => (
              <span key={s} className="pp-stack-chip">{s}</span>
            ))}
          </div>
        </div>
        <div className="pp-card-shine" />
      </div>

      {/* Overlay — slides up from bottom on hover */}
      <div className="pp-card-overlay">
        <div className="pp-overlay-content">
          <h3 className="pp-overlay-title">{project.name}</h3>
          <p className="pp-overlay-desc">{project.description}</p>
          <div className="pp-overlay-features">
            {project.features.map((f, i) => (
              <span key={i} className="pp-feature-chip">{f}</span>
            ))}
          </div>
          <div className="pp-overlay-actions">
            <span className="pp-visit-btn">
              Visit Project <ArrowRight size={14} />
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pp-github-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <Code2 size={14} /> Source
            </a>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function PersonalProjects() {
  return (
    <section id="personal-projects" className="section-padding personal-projects-section">
      <div className="container">
        <div className="section-header center-header">
          <span className="section-kicker">Side Projects ✨</span>
          <h2 className="section-title">Things I Built for Fun</h2>
          <p className="section-subtitle">
            Personal experiments, open-source tools, and community apps — built nights & weekends.
          </p>
        </div>

        <div className="pp-grid">
          {personalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
