import React from 'react';
import { Shield, Eye, ShieldAlert, Cpu, Award, Terminal, Code, Network, Lock, Search } from 'lucide-react';

const skillDomains = [
  {
    title: 'Offensive Security Operations',
    icon: <ShieldAlert size={22} />,
    description: 'Vulnerability assessment, active exploitation, and network penetration testing.',
    technologies: [
      'Web Application Penetration Testing',
      'Network Recon & Active Scanner Systems',
      'Burp Suite Professional, Metasploit Framework',
      'Exploit Scripting & Custom Payloads',
      'OWASP Top 10 Auditing & Mitigations'
    ]
  },
  {
    title: 'Digital Forensics & Incident Response',
    icon: <Search size={22} />,
    description: 'Host-based artifact triage, network traffic forensics, and persistence hunting.',
    technologies: [
      'Automated Forensic Triage & Normalization',
      'Disk & Filesystem Analysis (FAT, NTFS, EXT)',
      'Wireshark Network Packet & Traffic Forensics',
      'Linux Hardening & OS Security Configurations',
      'Active Directory Auditing & Security GPOs'
    ]
  },
  {
    title: 'Security Engineering & Automation',
    icon: <Cpu size={22} />,
    description: 'Developing high-performance custom security utilities and automated scripts.',
    technologies: [
      'Python Security Automation & Scripting',
      'Asynchronous System Utilities in Rust',
      'SOC Pipeline Automations (Log parsing, alerts)',
      'Static Code Auditing & Secure SDLC',
      'Custom C++ Network Auditing Scripts'
    ]
  },
  {
    title: 'Threat Intel & Signature Engineering',
    icon: <Lock size={22} />,
    description: 'Malware analysis, sandbox orchestrations, and signature-based detection.',
    technologies: [
      'Cuckoo Sandbox Automation & Orchestration',
      'YARA Rule Development for Malware Detection',
      'OSINT recon pipelines and threat feeds',
      'Polymorphic Malware Behavior Logs Analysis',
      'SIGMA Detection Rule Engineering'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="container" style={{ padding: '6rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="section-title mono justify-center" style={{ border: 'none', marginBottom: '1rem' }}>
          Technical_Domains
        </h2>
        <style>{`
          #skills .section-title::after { display: none; }
        `}</style>
        <p className="text-muted" style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.05rem' }}>
          Highly structured core competencies and active engineering domains. Focused on defensive forensics, offensive auditing, and automation.
        </p>
      </div>

      <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
        {skillDomains.map((domain, index) => (
          <div 
            key={index} 
            className="glass-card" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              padding: '2.5rem 2rem',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              transition: 'var(--transition)'
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div style={{ 
                background: 'rgba(16, 185, 129, 0.1)', 
                padding: '0.6rem', 
                borderRadius: '8px',
                color: 'var(--primary-color)'
              }}>
                {domain.icon}
              </div>
              <h3 className="mono" style={{ fontSize: '1.2rem', fontWeight: 650, color: 'var(--text-main)' }}>
                {domain.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              {domain.description}
            </p>

            {/* Tech Bullet Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
              <p className="mono text-secondary" style={{ fontSize: '0.75rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Terminal size={12} /> CORE_MODULES
              </p>
              <ul className="mono" style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.85rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {domain.technologies.map((tech, techIdx) => (
                  <li key={techIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>&gt;</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
