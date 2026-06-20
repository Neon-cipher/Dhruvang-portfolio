import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Terminal as TerminalIcon, Shield, ChevronRight, Cpu, GitCommit, Award, MapPin } from 'lucide-react';

const Hero = () => {
  // Interactive CLI Shell State
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'log', text: '==================================================' },
    { type: 'log', text: '  DHRUVANG SANGHAVI - SECURITY OPERATIONS CONSOLE ' },
    { type: 'log', text: '  STATUS: ACTIVE | TARGET: SEC_AUDIT_PORTAL       ' },
    { type: 'log', text: '==================================================' },
    { type: 'log', text: 'Type "help" to view a list of operational commands.' },
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdHistoryIndex, setCmdHistoryIndex] = useState(-1);

  const [hoveredCell, setHoveredCell] = useState(null);

  const contributions = React.useMemo(() => {
    const data = [];
    const now = new Date();
    for (let i = 44; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const day = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      
      let commits = 0;
      const rand = Math.random();
      if (rand > 0.55) {
        if (rand > 0.92) commits = Math.floor(Math.random() * 5) + 6;
        else if (rand > 0.78) commits = Math.floor(Math.random() * 3) + 3;
        else commits = Math.floor(Math.random() * 2) + 1;
      }
      
      let bg = 'rgba(255,255,255,0.05)';
      if (commits > 0 && commits <= 2) bg = 'rgba(16, 185, 129, 0.2)';
      else if (commits > 2 && commits <= 5) bg = 'rgba(16, 185, 129, 0.5)';
      else if (commits > 5) bg = 'rgba(16, 185, 129, 0.8)';
      
      data.push({ day, commits, bg });
    }
    return data;
  }, []);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll terminal body to bottom
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  // Focus terminal input on click
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Keyboard commands listener
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const trimmedCmd = inputVal.trim().toLowerCase();
      if (!trimmedCmd) return;

      // Add command to history
      const newHistory = [...history, { type: 'cmd', text: inputVal }];
      setCmdHistory(prev => [inputVal, ...prev]);
      setCmdHistoryIndex(-1);

      // Process command
      switch (trimmedCmd) {
        case 'help':
          newHistory.push(
            { type: 'log', text: 'Available commands:' },
            { type: 'log', text: '  about    - Summary of technical background and mission' },
            { type: 'log', text: '  skills   - Core technical competencies and tooling' },
            { type: 'log', text: '  projects - Technical operations and development logs' },
            { type: 'log', text: '  contact  - Secure connection transmissions' },
            { type: 'log', text: '  clear    - Clear console screen history' }
          );
          break;
        case 'about':
          newHistory.push(
            { type: 'log', text: 'Dhruvang Sanghavi | Cybersecurity Specialist & Dev' },
            { type: 'log', text: 'I specialize in penetration testing, threat hunting, and digital forensics.' },
            { type: 'log', text: 'My core focus is automation in security operations: building tools that' },
            { type: 'log', text: 'automate incident response, forensic triage, and malware sandbox analysis.' }
          );
          break;
        case 'skills':
          newHistory.push(
            { type: 'log', text: 'Core Arsenal:' },
            { type: 'log', text: '  [Offensive] - Pen-testing, OWASP Top 10, Network Recon, Nmap, Wireshark' },
            { type: 'log', text: '  [Defensive] - Digital Forensics, Artifact Analysis, Cuckoo Sandbox, YARA' },
            { type: 'log', text: '  [Coding]    - Python, Bash, Rust, secure SDLC integration' }
          );
          break;
        case 'projects':
          newHistory.push(
            { type: 'log', text: 'Latest Tool Integrations:' },
            { type: 'log', text: '  - VORTEX Forensics Engine: Modular artifact triage & normalization (Python)' },
            { type: 'log', text: '  - Malware Sandbox Pipeline: Cuckoo integration & automated YARA generation' },
            { type: 'log', text: '  - Zero-Day Fuzzer: Network protocol memory corruption fuzzer (Rust)' },
            { type: 'log', text: 'Type "projects" inside navbar menu for deep-dives.' }
          );
          break;
        case 'contact':
          newHistory.push(
            { type: 'log', text: 'Establish connection:' },
            { type: 'log', text: '  - Mail: dhruvangsanghavi13@gmail.com' },
            { type: 'log', text: '  - LinkedIn: linkedin.com/in/dhruvang-sanghavi-342108308' }
          );
          break;
        case 'clear':
          setHistory([]);
          setInputVal('');
          return;
        default:
          newHistory.push({ type: 'log', text: `shell: command not found: "${trimmedCmd}". Type "help" for options.` });
      }

      setHistory(newHistory);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      // History recall
      e.preventDefault();
      if (cmdHistory.length > 0 && cmdHistoryIndex < cmdHistory.length - 1) {
        const nextIdx = cmdHistoryIndex + 1;
        setCmdHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistoryIndex > 0) {
        const nextIdx = cmdHistoryIndex - 1;
        setCmdHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      } else if (cmdHistoryIndex === 0) {
        setCmdHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <section className="container flex items-center justify-between" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '3rem', flexWrap: 'wrap', gap: '3rem' }}>
      <div className="hero-content animate-fade-in" style={{ flex: '1 1 500px', maxWidth: '650px' }}>
        <p className="mono text-primary" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.9rem' }}>
          <TerminalIcon size={16} />
          <span>secops.terminal.initiate("guest")</span>
        </p>

        <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: 1.1, fontWeight: '700' }}>
          Securing Systems & <span className="text-secondary">Automating Defenses</span>
        </h1>

        <h2 className="text-muted mono" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', marginBottom: '1.5rem', fontWeight: '500', color: 'var(--primary-color)' }}>
          &gt; Cybersecurity Analyst & Digital forensics investigator
        </h2>

        <p style={{ maxWidth: '600px', marginBottom: '2.5rem', fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          I’m a Cyber Security Analyst and Digital Forensics Investigator focused on understanding how attacks happen, how systems fail, and how evidence tells the real story behind an incident. My work combines security analysis, threat investigation, and practical problem-solving with a strong interest in real-world cyber defense and digital investigations.
        </p>

        {/* Fully Keyboard-Interactive Terminal CLI */}
        <div className="cyber-terminal" style={{ width: '100%', marginBottom: '2.5rem', cursor: 'text' }} onClick={focusInput}>
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
            {history.map((line, idx) => (
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

            {/* Input Row */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="text-secondary" style={{ marginRight: '0.5rem' }}>dhruvang@secops:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  flexGrow: 1,
                  caretColor: 'var(--primary-color)'
                }}
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
          <Link to="/projects" className="cyber-button">
            View Projects
          </Link>
          <Link to="/contact" className="cyber-button" style={{ background: 'transparent', borderColor: 'var(--border-color)', color: 'var(--text-main)' }}>
            Initiate Contact
          </Link>
        </div>
      </div>

      {/* Premium Professional Credentials & Commit Dashboard */}
      <div className="hero-visual animate-fade-in" style={{ flex: '1 1 350px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="glass-card" style={{ width: '100%', maxWidth: '380px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', boxShadow: 'var(--glow-shadow)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>

          {/* Header */}
          <div className="flex items-center gap-3" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.50rem', borderRadius: '50%', color: 'var(--primary-color)' }}>
              <Shield size={24} />
            </div>
            <div>
              <h3 className="mono" style={{ fontSize: '1.1rem', fontWeight: 600 }}>OPERATIONS_RECORD</h3>
              <p className="mono text-muted" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <MapPin size={12} /> Ahmedabad, Gujarat, India
              </p>
            </div>
          </div>

          {/* Operational Metrics */}
          <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', textAlign: 'center' }}>
            <div style={{ background: 'var(--bg-color)', padding: '0.75rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h4 className="mono text-primary" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>3</h4>
              <p className="mono text-muted" style={{ fontSize: '0.65rem', textTransform: 'uppercase' }}>Commits</p>
            </div>
            <div style={{ background: 'var(--bg-color)', padding: '0.75rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h4 className="mono text-secondary" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>10</h4>
              <p className="mono text-muted" style={{ fontSize: '0.65rem', textTransform: 'uppercase' }}>Threats</p>
            </div>
            <div style={{ background: 'var(--bg-color)', padding: '0.75rem 0.5rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h4 className="mono text-primary" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>1</h4>
              <p className="mono text-muted" style={{ fontSize: '0.65rem', textTransform: 'uppercase' }}>Tools</p>
            </div>
          </div>

          {/* GitHub Activity Simulation Grid */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <p className="mono text-muted" style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.25rem', margin: 0 }}>
                <GitCommit size={12} /> SEC_CONTRIBUTIONS_GRID
              </p>
              {hoveredCell && (
                <span className="mono text-primary animate-fade-in" style={{ fontSize: '0.65rem', background: 'rgba(16, 185, 129, 0.1)', padding: '2px 6px', borderRadius: '3px', border: '1px solid rgba(16, 185, 129, 0.15)' }}>
                  {hoveredCell.commits} commit{hoveredCell.commits !== 1 ? 's' : ''} on {hoveredCell.day}
                </span>
              )}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(15, 1fr)', gap: '3px', background: 'var(--bg-color)', padding: '0.75rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.03)' }}>
              {contributions.map((cell, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCell(cell)}
                  onMouseLeave={() => setHoveredCell(null)}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    background: cell.bg,
                    borderRadius: '1.5px',
                    cursor: 'pointer',
                    transition: 'transform 0.1s ease, box-shadow 0.1s ease',
                    transform: hoveredCell === cell ? 'scale(1.3)' : 'scale(1)',
                    boxShadow: hoveredCell === cell ? '0 0 8px var(--primary-color)' : 'none',
                    zIndex: hoveredCell === cell ? 10 : 1,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Certifications & Focus */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p className="mono text-muted" style={{ fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Award size={12} /> SECURITY_CREDENTIALS
            </p>
            <ul className="mono" style={{ listStyle: 'none', paddingLeft: 0, fontSize: '0.8rem', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ChevronRight size={14} className="text-primary" /> Certified Information and Offensive Security Expert (CIOSE)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ChevronRight size={14} className="text-primary" /> Certified Cyber Defense Professional (CCDP)
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
