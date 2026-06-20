import React, { useEffect, useRef } from 'react';

const MatrixBackground = ({ theme }) => {
  const canvasRef = useRef(null);
  const themeRef = useRef(theme);

  // Sync theme changes to ref immediately so that draw loop sees it without DOM queries
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const fontSize = 14;
    let columns = 0;
    const rainDrops = [];

    // Set canvas dimensions and dynamically adjust columns without resetting state
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const newColumns = Math.ceil(canvas.width / fontSize);

      if (newColumns > columns) {
        for (let x = columns; x < newColumns; x++) {
          rainDrops[x] = Math.random() * -100; // stagger new columns
        }
      } else if (newColumns < columns) {
        rainDrops.length = newColumns;
      }
      columns = newColumns;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters list (binary, hex, cyber characters)
    const chars = '0101010101ABCDEF/*-+=#!@$%^&[]{}<>sys.bin.exe.dll.sh';
    const alphabet = chars.split('');

    const draw = () => {
      if (document.visibilityState === 'hidden') {
        return;
      }

      const isLight = themeRef.current === 'light';

      // Create trailing effect by overlaying semi-transparent background color
      ctx.fillStyle = isLight ? 'rgba(248, 250, 252, 0.12)' : 'rgba(5, 11, 20, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px Fira Code, monospace`;

      const primary = isLight ? '#64748b' : 'rgba(0, 255, 102, 0.75)';
      const secondary = isLight ? '#0284c7' : '#0ea5e9';
      const highlight = isLight ? '#0f172a' : '#ffffff';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        
        // Randomly make some characters cyan/secondary for a high-tech vibe
        if (Math.random() > 0.95) {
          ctx.fillStyle = secondary;
        } else if (Math.random() > 0.98) {
          ctx.fillStyle = highlight;
        } else {
          ctx.fillStyle = primary;
        }

        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        ctx.fillText(text, x, y);

        // If the drop has reached bottom of canvas or randomly reset
        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }

        // Increment drop position
        rainDrops[i] += 0.75; // speed of falling rain
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        cancelAnimationFrame(animationFrameId);
        draw();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -2,
        pointerEvents: 'none',
        opacity: 0.15, // keep it subtle so text remains readable
      }}
    />
  );
};

export default MatrixBackground;
