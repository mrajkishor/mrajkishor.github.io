import ProfileHeader from './ProfileHeader';
import Section from './Section';
import TechStack from './TechStack';
import HighlightCard from './HighlightCard';
import TerminalBot from './TerminalBot';
import CrystalBackground from './CrystalBackground';
import { ExternalLink, MapPin, Building2, Calendar, ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

const devStats = [
  { emoji: '🏢', value: '9+',    label: 'Enterprise Projects', sub: 'F500 clients across 5 industries' },
  { emoji: '👥', value: '180K+', label: 'Users Impacted',      sub: 'Healthcare · Telecom · EdTech' },
  { emoji: '📅', value: '7.5+',  label: 'Years Experience',    sub: 'Java · Node.js · React' },
  { emoji: '⚡', value: '20+',   label: 'Tech Stack',           sub: 'Node · React · AWS · GenAI' },
];

const aboutPoints = [
  {
    text: 'Delivered enterprise-grade systems for Fortune 500 clients across Healthcare (150K+ employees), Telecom (25K support reps), EdTech (5M+ educators), BFSI, Retail, and Aviation.',
    tag: 'scale',
  },
  {
    text: 'Designed Micro Frontend architecture with Module Federation 2 and Nx monorepo across 8–10 independent domain teams for a Fortune 500 Telecom client — reducing cross-team integration time by ~40% and enabling fully autonomous deployments.',
    tag: 'architecture',
  },
  {
    text: 'Led the migration of SOAP/SOA monoliths to event-driven DDD microservices for a Fortune 500 Telecom client — Kafka, Resilience4j circuit breakers, Redis caching — resulting in a ~30% improvement in API response times on high-throughput workflows.',
    tag: 'backend',
  },
  {
    text: 'Integrated RAG pipelines, Qdrant vector DB, and Model Context Protocol (MCP) for Agentic AI into an enterprise Identity Governance platform for a Fortune 500 Healthcare client — enabling semantic role search, automated access certification, and AI-assisted approval workflows.',
    tag: 'ai/ml',
  },
  {
    text: 'Full product lifecycle ownership from requirements and system design through implementation, deployment, and observability — comfortable leading architecture discussions and reviewing pull requests in the same afternoon.',
    tag: 'ownership',
  },
  {
    text: 'Independently building software products — a distributed task scheduler, a cross-platform design system, and an MSME invoicing platform with active users. Side projects as engineering, not just portfolio decoration.',
    tag: 'builder',
  },
];

const highlights = [
  {
    title: 'Micro Frontend Architecture',
    icon: '🧩',
    description: 'Designed and delivered MFE platform with Module Federation 2 and Nx monorepo for a Fortune 500 Telecom Retail client — 8–10 independent domain teams, standardised boilerplate generation, shared component contracts, pre-commit analytics hooks, and isolated CI/CD pipelines. Each team ships on their own cadence without stepping on others.',
  },
  {
    title: 'Event-Driven Microservices',
    icon: '⚙️',
    description: 'Domain-driven Spring Boot microservices with Kafka event pipelines, Resilience4j circuit breakers, gRPC inter-service communication, BFF aggregation layer, and Spring Security (JWT + OAuth2). Powers customer support operations for a Fortune 500 Telecom client across 25,000 representatives in India.',
  },
  {
    title: 'GenAI & RAG in Production',
    icon: '🧠',
    description: 'Worked on RAG pipeline integration with Qdrant vector DB, embedding models, and Model Context Protocol (MCP) for Agentic AI inside an enterprise Identity Governance platform for a Fortune 500 Healthcare client — semantic role search, automated access certification, and AI-assisted approval workflows.',
  },
  {
    title: 'Serverless at Global Scale',
    icon: '☁️',
    description: 'Serverless SSO platform for a Fortune 500 EdTech client — AWS Lambda, API Gateway, DynamoDB, AppSync GraphQL subscriptions, and Amazon Comprehend for content classification. Infrastructure-as-Code with Terraform, CI/CD via Amplify, test coverage lifted from 0% to 80%+.',
  },
];

const projects = [
  {
    icon: '⚙️',
    name: 'Distributed Task Scheduler',
    stack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Grafana'],
    description: 'Production-grade DAG-based job execution engine for distributed workflow orchestration. Supports configurable retry policies, exponential backoff, dead-letter queues, and horizontal pod scaling. Ships with Prometheus metrics and Grafana dashboards — observable by default.',
    repo: 'https://github.com/mrajkishor/Distributed-Task-Scheduler',
  },
  {
    icon: '🎨',
    name: 'RDCLib — Cross-Platform Design System',
    stack: ['React', 'TypeScript', 'React Native', 'Storybook'],
    description: 'Shared UI component library spanning React Web and React Native from a single codebase. Polymorphic component architecture, design token system, and Storybook-driven documentation. Eliminates the platform divergence that accumulates when mobile and web teams work in isolation.',
    repo: 'https://github.com/mrajkishor/rdclib',
  },
  {
    icon: '📦',
    name: 'IMSM + ShopSync',
    stack: ['Next.js', 'Node.js', 'Spring Boot', 'PostgreSQL', 'Android'],
    description: 'End-to-end inventory, invoicing, and logistics management platform for Indian MSMEs — full order lifecycle, GST-compliant invoice generation, and AI-assisted demand forecasting. Live with active business users. Solving problems that spreadsheets gave up on.',
    repo: 'https://github.com/mrajkishor/IMS-Invoice-services',
  },
  {
    icon: '🧠',
    name: 'StackSynapse',
    stack: ['RAG', 'Vector Search', 'LLM APIs', 'Node.js'],
    description: 'Knowledge retrieval platform built on Retrieval-Augmented Generation. Ingests documents, constructs a semantic index via vector embeddings, and surfaces contextual answers through LLM completion. Designed for engineering teams that need to query institutional knowledge, not just store it.',
    repo: 'https://github.com/mrajkishor/StackSynapse',
  },
  {
    icon: '✍️',
    name: 'Clarity',
    stack: ['React', 'TypeScript', 'Node.js'],
    description: 'Task and goal management application built around rolling-wave planning — a structured model that maintains near-term precision while preserving long-term flexibility. For professionals who think in roadmaps, not just to-do lists.',
    repo: 'https://github.com/mrajkishor/Clarity',
  },
];

const workExperience = [
  {
    company: 'Cognizant Technology Solutions',
    role: 'Associate – Projects · Full Stack Developer',
    period: 'Jul 2022 – Present',
    current: true,
    clients: ['Healthcare', 'Telecom', 'BFSI', 'EdTech'],
    highlights: [
      'Worked on enterprise IGA platform serving 150K+ employees for a Fortune 500 Healthcare client — contributed to RAG pipelines, Qdrant vector DB integration, MCP, and Agentic AI workflows for automated access governance and semantic role search',
      'Led Module Federation 2 MFE platform for a Fortune 500 Telecom Retail client across 8–10 domain teams — boilerplate generation, shared contracts, independent CI/CD, ~40% reduction in integration overhead',
      'Drove migration from SOAP/SOA to event-driven DDD microservices for a Fortune 500 Telecom client — Kafka, Resilience4j, Redis; ~30% API latency improvement across 25K concurrent support representatives',
      'Delivered serverless SSO on AWS Lambda + DynamoDB for a Fortune 500 EdTech client — 5M+ global users, IaC with Terraform, AppSync subscriptions, Amazon Comprehend classification',
      'Resolved N+1 query patterns and introduced Redis caching in billing microservices for a Fortune 500 BFSI client — 60% reduction in database query volume on high-frequency payment processing workflows',
    ],
  },
  {
    company: 'Capgemini Technology Services',
    role: 'Associate Consultant · Full Stack Developer',
    period: 'Jun 2018 – Jul 2022',
    current: false,
    clients: ['Aviation', 'Airports', 'Manufacturing', 'Life Sciences'],
    highlights: [
      'Built full-stack analytics portal for ~10K stakeholders at a Fortune 500 Aviation client — React, Spring Boot, PostgreSQL, with a React Native mobile companion for field engineers',
      'Designed and deployed B2B intelligent search product across 5–6 enterprise ITSM clients in Manufacturing and Life Sciences — Node.js, Apache Solr, Chrome Extension for power-user capture workflows',
      'Prototyped MAIA conversational AI with BERT/SQUAD 2.0 + Elasticsearch NLP pipeline — demonstrated to senior leadership, adopted as an internal knowledge assistant',
      'Delivered maturity assessment portal for a Fortune 500 Airports client — dynamic Highcharts dashboards, jsPDF report generation, authored BRD and ARD documentation end-to-end',
    ],
  },
];

const currentlyExploring = [
  { icon: '⚙️', label: 'Distributed Job Orchestration', sub: 'DAG execution, retry policies, leader election, dead-letter queue patterns' },
  { icon: '🎨', label: 'Design System Architecture', sub: 'SCARD model — Scalable, Consistent, Available, Reliable, Durable' },
  { icon: '📦', label: 'MSME Platform Engineering', sub: 'Inventory, invoicing, and supply-chain tooling for underserved small businesses' },
  { icon: '🧠', label: 'AI-Assisted Knowledge Retrieval', sub: 'RAG pipelines, semantic chunking strategies, multi-modal retrieval' },
];

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const tagColor: Record<string, string> = {
  scale:        'bg-blue-500/10 text-blue-400/80 border-blue-500/15',
  architecture: 'bg-violet-500/10 text-violet-400/80 border-violet-500/15',
  backend:      'bg-orange-500/10 text-orange-400/80 border-orange-500/15',
  'ai/ml':      'bg-yellow-500/10 text-yellow-400/80 border-yellow-500/15',
  ownership:    'bg-cyan-500/10 text-cyan-400/80 border-cyan-500/15',
  builder:      'bg-emerald-500/10 text-emerald-400/80 border-emerald-500/15',
};

const GitHubReadme = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CrystalBackground />

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/6">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
          <span className="font-mono text-sm font-bold text-primary tracking-widest shrink-0">
            raj.dev
          </span>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-mono text-muted-foreground hover:text-foreground transition-colors tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 lg:px-12 pb-24">
        {/* Hero */}
        <ProfileHeader />

        {/* Dev Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 mb-2 opacity-0 animate-fade-in"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          {devStats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-xl p-4 text-center hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-200 cursor-default group"
            >
              <div className="text-xl mb-1.5">{s.emoji}</div>
              <div className="text-lg font-bold text-gradient leading-none">{s.value}</div>
              <div className="text-[11px] font-medium text-foreground/80 mt-1">{s.label}</div>
              <div className="text-[10px] text-muted-foreground/60 mt-0.5 font-mono italic">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* About */}
        <Section
          title="Background"

          num="01"
          id="about"
          delay={100}
        >
          <ul className="space-y-2.5">
            {aboutPoints.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 opacity-0 animate-slide-in"
                style={{ animationDelay: `${200 + idx * 70}ms`, animationFillMode: 'forwards' }}
              >
                <span className={`shrink-0 mt-0.5 tech-pill border text-[10px] font-mono w-24 justify-center ${tagColor[point.tag]}`}>
                  {point.tag}
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">{point.text}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Tech Stack */}
        <Section
          title="Toolbox"

          num="02"
          id="stack"
          delay={300}
        >
          <TechStack />
        </Section>

        {/* Highlighted Work */}
        <Section
          title="Highlighted Work"

          num="03"
          id="work"
          delay={500}
        >
          <div className="grid md:grid-cols-2 gap-3">
            {highlights.map((item, idx) => (
              <HighlightCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                metric={item.metric}
                delay={600 + idx * 80}
              />
            ))}
          </div>
        </Section>

        {/* Side Projects */}
        <Section
          title="Side Projects"

          num="04"
          id="projects"
          delay={700}
        >
          <div className="grid md:grid-cols-2 gap-3">
            {projects.map((project, idx) => (
              <div
                key={project.name}
                className="group glass rounded-xl p-5 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/6 hover:-translate-y-0.5 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${800 + idx * 60}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{project.icon}</span>
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.name}
                    </h3>
                  </div>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="shrink-0 p-1 text-muted-foreground/50 hover:text-primary transition-colors"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-pill bg-primary/6 text-primary/70 border border-primary/12 text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Work Experience */}
        <Section
          title="Work Experience"

          num="05"
          id="experience"
          delay={900}
        >
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-[11px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {workExperience.map((job, idx) => (
                <div
                  key={job.company}
                  className="relative flex gap-5 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${1000 + idx * 120}ms`, animationFillMode: 'forwards' }}
                >
                  {/* Timeline dot */}
                  <div className="shrink-0 hidden sm:flex flex-col items-center pt-1">
                    <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center ${job.current ? 'border-primary bg-primary/20' : 'border-border bg-card'}`}>
                      <div className={`w-2 h-2 rounded-full ${job.current ? 'bg-primary animate-pulse' : 'bg-muted-foreground/40'}`} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass rounded-xl p-5 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <Building2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="font-semibold text-foreground text-sm">{job.company}</span>
                          {job.current && (
                            <span className="text-[10px] font-mono text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-2 py-0.5">
                              current
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-primary/80 font-mono ml-5">{job.role}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground/60 shrink-0 ml-5 sm:ml-0">
                        <Calendar className="w-3 h-3" />
                        {job.period}
                      </div>
                    </div>

                    {/* Client badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3 ml-5">
                      {job.clients.map((client) => (
                        <span key={client} className="tech-pill bg-accent/6 text-accent/75 border border-accent/15 text-[10px]">
                          {client}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 ml-5">
                      {job.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <ArrowRight className="w-3 h-3 text-primary/40 mt-0.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Currently Exploring */}
        <Section
          title="Currently Exploring"

          num="06"
          delay={1100}
        >
          <div className="grid sm:grid-cols-2 gap-3">
            {currentlyExploring.map((item, idx) => (
              <div
                key={item.label}
                className="glass rounded-xl p-4 flex items-start gap-3 hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-200 cursor-default opacity-0 animate-fade-in"
                style={{ animationDelay: `${1200 + idx * 60}ms`, animationFillMode: 'forwards' }}
              >
                <span className="text-lg shrink-0">{item.icon}</span>
                <div>
                  <p className="text-sm font-medium text-foreground leading-snug">{item.label}</p>
                  <p className="text-[11px] text-muted-foreground/60 mt-0.5 font-mono">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section
          title="Let's Talk"
          subtitle="if you've read this far, we should probably speak"
          num="07"
          id="contact"
          delay={1300}
        >
          <div
            className="glass rounded-xl p-7 opacity-0 animate-fade-in"
            style={{ animationDelay: '1400ms', animationFillMode: 'forwards' }}
          >
            <p className="text-sm text-foreground/90 font-medium leading-relaxed mb-4 max-w-2xl">
              I enjoy working on products that solve real user problems and create meaningful business value.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
              My focus is on understanding requirements clearly, turning ideas into practical solutions, and delivering reliable software that improves user experience.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-2xl">
              I value clean execution, continuous learning, and building systems that are scalable, maintainable, and useful in the real world.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-2xl">
              If you're looking for someone who can contribute thoughtfully, collaborate well, and help move products forward — I'd be glad to connect.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-5">
              {[
                { label: 'Email', value: 'mrajkishor331@gmail.com', href: 'mailto:mrajkishor331@gmail.com', icon: <Mail className="w-4 h-4" /> },
                { label: 'LinkedIn', value: 'rajkishormaharana', href: 'https://linkedin.com/in/rajkishormaharana', icon: <Linkedin className="w-4 h-4" /> },
                { label: 'GitHub', value: 'mrajkishor', href: 'https://github.com/mrajkishor', icon: <Github className="w-4 h-4" /> },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-3.5 rounded-lg bg-secondary/30 hover:bg-secondary/60 border border-transparent hover:border-primary/20 hover:text-primary transition-all group"
                >
                  <span className="text-primary/60 group-hover:text-primary transition-colors shrink-0">{c.icon}</span>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground/60 font-mono uppercase tracking-wider">{c.label}</p>
                    <p className="text-xs font-mono text-foreground group-hover:text-primary transition-colors truncate">{c.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground/50 font-mono">
              <MapPin className="w-3 h-3 shrink-0" />
              Hyderabad, India · Open to meaningful conversations about distributed systems, platform architecture, and products worth building
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-5xl mx-auto px-6 pt-4 pb-8 text-center border-t border-white/5">
        <p className="text-[11px] font-mono text-muted-foreground/40">
          No bugs were harmed in the making of this portfolio.
          <span className="text-primary/35"> · Built with React · TypeScript · ☕ · questionable commit messages · </span>
          <a href="https://github.com/mrajkishor/mrajkishor.github.io" target="_blank" rel="noopener noreferrer" className="text-primary/40 hover:text-primary/70 transition-colors">
            view source ↗
          </a>
        </p>
      </footer>

      <TerminalBot />
    </div>
  );
};

export default GitHubReadme;
