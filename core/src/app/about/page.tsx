import ScrollReveal from '@/components/ScrollReveal';

const aboutPoints = [
  { tag: 'Scale',        color: 'var(--cap-blue)',  text: 'Delivered enterprise-grade systems for Fortune 500 clients across Healthcare (150K+ employees), Telecom (25K support reps), EdTech (5M+ educators), BFSI, Retail, and Aviation.' },
  { tag: 'Architecture', color: 'var(--cog-teal)',  text: 'Designed Micro Frontend architecture with Module Federation 2 and Nx monorepo across 8–10 independent domain teams — reducing cross-team integration time by ~40% and enabling fully autonomous deployments.' },
  { tag: 'Backend',      color: 'var(--cap-orange)', text: 'Led migration of SOAP/SOA monoliths to event-driven DDD microservices — Kafka, Resilience4j circuit breakers, Redis caching — resulting in a ~30% improvement in API response times.' },
  { tag: 'AI/ML',        color: 'var(--del-green)',  text: 'Integrated RAG pipelines, Qdrant vector DB, and Model Context Protocol (MCP) for Agentic AI into an enterprise Identity Governance platform — semantic role search and automated access certification.' },
  { tag: 'Ownership',    color: 'var(--cog-teal)',   text: 'Full product lifecycle ownership from requirements and system design through implementation, deployment, and observability — leading architecture discussions and reviewing pull requests in the same afternoon.' },
  { tag: 'Builder',      color: 'var(--del-green)',  text: 'Independently building software products — a distributed task scheduler, a cross-platform design system, and an MSME invoicing platform with active users.' },
];

const skills: Record<string, { color: string; items: string[] }> = {
  'Languages':    { color: 'var(--cap-blue)',   items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL'] },
  'Frontend':     { color: 'var(--del-green)',  items: ['React', 'Next.js', 'React Native', 'Module Federation 2', 'Nx', 'Storybook'] },
  'Backend':      { color: 'var(--cog-teal)',   items: ['Spring Boot', 'Node.js', 'Express', 'GraphQL', 'gRPC', 'Kafka', 'Redis'] },
  'Cloud & Infra':{ color: 'var(--cap-orange)', items: ['AWS Lambda', 'DynamoDB', 'AppSync', 'Terraform', 'Docker', 'Kubernetes'] },
  'AI & Data':    { color: 'var(--del-green)',  items: ['RAG', 'Qdrant', 'Vector Embeddings', 'MCP', 'Elasticsearch', 'Solr'] },
  'Databases':    { color: 'var(--cap-blue)',   items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis', 'MySQL'] },
};

const exploring = [
  { icon: '⚙️', label: 'Distributed Job Orchestration', sub: 'DAG execution, retry policies, leader election, dead-letter queues', color: 'var(--cap-blue)' },
  { icon: '🎨', label: 'Design System Architecture',    sub: 'SCARD model — Scalable, Consistent, Available, Reliable, Durable',  color: 'var(--del-green)' },
  { icon: '📦', label: 'MSME Platform Engineering',      sub: 'Inventory, invoicing, and supply-chain tooling for small businesses', color: 'var(--cog-teal)' },
  { icon: '🧠', label: 'AI Knowledge Retrieval',         sub: 'RAG pipelines, semantic chunking, multi-modal retrieval',            color: 'var(--cap-orange)' },
];

export default function About() {
  return (
    <div style={{ background: 'var(--bg-base)', paddingTop: '59px' }}>

      {/* ── PAGE HEADER ── */}
      <section
        style={{
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border)',
          padding: '5rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Angled decorative lines */}
        <div className="diag-stripe" style={{ width: '50%', top: '40%', right: '0', transform: 'rotate(-9deg)', opacity: 0.6 }} />
        <div className="diag-stripe" style={{ width: '25%', bottom: '20%', left: '40%', transform: 'rotate(15deg)', opacity: 0.4 }} />
        {/* Left accent block */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--del-green)' }} />

        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <div className="about-header-grid">
            <div>
              <p className="section-label anim-fade-up" style={{ animationDelay: '0.05s', marginBottom: '14px' }}>About</p>
              <h1
                className="anim-fade-up"
                style={{
                  animationDelay: '0.15s',
                  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-100)',
                  marginBottom: '1.25rem',
                }}
              >
                Engineer by craft.<br />
                <span style={{ color: 'var(--cap-blue)' }}>Builder</span> by instinct.
              </h1>
              <div className="anim-line-grow" style={{ animationDelay: '0.25s', height: '3px', width: '56px', background: 'var(--cap-blue)', marginBottom: '1.5rem' }} />
              <p className="anim-fade-up" style={{ animationDelay: '0.3s', fontSize: '15px', lineHeight: 1.7, color: 'var(--text-300)', marginBottom: '1rem' }}>
                I write software that ships — not code that sits in design reviews.
                7.5+ years of enterprise delivery across Healthcare, Telecom, BFSI, EdTech, and Aviation have taught me to think in systems, move fast in uncertainty, and build things that outlast the sprint.
              </p>
              <p className="anim-fade-up" style={{ animationDelay: '0.4s', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-400)' }}>
                Based in Hyderabad, India. Currently at Deloitte. Open to meaningful conversations about distributed systems, platform architecture, and products worth building.
              </p>
            </div>

            {/* Profile photo */}
            <div className="anim-fade-in" style={{ animationDelay: '0.3s', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 12, left: 12, width: '240px', height: '340px', background: 'var(--cog-navy)', opacity: 0.5 }} />
                <div style={{ position: 'absolute', top: 6, left: 6, width: '240px', height: '340px', border: '1px solid var(--cog-teal)', opacity: 0.4 }} />
                <div style={{ position: 'relative', width: '240px', height: '340px', overflow: 'hidden', border: '1px solid var(--border-m)', borderTop: '3px solid var(--cog-teal)' }}>
                  <img
                    src="/images/profile_about.jpeg"
                    alt="Rajkishor Maharana"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 15%', display: 'block' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BACKGROUND POINTS ── */}
      <section style={{ background: 'var(--bg-base)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="section-label" style={{ marginBottom: '8px', color: 'var(--cap-blue)' }}>Background</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-100)', letterSpacing: '-0.02em' }}>The long version</h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', background: 'var(--border)' }}>
            {aboutPoints.map((p, i) => (
              <ScrollReveal key={i} delay={`delay-${Math.min((i + 1) * 100, 500)}`}>
                <div
                  style={{
                    background: 'var(--bg-card)',
                    padding: '1.5rem 1.75rem',
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'flex-start',
                    borderLeft: `3px solid ${p.color}`,
                    transition: 'background 0.15s',
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      fontFamily: 'Courier New, monospace',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: p.color,
                      background: `${p.color}14`,
                      border: `1px solid ${p.color}30`,
                      padding: '4px 10px',
                      whiteSpace: 'nowrap',
                      marginTop: '2px',
                    }}
                  >
                    {p.tag}
                  </span>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-300)' }}>{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="diag-stripe" style={{ width: '60%', top: '20%', right: '-5%', transform: 'rotate(-6deg)', opacity: 0.6 }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '3px', height: '100%', background: 'var(--cap-blue)' }} />

        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="section-label" style={{ marginBottom: '8px', color: 'var(--cog-teal)' }}>Toolbox</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-100)', letterSpacing: '-0.02em' }}>Technologies I work with</h2>
            </div>
          </ScrollReveal>

          <div className="skills-grid">
            {Object.entries(skills).map(([cat, { color, items }], i) => (
              <ScrollReveal key={cat} type="reveal-scale" delay={`delay-${Math.min((i + 1) * 100, 500)}`}>
                <div style={{ background: 'var(--bg-card)', padding: '1.75rem', borderTop: `2px solid ${color}`, height: '100%' }}>
                  <p style={{ fontFamily: 'Courier New, monospace', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color, marginBottom: '14px' }}>
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
      <section style={{ background: 'var(--bg-base)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <ScrollReveal>
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="section-label" style={{ marginBottom: '8px', color: 'var(--del-green)' }}>Currently Exploring</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-100)', letterSpacing: '-0.02em' }}>What I&apos;m learning now</h2>
            </div>
          </ScrollReveal>
          <div className="exploring-grid">
            {exploring.map((e, i) => (
              <ScrollReveal key={e.label} delay={`delay-${(i + 1) * 100}`}>
                <div style={{ background: 'var(--bg-card)', padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', transition: 'background 0.15s', borderLeft: `3px solid ${e.color}` }}>
                  <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{e.icon}</div>
                  <div>
                    <p style={{ fontWeight: 700, color: 'var(--text-100)', marginBottom: '6px', fontSize: '14px' }}>{e.label}</p>
                    <p style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', color: 'var(--text-400)', lineHeight: 1.5 }}>{e.sub}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
