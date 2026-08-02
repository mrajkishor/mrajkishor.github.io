'use client';

import { useEffect, useState } from 'react';
import { quotes } from '@/data/quotes';

const FADE_MS = 500;
const HOLD_MS = 7000;

export default function QuoteTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout>;
    const holdTimer = setInterval(() => {
      setVisible(false);
      fadeTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % quotes.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS);
    return () => {
      clearInterval(holdTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div className="brut-card" style={{ background: 'var(--ink)', padding: '3rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <span
        className="serif"
        style={{
          position: 'absolute',
          top: '-1.5rem',
          left: '1rem',
          fontSize: '8rem',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.06)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        &ldquo;
      </span>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '640px',
          margin: '0 auto',
          minHeight: '110px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(10px)',
          transition: `opacity ${FADE_MS}ms cubic-bezier(.4,0,.2,1), transform ${FADE_MS}ms cubic-bezier(.4,0,.2,1)`,
        }}
      >
        <p className="serif headline-italic" style={{ fontSize: 'clamp(1.1rem, 2.4vw, 1.6rem)', lineHeight: 1.5, color: 'var(--paper)' }}>
          {quotes[index]}
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 1, marginTop: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <span style={{ width: '20px', height: '2px', background: 'var(--yellow)' }} />
        <span className="mono" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--paper-2)', textTransform: 'uppercase' }}>
          Entry Nº {String(index + 1).padStart(2, '0')} / {quotes.length}
        </span>
        <span style={{ width: '20px', height: '2px', background: 'var(--yellow)' }} />
      </div>
    </div>
  );
}
