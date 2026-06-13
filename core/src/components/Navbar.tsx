'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/work',     label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(13,13,13,0.97)' : 'rgba(13,13,13,0.80)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-m)' : 'var(--border)'}`,
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      {/* Thin top brand bar */}
      <div style={{ height: '3px', background: 'var(--cap-blue)', width: '100%' }} />

      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo mark */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              background: 'var(--cap-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Courier New, monospace',
              fontWeight: 900,
              fontSize: '15px',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            R
          </div>
          <span
            style={{
              fontFamily: 'Courier New, monospace',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-100)',
            }}
          >
            raj<span style={{ color: 'var(--del-green)' }}>.</span>dev
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: '2.5rem' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href)) ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="btn-primary hidden md:inline-flex"
          style={{ padding: '8px 20px', fontSize: '12px' }}
        >
          Let's Connect
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '5px' }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                height: '1.5px',
                width: '22px',
                background: 'var(--text-300)',
                transition: 'all 0.25s',
                transform: mobileOpen
                  ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                  : i === 1 ? 'scaleX(0)'
                  : 'rotate(-45deg) translate(4.5px, -4.5px)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        style={{
          maxHeight: mobileOpen ? '360px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(.22,1,.36,1)',
          borderTop: mobileOpen ? '1px solid var(--border)' : 'none',
          background: 'rgba(13,13,13,0.98)',
        }}
      >
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${pathname === l.href ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a href="mailto:mrajkishor331@gmail.com" className="btn-primary" style={{ marginTop: '0.5rem', justifyContent: 'center' }}>
            Let's Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
