import ScrollReveal from '@/components/ScrollReveal';

const projects = [
  {
    num: '01',
    color: 'var(--cap-blue)',
    name: 'Distributed Task Scheduler',
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Grafana'],
    description: 'Production-grade DAG-based job execution engine for distributed workflow orchestration. Supports configurable retry policies, exponential backoff, dead-letter queues, and horizontal pod scaling. Ships with Prometheus metrics and Grafana dashboards.',
    repo: 'https://github.com/mrajkishor/Distributed-Task-Scheduler',
    status: 'ACTIVE',
  },
  {
    num: '02',
    color: 'var(--del-green)',
    name: 'RDCLib — Cross-Platform Design System',
    stack: ['React', 'TypeScript', 'React Native', 'Storybook'],
    description: 'Shared UI component library spanning React Web and React Native from a single codebase. Polymorphic component architecture, design token system, and Storybook-driven documentation. Eliminates the platform divergence when mobile and web teams work in isolation.',
    repo: 'https://github.com/mrajkishor/rdclib',
    status: 'ACTIVE',
  },
  {
    num: '03',
    color: 'var(--cog-teal)',
    name: 'IMSM + ShopSync',
    stack: ['Next.js', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Android'],
    description: 'End-to-end inventory, invoicing, and logistics management platform for Indian MSMEs — full order lifecycle, GST-compliant invoice generation, and AI-assisted demand forecasting. Live with active business users.',
    repo: 'https://github.com/mrajkishor/IMS-Invoice-services',
    status: 'LIVE',
  },
  {
    num: '04',
    color: 'var(--cap-orange)',
    name: 'StackSynapse',
    stack: ['RAG', 'Vector Search', 'LLM APIs', 'Node.js'],
    description: 'Knowledge retrieval platform built on Retrieval-Augmented Generation. Ingests documents, constructs a semantic index via vector embeddings, and surfaces contextual answers through LLM completion. Designed for engineering teams querying institutional knowledge.',
    repo: 'https://github.com/mrajkishor/StackSynapse',
    status: 'ACTIVE',
  },
  {
    num: '05',
    color: 'var(--cap-blue)',
    name: 'Clarity',
    stack: ['React', 'TypeScript', 'Node.js'],
    description: 'Task and goal management application built around rolling-wave planning — a structured model that maintains near-term precision while preserving long-term flexibility. For professionals who think in roadmaps, not just to-do lists.',
    repo: 'https://github.com/mrajkishor/Clarity',
    status: 'IN PROGRESS',
  },
];

export default function Projects() {
  return (
    <div style={{ background: 'var(--bg-base)', paddingTop: '59px' }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="diag-stripe" style={{ width: '55%', top: '35%', right: '0', transform: 'rotate(-8deg)', opacity: 0.6 }} />
        <div className="diag-stripe" style={{ width: '25%', bottom: '30%', left: '30%', transform: 'rotate(12deg)', opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--del-green)' }} />

        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <p className="section-label anim-fade-up" style={{ animationDelay: '0.05s', marginBottom: '12px', color: 'var(--del-green)' }}>Side Projects</p>
          <h1 className="anim-fade-up" style={{ animationDelay: '0.15s', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-100)', marginBottom: '1rem' }}>
            Engineering,<br />not decoration.
          </h1>
          <div className="anim-line-grow" style={{ animationDelay: '0.25s', height: '3px', width: '56px', background: 'var(--del-green)', marginBottom: '1.25rem' }} />
          <p className="anim-fade-up" style={{ animationDelay: '0.3s', fontSize: '15px', color: 'var(--text-300)', maxWidth: '540px', lineHeight: 1.7 }}>
            Side projects built to solve real problems, explore distributed systems design, and ship software beyond the sprint board.
          </p>
        </div>
      </section>

      {/* ── PROJECT LIST ── */}
      <section style={{ background: 'var(--bg-base)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', background: 'var(--border)' }}>
            {projects.map((p, i) => (
              <ScrollReveal key={p.name} delay={`delay-${Math.min((i + 1) * 100, 400)}`}>
                <div
                  style={{
                    background: 'var(--bg-card)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0',
                    borderLeft: `3px solid ${p.color}`,
                    transition: 'background 0.15s',
                  }}
                  className="grid-cols-1 lg:grid-cols-2"
                >
                  {/* Left col */}
                  <div style={{ padding: '2.25rem', borderRight: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
                      <span style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: p.color }}>{p.num}</span>
                      <div style={{ flex: 1, height: '1px', background: p.color, opacity: 0.25 }} />
                      <span style={{
                        fontFamily: 'Courier New, monospace',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        padding: '3px 8px',
                        background: p.status === 'LIVE'
                          ? 'rgba(134,188,37,0.12)' : `${p.color}12`,
                        border: `1px solid ${p.status === 'LIVE' ? 'rgba(134,188,37,0.30)' : `${p.color}28`}`,
                        color: p.status === 'LIVE' ? 'var(--del-green)' : p.color,
                      }}>
                        {p.status}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-100)', marginBottom: '10px', letterSpacing: '-0.01em' }}>{p.name}</h3>
                    <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--text-300)' }}>{p.description}</p>
                  </div>

                  {/* Right col */}
                  <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <p style={{ fontFamily: 'Courier New, monospace', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-400)', marginBottom: '10px' }}>
                        Stack
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                        {p.stack.map((tech) => (
                          <span key={tech} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ alignSelf: 'flex-start', fontSize: '11px', padding: '8px 16px' }}
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GITHUB CTA ── */}
      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="diag-stripe" style={{ width: '80%', top: '45%', left: '-5%', transform: 'rotate(-3deg)', opacity: 0.5 }} />
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
              <div>
                <p className="section-label" style={{ marginBottom: '6px', color: 'var(--del-green)' }}>All Open Source</p>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-100)' }}>More on GitHub</h2>
              </div>
              <a href="https://github.com/mrajkishor" target="_blank" rel="noopener noreferrer" className="btn-primary">
                github.com/mrajkishor →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
