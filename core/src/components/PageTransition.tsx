'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

/* Corporate wipe colors cycling through brand palettes */
const WIPE_COLORS = [
  '#0070AD', /* Capgemini blue  */
  '#86BC25', /* Deloitte green  */
  '#00B2A9', /* Cognizant teal  */
  '#FF6900', /* Capgemini orange */
  '#003366', /* Cognizant navy  */
];

let colorIdx = 0;

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [wipe, setWipe] = useState<'in' | 'out' | 'idle'>('idle');
  const [wipeColor, setWipeColor] = useState(WIPE_COLORS[0]);
  const [displayChildren, setDisplayChildren] = useState(children);
  const prevPath = useRef(pathname);
  const timer1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timer2 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timer3 = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;

    /* Pick next brand color */
    colorIdx = (colorIdx + 1) % WIPE_COLORS.length;
    const color = WIPE_COLORS[colorIdx];
    setWipeColor(color);

    /* 1. Panel sweeps IN (left → right covers screen) */
    setWipe('in');

    /* 2. Swap children at the covered moment */
    timer1.current = setTimeout(() => {
      setDisplayChildren(children);
    }, 340);

    /* 3. Panel sweeps OUT (right → off screen) */
    timer2.current = setTimeout(() => {
      setWipe('out');
    }, 380);

    /* 4. Clean up overlay */
    timer3.current = setTimeout(() => {
      setWipe('idle');
    }, 720);

    return () => {
      if (timer1.current) clearTimeout(timer1.current);
      if (timer2.current) clearTimeout(timer2.current);
      if (timer3.current) clearTimeout(timer3.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* Keep displayChildren in sync on first render */
  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return (
    <>
      {/* Wipe overlay */}
      {wipe !== 'idle' && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: wipeColor,
            animation: wipe === 'in'
              ? 'wipe-in 0.36s cubic-bezier(.77,0,.18,1) forwards'
              : 'wipe-out 0.32s cubic-bezier(.77,0,.18,1) forwards',
          }}
        />
      )}

      {/* Thin brand accent bar that slides underneath the wipe */}
      {wipe !== 'idle' && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            zIndex: 10000,
            background: wipeColor === '#86BC25' ? '#0070AD' : '#86BC25',
            animation: wipe === 'in'
              ? 'wipe-in 0.36s cubic-bezier(.77,0,.18,1) forwards'
              : 'wipe-out 0.32s cubic-bezier(.77,0,.18,1) forwards',
          }}
        />
      )}

      {/* Page content */}
      <div key={pathname} className="page-content-enter">
        {displayChildren}
      </div>
    </>
  );
}
