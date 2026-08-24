'use client';

import { GraduationCap, Trophy, Award } from 'lucide-react';
import { education, certifications } from '../../lib/data';

export default function Education() {
  return (
    <section id="education" className="section-padding education-clean-section">
      <div className="container">
        <div className="section-header center-header">
          <span className="section-kicker">Credentials</span>
          <h2 className="section-title">Education &amp; Honors</h2>
        </div>

        <div className="clean-edu-cert-grid">
          {/* Education */}
          <div className="edu-col">
            <h3 className="col-heading"><GraduationCap size={20} /> Academic Background</h3>
            <div className="edu-stack">
              {education.map((item, idx) => (
                <div key={idx} className="clean-edu-card">
                  <h4>{item.degree}</h4>
                  <p>{item.school}</p>
                  <div className="edu-meta-line">
                    <span>{item.year}</span>
                    <span className="score-tag">{item.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="cert-col">
            <h3 className="col-heading"><Trophy size={20} /> Honors &amp; Certifications</h3>
            <div className="cert-stack">
              {certifications.map((cert, idx) => (
                <div key={idx} className="clean-cert-card">
                  <Award size={18} className="award-icon" />
                  <div>
                    <h4>{cert.title}</h4>
                    <p>{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
