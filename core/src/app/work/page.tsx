import ScrollReveal from '@/components/ScrollReveal';

const highlights = [
  {
    num: '01',
    color: 'var(--yellow)',
    title: 'The Great Team Untangling',
    metric: '~40% less integration overhead',
    client: 'Fortune 500 · Telecom',
    description: 'Eight to ten domain teams were stepping on each other\'s code like a badly choreographed dance number. A Micro Frontend platform with Module Federation 2 and an Nx monorepo fixed the choreography — standardised boilerplate, shared component contracts, isolated CI/CD. Group chats got quieter.',
    tags: ['React', 'Module Federation 2', 'Nx', 'Webpack', 'CI/CD'],
  },
  {
    num: '02',
    color: 'var(--red)',
    title: 'Breaking Up the Monolith, Amicably',
    metric: '~30% API latency improvement',
    client: 'Fortune 500 · Telecom · 25K reps',
    description: 'A SOAP/SOA monolith that had opinions about everything got replaced with Kafka-driven, domain-driven microservices — Resilience4j circuit breakers, gRPC, a BFF layer, Spring Security. 25,000 support reps didn\'t notice a thing, which was the entire point.',
    tags: ['Spring Boot', 'Kafka', 'Redis', 'Resilience4j', 'gRPC'],
  },
  {
    num: '03',
    color: 'var(--blue)',
    title: 'Teaching an Identity Platform to Read',
    metric: 'Semantic access governance at scale',
    client: 'Fortune 500 · Healthcare · 150K+ employees',
    description: 'RAG pipelines, a Qdrant vector DB, and Model Context Protocol taught an enterprise Identity Governance platform to search semantically instead of just literally. Access certification got faster, compliance got happier, and I got marginally more sleep.',
    tags: ['RAG', 'Qdrant', 'MCP', 'Vector DB', 'Agentic AI'],
  },
  {
    num: '04',
    color: 'var(--yellow)',
    title: 'Zero to Eighty, No Apologies',
    metric: '0% → 80%+ test coverage',
    client: 'Fortune 500 · EdTech · 5M+ users',
    description: 'A serverless SSO platform on AWS Lambda, DynamoDB, and AppSync for 5M+ global users, wrapped in enough Terraform to make an auditor weep with joy. Test coverage went from 0% to 80%+. Nobody asked me to — I just couldn\'t sleep otherwise.',
    tags: ['AWS Lambda', 'DynamoDB', 'AppSync', 'Terraform', 'GraphQL'],
  },
];

interface Job {
  company: string;
  logo: string;
  role: string;
  department?: string;
  period: string;
  current: boolean;
  color: string;
  clients: string[];
  tech: string[];
  points: string[];
}

const workExperience: Job[] = [
  {
    company: 'Deloitte',
    logo: '/images/logos/deloitte.png',
    role: 'Software Engineer 3',
    period: 'May 2026 – Present',
    current: true,
    color: 'var(--yellow)',
    clients: ['Audit', 'Consulting'],
    tech: ['React', '.NET', 'Azure', 'SQL Server'],
    points: [
      'Working across Audit & Assurance PxE',
    ],
  },
  {
    company: 'Cognizant Technology Solutions',
    logo: '/images/logos/cognizant.png',
    role: 'Associate – Projects · Full Stack Developer',
    period: 'Jul 2022 – May 2026',
    current: false,
    color: 'var(--red)',
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
    color: 'var(--blue)',
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
    <div style={{ background: 'var(--paper)', paddingTop: '104px' }}>

      {/* ── PAGE HEADER ── */}
      <section style={{ background: 'var(--paper-2)', borderBottom: '3px solid var(--ink)', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <p className="kicker anim-fade-up" style={{ animationDelay: '0.05s', marginBottom: '12px' }}>Case Files — Enterprise Delivery</p>
          <h1 className="headline headline-black anim-fade-up" style={{ animationDelay: '0.15s', fontSize: 'clamp(2rem, 4vw, 3.4rem)', color: 'var(--ink)', marginBottom: '1rem' }}>
            Stuff I worked on.<br />It mostly worked.
          </h1>
          <p className="anim-fade-up" style={{ animationDelay: '0.3s', fontSize: '15px', color: 'var(--ink-70)', maxWidth: '560px', lineHeight: 1.7 }}>
            Four projects that turned out fine in the end. Client names redacted for NDA reasons — legal has no sense of humor about it.
          </p>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section style={{ background: 'var(--paper)', padding: '5rem 0' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="highlights-grid">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={`delay-${(i % 2 + 1) * 100}`}>
                <div
                  className="work-card"
                  style={{ background: 'var(--paper)', padding: '2.25rem', height: '100%', borderTop: `5px solid ${item.color}` }}
                >
                  {/* Num + client */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <span className="mono" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--ink)' }}>
                      CASE Nº{item.num}
                    </span>
                    <span className="mono" style={{
                      fontSize: '10px',
                      padding: '3px 8px',
                      background: item.color,
                      border: '2px solid var(--ink)',
                      color: 'var(--ink)',
                      letterSpacing: '0.08em',
                      fontWeight: 700,
                    }}>
                      {item.client}
                    </span>
                  </div>

                  <h3 className="headline" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>{item.title}</h3>

                  {/* Metric */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                    <div style={{ width: '18px', height: '4px', background: item.color, border: '1px solid var(--ink)' }} />
                    <span className="mono" style={{ fontSize: '11px', color: 'var(--ink)', fontWeight: 700 }}>
                      {item.metric}
                    </span>
                  </div>

                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--ink-70)', marginBottom: '1.5rem' }}>{item.description}</p>

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
      <section style={{ background: 'var(--paper-2)', borderTop: '3px solid var(--ink)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="kicker" style={{ marginBottom: '8px' }}>Career, Chronologically</p>
              <h2 className="headline headline-black" style={{ fontSize: '2rem', color: 'var(--ink)' }}>The Paper Trail</h2>
            </div>
          </ScrollReveal>

          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            <div className="timeline-line" />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {workExperience.map((job, i) => (
                <ScrollReveal key={job.company} type="reveal-left" delay={`delay-${(i + 1) * 100}`}>
                  <div style={{ marginBottom: '2px' }}>
                    {/* Timeline dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        width: '17px',
                        height: '17px',
                        background: job.current ? job.color : 'var(--paper)',
                        border: `3px solid var(--ink)`,
                        marginTop: '20px',
                        zIndex: 2,
                      }}
                    />

                    <div
                      className="brut-card"
                      style={{
                        background: 'var(--paper)',
                        borderLeft: `6px solid ${job.color}`,
                        padding: '1.75rem',
                      }}
                    >
                      {/* Header */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px', marginBottom: '12px' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                            {job.logo && (
                              <img src={job.logo} alt={job.company} className="photo-brut" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
                            )}
                            <h3 style={{ fontWeight: 700, fontSize: '15px', color: 'var(--ink)' }}>{job.company}</h3>
                            {job.current && (
                              <span className="mono" style={{
                                fontSize: '9px',
                                fontWeight: 700,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                color: 'var(--ink)',
                                background: 'var(--yellow)',
                                border: '2px solid var(--ink)',
                                padding: '2px 8px',
                              }}>
                                CURRENT
                              </span>
                            )}
                          </div>
                          <p className="mono" style={{ fontSize: '11px', color: 'var(--ink)', letterSpacing: '0.06em', fontWeight: 700 }}>{job.role}</p>
                          {job.department && (
                            <p className="mono" style={{ fontSize: '10px', color: 'var(--ink-40)', letterSpacing: '0.06em', marginTop: '2px' }}>{job.department}</p>
                          )}
                        </div>
                        <p className="mono" style={{ fontSize: '11px', color: 'var(--ink-40)', letterSpacing: '0.06em', flexShrink: 0 }}>{job.period}</p>
                      </div>

                      {/* Client badges */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
                        {job.clients.map((c) => (
                          <span key={c} className="mono" style={{
                            fontSize: '10px',
                            padding: '3px 8px',
                            background: 'var(--paper-2)',
                            border: '2px solid var(--ink)',
                            color: 'var(--ink)',
                            letterSpacing: '0.08em',
                          }}>{c}</span>
                        ))}
                      </div>

                      {/* Points */}
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {job.points.map((h, hi) => (
                          <li key={hi} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--ink)', flexShrink: 0, fontSize: '12px', marginTop: '2px', fontWeight: 700 }}>→</span>
                            <span style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--ink-70)' }}>{h}</span>
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
