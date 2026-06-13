import ScrollReveal from '@/components/ScrollReveal';

const highlights = [
  {
    num: '01',
    color: 'var(--cap-blue)',
    title: 'Micro Frontend Architecture',
    metric: '~40% less integration overhead',
    client: 'Fortune 500 · Telecom',
    description: 'Designed and delivered MFE platform with Module Federation 2 and Nx monorepo for a Fortune 500 Telecom Retail client — 8–10 independent domain teams, standardised boilerplate generation, shared component contracts, pre-commit analytics hooks, and isolated CI/CD pipelines.',
    tags: ['React', 'Module Federation 2', 'Nx', 'Webpack', 'CI/CD'],
  },
  {
    num: '02',
    color: 'var(--del-green)',
    title: 'Event-Driven Microservices',
    metric: '~30% API latency improvement',
    client: 'Fortune 500 · Telecom · 25K reps',
    description: 'Domain-driven Spring Boot microservices with Kafka event pipelines, Resilience4j circuit breakers, gRPC inter-service communication, BFF aggregation layer, and Spring Security. Powers customer support operations across 25,000 representatives.',
    tags: ['Spring Boot', 'Kafka', 'Redis', 'Resilience4j', 'gRPC'],
  },
  {
    num: '03',
    color: 'var(--cog-teal)',
    title: 'GenAI & RAG in Production',
    metric: 'Semantic access governance at scale',
    client: 'Fortune 500 · Healthcare · 150K+ employees',
    description: 'RAG pipeline integration with Qdrant vector DB, embedding models, and Model Context Protocol (MCP) for Agentic AI inside an enterprise Identity Governance platform — semantic role search, automated access certification, and AI-assisted approval workflows.',
    tags: ['RAG', 'Qdrant', 'MCP', 'Vector DB', 'Agentic AI'],
  },
  {
    num: '04',
    color: 'var(--cap-orange)',
    title: 'Serverless at Global Scale',
    metric: '0% → 80%+ test coverage',
    client: 'Fortune 500 · EdTech · 5M+ users',
    description: 'Serverless SSO platform — AWS Lambda, API Gateway, DynamoDB, AppSync GraphQL subscriptions, and Amazon Comprehend for content classification. Infrastructure-as-Code with Terraform, CI/CD via Amplify.',
    tags: ['AWS Lambda', 'DynamoDB', 'AppSync', 'Terraform', 'GraphQL'],
  },
];

const workExperience = [
  {
    company: 'Deloitte',
    logo: '/images/logos/deloitte.png',
    role: 'Software Engineer 3',
    period: 'May 2026 – Present',
    current: true,
    color: '#86BC25',
    clients: ['Consulting'],
    tech: ['React', '.NET', 'Azure', 'SQL Server'],
    points: [
      'Joined Deloitte as Software Engineer 3 in May 2026.',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    logo: '/images/logos/cognizant.png',
    role: 'Associate – Projects · Full Stack Developer',
    period: 'Jul 2022 – May 2026',
    current: false,
    color: '#1589C8',
    clients: ['Healthcare', 'Telecom', 'BFSI', 'EdTech'],
    tech: [],
    points: [
      'Enterprise IGA platform serving 150K+ employees — RAG pipelines, Qdrant vector DB, MCP, Agentic AI workflows for automated access governance',
      'Module Federation 2 MFE platform across 8–10 domain teams — ~40% reduction in integration overhead, independent CI/CD',
      'SOAP/SOA to event-driven DDD microservices — Kafka, Resilience4j, Redis; ~30% API latency improvement, 25K concurrent reps',
      'Serverless SSO on AWS Lambda + DynamoDB for 5M+ global users — Terraform IaC, AppSync subscriptions, Amazon Comprehend',
      'Redis caching in billing microservices for Fortune 500 BFSI client — 60% reduction in database query volume',
    ],
  },
  {
    company: 'Capgemini Technology Services',
    logo: '/images/logos/capgemini.png',
    role: 'Associate Consultant · Full Stack Developer',
    period: 'Jun 2018 – Jul 2022',
    current: false,
    color: '#0070AD',
    clients: ['Aviation', 'Airports', 'Manufacturing', 'Life Sciences'],
    tech: [],
    points: [
      'Full-stack analytics portal for ~10K stakeholders at Fortune 500 Aviation client — React, Spring Boot, PostgreSQL, React Native mobile companion',
      'B2B intelligent search product across 5–6 enterprise ITSM clients — Node.js, Apache Solr, Chrome Extension for power-user capture',
      'Prototyped MAIA conversational AI with BERT/SQUAD 2.0 + Elasticsearch NLP — adopted as internal knowledge assistant',
      'Maturity assessment portal for Fortune 500 Airports client — Highcharts dashboards, jsPDF reports, authored BRD and ARD documentation',
    ],
  },
];

export default function Work() {
  return (
    <div style={{ background: 'var(--bg-base)', paddingTop: '59px' }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="diag-stripe" style={{ width: '45%', top: '50%', right: '5%', transform: 'rotate(-10deg)', opacity: 0.6 }} />
        <div className="diag-stripe" style={{ width: '30%', bottom: '25%', left: '20%', transform: 'rotate(7deg)', opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--cap-blue)' }} />

        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <p className="section-label anim-fade-up" style={{ animationDelay: '0.05s', marginBottom: '12px', color: 'var(--cap-blue)' }}>Enterprise Delivery</p>
          <h1 className="anim-fade-up" style={{ animationDelay: '0.15s', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-100)', marginBottom: '1rem' }}>
            Highlighted Work
          </h1>
          <div className="anim-line-grow" style={{ animationDelay: '0.25s', height: '3px', width: '56px', background: 'var(--cap-blue)', marginBottom: '1.25rem' }} />
          <p className="anim-fade-up" style={{ animationDelay: '0.3s', fontSize: '15px', color: 'var(--text-300)', maxWidth: '540px', lineHeight: 1.7 }}>
            Selected projects and engagements from 7.5+ years of enterprise delivery across Fortune 500 clients.
          </p>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section style={{ background: 'var(--bg-base)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="highlights-grid">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={`delay-${(i % 2 + 1) * 100}`}>
                <div
                  className="work-card"
                  style={{ background: 'var(--bg-card)', padding: '2.25rem', height: '100%', borderTop: `3px solid ${item.color}` }}
                >
                  {/* Num + client */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <span style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: item.color }}>
                      {item.num}
                    </span>
                    <span style={{
                      fontFamily: 'Courier New, monospace',
                      fontSize: '10px',
                      padding: '3px 8px',
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}28`,
                      color: item.color,
                      letterSpacing: '0.08em',
                    }}>
                      {item.client}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-100)', marginBottom: '8px', letterSpacing: '-0.01em' }}>{item.title}</h3>

                  {/* Metric */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                    <div style={{ width: '16px', height: '2px', background: item.color }} />
                    <span style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', color: item.color, fontWeight: 700 }}>
                      {item.metric}
                    </span>
                  </div>

                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-300)', marginBottom: '1.5rem' }}>{item.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.tags.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE TIMELINE ── */}
      <section style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="diag-stripe" style={{ width: '55%', top: '10%', right: '0', transform: 'rotate(-5deg)', opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: '4px', height: '100%', background: 'var(--del-green)' }} />

        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="section-label" style={{ marginBottom: '8px', color: 'var(--del-green)' }}>Career</p>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-100)', letterSpacing: '-0.02em' }}>Work Experience</h2>
            </div>
          </ScrollReveal>

          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {workExperience.map((job, i) => (
                <ScrollReveal key={job.company} type="reveal-left" delay={`delay-${(i + 1) * 100}`}>
                  <div style={{ marginBottom: '2px' }}>
                    {/* Timeline dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        width: '15px',
                        height: '15px',
                        background: job.current ? job.color : 'var(--bg-card)',
                        border: `2px solid ${job.color}`,
                        marginTop: '20px',
                        zIndex: 2,
                      }}
                    />

                    <div
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                        borderLeft: `3px solid ${job.color}`,
                        padding: '1.75rem',
                      }}
                    >
                      {/* Header */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                            {job.logo && (
                              <img src={job.logo} alt={job.company} style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                            )}
                            <h3 style={{ fontWeight: 800, fontSize: '15px', color: 'var(--text-100)' }}>{job.company}</h3>
                            {job.current && (
                              <span style={{
                                fontFamily: 'Courier New, monospace',
                                fontSize: '9px',
                                fontWeight: 700,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: 'var(--del-green)',
                                background: 'rgba(134,188,37,0.10)',
                                border: '1px solid rgba(134,188,37,0.25)',
                                padding: '2px 8px',
                              }}>
                                CURRENT
                              </span>
                            )}
                          </div>
                          <p style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', color: job.color, letterSpacing: '0.06em' }}>{job.role}</p>
                        </div>
                        <p style={{ fontFamily: 'Courier New, monospace', fontSize: '11px', color: 'var(--text-400)', letterSpacing: '0.06em', flexShrink: 0 }}>{job.period}</p>
                      </div>

                      {/* Client badges */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                        {job.clients.map((c) => (
                          <span key={c} style={{
                            fontFamily: 'Courier New, monospace',
                            fontSize: '10px',
                            padding: '3px 8px',
                            background: `${job.color}10`,
                            border: `1px solid ${job.color}22`,
                            color: job.color,
                            letterSpacing: '0.08em',
                          }}>{c}</span>
                        ))}
                      </div>

                      {/* Points */}
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {job.points.map((h, hi) => (
                          <li key={hi} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <span style={{ color: job.color, flexShrink: 0, fontSize: '12px', marginTop: '2px', fontWeight: 700 }}>→</span>
                            <span style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--text-300)' }}>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech badges */}
                      {job.tech.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '1rem' }}>
                          {job.tech.map((t) => (
                            <span key={t} className="tech-badge">{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
