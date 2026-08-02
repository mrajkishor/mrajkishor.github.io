import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

const contacts = [
  { label: 'Email',    value: 'mrajkishor331@gmail.com', href: 'mailto:mrajkishor331@gmail.com', color: 'var(--yellow)', desc: 'Best for detailed conversations. Poorly-timed 2am ideas welcome.' },
  { label: 'LinkedIn', value: 'rajkishormaharana',       href: 'https://linkedin.com/in/rajkishormaharana', color: 'var(--blue)', desc: 'Professional profile & endorsements you can pretend to have read.' },
  { label: 'GitHub',   value: 'mrajkishor',             href: 'https://github.com/mrajkishor',             color: 'var(--red)',  desc: 'Code, projects, and a commit history that tells on me.' },
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
    <div style={{ background: 'var(--paper)', paddingTop: '104px' }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ background: 'var(--paper-2)', borderBottom: '3px solid var(--ink)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <p className="kicker anim-fade-up" style={{ animationDelay: '0.05s', marginBottom: '12px' }}>Letters to the Editor</p>
          <h1 className="headline headline-black anim-fade-up" style={{ animationDelay: '0.15s', fontSize: 'clamp(2rem, 4vw, 3.4rem)', color: 'var(--ink)', marginBottom: '1rem', lineHeight: 1.1 }}>
            If you&apos;ve read this far,<br />
            <span style={{ background: 'var(--blue)', color: '#fff', padding: '0 4px' }}>we&apos;re basically friends now.</span>
          </h1>
          <p className="anim-fade-up" style={{ animationDelay: '0.3s', fontSize: '15px', color: 'var(--ink-70)', maxWidth: '540px', lineHeight: 1.7 }}>
            Open to conversations about engineering roles, architecture consultations, and product ideas
            worth losing an evening to. No cold crypto pitches, please — my one NFT purchase already
            haunts me enough.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section style={{ background: 'var(--paper)', padding: '5rem 0' }}>
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
                    background: 'var(--paper)',
                    padding: '2.25rem',
                    textDecoration: 'none',
                    borderTop: `5px solid ${c.color}`,
                    height: '100%',
                    boxShadow: '5px 5px 0 var(--ink)',
                  }}
                  className="contact-card-link"
                >
                  <p className="mono" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: '10px' }}>
                    {c.label}
                  </p>
                  <p style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)', marginBottom: '8px', wordBreak: 'break-all' }}>{c.value}</p>
                  <div style={{ width: '26px', height: '4px', background: c.color, border: '1px solid var(--ink)', marginBottom: '12px' }} />
                  <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-40)', letterSpacing: '0.04em', lineHeight: 1.5 }}>{c.desc}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Topics I'm open to */}
          <ScrollReveal delay="delay-200">
            <div className="brut-card" style={{ background: 'var(--paper)', borderLeft: '6px solid var(--yellow)', padding: '2.25rem', position: 'relative', overflow: 'hidden' }}>
              <p className="mono" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: '10px' }}>
                Open to Discussing (Send Topics, Not Vibes)
              </p>
              <h2 className="headline headline-black" style={{ fontSize: '1.4rem', color: 'var(--ink)', marginBottom: '1.5rem' }}>
                Engineering roles · Architecture consultations · Products worth building
              </h2>

              <div className="contact-interests-grid">
                {interests.map((item) => (
                  <div
                    key={item}
                    style={{
                      background: 'var(--paper-2)',
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{ color: 'var(--red)', fontWeight: 700, fontSize: '12px', flexShrink: 0 }}>✦</span>
                    <span style={{ fontSize: '13px', color: 'var(--ink-70)' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '3px solid var(--ink)', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '12px' }}>📍</span>
                <span className="mono" style={{ fontSize: '11px', color: 'var(--ink-40)', letterSpacing: '0.06em' }}>
                  HYDERABAD, INDIA · OPEN TO REMOTE &amp; HYBRID GLOBALLY
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Statement */}
          <ScrollReveal delay="delay-300">
            <div className="brut-card" style={{ marginTop: '1.5rem', background: 'var(--paper)', borderLeft: '6px solid var(--red)', padding: '2.25rem' }}>
              <p className="pull-quote" style={{ borderLeft: 'none', paddingLeft: 0, marginBottom: '1.25rem', fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)' }}>
                &ldquo;I enjoy building things that solve real problems and create real value —
                not just things that survive a design review.&rdquo;
              </p>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--ink-70)', maxWidth: '680px' }}>
                My focus is on understanding requirements clearly, turning ideas into practical solutions, and
                delivering reliable software that improves the actual experience of actual people. If you&apos;re
                looking for someone who contributes thoughtfully, collaborates well, and occasionally makes the
                standup meeting slightly funnier — I&apos;d be glad to connect.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOTTOM NAV ── */}
      <section style={{ background: 'var(--paper-2)', borderTop: '3px solid var(--ink)', padding: '3rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <p className="mono" style={{ fontSize: '12px', color: 'var(--ink-40)', letterSpacing: '0.06em' }}>
                Still not convinced?
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Link href="/work" className="btn-primary" style={{ fontSize: '12px', padding: '9px 20px' }}>Read the Case Files →</Link>
                <Link href="/projects" className="btn-outline" style={{ fontSize: '12px', padding: '9px 20px' }}>See the Side Desk</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
