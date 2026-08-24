'use client';

import { useState } from 'react';
import { ExternalLink, Sparkles, X, Code2, Layers } from 'lucide-react';
import { projects } from '../../lib/data';

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="domain-pill">{project.domain}</span>
          <a
            href="https://github.com/manish005"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-gh-link"
            title="View on GitHub"
          >
            <ExternalLink size={15} /> View on GitHub
          </a>
        </div>

        <h2 className="modal-title">{project.name}</h2>
        <p className="modal-desc">{project.longDescription || project.description}</p>

        <div className="modal-section">
          <h4 className="modal-section-title"><Sparkles size={14} /> Impact & Highlights</h4>
          <div className="modal-metrics">
            {project.metrics.map((m, i) => (
              <span key={i} className="metric-chip">{m}</span>
            ))}
          </div>
        </div>

        <div className="modal-section">
          <h4 className="modal-section-title"><Layers size={14} /> Tech Stack Used</h4>
          <div className="modal-stack">
            {project.stack.map((s) => (
              <span key={s} className="stack-pill">{s}</span>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="https://github.com/manish005"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-theme-primary btn-pill btn-sm"
          >
            <Code2 size={14} /> Explore on GitHub
          </a>
          <button className="btn btn-theme-outline btn-pill btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Enterprise .NET', 'Web APIs & Microservices', 'Data & SQL Optimization'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="projects" className="section-padding projects-clean-section">
        <div className="container">
          <div className="section-header center-header">
            <span className="section-kicker">Portfolio Showcase ✨</span>
            <h2 className="section-title">Things I've Actually Built</h2>
            <p className="section-subtitle">
              Real enterprise systems — not just "Hello World" apps. Production code, real users, real impact. 🚀
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="filter-tabs-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 4-Col Projects Grid */}
          <div className="projects-4col-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="compact-project-card">
                <div className="project-top-bar">
                  <span className="domain-pill">{project.domain}</span>
                  <a
                    href="https://github.com/manish005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    title="View on GitHub"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                <h3 className="compact-card-title">{project.name}</h3>
                <p className="compact-card-desc">{project.description}</p>

                <div className="compact-metrics">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <span key={idx} className="metric-chip">
                      <Sparkles size={10} /> {m}
                    </span>
                  ))}
                </div>

                <div className="compact-stack">
                  {project.stack.slice(0, 3).map((s) => (
                    <span key={s} className="stack-pill">{s}</span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="stack-pill">+{project.stack.length - 3} more</span>
                  )}
                </div>

                <button
                  className="read-more-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
}
