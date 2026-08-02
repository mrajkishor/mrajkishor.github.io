'use client';

import { useEffect, useState } from 'react';
import { oneliners } from '@/data/oneliners';

const FADE_MS = 450;
const HOLD_MS = 5500;

export default function OneLinerTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout>;
    const holdTimer = setInterval(() => {
      setVisible(false);
      fadeTimer = setTimeout(() => {
        setIndex((i) => (i + 1) % oneliners.length);
        setVisible(true);
      }, FADE_MS);
    }, HOLD_MS);
    return () => {
      clearInterval(holdTimer);
      clearTimeout(fadeTimer);
    };
  }, []);

  return (
    <div
      style={{
        minHeight: '110px',
        display: 'flex',
        alignItems: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: `opacity ${FADE_MS}ms cubic-bezier(.4,0,.2,1), transform ${FADE_MS}ms cubic-bezier(.4,0,.2,1)`,
      }}
    >
      <p className="pull-quote">
        &ldquo;{oneliners[index]}&rdquo;
      </p>
    </div>
  );
}
