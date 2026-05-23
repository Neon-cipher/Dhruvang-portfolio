import React from 'react';
import { Mail, Users, Code, Key } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ padding: '6rem 2rem', marginBottom: '4rem' }}>
      <div className="glass-card" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <h2 className="section-title justify-center" style={{ marginBottom: '1.5rem', border: 'none' }}>Initiate_Connection</h2>
        <style>{`
          #contact .section-title::after { display: none; }
        `}</style>
        <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
          My inbox is always open. Whether you have an exciting project, a security consultation inquiry, or just want to discuss the latest zero-day, I'll try my best to get back to you!
        </p>

        <a href="mailto:[dhruvangsanghavi13@gmail.com]" className="cyber-button" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem', marginBottom: '3rem' }}>
          <Mail size={24} />
          Send Transmission
        </a>

        <div className="flex justify-center gap-4" style={{ marginTop: '2rem' }}>
          <a href="#" className="social-icon">
            <Code size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dhruvang-sanghavi-342108308" className="social-icon">
            <Users size={24} />
          </a>
        </div>
        <style>{`
          .social-icon {
            color: var(--text-muted);
            background: var(--surface-hover);
            padding: 1rem;
            border-radius: 50%;
            display: inline-flex;
            transition: var(--transition);
          }
          .social-icon:hover {
            color: var(--bg-color);
            background: var(--primary-color);
            transform: translateY(-3px);
            box-shadow: var(--glow-shadow);
          }
        `}</style>
      </div>
    </section>
  );
};

export default Contact;
