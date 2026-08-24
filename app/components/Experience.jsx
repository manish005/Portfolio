'use client';

import { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, X, ExternalLink, Layers } from 'lucide-react';
import { experience } from '../../lib/data';

function ExperienceModal({ job, onClose }) {
  if (!job) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box modal-box-wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="company-tag"><Briefcase size={13} /> {job.company}</span>
          <a
            href="https://github.com/manish005"
            target="_blank"
            rel="noopener noreferrer"
            className="modal-gh-link"
            title="GitHub Profile"
          >
            <ExternalLink size={14} /> GitHub
          </a>
        </div>

        <h2 className="modal-title">{job.title}</h2>

        <div className="modal-meta-row">
          <span className="meta-pill"><Calendar size={13} /> {job.period}</span>
          <span className="meta-pill"><MapPin size={13} /> {job.location}</span>
        </div>

        <p className="modal-desc">{job.description}</p>

        <div className="modal-projects-list">
          {job.projects.map((proj, pIdx) => (
            <div key={pIdx} className="modal-project-block">
              <h4 className="modal-project-title">{proj.name}</h4>
              <ul className="modal-bullet-list">
                {proj.points.map((pt, ptIdx) => (
                  <li key={ptIdx}>
                    <CheckCircle2 size={14} className="bullet-icon" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="modal-section">
                <h5 className="modal-section-title"><Layers size={13} /> Stack</h5>
                <div className="modal-stack">
                  {proj.stack.map((s) => (
                    <span key={s} className="mini-stack-pill">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <a
            href="https://github.com/manish005"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-theme-primary btn-pill btn-sm"
          >
            <ExternalLink size={14} /> View GitHub
          </a>
          <button className="btn btn-theme-outline btn-pill btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <section id="experience" className="section-padding experience-clean-section">
        <div className="container">
          <div className="section-header center-header">
            <span className="section-kicker">Career Journey 🗺️</span>
            <h2 className="section-title">Where I've Worked My Magic</h2>
            <p className="section-subtitle">
              5+ years of turning coffee into enterprise-grade code. Each role, a new adventure. ☕→💻
            </p>
          </div>

          {/* 2-Col Experience Grid */}
          <div className="experience-2col-grid">
            {experience.map((job, idx) => (
              <div key={idx} className="exp-card">
                <div className="exp-card-header">
                  <div>
                    <div className="company-tag">
                      <Briefcase size={13} />
                      <span>{job.company}</span>
                    </div>
                    <h3 className="job-role-title">{job.title}</h3>
                  </div>
                  <a
                    href="https://github.com/manish005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link exp-ext-link"
                    title="View Experience on GitHub"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                <div className="meta-pills" style={{ marginBottom: '12px' }}>
                  <span className="meta-pill"><Calendar size={12} /> {job.period}</span>
                  <span className="meta-pill"><MapPin size={12} /> {job.location}</span>
                </div>

                <p className="job-overview">{job.description}</p>

                <div className="exp-project-preview">
                  {job.projects.map((proj, pIdx) => (
                    <span key={pIdx} className="exp-project-tag">{proj.name}</span>
                  ))}
                </div>

                <button
                  className="check-exp-btn"
                  onClick={() => setSelectedJob(job)}
                >
                  Check Experience 🔍
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedJob && (
        <ExperienceModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </>
  );
}
