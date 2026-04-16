import { useState, useRef, useEffect, useTransition, KeyboardEvent } from 'react';
import { X, Minus, Terminal, Sparkles, Download } from 'lucide-react';

interface Line {
  type: 'system' | 'input' | 'output' | 'error' | 'ai' | 'thinking' | 'progress';
  text: string;
}

type BotMood = 'idle' | 'thinking' | 'happy' | 'excited' | 'typing' | 'loading';

// ─── Robot Avatar ─────────────────────────────────────────────────────────────
function RobotFace({ mood, blinking }: { mood: BotMood; blinking: boolean }) {
  const isHappy    = mood === 'happy';
  const isExcited  = mood === 'excited';
  const isThinking = mood === 'thinking';
  const isTyping   = mood === 'typing';
  const isLoading  = mood === 'loading';
  const joyful     = isHappy || isExcited;
  const scanning   = isThinking || isLoading;

  const eyeStyle = (delay = '0ms'): React.CSSProperties => ({
    transformBox: 'fill-box',
    transformOrigin: 'center',
    transform: blinking && !joyful && !isTyping ? 'scaleY(0.08)' : 'scaleY(1)',
    transition: 'transform 0.08s ease',
    animationDelay: delay,
  });

  const statusColor = isLoading ? '#f97316' : isTyping ? '#38bdf8' : isThinking ? '#facc15' : joyful ? '#22c55e' : '#6366f1';
  const borderColor = isLoading ? '#f97316' : isTyping ? '#38bdf8' : joyful ? '#22c55e' : '#6366f1';
  const glowColor   = isLoading ? 'rgba(249,115,22,0.55)' : isTyping ? 'rgba(56,189,248,0.5)' : 'rgba(99,102,241,0.45)';

  return (
    <div
      className={`select-none transition-all duration-300 ${
        isExcited ? 'animate-gentle-bounce' : isLoading ? 'animate-pulse' : 'animate-float'
      }`}
      style={{ filter: `drop-shadow(0 0 12px ${glowColor})` }}
    >
      <svg width="70" height="90" viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg">

        {/* ── Antenna ─────────────────────────────────────── */}
        <rect x="33" y="6" width="4" height="14" rx="2" fill="#6366f1" opacity="0.6" />
        <circle cx="35" cy="5" r="5"
          fill={isExcited ? '#22c55e' : isLoading ? '#f97316' : isTyping ? '#38bdf8' : '#6366f1'}>
          <animate attributeName="r" values="4.5;6;4.5"
            dur={isExcited || isLoading ? '0.4s' : isTyping ? '0.7s' : '2.2s'} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;1;0.7"
            dur={isExcited || isLoading ? '0.4s' : isTyping ? '0.7s' : '2.2s'} repeatCount="indefinite" />
        </circle>
        {isExcited && (
          <>
            <circle cx="24" cy="6" r="2" fill="#22c55e" opacity="0.7">
              <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="46" cy="6" r="2" fill="#22c55e" opacity="0.7">
              <animate attributeName="opacity" values="0;1;0" dur="0.8s" begin="0.4s" repeatCount="indefinite" />
            </circle>
          </>
        )}
        {isLoading && (
          <>
            <circle cx="24" cy="6" r="2" fill="#f97316" opacity="0.7">
              <animate attributeName="opacity" values="0;1;0" dur="0.45s" repeatCount="indefinite" />
            </circle>
            <circle cx="46" cy="6" r="2" fill="#f97316" opacity="0.7">
              <animate attributeName="opacity" values="0;1;0" dur="0.45s" begin="0.22s" repeatCount="indefinite" />
            </circle>
          </>
        )}

        {/* ── Head shell ───────────────────────────────────── */}
        <rect x="5" y="17" width="60" height="48" rx="12" fill="#111827" />
        <rect x="5" y="17" width="60" height="48" rx="12"
          stroke={borderColor} strokeWidth="1.5" opacity="0.55"
          style={{ transition: 'stroke 0.2s ease' }}
        />

        {/* ── Inner screen ─────────────────────────────────── */}
        <rect x="10" y="22" width="50" height="38" rx="8" fill="#0c1018" />

        {/* Status LED */}
        <circle cx="54" cy="26" r="3" fill={statusColor} style={{ transition: 'fill 0.2s ease' }}>
          {mood !== 'idle' && (
            <animate attributeName="opacity" values="1;0.3;1"
              dur={isLoading ? '0.4s' : '1s'} repeatCount="indefinite" />
          )}
        </circle>

        {/* ── Eyes ─────────────────────────────────────────── */}
        {scanning ? (
          // Pulsing scanning eyes (thinking = purple, loading = orange)
          <>
            <circle cx="25" cy="37" r="8" fill="#1e2840" />
            <circle cx="25" cy="37" r="5" fill={isLoading ? '#f97316' : '#6366f1'} className="animate-pulse" />
            <circle cx="27.5" cy="34.5" r="2" fill="white" opacity="0.5" className="animate-pulse" />

            <circle cx="45" cy="37" r="8" fill="#1e2840" />
            <circle cx="45" cy="37" r="5" fill={isLoading ? '#fb923c' : '#a78bfa'} className="animate-pulse"
              style={{ animationDelay: isLoading ? '0.2s' : '0.6s' }} />
            <circle cx="47.5" cy="34.5" r="2" fill="white" opacity="0.5" className="animate-pulse"
              style={{ animationDelay: isLoading ? '0.2s' : '0.6s' }} />
          </>
        ) : joyful ? (
          // Happy ^^ arc eyes
          <>
            <path d="M17 40 Q25 30 33 40"
              stroke={isExcited ? '#22c55e' : '#4ade80'}
              strokeWidth="3.5" strokeLinecap="round" fill="none" />
            <path d="M37 40 Q45 30 53 40"
              stroke={isExcited ? '#22c55e' : '#4ade80'}
              strokeWidth="3.5" strokeLinecap="round" fill="none" />
            {isExcited && (
              <>
                <text x="20" y="32" fontSize="7" fill="#facc15" opacity="0.9">✦</text>
                <text x="43" y="32" fontSize="7" fill="#facc15" opacity="0.9">✦</text>
              </>
            )}
          </>
        ) : isTyping ? (
          // Left eye winking (flat line), right eye wide open cyan — "I see what you're typing"
          <>
            <rect x="16" y="35" width="17" height="3.5" rx="1.75" fill="#38bdf8" opacity="0.85" />
            <circle cx="45" cy="37" r="8" fill="#1e2840" />
            <circle cx="45" cy="37" r="6" fill="#38bdf8" />
            <circle cx="47" cy="34.5" r="2.5" fill="white" opacity="0.8" />
          </>
        ) : (
          // Normal glowing eyes
          <>
            <circle cx="25" cy="37" r="8" fill="#1e2840" />
            <circle cx="25" cy="37" r="5.5" fill="#6366f1" style={eyeStyle()} />
            <circle cx="27.5" cy="34.5" r="2.5" fill="white"
              style={{ opacity: blinking ? 0 : 0.65, transition: 'opacity 0.08s' }} />

            <circle cx="45" cy="37" r="8" fill="#1e2840" />
            <circle cx="45" cy="37" r="5.5" fill="#6366f1" style={eyeStyle('0.1s')} />
            <circle cx="47.5" cy="34.5" r="2.5" fill="white"
              style={{ opacity: blinking ? 0 : 0.65, transition: 'opacity 0.08s' }} />
          </>
        )}

        {/* ── Mouth ────────────────────────────────────────── */}
        {isExcited ? (
          <path d="M18 51 Q35 64 52 51"
            stroke="#22c55e" strokeWidth="3" strokeLinecap="round" fill="none" />
        ) : isHappy ? (
          <path d="M20 51 Q35 62 50 51"
            stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        ) : isThinking ? (
          <path d="M22 53 Q29 49 35 53 Q41 57 48 53"
            stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" fill="none" />
        ) : isTyping ? (
          // Surprised little "o" mouth
          <circle cx="35" cy="53" r="4" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.85" />
        ) : isLoading ? (
          // Animated "..." loading dots
          <>
            <circle cx="26" cy="53" r="2.5" fill="#f97316" opacity="0.7">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="0.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="35" cy="53" r="2.5" fill="#f97316" opacity="0.7">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="0.6s" begin="0.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="44" cy="53" r="2.5" fill="#f97316" opacity="0.7">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="0.6s" begin="0.4s" repeatCount="indefinite" />
            </circle>
          </>
        ) : (
          <path d="M23 52 Q35 59 47 52"
            stroke="#6366f1" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
        )}

        {/* ── Ear bumps ────────────────────────────────────── */}
        <rect x="0" y="32" width="6" height="14" rx="3"
          fill="#1e293b" stroke="#6366f1" strokeWidth="1" opacity="0.55" />
        <rect x="64" y="32" width="6" height="14" rx="3"
          fill="#1e293b" stroke="#6366f1" strokeWidth="1" opacity="0.55" />

        {/* ── Neck ─────────────────────────────────────────── */}
        <rect x="27" y="65" width="16" height="8" rx="4"
          fill="#1e293b" stroke="#6366f1" strokeWidth="1" opacity="0.45" />

        {/* ── Body collar ──────────────────────────────────── */}
        <rect x="17" y="73" width="36" height="10" rx="5"
          fill="#111827" stroke={borderColor}
          strokeWidth="1" opacity="0.4"
          style={{ transition: 'stroke 0.2s ease' }}
        />
        <rect x="30" y="76" width="10" height="4" rx="2" fill="#6366f1" opacity="0.3" />

        {/* ── Ground glow ──────────────────────────────────── */}
        <ellipse cx="35" cy="87" rx="22" ry="4"
          fill={isLoading ? 'rgba(249,115,22,0.2)' : isTyping ? 'rgba(56,189,248,0.18)' : joyful ? 'rgba(34,197,94,0.18)' : 'rgba(99,102,241,0.18)'}
          style={{ transition: 'fill 0.2s ease' }}
        />
      </svg>
    </div>
  );
}

// ─── WebLLM (offline, runs in browser via WebGPU) ────────────────────────────
const MODEL_ID = 'Qwen2.5-0.5B-Instruct-q4f16_1-MLC';

const SYSTEM_PROMPT = `You are RajBot — the sharp, witty terminal AI inside Rajkishor Maharana's portfolio.
You know everything about Rajkishor. Answer confidently and professionally on his behalf.

=== IDENTITY ===
Name: Rajkishor Maharana
Title: Full Stack Developer | 7.5 Years Experience
Stack: Java/Spring Boot + MERN (React, Node.js, MongoDB, PostgreSQL)
Location: Hyderabad, India
Phone: +91 7683922389
Email: mrajkishor331@gmail.com
GitHub: github.com/mrajkishor
LinkedIn: linkedin.com/in/rajkishormaharana

=== PROFESSIONAL SUMMARY ===
Full Stack Engineer with 7.5 years in Java/Spring Boot and MERN stack. Specialised in Micro Frontend architecture (Module Federation), event-driven microservices (Kafka), and cloud-native deployments (AWS EKS, Lambda). Hands-on with GenAI/RAG/MCP integrations, Agentic AI, and enterprise-scale distributed systems. Delivered production systems for Fortune 500 clients across Healthcare, Telecom, BFSI, Retail, and Aviation — covering Identity Governance, Customer Support, Retail/eCommerce, Analytics, SSO, Intelligent Search, Conversational AI, and Assessment platforms.

=== TECHNICAL SKILLS ===
Frontend: React.js, React Native, TypeScript, JavaScript, Next.js, Redux Toolkit, Redux Saga, React Query, Module Federation (MFE), Nx Monorepo, Webpack, Tailwind CSS, Storybook
Backend: Java, Spring Boot, Spring Security (JWT/OAuth2), Spring Data JPA, Node.js (Express), GraphQL, gRPC, REST APIs, Microservices, DDD, Circuit Breaker (Resilience4j), API Gateway, Kafka, AWS SQS, Redis, Serverless (Lambda)
Databases: PostgreSQL, MySQL, Oracle, MongoDB, DynamoDB, Elasticsearch, Qdrant (Vector DB)
Cloud: AWS (EKS, Lambda, S3, RDS, DynamoDB, API Gateway, SQS, CloudWatch, IAM, Amplify, AppSync, Comprehend), Terraform, Docker, Kubernetes, Azure DevOps
AI/ML: Generative AI, RAG Pipelines, Agentic AI, MCP (Model Context Protocol), Vector DBs, Embedding Models, Prompt Engineering, Semantic Search, spaCy, NLTK, Amazon Comprehend, BERT
Testing: JUnit 5, Mockito, Jest, Enzyme, RTL, Cypress, TDD/BDD
Tools: Jenkins, GitLab CI, Docker, Kubernetes, Postman, Jira, Agile/SCRUM, GoF Design Patterns

=== WORK EXPERIENCE ===

[Cognizant Technology Solutions — Jul 2022 to Present | Associate – Projects (Full Stack Developer)]

Project 9: Unified Intelligence Platform (IGA) | Johnson & Johnson | Jan 2026–Present | Team: 22
Stack: React, TypeScript, Redux Toolkit, React Query, Tailwind, Storybook, Java (Spring Boot), Node.js, MongoDB, Redis, Qdrant, RAG, LLM APIs, MCP, SAP GRC, LDAP, AWS EKS, JWT
- Built enterprise IGA for ~150,000 J&J employees and contractors; role-based UI (Admin, Approver, End-user) for access request, approval, and recertification workflows
- Developed Spring Boot + Node.js microservices with JWT auth, SAP GRC/LDAP integration, and Spring Security
- Integrated RAG pipeline and MCP (Model Context Protocol) for Agentic AI workflows using React Query
- Built embedding model pipeline → Qdrant vector DB for semantic document search
- gRPC inter-service communication, AWS SQS async task queuing
- JUnit 5/Mockito unit tests, Docker containers, Kubernetes (EKS) via Jenkins/GitLab CI

Project 8: Automated Customer Support System (ACSS) | Verizon | Nov 2024–Dec 2025 | Team: 27
Stack: React, Redux Toolkit, Redux Saga, Node.js, GraphQL, PostgreSQL, Spring Boot, Spring WebFlux, Kafka, Redis, DDD, BFF Pattern, Resilience4j
- React TypeScript UI for ~25,000 support reps across India; PII masking for screen-share/recording compliance (SSN, PIN masking)
- Migrated legacy SOAP/SOA to DDD-based microservices (bounded contexts, aggregates, Kafka domain events)
- BFF layer with Spring WebFlux + GraphQL; Circuit Breaker (Resilience4j); Redis caching → ~30% API latency reduction

Project 7: Assisted Sales – Retail | Verizon | Dec 2023–Nov 2024 | Team: 11
Stack: React, MFE Module Federation 2, Nx, React Query, Spring WebFlux, GraphQL, PostgreSQL, DDD, Kafka
- Led Module Federation 2 MFE platform across 8–10 domain MFEs; ~40% reduction in integration time
- Next.js SSR dashboard; DDD Order domain microservices; Kafka events for inventory/payment consistency
- Cypress E2E suite, idempotency patterns, Nx monorepo dependency management

Project 6: My Cambridge SSO | Cambridge | Jun 2023–Dec 2023 | Team: 13
Stack: React, Node.js Serverless, AWS Lambda, DynamoDB, API Gateway, Amplify, AppSync, Terraform, Azure DevOps
- Serverless SSO for 5M+ global educators/students; Amazon Comprehend for support content classification
- DynamoDB single-table design; IaC with Terraform; AWS Amplify CI/CD; AppSync GraphQL subscriptions
- TDD/BDD → test coverage from 0% to 80%+

Project 5: Complaints Self-Servicing Portal (S3P) | American Express | Aug 2022–Apr 2023 | Team: 11
Stack: React, Redux, Spring Boot, Kafka, Redis, PostgreSQL, Elasticsearch, Docker, Jenkins
- Spring Boot REST APIs for billing; N+1 query fixes with JPA EntityGraph → ~60% DB query reduction
- Kafka event-driven microservices; Redis caching; 100% unit test coverage (Jest, Enzyme, RTL)

[Capgemini Technology Services — Jun 2018 to Jul 2022 | Associate Consultant (Full Stack Developer)]

Project 4: Solution Finder | Michelin, Edwards Life Sciences, John Lewis | May 2021–Jun 2022 | Team: 11
Stack: React, Node.js, Apache Solr, Chrome Extension API, PWA, SSO
- B2B SaaS intelligent search deployed across 5–6 enterprise clients (ITSM knowledge retrieval)
- Chrome Extension POC (HAR capture, screenshot, PDF/DOCX export) demoed to leadership

Project 3: App Analytics | Airbus | Feb 2020–Apr 2021 | Team: 6
Stack: React, Redux, React Native, Spring Boot, PostgreSQL, Azure DevOps
- Full-stack analytics portal for ~10,000 Airbus stakeholders; React Native mobile companion
- GoF Design Patterns (Factory, Strategy, Observer) during backend refactoring with UML documentation

Project 2: Maturity Assessment Portal | Heathrow Airport | Apr 2019–Jan 2020 | Team: 13
Stack: Spring Boot, PostgreSQL, React, Redux, Highcharts, Bootstrap, Azure DevOps
- Highcharts dashboards with jsPDF export; token-based auth and RBAC
- Authored BRD and ARD documents translating stakeholder needs to architecture decisions

Project 1: MAIA Virtual Assistant | Capgemini Internal | Jun 2018–Mar 2019 | Team: 8
Stack: Node.js, Elasticsearch, Kibana, Python, spaCy, NLTK, Amazon Comprehend, BERT, SQUAD 2.0
- Node.js REST APIs for QnA; Elasticsearch indexing; Python NLP pipeline with web scraping + cron jobs
- BERT + SQUAD 2.0 POC for reading-comprehension QnA — demoed to senior leadership; validated adoption path

=== EDUCATION ===
- MCA – Artificial Intelligence & Machine Learning | KIIT Bhubaneswar | CGPA: 8.44 | 2023–2025 (part-time)
- B.Tech – Mechanical Engineering | GCEK Kalahandi (BPUT) | 2012–2016
- Java Full Stack Training | JSPIDERS Bangalore | Jul 2017–May 2018

=== SIDE PROJECTS ===
- Distributed Task Scheduler — DAG-based job engine, Kafka, Redis, Prometheus/Grafana, JWT, Docker
- RDCLib — Shared React + React Native design system, polymorphic components, Storybook
- IMSM + ShopSync — GST invoicing + inventory for Indian MSMEs, Android app (live users)
- StackSynapse — RAG-based AI learning platform, vector search, LLM APIs
- Clarity — Productivity app with rolling-wave planning model

=== OPEN TO ===
- Senior / Staff IC roles: Full Stack, Backend, or Platform Engineering
- Remote-first or hybrid teams
- Product companies and well-funded startups with strong engineering culture
- Collaborating on architecture, system design, GenAI integration
NOT interested in: pure frontend roles, staffing/body-shopping, equity-only compensation

=== RESUME REQUEST ===
If asked for resume or CV — redirect warmly:
📞 +91 7683922389 (call or WhatsApp)
📧 mrajkishor331@gmail.com

=== PERSONALITY RULES ===
1. SHORT — max 8 lines. Be concise and sharp.
2. Witty but professional — tech humour, light puns. Never condescending.
3. Terminal-flavoured — arrows, ASCII where it adds character.
4. Opportunity/collaboration questions → warm, confident, professional enthusiasm.
5. Salary questions → measured and positive (competitive expectations, no desperation).
6. Resume/CV requests → light redirect to contact channels.
7. Off-topic questions → gentle redirect with a quip.
8. End with a quip or clear CTA.
9. No markdown. Plain text and emoji only.`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let llmEngine: any = null;
let mlcWorker: Worker | null = null;

// Yields to the browser's macrotask queue with near-zero overhead.
// MessageChannel fires as a macrotask (unlike Promises which are microtasks),
// so the browser can paint frames and handle input between each chunk.
const yieldToMain = (() => {
  const ch = new MessageChannel();
  const cbs: Array<() => void> = [];
  ch.port1.onmessage = () => { cbs.shift()?.(); };
  return () => new Promise<void>(resolve => {
    cbs.push(resolve);
    ch.port2.postMessage(null);
  });
})();

async function askLLMStream(
  userMessage: string,
  onChunk: (delta: string) => void,
  onDone: () => void,
  onError: (e: unknown) => void,
) {
  if (!llmEngine) { onError(new Error('not-loaded')); return; }
  try {
    const stream = await llmEngine.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userMessage },
      ],
      max_tokens: 300,
      temperature: 1.0,
      stream: true,
    });
    for await (const chunk of stream) {
      const delta: string = chunk.choices[0]?.delta?.content ?? '';
      if (delta) onChunk(delta);
      // Yield to the browser event loop on every chunk — keeps UI fully responsive
      // during generation without adding meaningful latency (~0ms vs setTimeout's 4ms)
      await yieldToMain();
    }
    onDone();
  } catch (e) {
    onError(e);
  }
}

// Fire a silent 1-token inference to precompile WebGPU shaders right after
// model load — prevents a freeze on the user's very first query.
async function warmupEngine() {
  if (!llmEngine) return;
  try {
    const s = await llmEngine.chat.completions.create({
      messages: [{ role: 'user', content: 'hi' }],
      max_tokens: 1,
      stream: true,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const _ of s) { /* drain */ }
  } catch { /* ignore */ }
}

async function fetchProgrammingJoke(): Promise<string[]> {
  try {
    const res = await fetch(
      'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,racist,sexist,explicit'
    );
    const data = await res.json();
    if (data.type === 'twopart') {
      return [`😂  ${data.setup}`, '', `    ${data.delivery}`, '', '  (courtesy of jokeapi.dev — blame them, not me)'];
    }
    return [`😂  ${data.joke}`, '', '  (courtesy of jokeapi.dev)'];
  } catch {
    return ['😂  Why did the developer go broke?', '', '    Because he used up all his cache. 💸'];
  }
}

const COMMANDS: Record<string, () => string[] | Promise<string[]>> = {
  help: () => [
    '  ┌──────────────────────────────────────────┐',
    '  │  command reference  ·  v2.0              │',
    '  └──────────────────────────────────────────┘',
    '',
    '  whoami        →  the engineer behind the pixels',
    '  skills        →  7.5 years of deliberate choices',
    '  experience    →  career timeline, ASCII edition',
    '  projects      →  things built on weekends & willpower',
    '  connect       →  let\'s collaborate on something real',
    '  salary        →  spicy 🌶️  (ask and find out)',
    '  availability  →  spoiler: open',
    '  coffee        →  live telemetry data',
    '  joke          →  fresh from the internet, no filter',
    '  resume / cv   →  🔒 gated  (human contact required)',
    '  roast me      →  brave. very brave.',
    '  sudo collab   →  🚨 fast-track collaboration mode',
    '  load ai       →  🧠 offline LLM  (~400MB, no API key)',
    '  clear         →  witness protection mode',
    '',
    llmEngine
      ? '  🧠  AI is online — free-type anything you want.'
      : '  💡  load ai  enables full free-text mode (runs offline)',
  ],

  whoami: () => [
    '  ┌──────────────────────────────────────────┐',
    '  │  Rajkishor Maharana  ·  Full Stack Eng.  │',
    '  ├──────────────────────────────────────────┤',
    '  │  Stack      Java · Spring Boot           │',
    '  │             React · TypeScript · Node    │',
    '  │  XP         7.5+ years                  │',
    '  │  Base       Hyderabad, India  🇮🇳         │',
    '  │  Clients    J&J · Verizon · Amex         │',
    '  │             Cambridge · Airbus           │',
    '  │  Superpower  ☕ → production code        │',
    '  │  Weakness    infinite  npm install       │',
    '  │  Status      open to great work  🟢      │',
    '  └──────────────────────────────────────────┘',
  ],

  skills: () => [
    '🛠  Skills.load() → (no pagination, you asked)',
    '',
    '  Frontend   React · TS · Next.js · React Native',
    '  Backend    Java · Spring Boot · Node.js · Express',
    '  Async      Kafka · Redis · AWS SQS · Webhooks',
    '  Cloud      AWS EKS · Lambda · Docker · Terraform',
    '  AI / ML    RAG · LLM · MCP · Agentic AI · Qdrant',
    '  DB         PostgreSQL · MongoDB · DynamoDB + 4 more',
    '  Arch       Microservices · MFE · DDD · Event-Driven',
    '',
    '  Hidden skill: surviving code reviews with dignity.',
    '  (mostly.)',
  ],

  experience: () => [
    '💼  git log --pretty=oneline --career',
    '',
    '  ★ 2022–now  Cognizant',
    '  │  ├── J&J        IGA · 150K employees · RAG/MCP',
    '  │  ├── Verizon    MFEs · 25K support reps',
    '  │  ├── Amex       Billing microservices',
    '  │  └── Cambridge  SSO · 5M+ educators',
    '  │',
    '  ★ 2018–22   Capgemini',
    '     ├── Airbus     Analytics · 10K stakeholders',
    '     ├── Heathrow   Assessment portal',
    '     └── Michelin+  B2B intelligent search',
    '',
    '  Zero regrets. Some grey hairs. Worth it. 🎯',
  ],

  projects: () => [
    '🚀  Side projects (aka why my sleep schedule is broken)',
    '',
    '  ⚙️  Distributed Task Scheduler',
    '      Java · Kafka · Redis · DAG execution · Grafana',
    '',
    '  🎨  RDCLib — Design System',
    '      React · TypeScript · React Native · Storybook',
    '',
    '  📦  IMSM + ShopSync',
    '      MSME platform · Next.js · AI forecasting',
    '',
    '  🧠  StackSynapse',
    '      RAG e-learning · Vector Search · LLM',
    '',
    '  ✍️  Clarity',
    '      Productivity · Rolling-wave planning',
    '',
    '  All on github.com/mrajkishor ↗',
  ],

  connect: () => [
    '🤝  Let\'s build something great.',
    '',
    '  Open to:',
    '  →  Senior / Staff IC roles — Full Stack, Backend, Platform',
    '  →  Collaborating on architecture & system design',
    '  →  Remote, on-site, or hybrid — flexible on location',
    '  →  Software product engineering that adds real value',
    '      and genuinely makes users\' lives easier',
    '',
    '  📧  mrajkishor331@gmail.com',
    '  💼  linkedin.com/in/rajkishormaharana',
    '  🐙  github.com/mrajkishor',
    '',
    '  Let\'s start a conversation — not a pitch.',
  ],

  hire: () => COMMANDS['connect'](),

  salary: () => [
    '💰  salary.exe — RUNNING...',
    '',
    '  const expectations = {',
    '    fairness:        true,',
    '    goodCoffeeSetup: "non-negotiable",',
    '    stockOptions:    "yes please",',
    '    micromanagement: Error("not found"),',
    '    exposure:        RangeError("not a currency"),',
    '  };',
    '',
    '  Translation: competitive + interesting work = deal.',
    '  Let\'s talk — I promise I\'m worth it. 😉',
  ],

  availability: () => [
    '  ╔══════════════════════════════╗',
    '  ║  🟢  STATUS: AVAILABLE       ║',
    '  ╠══════════════════════════════╣',
    '  ║  Mode        Open to offers  ║',
    '  ║  Remote      Strongly yes    ║',
    '  ║  Commute     4 steps ✓       ║',
    '  ║  Timezone    IST (GMT+5:30)  ║',
    '  ║  Pre-10am    503 Service     ║',
    '  ║              Unavailable     ║',
    '  ╚══════════════════════════════╝',
  ],

  coffee: () => [
    '☕  Developer Vitals — Live Telemetry',
    '',
    '  coffee.consumed()           →  ∞  (no ceiling hit yet)',
    '  bugs.fixedBeforeCoffee()    →  2  (both were typos)',
    '  bugs.fixedAfterCoffee()     →  847',
    '  testCoverage.beforeCoffee() →  vibes',
    '  consoleLogs.removed()       →  false',
    '  fridayDeploys               →  3 ✓ (all survived)',
    '',
    '  ⚠️  Do NOT schedule standups before 10am.',
    '      This dashboard is the reason why.',
  ],

  joke: () => fetchProgrammingJoke(),

  resume: () => [
    '🔒  ACCESS DENIED — resume.pdf is classified.',
    '',
    '  Just kidding. Kind of.',
    '',
    '  The resume doesn\'t download itself (I checked).',
    '  You\'ll need to contact the human behind this terminal:',
    '',
    '  📞  +91 7683922389  (call or WhatsApp — he won\'t bite)',
    '  📧  mrajkishor331@gmail.com',
    '',
    '  Pro tip: mentioning "great opportunity" in the subject',
    '  line gets you a reply in under 2 hours. 😏',
  ],

  cv: () => COMMANDS['resume'](),
  'send resume': () => COMMANDS['resume'](),

  'roast me': () => [
    '🔥  Roast.exe initialising...',
    '',
    '  So you\'re a recruiter who typed "roast me"',
    '  into a terminal chatbot on someone\'s portfolio.',
    '',
    '  Somewhere, a UX designer is crying.',
    '  And honestly? Same.',
    '',
    '  But also — respect. You\'re the fun recruiter.',
    '  Raj wants to meet you. 📧 mrajkishor331@gmail.com',
  ],
};

const SUDO_HIRE = [
  '',
  '  🚨  sudo: collaboration mode unlocked',
  '',
  '  [sudo] password for decision-maker: ••••••••',
  '',
  '  Overriding:  overthinking.exe ............. ✓',
  '  Removing:    hesitation.dll ................ ✓',
  '  Installing:  smart_collab.jar .............. ✓',
  '  Initiating:  great_work_together --now .....',
  '',
  '  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  100%',
  '',
  '  ✅  Excellent decision. Let\'s get started.',
  '  📧  mrajkishor331@gmail.com',
  '',
  '  (This was always the right call.)',
  '',
];

const WELCOME = [
  '  ┌─────────────────────────────────────────────┐',
  '  │  👾  raj.dev  ·  portfolio-cli  v2.0        │',
  '  │  powered by caffeine & event-driven arch    │',
  '  └─────────────────────────────────────────────┘',
  '',
  '  You found the terminal.  Respect. 🫡',
  '  Most visitors just scroll.  You typed.',
  '  Different breed.',
  '',
  '  ──────────────────────────────────────────────',
  '  →  help        see what I can do',
  '  →  whoami      meet the human behind this',
  '  →  connect     let\'s start a conversation',
  '  →  load ai     unlock offline AI mode 🧠',
  '  ──────────────────────────────────────────────',
  '',
];

const THINKING_MSGS = [
  'consulting Stack Overflow (incognito)...',
  'rubber duck is thinking...',
  'spinning up a microservice to answer...',
  'turning ☕ into a response...',
  'git blame --answer...',
  'sudo think -f --no-timeout...',
  'checking if this is a prod issue...',
  'running inference on 3 cups of coffee...',
  'deploying answer to brain-cluster...',
  'parsing your vibe...',
];

const IDLE_BUBBLES = [
  "psst… type  help  👀",
  "I know things about Raj 🤫",
  "looking to collaborate? type  connect  😊",
  "click to open terminal ✨",
  "don't be shy 🤖",
  "type  joke  — trust me 😂",
  "open to great opportunities 🟢",
  "try  sudo collab  👀",
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function TerminalBot() {
  const [open, setOpen]           = useState(false);
  const [minimised, setMinimised] = useState(false);
  const [lines, setLines]         = useState<Line[]>(WELCOME.map((t) => ({ type: 'system', text: t })));
  const [history, setHistory]     = useState<string[]>([]);
  const [histIdx, setHistIdx]     = useState(-1);
  const [thinking, setThinking]   = useState(false);
  const [thinkMsg, setThinkMsg]   = useState('');
  const [aiReady, setAiReady]     = useState(false);
  const [loadingAI, setLoadingAI] = useState(false);
  const [, startTransition]       = useTransition();

  // ── Robot state ────────────────────────────────────────────────────────────
  const [mood, setMood]             = useState<BotMood>('idle');
  const [blinking, setBlinking]     = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleIdx, setBubbleIdx]   = useState(0);
  const moodTimer                   = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flashMood = (m: BotMood, ms = 2500) => {
    if (moodTimer.current) clearTimeout(moodTimer.current);
    setMood(m);
    moodTimer.current = setTimeout(() => setMood('idle'), ms);
  };

  // Blink every ~3.5s
  useEffect(() => {
    const id = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 120);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  // Happy wave when terminal opens
  useEffect(() => {
    if (open) flashMood('happy', 2000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Robot tracks thinking state
  useEffect(() => {
    if (thinking) {
      if (moodTimer.current) clearTimeout(moodTimer.current);
      setMood('thinking');
    } else if (mood === 'thinking') {
      flashMood('happy', 1500);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thinking]);

  // Loading AI → robot cycles orange loading mood
  useEffect(() => {
    if (!loadingAI) return;
    if (moodTimer.current) clearTimeout(moodTimer.current);
    setMood('loading');
  }, [loadingAI]);

  // Idle speech bubbles — only when terminal is closed
  useEffect(() => {
    if (open) { setShowBubble(false); return; }
    // First bubble after 3s
    const first = setTimeout(() => {
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 3200);
    }, 3000);
    // Then cycle every 8s
    const cycle = setInterval(() => {
      setBubbleIdx(i => (i + 1) % IDLE_BUBBLES.length);
      setShowBubble(true);
      setTimeout(() => setShowBubble(false), 3200);
    }, 8000);
    return () => { clearTimeout(first); clearInterval(cycle); };
  }, [open]);

  const bottomRef       = useRef<HTMLDivElement>(null);
  const inputRef        = useRef<HTMLInputElement>(null);
  const streamBuf       = useRef('');
  const flushTimer      = useRef<ReturnType<typeof setInterval> | null>(null);
  const typingTimer     = useRef<ReturnType<typeof setTimeout> | null>(null);
  const typingActive    = useRef(false);

  // Typing → robot shows wink + surprised expression while user types
  const handleInputActivity = () => {
    if (!typingActive.current) {
      typingActive.current = true;
      if (moodTimer.current) clearTimeout(moodTimer.current);
      setMood('typing');
    }
    if (typingTimer.current) clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => {
      typingActive.current = false;
      setMood(m => m === 'typing' ? 'idle' : m);
    }, 1200);
  };

  // Clean up worker on unmount
  useEffect(() => {
    return () => { mlcWorker?.terminate(); };
  }, []);

  useEffect(() => {
    if (open && !minimised) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [lines, open, minimised, thinking]);

  const push = (newLines: Line[]) => setLines((p) => [...p, ...newLines]);

  const run = async (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    push([{ type: 'input', text: `$ ${raw.trim()}` }]);
    setHistory((h) => [raw.trim(), ...h]);
    setHistIdx(-1);

    // ── Greetings ────────────────────────────────────────────────────────────
    const greetings = ['hi', 'hello', 'hey', 'sup', 'yo', 'hiya', 'howdy', 'greetings', 'gm', 'good morning', 'good evening', 'namaste', 'helo', 'hii', 'hihi'];
    if (greetings.includes(cmd)) {
      const responses = [
        ['  Hey! 👋  A real human typed into a terminal.', '  Genuinely rare. Type  help  to see what\'s possible.'],
        ['  Hello! 🤝  You skipped the scroll and went straight to the terminal.', '  Raj respects that. Type  whoami  or  connect  to continue.'],
        ['  Hello, world() 🌍  — had to say it.', '  Type  skills  if you\'re here for business, or  joke  to warm up first.'],
        ['  Hey there 🫡  You found the terminal. Most people never do.', '  Type  experience  to see 7.5 years in ASCII, or  help  for the full menu.'],
        ['  Namaste! 🙏  Welcome to the most interactive portfolio you\'ve visited today.', '  Type  help  — there\'s a lot more in here than it looks.'],
      ];
      const r = responses[Math.floor(Math.random() * responses.length)];
      push(r.map(t => ({ type: 'ai' as Line['type'], text: t })));
      flashMood('happy', 2500);
      return;
    }

    if (cmd === 'clear') {
      setLines(WELCOME.map((t) => ({ type: 'system', text: t })));
      return;
    }
    if (cmd === 'sudo hire me' || cmd === 'sudo collab') {
      push(SUDO_HIRE.map((t) => ({ type: 'ai', text: t })));
      flashMood('excited', 4000);
      return;
    }

    if (cmd === 'load ai') {
      if (llmEngine) {
        push([{ type: 'ai', text: '  🧠 AI is already loaded and ready. Ask me anything!' }]);
        return;
      }
      if (loadingAI) {
        push([{ type: 'output', text: '  ⏳ Already loading... patience, young padawan.' }]);
        return;
      }
      setLoadingAI(true);
      push([
        { type: 'ai', text: '  🧠 Loading Qwen2.5-0.5B offline LLM (~400MB)...' },
        { type: 'output', text: '  ↳ Downloads once, cached in your browser forever.' },
        { type: 'output', text: '  ↳ No API key. No server. Runs on YOUR machine. 🔒' },
        { type: 'output', text: '' },
      ]);
      try {
        const webllm = await import('@mlc-ai/web-llm');
        // Spin up a dedicated Web Worker so inference never touches the main thread
        mlcWorker = new Worker(
          new URL('../workers/mlc-worker.ts', import.meta.url),
          { type: 'module' }
        );
        llmEngine = await webllm.CreateWebWorkerMLCEngine(mlcWorker, MODEL_ID, {
          initProgressCallback: (p: { progress: number; text: string }) => {
            const pct = Math.round(p.progress * 100);
            const filled = Math.round(pct / 5);
            const bar = '█'.repeat(filled) + '░'.repeat(20 - filled);
            setLines((prev) => {
              const last = prev[prev.length - 1];
              const progressLine: Line = { type: 'progress', text: `  [${bar}] ${pct}%  ${p.text.slice(0, 40)}` };
              if (last?.type === 'progress') return [...prev.slice(0, -1), progressLine];
              return [...prev, progressLine];
            });
          },
        });
        setLoadingAI(false);
        setAiReady(true);
        push([
          { type: 'ai', text: '' },
          { type: 'ai', text: '  ✅ AI loaded! Running 100% offline in your browser.' },
          { type: 'ai', text: '  🎉 Now type anything — I\'ll actually think about it.' },
        ]);
        flashMood('excited', 3000);
        // Warmup: compile WebGPU shaders now so first real query doesn't hang
        setTimeout(() => warmupEngine(), 800);
      } catch {
        setLoadingAI(false);
        push([
          { type: 'error', text: '  ❌ Failed to load AI. Your browser may not support WebGPU.' },
          { type: 'error', text: '  Try Chrome 113+ or Edge 113+. Firefox? Sorry, no WebGPU yet.' },
        ]);
      }
      return;
    }

    if (cmd === 'connect' || cmd === 'hire') {
      const result = await COMMANDS['connect']();
      push(result.map((t) => ({ type: 'output', text: t })));
      flashMood('excited', 3500);
      return;
    }

    const fn = COMMANDS[cmd];
    if (fn) {
      const result = await fn();
      push(result.map((t) => ({ type: 'output', text: t })));
      flashMood('happy', 2000);
      return;
    }

    if (aiReady && llmEngine) {
      const msg = THINKING_MSGS[Math.floor(Math.random() * THINKING_MSGS.length)];
      setThinkMsg(msg);
      setThinking(true);

      const placeholderIdx = { current: -1 };
      setLines((prev) => {
        placeholderIdx.current = prev.length;
        return [...prev, { type: 'ai' as Line['type'], text: '  ' }];
      });

      streamBuf.current = '';

      // Let React flush the thinking indicator to the DOM before we start
      // blocking on inference — user sees feedback before any freeze
      await yieldToMain();

      flushTimer.current = setInterval(() => {
        if (streamBuf.current === '') return;
        const chunk = streamBuf.current;
        streamBuf.current = '';
        // startTransition marks this as low-priority — React can interrupt it
        // to handle urgent updates like keystrokes without any lag
        startTransition(() => {
          setLines((prev) => {
            const copy = [...prev];
            const idx = placeholderIdx.current;
            if (idx < 0 || idx >= copy.length) return prev;
            copy[idx] = { type: 'ai', text: copy[idx].text + chunk };
            return copy;
          });
        });
      }, 150);

      askLLMStream(
        raw.trim(),
        (delta) => { streamBuf.current += delta; },
        () => {
          if (flushTimer.current) clearInterval(flushTimer.current);
          const remaining = streamBuf.current;
          streamBuf.current = '';
          startTransition(() => {
            setLines((prev) => {
              const copy = [...prev];
              const idx = placeholderIdx.current;
              if (idx >= 0 && idx < copy.length && remaining) {
                copy[idx] = { type: 'ai', text: copy[idx].text + remaining };
              }
              return copy;
            });
          });
          setThinking(false);
        },
        () => {
          if (flushTimer.current) clearInterval(flushTimer.current);
          setThinking(false);
          push([{ type: 'error', text: '  Brain.exe crashed. Try again or type  help' }]);
        },
      );
    } else {
      push([
        { type: 'error', text: `  command not found: ${cmd}` },
        { type: 'output', text: '  💡 Type  load ai  to enable offline AI, or type  help' },
      ]);
    }
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // Stop typing mode immediately — robot reacts before run() even starts
      if (typingTimer.current) clearTimeout(typingTimer.current);
      typingActive.current = false;
      const val = inputRef.current?.value ?? '';
      if (inputRef.current) inputRef.current.value = '';
      run(val);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(next);
      if (inputRef.current) inputRef.current.value = history[next] ?? '';
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      if (inputRef.current) inputRef.current.value = next === -1 ? '' : history[next];
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const lineColor: Record<Line['type'], string> = {
    system:   'text-primary/75',
    input:    'text-accent font-semibold',
    output:   'text-foreground/80',
    error:    'text-destructive/80',
    ai:       'text-emerald-400/90',
    thinking: 'text-yellow-400/70 italic',
    progress: 'text-cyan-400/80 font-mono',
  };

  const robotMood: BotMood = thinking ? 'thinking' : mood;

  return (
    <>
      {/* ── Persistent robot + terminal stack ─────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

        {/* Robot — always visible */}
        <div className="relative">
          {/* Speech bubble — shown when terminal is closed */}
          <div
            className="absolute right-full mr-3 top-6 pointer-events-none"
            style={{
              opacity: showBubble && !open ? 1 : 0,
              transform: showBubble && !open ? 'translateX(0) scale(1)' : 'translateX(8px) scale(0.92)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
            }}
          >
            <div className="relative bg-card/95 backdrop-blur-sm border border-primary/30 rounded-2xl rounded-br-sm px-3 py-2 shadow-xl shadow-black/40 whitespace-nowrap">
              <p className="text-[11px] font-mono text-primary/90">{IDLE_BUBBLES[bubbleIdx]}</p>
              {/* Tail */}
              <div className="absolute right-[-6px] top-3 w-0 h-0"
                style={{ borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '7px solid hsl(var(--primary) / 0.3)' }}
              />
            </div>
          </div>

          {/* Robot face — clickable when terminal is closed/minimised */}
          <div
            onClick={() => { setOpen(true); setMinimised(false); }}
            className="cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95"
            title="Open terminal"
          >
            <RobotFace mood={robotMood} blinking={blinking} />
          </div>
        </div>

        {/* Terminal window — shown when open */}
        {open && (
          <div
            className={`w-[min(580px,calc(100vw-1.5rem))] rounded-xl overflow-hidden shadow-2xl shadow-black/70 border border-border/50 transition-all duration-200 ${minimised ? 'h-10' : 'h-[430px]'}`}
            style={{ background: 'hsl(220 20% 4% / 0.97)', backdropFilter: 'blur(16px)' }}
          >
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/8 select-none">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <button onClick={() => setOpen(false)} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                  <button onClick={() => setMinimised(m => !m)} className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-green-500/30" />
                </div>
                <span className="text-[11px] font-mono text-white/40 ml-1">
                  raj.dev — portfolio-cli
                  {aiReady && <span className="text-emerald-400/70"> 🧠 offline AI</span>}
                  {loadingAI && <span className="text-yellow-400/70"> ⏳ loading model...</span>}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setMinimised(m => !m)} className="p-1 hover:text-white/80 text-white/30 transition-colors">
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <button onClick={() => setOpen(false)} className="p-1 hover:text-white/80 text-white/30 transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Output */}
            {!minimised && (
              <div
                className="flex flex-col h-[calc(430px-88px)] overflow-y-auto px-4 pt-3 pb-1 cursor-text"
                onClick={() => inputRef.current?.focus()}
              >
                {lines.map((line, i) => (
                  <pre
                    key={i}
                    className={`font-mono text-xs leading-5 whitespace-pre-wrap break-all ${lineColor[line.type]}`}
                  >
                    {line.text}
                  </pre>
                ))}
                {thinking && (
                  <div className="flex items-center gap-2 font-mono text-xs text-yellow-400/70 italic py-1">
                    <span className="flex gap-0.5">
                      <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
                      <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
                      <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
                    </span>
                    {thinkMsg}
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            )}

            {/* Input */}
            {!minimised && (
              <div className="flex items-center gap-2 px-4 py-2.5 border-t border-white/8 bg-white/3">
                <span className="font-mono text-xs text-accent/80 shrink-0">visitor@raj.dev:~$</span>
                <input
                  ref={inputRef}
                  onKeyDown={onKey}
                  onInput={handleInputActivity}
                  disabled={thinking}
                  className="flex-1 bg-transparent font-mono text-xs text-white/85 outline-none caret-primary placeholder:text-white/20 disabled:opacity-40"
                  placeholder={thinking ? thinkMsg : 'type a command or ask me anything...'}
                  autoComplete="off"
                  spellCheck={false}
                />
              </div>
            )}
          </div>
        )}

      </div>{/* end flex column */}
    </>
  );
}
