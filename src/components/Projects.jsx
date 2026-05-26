import React from 'react';
import { Code, Link, Terminal, GitBranch, Cpu, Database } from 'lucide-react';

const projects = [
  {
    title: 'VORTEX: Digital Forensics Engine',
    type: 'Digital Forensics & IR',
    desc: 'VORTEX is a modular, high-performance forensic triage engine designed for automated artifact collection, normalization, and chronological timeline correlation. It automates host-level persistence hunting.',
    highlights: [
      'Normalizes registry and filesystem logs (Shimcache, Amcache, Prefetch) into structured JSON timelines.',
      'Identifies persistence anomalies in startup registers, cron tasks, and services against threat indicator feeds.',
      'Designed to accelerate incident response operations, reducing triage capture time by up to 80%.'
    ],
    tags: ['Python', 'SQLite', 'YARA', 'EvtxParser'],
    link: 'https://github.com/Neon-cipher/vortex-engine'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container" style={{ padding: '6rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title mono justify-center" style={{ border: 'none', marginBottom: '1rem' }}>
          Latest_Operations
        </h2>
        <style>{`
          #projects .section-title::after { display: none; }
        `}</style>
        <p className="text-muted" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
          Technical case studies detailing custom utility development, vulnerability audits, and automation pipelines.
        </p>
      </div>

      <div className="grid grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              padding: '2.5rem 2rem',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              transition: 'var(--transition)'
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <span className="mono text-secondary" style={{ fontSize: '0.8rem', background: 'rgba(14, 165, 233, 0.08)', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>
                {project.type}
              </span>
              <div className="flex gap-4 text-muted">
                {project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover-white" title="View Repository">
                    <Code size={18} />
                  </a>
                )}
              </div>
            </div>

            <h3 style={{ fontSize: '1.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 650 }}>
              <Terminal size={18} className="text-primary" />
              {project.title}
            </h3>

            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              {project.desc}
            </p>

            {/* Bullet Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '2px solid var(--border-color)', paddingLeft: '0.85rem', margin: '0.5rem 0' }}>
              <p className="mono text-primary" style={{ fontSize: '0.7rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <GitBranch size={12} /> TECHNICAL_KEYPOINTS
              </p>
              <ul className="mono text-muted" style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.8rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', lineHeight: '1.5' }}>
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx}>
                    - {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="flex gap-2" style={{ flexWrap: 'wrap', marginTop: 'auto' }}>
              {project.tags.map(tag => (
                <span key={tag} className="mono" style={{ fontSize: '0.8rem', color: 'var(--primary-color)', background: 'rgba(16, 185, 129, 0.05)', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(16, 185, 129, 0.1)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .hover-white { transition: color 0.3s; color: var(--text-muted); }
        .hover-white:hover { color: var(--primary-color); }
      `}</style>
    </section>
  );
};

export default Projects;
