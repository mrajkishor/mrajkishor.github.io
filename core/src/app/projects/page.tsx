import ScrollReveal from '@/components/ScrollReveal';

const projects = [
  {
    num: '01',
    color: 'var(--yellow)',
    name: 'Distributed Task Scheduler',
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Grafana'],
    description: 'A DAG-based job execution engine, built to see what happens when you give retry policies exponential backoff and genuine emotional range. Dead-letter queues, horizontal pod scaling, and Grafana dashboards I check more often than my bank balance.',
    repo: 'https://github.com/mrajkishor/Distributed-Task-Scheduler',
    status: 'ACTIVE',
  },
  {
    num: '02',
    color: 'var(--red)',
    name: 'RDCLib — Cross-Platform Design System',
    stack: ['React', 'TypeScript', 'React Native', 'Storybook'],
    description: "One component library, two platforms, zero patience for maintaining the same button twice. Polymorphic architecture, a design token system, and Storybook docs nobody reads but everybody's grateful exist.",
    repo: 'https://github.com/mrajkishor/rdclib',
    status: 'ACTIVE',
  },
  {
    num: '03',
    color: 'var(--blue)',
    name: 'IMSM + ShopSync',
    stack: ['Next.js', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Android'],
    description: 'Inventory, invoicing, and logistics for Indian MSMEs who were previously running their business on a notebook and vibes. GST-compliant, AI-assisted demand forecasting, and actual paying users who did not ask for a lecture on clean architecture.',
    repo: 'https://github.com/mrajkishor/IMS-Invoice-services',
    status: 'LIVE',
  },
  {
    num: '04',
    color: 'var(--yellow)',
    name: 'StackSynapse',
    stack: ['RAG', 'Vector Search', 'LLM APIs', 'Node.js'],
    description: "A RAG-powered knowledge retrieval platform for engineering teams who'd rather ask a chatbot than open Confluence. Semantic indexing, vector embeddings, and LLM completions that are right more often than a coin flip.",
    repo: 'https://github.com/mrajkishor/StackSynapse',
    status: 'ACTIVE',
  },
  {
    num: '05',
    color: 'var(--red)',
    name: 'Clarity',
    stack: ['React', 'TypeScript', 'Node.js'],
    description: 'A task and goal manager built on rolling-wave planning, for people who think in roadmaps instead of sticky notes. Still in progress, much like my sleep schedule.',
    repo: 'https://github.com/mrajkishor/Clarity',
    status: 'IN PROGRESS',
  },
];

export default function Projects() {
  return (
    <div style={{ background: 'var(--paper)', paddingTop: '104px' }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ background: 'var(--paper-2)', borderBottom: '3px solid var(--ink)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <p className="kicker anim-fade-up" style={{ animationDelay: '0.05s', marginBottom: '12px' }}>The Side Desk — Nights &amp; Weekends</p>
          <h1 className="headline headline-black anim-fade-up" style={{ animationDelay: '0.15s', fontSize: 'clamp(2rem, 4vw, 3.4rem)', color: 'var(--ink)', marginBottom: '1rem' }}>
            I get bored easily.<br />This is the evidence.
          </h1>
          <p className="anim-fade-up" style={{ animationDelay: '0.3s', fontSize: '15px', color: 'var(--ink-70)', maxWidth: '560px', lineHeight: 1.7 }}>
            Side projects built to solve real problems, poke at distributed systems design, and ship software
            beyond the sprint board — mostly after hours, entirely on purpose.
          </p>
        </div>
      </section>

      {/* ── PROJECT CATALOG ── */}
      <section style={{ background: 'var(--paper)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', background: 'var(--ink)', border: '3px solid var(--ink)' }}>
            {projects.map((p, i) => (
              <ScrollReveal key={p.name} delay={`delay-${Math.min((i + 1) * 100, 400)}`}>
                <div
                  style={{
                    background: 'var(--paper)',
                    display: 'grid',
                    gap: '0',
                    borderLeft: `6px solid ${p.color}`,
                  }}
                  className="grid-cols-1 lg:grid-cols-2"
                >
                  {/* Left col */}
                  <div style={{ padding: '2.25rem', borderRight: '3px solid var(--ink)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '1rem' }}>
                      <span className="mono" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--ink)' }}>LOT Nº{p.num}</span>
                      <div style={{ flex: 1, height: '2px', background: 'var(--ink-15)' }} />
                      <span className="mono" style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        padding: '3px 8px',
                        background: p.status === 'LIVE' ? 'var(--yellow)' : p.color,
                        border: '2px solid var(--ink)',
                        color: 'var(--ink)',
                      }}>
                        {p.status}
                      </span>
                    </div>
                    <h3 className="headline" style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px' }}>{p.name}</h3>
                    <p style={{ fontSize: '13px', lineHeight: 1.7, color: 'var(--ink-70)' }}>{p.description}</p>
                  </div>

                  {/* Right col */}
                  <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <p className="mono" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-40)', marginBottom: '10px' }}>
                        Materials Used
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
                      style={{ alignSelf: 'flex-start', fontSize: '11px', padding: '9px 16px' }}
                    >
                      Inspect on GitHub →
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GITHUB CTA ── */}
      <section style={{ background: 'var(--paper-2)', borderTop: '3px solid var(--ink)', padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
              <div>
                <p className="kicker" style={{ marginBottom: '6px' }}>All Open Source, No Charge</p>
                <h2 className="headline headline-black" style={{ fontSize: '1.6rem', color: 'var(--ink)' }}>More on GitHub</h2>
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
