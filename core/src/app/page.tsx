'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const stats = [
  { value: '7.5+', label: 'Years Experience', sub: 'Enterprise delivery',        color: 'var(--cap-blue)'  },
  { value: '9+',   label: 'F500 Projects',    sub: 'Healthcare · Telecom · BFSI', color: 'var(--del-green)' },
  { value: '180K+',label: 'Users Impacted',   sub: 'Across 5 industries',         color: 'var(--cog-teal)'  },
  { value: '20+',  label: 'Technologies',     sub: 'AWS · Kafka · GenAI',         color: 'var(--cap-orange)' },
];

const pillars = [
  {
    num: '01',
    color: 'var(--cap-blue)',
    title: 'Architecture',
    desc: 'Micro Frontend platforms with Module Federation 2, event-driven DDD microservices, and distributed systems for Fortune 500 scale.',
    tags: ['MFE', 'Microservices', 'DDD', 'Kafka'],
  },
  {
    num: '02',
    color: 'var(--del-green)',
    title: 'Cloud & Platform',
    desc: 'AWS serverless pipelines — Lambda, DynamoDB, AppSync — Terraform IaC, Docker, and Kubernetes workload management.',
    tags: ['AWS', 'Terraform', 'Docker', 'K8s'],
  },
  {
    num: '03',
    color: 'var(--cog-teal)',
    title: 'AI & GenAI',
    desc: 'RAG pipelines, Qdrant vector DB, Model Context Protocol, and Agentic AI for enterprise Identity Governance platforms.',
    tags: ['RAG', 'Qdrant', 'MCP', 'LLM'],
  },
];

export default function Home() {
  return (
    <div style={{ background: 'var(--bg-base)', paddingTop: '59px' }}>

      {/* ── HERO ── */}
      <section
        className="hero-section"
        style={{
          minHeight: 'calc(100vh - 59px)',
          display: 'flex',
          alignItems: 'center',
          background: 'var(--bg-base)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="geo-dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
        <div className="diag-stripe" style={{ width: '60%', top: '22%', left: '30%', transform: 'rotate(-7deg)', opacity: 0.6 }} />
        <div className="diag-stripe" style={{ width: '40%', top: '72%', left: '5%', transform: 'rotate(11deg)', opacity: 0.4 }} />
        <div className="diag-stripe" style={{ width: '25%', top: '55%', right: '8%', transform: 'rotate(-14deg)', opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: 'var(--del-green)' }} />
        <div style={{ position: 'absolute', top: 0, right: '4px', width: '1px', height: '100%', background: 'var(--border)' }} />

        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '2rem 1.5rem', width: '100%', position: 'relative', zIndex: 2 }}>
          {/* Responsive grid — 1 col mobile, 2 col desktop */}
          <div className="hero-grid">

            {/* Left — text */}
            <div>
              <div
                className="anim-fade-up"
                style={{
                  animationDelay: '0.05s',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-m)',
                  borderLeft: '3px solid var(--del-green)',
                  marginBottom: '1.5rem',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--del-green)',
                }}
              >
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--del-green)', display: 'block', flexShrink: 0, animation: 'dot-pulse 1.4s ease-in-out infinite' }} />
                Available · Open to Select Opportunities
              </div>

              <h1
                className="anim-fade-up"
                style={{
                  animationDelay: '0.15s',
                  fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                  fontWeight: 900,
                  lineHeight: 1.0,
                  letterSpacing: '-0.03em',
                  marginBottom: '1.25rem',
                  color: 'var(--text-100)',
                }}
              >
                Rajkishor<br />
                <span style={{ color: 'var(--cap-blue)' }}>Maharana</span>
              </h1>

              <div className="anim-line-grow" style={{ animationDelay: '0.25s', height: '3px', width: '64px', background: 'var(--cap-blue)', marginBottom: '1.25rem' }} />

              <p
                className="anim-fade-up"
                style={{
                  animationDelay: '0.3s',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '13px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--cog-teal)',
                  marginBottom: '1rem',
                }}
              >
                Software Engineer III @ Deloitte<br />React • .NET • Azure • Micro Frontends • GenAI
              </p>

              <p
                className="anim-fade-up"
                style={{
                  animationDelay: '0.4s',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--text-300)',
                  maxWidth: '480px',
                  marginBottom: '2rem',
                }}
              >
                7.5+ years delivering enterprise systems for Fortune 500 clients across
                Healthcare, Telecom, BFSI, EdTech &amp; Aviation. Micro Frontend architect,
                GenAI integrator, platform builder.
              </p>

              <div className="anim-fade-up" style={{ animationDelay: '0.5s', display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '2.5rem' }}>
                <Link href="/work" className="btn-primary">View My Work →</Link>
                <Link href="/contact" className="btn-outline">Get In Touch</Link>
              </div>

              <div className="anim-fade-up" style={{ animationDelay: '0.6s', display: 'flex', gap: '2rem' }}>
                {[
                  { label: 'GitHub',   href: 'https://github.com/mrajkishor' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/rajkishormaharana' },
                  { label: 'Email',    href: 'mailto:mrajkishor331@gmail.com' },
                ].map((s) => (
                  <a key={s.label} href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {s.label}
                  </a>
                ))}
              </div>

              {/* Mobile-only profile photo — shown below text on small screens */}
              <div className="mobile-profile-card anim-fade-in" style={{ animationDelay: '0.5s', marginTop: '2rem' }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <div style={{ position: 'absolute', top: 8, left: -8, width: '100%', height: '100%', background: 'var(--cap-blue)', opacity: 0.45 }} />
                  <div style={{ position: 'relative', width: '180px', height: '220px', overflow: 'hidden', border: '1px solid var(--border-m)', borderTop: '3px solid var(--cap-blue)' }}>
                    <img
                      src="/images/profile_pic.jpeg"
                      alt="Rajkishor Maharana"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 15%', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(13,13,13,0.92)', borderTop: '1px solid var(--cap-blue)', padding: '6px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontFamily: 'Courier New, monospace', fontSize: '9px', color: 'var(--text-300)', letterSpacing: '0.06em' }}>DELOITTE · SE3</span>
                      <span style={{ fontFamily: 'Courier New, monospace', fontSize: '9px', color: 'var(--del-green)', letterSpacing: '0.06em' }}>● ACTIVE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — profile image (hidden on mobile, shown on lg+) */}
            <div className="anim-fade-in hidden lg:flex" style={{ animationDelay: '0.3s', justifyContent: 'flex-end' }}>
              <div style={{ position: 'relative', flexShrink: 0, marginLeft: '56px' }}>
                <div style={{ position: 'absolute', top: 12, left: -52, width: '300px', height: '380px', background: 'var(--cap-blue)', opacity: 0.5 }} />
                <div style={{ position: 'absolute', top: 6, left: -26, width: '300px', height: '380px', border: '1px solid var(--del-green)', opacity: 0.4 }} />
                <div style={{ position: 'relative', width: '300px', height: '380px', overflow: 'hidden', border: '1px solid var(--border-m)', borderTop: '3px solid var(--cap-blue)' }}>
                  <img
                    src="/images/profile_pic.jpeg"
                    alt="Rajkishor Maharana"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 15%', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(13,13,13,0.92)', borderTop: '2px solid var(--cap-blue)', padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', color: 'var(--text-300)', letterSpacing: '0.08em' }}>DELOITTE · SE3</span>
                    <span style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', color: 'var(--del-green)', letterSpacing: '0.08em' }}>● ACTIVE</span>
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: 0, right: -16, background: 'var(--del-green)', color: '#000', fontFamily: 'Courier New, monospace', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '6px 12px', zIndex: 3 }}>
                  HYD, INDIA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="stats-grid">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} type="reveal-scale" delay={`delay-${(i + 1) * 100}`}>
                <div
                  style={{
                    padding: '2.5rem 1.5rem',
                    borderTop: '3px solid ' + s.color,
                    textAlign: 'center',
                  }}
                  className="stat-cell"
                >
                  <div style={{ fontSize: '2.25rem', fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: '6px', letterSpacing: '-0.03em' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-200)', marginBottom: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: 'Courier New, monospace', fontSize: '10px', color: 'var(--text-400)', letterSpacing: '0.06em' }}>
                    {s.sub}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section style={{ background: 'var(--bg-base)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="diag-stripe" style={{ width: '50%', top: '15%', right: '10%', transform: 'rotate(-9deg)', opacity: 0.5 }} />
        <div className="diag-stripe" style={{ width: '30%', bottom: '20%', left: '5%', transform: 'rotate(13deg)', opacity: 0.4 }} />

        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <div style={{ marginBottom: '3.5rem' }}>
              <p className="section-label" style={{ marginBottom: '10px' }}>Core Expertise</p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-100)', letterSpacing: '-0.02em' }}>
                What I Build &amp; Deliver
              </h2>
            </div>
          </ScrollReveal>

          <div className="pillars-grid" style={{ background: 'var(--border)', gap: '1.5px' }}>
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={`delay-${(i + 1) * 100}`}>
                <div
                  className="work-card"
                  style={{ background: 'var(--bg-card)', padding: '2.5rem', height: '100%', borderTop: `3px solid ${p.color}` }}
                >
                  <div style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: p.color, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '24px', height: '1px', background: p.color, display: 'inline-block' }} />
                    {p.num}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-100)', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-300)', marginBottom: '1.5rem' }}>
                    {p.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {p.tags.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ background: 'var(--cap-blue)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="diag-stripe" style={{ width: '80%', top: '30%', left: '10%', transform: 'rotate(-4deg)', background: 'rgba(255,255,255,0.08)' }} />
        <div className="diag-stripe" style={{ width: '50%', bottom: '35%', right: '5%', transform: 'rotate(8deg)', background: 'rgba(255,255,255,0.06)' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: 'var(--del-green)' }} />

        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <div className="cta-band">
              <div>
                <p style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>
                  Next Step
                </p>
                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
                  Ready to build something exceptional?
                </h2>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <Link
                  href="/contact"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'var(--del-green)', color: '#000', fontWeight: 800, fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.15s' }}
                >
                  Start a Conversation →
                </Link>
                <Link href="/projects" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                  View Projects
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
