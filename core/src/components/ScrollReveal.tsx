'use client';

import React, { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  type?: 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale';
  delay?: string;
}

export default function ScrollReveal({
  children,
  className = '',
  type = 'reveal',
  delay = '',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${type} ${delay} ${className}`}>
      {children}
    </div>
  );
}
