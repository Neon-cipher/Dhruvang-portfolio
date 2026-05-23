import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Shield, Lock, Cpu, Server, Wifi } from 'lucide-react';

const terminalSequences = [
  { type: 'cmd', text: 'nmap -sS -sV -p 80,22,443 10.0.8.2' },
  { type: 'log', text: 'PORT    STATE SERVICE  VERSION' },
  { type: 'log', text: '22/tcp  open  ssh      OpenSSH 8.9p1' },
  { type: 'log', text: '80/tcp  open  http     Nginx 1.22.1' },
  { type: 'log', text: '443/tcp open  ssl/http Nginx 1.22.1' },
  { type: 'cmd', text: 'python3 exploit_ssh_auth.py --target 10.0.8.2' },
  { type: 'log', text: '[*] Starting authorization bypass attempt...' },
  { type: 'log', text: '[*] Checking server keys for RSA vulnerability...' },
  { type: 'log', text: '[+] Vulnerable signature verification detected!' },
  { type: 'log', text: '[+] Injecting exploit payload: 0x7fff8b2a...' },
  { type: 'log', text: 'SUCCESS: Remote Shell access established.' },
  { type: 'cmd', text: './dhruvang_portfolio.sh' },
  { type: 'log', text: '=========================================' },
  { type: 'log', text: '  WELCOME TO DHRUVANG\'S SEC-OPS TERMINAL  ' },
  { type: 'log', text: '  STATUS: ACTIVE | POSITION: SEC-LEAD    ' },
  { type: 'log', text: '=========================================' },
  { type: 'log', text: 'Initializing interactive portfolio module...' },
  { type: 'log', text: 'system.status = "SECURE" [100% DEFENDED]' },
];

const Hero = () => {
  const [terminalLines, setTerminalLines] = useState([]);
  const [activeSeqIndex, setActiveSeqIndex] = useState(0);
  const [currentTypedText, setCurrentTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const terminalBodyRef = useRef(null);

  // Auto-scroll terminal body to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalLines, currentTypedText]);

  // Terminal Typing & Processing loop
  useEffect(() => {
    if (activeSeqIndex >= terminalSequences.length) {
      // Loop sequence after a short delay
      const resetTimeout = setTimeout(() => {
        setTerminalLines([]);
        setActiveSeqIndex(0);
        setCurrentTypedText('');
        setCharIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimeout);
    }

    const currentSeq = terminalSequences[activeSeqIndex];

    if (currentSeq.type === 'cmd') {
      if (charIndex < currentSeq.text.length) {
        const typeTimeout = setTimeout(() => {
          setCurrentTypedText(prev => prev + currentSeq.text[charIndex]);
          setCharIndex(prev => prev + 1);
        }, 60 + Math.random() * 40); // realistic variance in typing
        return () => clearTimeout(typeTimeout);
      } else {
        // Command completed typing. Push to list and move to next
        const pauseTimeout = setTimeout(() => {
          setTerminalLines(prev => [...prev, { type: 'cmd', text: currentSeq.text }]);
          setCurrentTypedText('');
          setCharIndex(0);
          setActiveSeqIndex(prev => prev + 1);
        }, 500);
        return () => clearTimeout(pauseTimeout);
      }
    } else {
      // It's a log line. Dump instantly after a microsecond delay
      const dumpTimeout = setTimeout(() => {
        setTerminalLines(prev => [...prev, { type: 'log', text: currentSeq.text }]);
        setActiveSeqIndex(prev => prev + 1);
      }, 150 + Math.random() * 150); // slight simulation delay
      return () => clearTimeout(dumpTimeout);
    }
  }, [activeSeqIndex, charIndex]);

  // Radar ping simulator
  const [pingPos, setPingPos] = useState({ top: '30%', left: '70%', show: true });
  useEffect(() => {
    const interval = setInterval(() => {
      // generate random coordinates within the radar limits
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 120; // max radius 150px
      const x = 175 + Math.cos(angle) * radius - 4; // offset half ping width
      const y = 175 + Math.sin(angle) * radius - 4;
      setPingPos({ top: `${y}px`, left: `${x}px`, show: true });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container flex items-center justify-between" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '3rem', flexWrap: 'wrap', gap: '3rem' }}>
      <div className="hero-content animate-fade-in" style={{ flex: '1 1 500px', maxWidth: '650px' }}>
        <p className="mono text-primary" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
          <TerminalIcon size={18} />
          <span>secops.terminal.initiate("guest")</span>
        </p>

        <h1 className="glitch-text" data-text="Securing the Digital Frontier" style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: 1.1 }}>
          Securing the <span className="text-secondary">Digital Frontier</span>
        </h1>

        <h2 className="text-muted mono" style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)', marginBottom: '1.5rem', fontWeight: '500', color: 'var(--primary-color)' }}>
          &gt;_ Cybersecurity Specialist & Pentester
        </h2>

        <p style={{ maxWidth: '600px', marginBottom: '2.5rem', fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          Welcome to my secure terminal. I conduct vulnerability research, penetration testing, and build threat intelligence dashboards to protect networks from sophisticated threat actors.
        </p>

        {/* Live Typing Terminal */}
        <div className="cyber-terminal" style={{ width: '100%', marginBottom: '2.5rem' }}>
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <span className="mono text-muted" style={{ fontSize: '0.8rem' }}>guest@dhruvang-secops:~</span>
            <div style={{ width: '38px' }}></div>
          </div>
          <div ref={terminalBodyRef} className="terminal-body mono">
            {terminalLines.map((line, idx) => (
              <div key={idx} className={line.type === 'cmd' ? 'terminal-cmd' : 'terminal-log'}>
                {line.type === 'cmd' ? (
                  <span>
                    <span className="text-secondary">dhruvang@secops:~$</span> {line.text}
                  </span>
                ) : (
                  <span>{line.text}</span>
                )}
              </div>
            ))}
            {activeSeqIndex < terminalSequences.length && terminalSequences[activeSeqIndex].type === 'cmd' && (
              <div>
                <span className="text-secondary">dhruvang@secops:~$</span> {currentTypedText}
                <span className="cursor-blink" style={{ width: '8px', height: '1.2rem', display: 'inline-block', background: 'var(--primary-color)', verticalAlign: 'middle', marginLeft: '2px' }}></span>
              </div>
            )}
            {activeSeqIndex < terminalSequences.length && terminalSequences[activeSeqIndex].type === 'log' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>Processing...</span>
                <span className="cursor-blink" style={{ width: '8px', height: '1.2rem', display: 'inline-block', background: 'var(--secondary-color)', verticalAlign: 'middle' }}></span>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
          <a href="#projects" className="cyber-button">
            Decrypted Projects
          </a>
          <a href="#contact" className="cyber-button" style={{ background: 'transparent', borderColor: 'rgba(0,255,102,0.3)', color: 'var(--text-main)' }}>
            Initiate Contact
          </a>
        </div>
      </div>

      {/* High-fidelity Cybersecurity Animated Radar Visual */}
      <div className="hero-visual animate-fade-in" style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="radar-container">
          <div className="radar-circle radar-circle-1"></div>
          <div className="radar-circle radar-circle-2"></div>
          <div className="radar-circle radar-circle-3"></div>

          <div className="radar-sweep"></div>
          <div className="radar-crosshair"></div>

          {/* Periodic radar ping dot */}
          {pingPos.show && (
            <div className="radar-ping" style={{ top: pingPos.top, left: pingPos.left }}></div>
          )}

          {/* Central Hologram Icon layer */}
          <div style={{
            position: 'absolute',
            background: 'rgba(5, 11, 20, 0.9)',
            border: '2px solid var(--primary-color)',
            width: '100px', height: '100px',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 30px rgba(0, 255, 102, 0.4)',
            zIndex: 10
          }}>
            <Shield size={45} color="var(--primary-color)" style={{ filter: 'drop-shadow(0 0 8px rgba(0,255,102,0.6))' }} />
          </div>

          {/* Orbiting cyber indicators */}
          <div style={{ position: 'absolute', top: '10%', left: '80%', display: 'flex', gap: '0.25rem', color: 'var(--secondary-color)', fontSize: '0.75rem' }} className="mono">
            <Wifi size={14} /> <span>10.0.8.2</span>
          </div>
          <div style={{ position: 'absolute', bottom: '15%', left: '5%', display: 'flex', gap: '0.25rem', color: 'var(--primary-color)', fontSize: '0.75rem' }} className="mono">
            <Cpu size={14} /> <span>CPU: 42%</span>
          </div>
          <div style={{ position: 'absolute', top: '75%', right: '0%', display: 'flex', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.75rem' }} className="mono">
            <Server size={14} /> <span>SSH_ON</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
