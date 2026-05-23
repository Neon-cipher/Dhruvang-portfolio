import React, { useState, useEffect } from 'react';
import { ShieldAlert, Network, Code, Server, Lock, Search, Eye, AlertTriangle } from 'lucide-react';

const skills = [
  { name: 'Penetration Testing', icon: <ShieldAlert size={24} />, level: 90, desc: 'Web App & Network Vulnerability Assessment', threat: 'CRITICAL_ACCESS' },
  { name: 'Network Security', icon: <Network size={24} />, level: 75, desc: 'Traffic Analysis, IDS/IPS, Wireshark', threat: 'MONITORED' },
  { name: 'Digital forensics', icon: <Code size={24} />, level: 80, desc: 'Disk forensics, Mobile Forensics, Malware Analysis', threat: 'VERIFIED' },
  { name: 'Server Administration', icon: <Server size={24} />, level: 75, desc: 'Linux Hardening, AD Security', threat: 'HARDENED' },
  { name: 'Cryptography', icon: <Lock size={24} />, level: 85, desc: 'PKI, Encryption Algorithms, SSL/TLS', threat: 'ENCRYPTED' },
  { name: 'OSINT', icon: <Search size={24} />, level: 70, desc: 'Open Source Intelligence & Recon', threat: 'DECRYPTED' },
];

const SkillCard = ({ skill, index }) => {
  const [percent, setPercent] = useState(0);
  const [status, setStatus] = useState('SCANNING');

  useEffect(() => {
    // Stagger start times for each skill bar
    const startTimeout = setTimeout(() => {
      let currentVal = 0;
      const interval = setInterval(() => {
        currentVal += 1;
        if (currentVal >= skill.level) {
          setPercent(skill.level);
          setStatus(skill.threat);
          clearInterval(interval);
        } else {
          setPercent(currentVal);
          // Randomize status during decryption simulation
          if (currentVal < skill.level * 0.4) {
            setStatus('CONNECTING');
          } else if (currentVal < skill.level * 0.8) {
            setStatus('DECRYPTING');
          } else {
            setStatus('BYPASSING');
          }
        }
      }, 15);
      return () => clearInterval(interval);
    }, index * 200);

    return () => clearTimeout(startTimeout);
  }, [skill.level, skill.threat, index]);

  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
      {/* Laser scanner effect card line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '2px',
        width: '100%',
        background: 'var(--primary-color)',
        opacity: status === 'SCANNING' || status === 'DECRYPTING' ? 0.6 : 0,
        boxShadow: 'var(--glow-shadow)',
        transition: 'opacity 0.3s ease'
      }} />

      <div className="flex items-center justify-between">
        <div style={{
          background: 'rgba(0, 255, 102, 0.1)',
          padding: '0.75rem',
          borderRadius: '8px',
          color: 'var(--primary-color)',
          boxShadow: percent === skill.level ? '0 0 10px rgba(0, 255, 102, 0.15)' : 'none',
          transition: 'box-shadow 0.5s ease'
        }}>
          {skill.icon}
        </div>
        <div className="flex items-center gap-2">
          <span className="mono" style={{
            fontSize: '0.75rem',
            background: percent === skill.level ? 'rgba(0, 255, 102, 0.1)' : 'rgba(14, 165, 233, 0.1)',
            color: percent === skill.level ? 'var(--primary-color)' : 'var(--secondary-color)',
            padding: '0.2rem 0.5rem',
            borderRadius: '4px',
            fontWeight: '600'
          }}>
            [{status}]
          </span>
          <span className="mono text-muted" style={{ minWidth: '40px', textAlign: 'right' }}>{percent}%</span>
        </div>
      </div>

      <h3 className="mono" style={{ fontSize: '1.2rem', color: 'var(--text-main)', letterSpacing: '0.5px' }}>
        {skill.name}
      </h3>

      <p className="text-muted" style={{ fontSize: '0.9rem', minHeight: '45px' }}>
        {skill.desc}
      </p>

      {/* Hacking system progress meter */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: 'auto' }}>
        <div className="flex justify-between mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          <span>PORT_SECTOR_{index * 4 + 1}</span>
          <span>VAL_MATCH: 0x{percent.toString(16).toUpperCase()}</span>
        </div>
        <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', padding: '1px', border: '1px solid rgba(0,255,102,0.1)' }}>
          <div style={{
            width: `${percent}%`,
            height: '100%',
            background: `linear-gradient(90deg, var(--secondary-color) 0%, var(--primary-color) 100%)`,
            borderRadius: '3px',
            boxShadow: 'var(--glow-shadow)',
            transition: 'width 0.1s linear'
          }}></div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="container" style={{ padding: '6rem 2rem' }}>
      <h2 className="section-title mono" style={{ position: 'relative' }}>
        <span className="glitch-text" data-text="Security_Arsenal">Security_Arsenal</span>
      </h2>

      <div className="grid grid-cols-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
