import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import MatrixBackground from './MatrixBackground';

const Layout = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app-container">
      {/* Matrix Falling Rain Background */}
      <MatrixBackground />

      {/* CRT Scanline Overlay */}
      <div className="scanlines flicker"></div>

      {/* Navigation Layer */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '1.5rem', zIndex: 100, background: 'linear-gradient(var(--bg-color) 40%, transparent)' }}>
        <div className="container flex justify-between items-center">
          <NavLink to="/" className="mono text-primary outline-none" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            <span style={{ color: 'var(--text-main)' }}>~</span>/dhruv&gt; <span className="cursor-blink" style={{ width: '8px', height: '1.2rem', display: 'inline-block', background: 'var(--primary-color)', verticalAlign: 'middle' }}></span>
          </NavLink>
          <div className="flex items-center gap-4">
            <div className="flex gap-4 mono text-muted hidden-mobile">
              <NavLink to="/" className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>Home</NavLink>
              <NavLink to="/skills" className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>Skills</NavLink>
              <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>Projects</NavLink>
              <NavLink to="/blogs" className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>Blogs</NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"}>Contact</NavLink>
            </div>
            
            {/* Monospaced Theme Switcher */}
            <button 
              onClick={toggleTheme} 
              style={{
                background: 'transparent',
                border: '1px solid var(--border-color)',
                color: 'var(--primary-color)',
                padding: '0.35rem 0.7rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                outline: 'none',
                transition: 'var(--transition)'
              }}
              className="theme-toggle-btn"
              title="Toggle Security Theme"
            >
              {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
              <span>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Routed Content */}
      <main style={{ minHeight: '100vh', paddingTop: '40px' }}>
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--surface-hover)' }}>
        <p className="mono text-muted" style={{ fontSize: '0.9rem' }}>
          Built by Dhruv<br/>
          <span style={{ color: 'var(--primary-color)' }}>system.exit(0)</span>
        </p>
      </footer>
      
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none; }
        }
        .nav-link {
          transition: var(--transition);
        }
        .nav-link:hover, .active-link {
          color: var(--primary-color);
        }
        .outline-none { outline: none; }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default Layout;
