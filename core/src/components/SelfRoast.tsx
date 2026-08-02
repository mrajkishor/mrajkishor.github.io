'use client';

import { useEffect, useState } from 'react';
import { confessions } from '@/data/confessions';

const FADE_MS = 450;
const HOLD_MS = 6500;

export default function SelfRoast() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout>;
    const holdTimer = setInterval(() => {
      setVisible(false);
      fadeTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % confessions.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS);
    return () => {
      clearInterval(holdTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div className="brut-card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ background: 'var(--ink)', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p className="mono" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', color: 'var(--yellow)', textTransform: 'uppercase' }}>
          In My Defense
        </p>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: '7px', height: '7px', background: 'var(--red)', border: '1.5px solid var(--paper)', display: 'block', animation: 'dot-pulse 1.4s ease-in-out infinite' }} />
          <span className="mono" style={{ fontSize: '10px', color: 'var(--paper-2)', letterSpacing: '0.1em' }}>NO FILTER</span>
        </span>
      </div>

      <div style={{ minHeight: '132px', display: 'flex', alignItems: 'center', padding: '1.75rem' }}>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
            width: '100%',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(8px)',
            transition: `opacity ${FADE_MS}ms cubic-bezier(.4,0,.2,1), transform ${FADE_MS}ms cubic-bezier(.4,0,.2,1)`,
          }}
        >
          <img
            src="/images/byline.jpg"
            alt="Rajkishor Maharana"
            className="photo-brut"
            style={{ flexShrink: 0, width: '34px', height: '34px', objectFit: 'cover', border: '2px solid var(--ink)' }}
          />
          <div>
            <p className="serif headline-italic" style={{ fontSize: '16px', lineHeight: 1.6, color: 'var(--ink)', marginBottom: '8px' }}>
              &ldquo;{confessions[index]}&rdquo;
            </p>
            <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-40)', letterSpacing: '0.06em' }}>
              — me, probably while ignoring a failing test
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
