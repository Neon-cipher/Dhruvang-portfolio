import React from 'react';
import { Code, Link, Terminal } from 'lucide-react';

const projects = [
  {
    title: 'VORTEX: Digital Forensics Engine',
    type: 'Tool Development',
    desc: 'VORTEX is a modular, high-performance Python-based digital forensics engine designed for automated artifact collection, normalization, and chronological correlation. This tool is built for rapid-response triage and deep-dive persistence hunting.',
    tags: ['Python', 'Digital Forensics', 'Artifact Analysis'],
    link: 'https://github.com/Neon-cipher/vortex-engine'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container" style={{ padding: '6rem 2rem' }}>
      <h2 className="section-title">Latest_Operations</h2>

      <div className="grid grid-cols-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="flex justify-between items-center">
              <span className="mono text-secondary" style={{ fontSize: '0.8rem', background: 'rgba(14, 165, 233, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '4px' }}>
                {project.type}
              </span>
              <div className="flex gap-4 text-muted">
                <a href={project.link} className="hover-white"><Code size={20} /></a>
                <a href={project.link} className="hover-white"><Link size={20} /></a>
              </div>
            </div>

            <h3 style={{ fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <Terminal size={20} className="text-primary" />
              {project.title}
            </h3>

            <p className="text-muted" style={{ flexGrow: 1 }}>{project.desc}</p>

            <div className="flex gap-2" style={{ flexWrap: 'wrap', marginTop: '1rem' }}>
              {project.tags.map(tag => (
                <span key={tag} className="mono" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>#{tag}</span>
              ))}
            </div>
            <style>{`
              .hover-white { transition: color 0.3s; }
              .hover-white:hover { color: var(--text-main); }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
