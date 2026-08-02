'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import SelfRoast from '@/components/SelfRoast';
import QuoteTicker from '@/components/QuoteTicker';
import OneLinerTicker from '@/components/OneLinerTicker';

const stats = [
  { value: '8+',   label: 'Years in the trenches',        color: 'var(--yellow)' },
  { value: '9+',   label: 'F500 projects survived',       color: 'var(--red)'    },
  { value: '180K+',label: 'Humans affected (mostly well)',color: 'var(--blue)'   },
  { value: '20+',  label: 'Technologies, allegedly mastered', color: 'var(--ink)' },
];

const departments = [
  {
    num: '01',
    color: 'var(--yellow)',
    title: 'Architecture',
    desc: 'Draws boxes and arrows on a whiteboard until the chaos looks inevitable. Ships Micro Frontend platforms and event-driven microservices that survive contact with 8 domain teams.',
    tags: ['MFE', 'Microservices', 'DDD', 'Kafka'],
  },
  {
    num: '02',
    color: 'var(--red)',
    title: 'Cloud & Platform',
    desc: 'Makes servers scale so nobody has to explain an outage to a VP at 2am. Terraform by day, mild paranoia about Lambda cold starts by night.',
    tags: ['AWS', 'Terraform', 'Docker', 'K8s'],
  },
  {
    num: '03',
    color: 'var(--blue)',
    title: 'AI & GenAI',
    desc: 'Teaches machines to find things so humans stop opening fifteen browser tabs. RAG pipelines and Agentic AI for enterprise systems that actually ship.',
    tags: ['RAG', 'Qdrant', 'MCP', 'LLM'],
  },
];

export default function Home() {
  return (
    <div style={{ background: 'var(--paper)', paddingTop: '104px' }}>

      {/* ── COVER ── */}
      <section style={{ position: 'relative', overflow: 'hidden', borderBottom: '5px solid var(--ink)' }}>
        <div style={{ position: 'relative', width: '100%', height: 'min(78vh, 640px)', minHeight: '420px' }}>
          <img
            src="/images/lakeside.jpg"
            alt="Rajkishor Maharana, lakeside"
            className="photo-brut"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '65% 40%', display: 'block' }}
          />

          {/* Top corner tags */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between', padding: '1.25rem' }}>
            <span className="kicker on-dark" style={{ background: 'var(--ink)', padding: '6px 12px', border: '2px solid var(--paper)' }}>
              Cover Story
            </span>
            <span className="stamp" style={{ background: 'var(--yellow)', color: 'var(--ink)' }}>
              Available Now
            </span>
          </div>

          {/* Headline plate */}
          <div
            className="anim-fade-up"
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              padding: '1.75rem 1.5rem',
              background: 'var(--ink)',
              borderTop: '5px solid var(--yellow)',
            }}
          >
            <div style={{ maxWidth: '1152px', margin: '0 auto' }}>
              <h1 className="headline headline-black" style={{ fontSize: 'clamp(2.3rem, 6vw, 4.5rem)', lineHeight: 0.98, letterSpacing: '-0.02em', color: 'var(--paper)', marginBottom: '0.6rem' }}>
                Rajkishor Maharana
              </h1>
              <p className="serif headline-italic" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.4rem)', color: 'var(--paper-2)', maxWidth: '640px' }}>
                Turns Fortune 500 chaos into shippable software. Occasionally turns coffee into commits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE: INTRO + BY THE NUMBERS ── */}
      <section style={{ background: 'var(--paper)', padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <p className="kicker" style={{ marginBottom: '1.5rem' }}>The Profile</p>
          </ScrollReveal>

          <div className="mag-grid">
            {/* Intro copy */}
            <ScrollReveal>
              <div>
                <p className="dropcap" style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '1.1rem' }}>
                  Seven and a half years ago someone handed me a legacy SOAP monolith and a deadline.
                  I have not fully recovered — but the monolith has. It&apos;s microservices now, and everyone&apos;s
                  much happier, especially me. Since then I&apos;ve built Micro Frontend platforms for a Fortune 500
                  telecom giant, wired RAG pipelines into an enterprise Identity Governance platform, and shipped
                  serverless systems to five million people who will never know my name.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.75, color: 'var(--ink-70)', marginBottom: '2rem' }}>
                  I&apos;m currently a Software Engineer III at Deloitte — learning the architecture, absorbing the domain knowledge, and solving problems one system at a time. Before that,
                  Cognizant and Capgemini, where &quot;it works on my machine&quot; turned out not to be a
                  deployment strategy. React, Spring Boot, Kafka, AWS — I speak all of it fluently, occasionally
                  in my sleep.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <Link href="/work" className="btn-primary">Read the Case Files →</Link>
                  <Link href="/contact" className="btn-outline">Write In</Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Sidebar — by the numbers */}
            <ScrollReveal type="reveal-scale" delay="delay-200">
              <div className="brut-card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ background: 'var(--ink)', padding: '14px 20px' }}>
                  <p className="mono" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em', color: 'var(--yellow)', textTransform: 'uppercase' }}>
                    By the Numbers
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {stats.map((s, i) => (
                    <div
                      key={s.label}
                      style={{
                        padding: '1.25rem 20px',
                        borderTop: i === 0 ? 'none' : '2px solid var(--ink-15)',
                        borderLeft: `6px solid ${s.color}`,
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '14px',
                      }}
                    >
                      <span className="headline headline-black" style={{ fontSize: '1.8rem', color: 'var(--ink)', lineHeight: 1 }}>{s.value}</span>
                      <span style={{ fontSize: '12.5px', color: 'var(--ink-70)', lineHeight: 1.3 }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section style={{ background: 'var(--paper-2)', borderTop: '3px solid var(--ink)', borderBottom: '3px solid var(--ink)', padding: '3.5rem 0' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <OneLinerTicker />
          </ScrollReveal>
        </div>
      </section>

      {/* ── DEPARTMENTS (EXPERTISE) ── */}
      <section style={{ background: 'var(--paper)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
          <ScrollReveal>
            <div style={{ marginBottom: '3.5rem' }}>
              <p className="kicker" style={{ marginBottom: '10px' }}>The Departments</p>
              <h2 className="headline headline-black" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)', color: 'var(--ink)' }}>
                What I actually do all day
              </h2>
            </div>
          </ScrollReveal>

          <div className="pillars-grid">
            {departments.map((p, i) => (
              <ScrollReveal key={p.title} delay={`delay-${(i + 1) * 100}`}>
                <div style={{ background: 'var(--paper)', padding: '2.5rem', height: '100%', borderTop: `5px solid ${p.color}` }}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ width: '22px', height: '22px', background: p.color, border: '2px solid var(--ink)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontFamily: 'var(--font-mono), monospace', fontWeight: 700 }}>{p.num}</span>
                  </div>
                  <h3 className="headline" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '1rem' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--ink-70)', marginBottom: '1.5rem' }}>
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

      {/* ── SELF-DEPRECATION CORNER ── */}
      <section style={{ background: 'var(--paper-2)', borderTop: '3px solid var(--ink)', borderBottom: '3px solid var(--ink)', padding: '4.5rem 0' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <p className="kicker" style={{ marginBottom: '1.5rem' }}>Things I Probably Shouldn&apos;t Admit</p>
          </ScrollReveal>
          <ScrollReveal delay="delay-100">
            <SelfRoast />
          </ScrollReveal>
        </div>
      </section>

      {/* ── THE NOTEBOOK ── */}
      <section style={{ background: 'var(--paper)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <p className="kicker" style={{ marginBottom: '0.75rem' }}>The Notebook</p>
          </ScrollReveal>
          <ScrollReveal>
            <p className="serif headline-italic" style={{ fontSize: '15px', color: 'var(--ink-70)', marginBottom: '1.5rem' }}>
              Sarcasm off, just for this one — don&apos;t get used to it
            </p>
          </ScrollReveal>
          <ScrollReveal delay="delay-100">
            <QuoteTicker />
          </ScrollReveal>
        </div>
      </section>

      {/* ── CLASSIFIED CTA ── */}
      <section style={{ background: 'var(--ink)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <div className="brut-card" style={{ background: 'var(--paper)', padding: '2.5rem', borderStyle: 'dashed' }}>
              <div className="cta-band">
                <div>
                  <p className="mono" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '10px' }}>
                    Classified — Situations Wanted
                  </p>
                  <h2 className="headline headline-black" style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2.1rem)', color: 'var(--ink)', marginBottom: '10px' }}>
                    WANTED: Interesting problems.
                  </h2>
                  <p style={{ fontSize: '14px', color: 'var(--ink-70)', maxWidth: '480px', lineHeight: 1.6 }}>
                    Fortune 500 chaos welcome. Will trade solid architecture and mild sarcasm for coffee, creative freedom, and a decent Slack emoji budget.
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                  <Link href="/contact" className="btn-primary">Start a Conversation →</Link>
                  <Link href="/projects" className="btn-outline">See the Side Desk</Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
