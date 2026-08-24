'use client';

import { Server, Layout, Database, Cpu } from 'lucide-react';
import { skillsCategories } from '../../lib/data';

export default function Skills() {
  const categoryIcons = {
    backend: <Server size={18} />,
    frontend: <Layout size={18} />,
    database: <Database size={18} />,
    devops: <Cpu size={18} />,
  };

  return (
    <section id="skills" className="section-padding skills-clean-section">
      <div className="container">
        <div className="section-header center-header">
          <span className="section-kicker">Technical Expertise</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="section-subtitle">
            Core stack and tools used to build scalable production systems.
          </p>
        </div>

        <div className="clean-skills-grid">
          {skillsCategories.map((group) => (
            <div key={group.id} className="clean-skill-group-card">
              <div className="group-title-row">
                <span className="group-icon-badge">{categoryIcons[group.id]}</span>
                <h3>{group.category}</h3>
              </div>

              <div className="skill-pills-row">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-badge-item">
                    <span className="skill-badge-name">{skill.name}</span>
                    <span className="skill-badge-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
