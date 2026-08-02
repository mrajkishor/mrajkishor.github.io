import ScrollReveal from '@/components/ScrollReveal';

const aboutPoints = [
  { tag: 'Scale',        color: 'var(--yellow)', text: "I've shipped systems for Fortune 500 clients across Healthcare (150K+ employees), Telecom (25K support reps), EdTech (5M+ educators), BFSI, Retail, and Aviation — basically, if it's regulated, I've probably broken it in staging first." },
  { tag: 'Architecture', color: 'var(--blue)',   text: 'Designed a Micro Frontend architecture with Module Federation 2 and Nx across 8–10 independent teams. Integration time dropped ~40%, and so did the number of Slack threads titled "urgent — please help."' },
  { tag: 'Backend',      color: 'var(--red)',    text: 'Led the migration from SOAP/SOA monoliths to event-driven DDD microservices — Kafka, Resilience4j, Redis. API response times improved ~30%. The monolith did not go quietly.' },
  { tag: 'AI/ML',        color: 'var(--yellow)', text: 'Wired RAG pipelines, Qdrant, and MCP into an enterprise Identity Governance platform, so the AI can now find things faster than the humans who built it.' },
  { tag: 'Ownership',    color: 'var(--blue)',   text: "I own things end-to-end — requirements, design, code, deploys, the 2am pager. I've reviewed a pull request and questioned my life choices in the same afternoon." },
  { tag: 'Builder',      color: 'var(--red)',    text: "When nobody's paying me to build things, I build things anyway — a task scheduler, a design system, an invoicing platform for small businesses. Send help, or don't. I'm having fun." },
];

const skills: Record<string, { color: string; items: string[] }> = {
  'Languages':     { color: 'var(--yellow)', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'] },
  'Frontend':      { color: 'var(--red)',    items: ['React', 'Next.js', 'React Native', 'Module Federation 2', 'Nx', 'Storybook'] },
  'Backend':       { color: 'var(--blue)',   items: ['Spring Boot', 'Node.js', 'Express', 'GraphQL', 'gRPC', 'Kafka', 'Redis'] },
  'Cloud & Infra': { color: 'var(--yellow)', items: ['AWS Lambda', 'DynamoDB', 'AppSync', 'Terraform', 'Docker', 'Kubernetes'] },
  'AI & Data':     { color: 'var(--red)',    items: ['RAG', 'Qdrant', 'Vector Embeddings', 'MCP', 'Elasticsearch', 'Solr'] },
  'Databases':     { color: 'var(--blue)',   items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'MySQL'] },
};

const exploring = [
  { icon: '⚙️', label: 'Distributed Job Orchestration', sub: "Building a DAG execution engine, mostly to see if I can make retries more dramatic than they need to be.", color: 'var(--yellow)' },
  { icon: '🎨', label: 'Design System Architecture',    sub: 'The SCARD model. Yes, I made up the acronym. No, I will not apologize.',  color: 'var(--red)' },
  { icon: '📦', label: 'MSME Platform Engineering',      sub: 'Inventory and invoicing tools for small Indian businesses who deserve better than a spreadsheet held together by hope.', color: 'var(--blue)' },
  { icon: '🧠', label: 'AI Knowledge Retrieval',         sub: "Teaching machines to find things in documents so I don't have to Ctrl+F my own life.", color: 'var(--yellow)' },
];

export default function About() {
  return (
    <div style={{ background: 'var(--paper)', paddingTop: '104px' }}>

      {/* ── PAGE HEADER — FEATURE PROFILE ── */}
      <section
        style={{
          background: 'var(--paper-2)',
          borderBottom: '3px solid var(--ink)',
          padding: '4.5rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <div className="about-header-grid">
            <div>
              <p className="kicker anim-fade-up" style={{ animationDelay: '0.05s', marginBottom: '14px' }}>Staff Profile</p>
              <h1
                className="headline headline-black anim-fade-up"
                style={{
                  animationDelay: '0.15s',
                  fontSize: 'clamp(2.1rem, 4vw, 3.4rem)',
                  lineHeight: 1.05,
                  color: 'var(--ink)',
                  marginBottom: '1.1rem',
                }}
              >
                Breaks things.<br />
                Fixes <span style={{ background: 'var(--blue)', color: '#fff', boxShadow: 'inset 0 -3px 0 var(--ink)', padding: '0 4px' }}>most</span> of them.
              </h1>
              <p className="byline-text anim-fade-up" style={{ animationDelay: '0.2s', marginBottom: '1.25rem' }}>
                By Rajkishor Maharana. Fact-checked by absolutely no one.
              </p>
              <p className="dropcap anim-fade-up" style={{ animationDelay: '0.3s', fontSize: '15px', lineHeight: 1.75, color: 'var(--ink-70)', marginBottom: '1rem' }}>
                I write software that ships — most of it on purpose. 7.5+ years of enterprise delivery across
                Healthcare, Telecom, BFSI, EdTech, and Aviation have taught me to think in systems, Google the
                error message before assuming it&apos;s a compiler bug, and build things that outlast the sprint
                they were born in. Mostly.
              </p>
              <p className="anim-fade-up" style={{ animationDelay: '0.4s', fontSize: '14px', lineHeight: 1.7, color: 'var(--ink-40)' }}>
                Based in Hyderabad, India. Currently at Deloitte, still figuring out where the good filter
                coffee is. Open to conversations about
                distributed systems, platform architecture, and products worth losing sleep over.
              </p>
            </div>

            {/* Portrait */}
            <div className="anim-fade-in" style={{ animationDelay: '0.3s', display: 'flex', justifyContent: 'center' }}>
              <div>
                <div className="tilt-right" style={{ position: 'relative', width: '260px' }}>
                  <div style={{ position: 'absolute', top: 14, left: 14, width: '260px', height: '330px', background: 'var(--red)', border: '3px solid var(--ink)' }} />
                  <div style={{ position: 'relative', width: '260px', height: '330px', overflow: 'hidden', border: '3px solid var(--ink)' }}>
                    <img
                      src="/images/headshot.jpg"
                      alt="Rajkishor Maharana"
                      className="photo-brut"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 15%', display: 'block' }}
                    />
                  </div>
                </div>
                <p className="photo-caption" style={{ maxWidth: '260px' }}>
                  FIG. 1 — Staff photo. Taken before anyone mentioned the deadline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BACKGROUND POINTS ── */}
      <section style={{ background: 'var(--paper)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="kicker" style={{ marginBottom: '8px' }}>The Backstory</p>
              <h2 className="headline headline-black" style={{ fontSize: '2rem', color: 'var(--ink)' }}>The long version</h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', background: 'var(--ink)', border: '3px solid var(--ink)' }}>
            {aboutPoints.map((p, i) => (
              <ScrollReveal key={i} delay={`delay-${Math.min((i + 1) * 100, 500)}`}>
                <div
                  style={{
                    background: 'var(--paper)',
                    padding: '1.5rem 1.75rem',
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'flex-start',
                    borderLeft: `6px solid ${p.color}`,
                  }}
                >
                  <span
                    className="mono"
                    style={{
                      flexShrink: 0,
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--ink)',
                      background: p.color,
                      border: '2px solid var(--ink)',
                      padding: '4px 10px',
                      whiteSpace: 'nowrap',
                      marginTop: '2px',
                    }}
                  >
                    {p.tag}
                  </span>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--ink-70)' }}>{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{ background: 'var(--paper-2)', borderTop: '3px solid var(--ink)', borderBottom: '3px solid var(--ink)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="kicker" style={{ marginBottom: '8px' }}>The Toolkit</p>
              <h2 className="headline headline-black" style={{ fontSize: '2rem', color: 'var(--ink)' }}>
                Things I touch without reading the docs first
              </h2>
            </div>
          </ScrollReveal>

          <div className="skills-grid">
            {Object.entries(skills).map(([cat, { color, items }], i) => (
              <ScrollReveal key={cat} type="reveal-scale" delay={`delay-${Math.min((i + 1) * 100, 500)}`}>
                <div style={{ background: 'var(--paper)', padding: '1.75rem', borderTop: `5px solid ${color}`, height: '100%' }}>
                  <p className="mono" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: '14px' }}>
                    {cat}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {items.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CURRENTLY EXPLORING ── */}
      <section style={{ background: 'var(--paper)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="kicker" style={{ marginBottom: '8px' }}>Open Tabs Right Now</p>
              <h2 className="headline headline-black" style={{ fontSize: '2rem', color: 'var(--ink)' }}>What I&apos;m tinkering with</h2>
            </div>
          </ScrollReveal>
          <div className="exploring-grid">
            {exploring.map((e, i) => (
              <ScrollReveal key={e.label} delay={`delay-${(i + 1) * 100}`}>
                <div style={{ background: 'var(--paper)', padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', borderLeft: `6px solid ${e.color}` }}>
                  <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{e.icon}</div>
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '6px', fontSize: '14px' }}>{e.label}</p>
                    <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-40)', lineHeight: 1.5 }}>{e.sub}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THE AUTHOR STAMP ── */}
      <section style={{ background: 'var(--ink)', padding: '2.5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <img
            src="/images/byline.jpg"
            alt="Rajkishor Maharana"
            className="photo-brut"
            style={{ width: '40px', height: '40px', objectFit: 'cover', border: '2px solid var(--paper)', flexShrink: 0 }}
          />
          <p className="mono" style={{ fontSize: '11px', letterSpacing: '0.08em', color: 'var(--paper-2)' }}>
            ABOUT THE AUTHOR — Engineer, occasional builder of things nobody asked for, full-time skeptic of &quot;quick fixes.&quot;
          </p>
        </div>
      </section>
    </div>
  );
}
