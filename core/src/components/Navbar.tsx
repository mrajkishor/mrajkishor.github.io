'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const links = [
  { href: '/',         label: 'Cover' },
  { href: '/about',    label: 'Profile' },
  { href: '/work',     label: 'Case Files' },
  { href: '/projects', label: 'Side Desk' },
  { href: '/contact',  label: 'Letters' },
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
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, background: 'var(--paper)' }}>
      {/* Utility strip */}
      <div
        style={{
          display: scrolled ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1152px',
          margin: '0 auto',
          padding: '7px 1.5rem',
          borderBottom: '1.5px solid var(--ink)',
        }}
      >
        <span className="mono" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--ink-70)' }}>
          VOL. 1 · Nº 8 · EST. 2018
        </span>
        <span className="mono" style={{ fontSize: '10px', letterSpacing: '0.14em', color: 'var(--ink-70)' }}>
          HYDERABAD, INDIA — NOT FOR RESALE
        </span>
      </div>

      {/* Main masthead row */}
      <div
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Wordmark */}
        <Link href="/" style={{ display: 'flex', alignItems: 'baseline', gap: '2px', textDecoration: 'none' }}>
          <span className="headline headline-black" style={{ fontSize: '24px', color: 'var(--ink)' }}>
            Rajkishor
          </span>
          <span className="headline headline-black" style={{ fontSize: '24px', color: 'var(--red)' }}>.</span>
        </Link>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ alignItems: 'center', gap: '2.25rem' }}>
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

        {/* CTA — hidden on contact page */}
        {!pathname.startsWith('/contact') && (
          <Link
            href="/contact"
            className="nav-cta-btn btn-primary"
            style={{ padding: '9px 20px', fontSize: '12px', boxShadow: '4px 4px 0 var(--ink)' }}
          >
            Write In
          </Link>
        )}

        {/* Mobile toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          style={{
            flexShrink: 0,
            width: '38px',
            height: '38px',
            border: '3px solid var(--ink)',
            background: mobileOpen ? 'var(--ink)' : 'var(--paper)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mobileOpen ? (
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', color: 'var(--paper)', lineHeight: 1, fontWeight: 700 }}>✕</span>
          ) : (
            <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '18px' }}>
              <span style={{ display: 'block', width: '100%', height: '3px', background: 'var(--ink)' }} />
              <span style={{ display: 'block', width: '100%', height: '3px', background: 'var(--ink)' }} />
              <span style={{ display: 'block', width: '100%', height: '3px', background: 'var(--ink)' }} />
            </span>
          )}
        </button>
      </div>

      <div className="masthead-rule" />

      {/* Mobile drawer */}
      <div
        style={{
          maxHeight: mobileOpen ? '360px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.25s cubic-bezier(.4,0,.2,1)',
          borderBottom: mobileOpen ? '3px solid var(--ink)' : 'none',
          background: 'var(--paper-2)',
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
        </div>
      </div>
    </header>
  );
}
