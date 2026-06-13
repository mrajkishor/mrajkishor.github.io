import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

const contacts = [
  { label: 'Email',    value: 'mrajkishor331@gmail.com', href: 'mailto:mrajkishor331@gmail.com', color: 'var(--cap-blue)',   desc: 'Best for detailed conversations' },
  { label: 'LinkedIn', value: 'rajkishormaharana',       href: 'https://linkedin.com/in/rajkishormaharana', color: 'var(--cog-teal)', desc: 'Professional profile & endorsements' },
  { label: 'GitHub',   value: 'mrajkishor',             href: 'https://github.com/mrajkishor',             color: 'var(--del-green)', desc: 'Code, projects & open source' },
];

const interests = [
  'Distributed Systems & Microservices Architecture',
  'Micro Frontend Platforms at Scale',
  'AI/RAG Pipeline Design',
  'Full Stack Product Development',
  'Enterprise Tech Modernisation',
  'Side Project Collaboration',
];

export default function Contact() {
  return (
    <div style={{ background: 'var(--bg-base)', paddingTop: '59px' }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="diag-stripe" style={{ width: '60%', top: '30%', right: '-5%', transform: 'rotate(-7deg)', opacity: 0.6 }} />
        <div className="diag-stripe" style={{ width: '35%', bottom: '25%', left: '15%', transform: 'rotate(11deg)', opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--cog-teal)' }} />

        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <p className="section-label anim-fade-up" style={{ animationDelay: '0.05s', marginBottom: '12px', color: 'var(--cog-teal)' }}>Let&apos;s Connect</p>
          <h1 className="anim-fade-up" style={{ animationDelay: '0.15s', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-100)', marginBottom: '1rem', lineHeight: 1.1 }}>
            If you&apos;ve read this far,<br />
            <span style={{ color: 'var(--cog-teal)' }}>we should talk.</span>
          </h1>
          <div className="anim-line-grow" style={{ animationDelay: '0.25s', height: '3px', width: '56px', background: 'var(--cog-teal)', marginBottom: '1.25rem' }} />
          <p className="anim-fade-up" style={{ animationDelay: '0.3s', fontSize: '15px', color: 'var(--text-300)', maxWidth: '520px', lineHeight: 1.7 }}>
            Open to meaningful conversations about engineering roles, architecture consultations, and interesting product ideas.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section style={{ background: 'var(--bg-base)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="contact-cards-grid">
            {contacts.map((c, i) => (
              <ScrollReveal key={c.label} type="reveal-scale" delay={`delay-${(i + 1) * 100}`}>
                <a
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    background: 'var(--bg-card)',
                    padding: '2.25rem',
                    textDecoration: 'none',
                    borderTop: `3px solid ${c.color}`,
                    transition: 'background 0.15s, transform 0.2s',
                    height: '100%',
                  }}
                  className="contact-card-link"
                >
                  <p style={{ fontFamily: 'Courier New, monospace', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-400)', marginBottom: '10px' }}>
                    {c.label}
                  </p>
                  <p style={{ fontWeight: 800, fontSize: '15px', color: c.color, marginBottom: '8px', wordBreak: 'break-all' }}>{c.value}</p>
                  <div style={{ width: '24px', height: '2px', background: c.color, marginBottom: '12px' }} />
                  <p style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', color: 'var(--text-400)', letterSpacing: '0.04em' }}>{c.desc}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Topics I'm open to */}
          <ScrollReveal delay="delay-200">
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--cap-blue)', padding: '2.25rem', position: 'relative', overflow: 'hidden' }}>
              <div className="diag-stripe" style={{ width: '100%', top: '45%', left: 0, transform: 'rotate(-5deg)', opacity: 0.4 }} />

              <p style={{ fontFamily: 'Courier New, monospace', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--cap-blue)', marginBottom: '10px' }}>
                Open to discussing
              </p>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-100)', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
                Engineering roles · Architecture consultations · Products worth building
              </h2>

              <div className="contact-interests-grid">
                {interests.map((item) => (
                  <div
                    key={item}
                    style={{
                      background: 'var(--bg-card-2)',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ color: 'var(--cog-teal)', fontWeight: 700, fontSize: '12px', flexShrink: 0 }}>✦</span>
                    <span style={{ fontSize: '13px', color: 'var(--text-300)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--del-green)', fontSize: '12px' }}>📍</span>
                <span style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', color: 'var(--text-400)', letterSpacing: '0.06em' }}>
                  HYDERABAD, INDIA · OPEN TO REMOTE & HYBRID GLOBALLY
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Statement */}
          <ScrollReveal delay="delay-300">
            <div style={{ marginTop: '1.5px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--del-green)', padding: '2.25rem' }}>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--text-300)', maxWidth: '680px', marginBottom: '1rem' }}>
                I enjoy working on products that solve real user problems and create meaningful business value.
                My focus is on understanding requirements clearly, turning ideas into practical solutions,
                and delivering reliable software that improves user experience.
              </p>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--text-300)', maxWidth: '680px' }}>
                If you&apos;re looking for someone who can contribute thoughtfully, collaborate well,
                and help move products forward — I&apos;d be glad to connect.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOTTOM NAV ── */}
      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <p style={{ fontFamily: 'Courier New, monospace', fontSize: '12px', color: 'var(--text-400)', letterSpacing: '0.06em' }}>
                Still exploring?
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Link href="/work" className="btn-primary" style={{ fontSize: '12px', padding: '8px 20px' }}>See My Work →</Link>
                <Link href="/projects" className="btn-outline" style={{ fontSize: '12px', padding: '8px 20px' }}>View Projects</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
