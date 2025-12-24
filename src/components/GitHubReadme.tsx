import ProfileHeader from './ProfileHeader';
import Section from './Section';
import TechStack from './TechStack';
import HighlightCard from './HighlightCard';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const aboutPoints = [
  'Deep expertise in React ecosystem with TypeScript, building complex SPAs and enterprise applications',
  'Architected frontend systems at scale — performance optimization, code splitting, and efficient rendering patterns',
  'Created and maintained design systems using Atomic Design principles, ensuring consistency across products',
  'Led Micro Frontend implementations with Module Federation, enabling independent team deployments',
  'Hands-on experience with Next.js for SSR/SSG and Electron.js for cross-platform desktop applications',
];

const highlights = [
  {
    title: 'Enterprise React Applications',
    description: 'Built large-scale SPAs handling complex state management, real-time data, and high-traffic scenarios with focus on performance and maintainability.',
  },
  {
    title: 'UI Design Systems',
    description: 'Developed comprehensive component libraries with Storybook documentation, theming support, and accessibility compliance following WCAG guidelines.',
  },
  {
    title: 'Micro Frontend Architecture',
    description: 'Implemented Module Federation to decompose monolithic frontends into independently deployable applications, enabling team autonomy and faster releases.',
  },
  {
    title: 'Desktop Applications',
    description: 'Delivered cross-platform desktop apps using Electron.js with native integrations, auto-updates, and optimized bundle sizes.',
  },
];

const values = [
  'Clean architecture and separation of concerns',
  'Performance optimization and Core Web Vitals',
  'Developer experience and tooling',
  'Building reusable systems over one-off features',
];

const markdownContent = `# Raj Kishor Maharana

**Senior Frontend Engineer | React Specialist**  
Hyderabad, India

Building performant, scalable frontend systems that power enterprise products and deliver exceptional user experiences.

---

## About Me

- Deep expertise in React ecosystem with TypeScript, building complex SPAs and enterprise applications
- Architected frontend systems at scale — performance optimization, code splitting, and efficient rendering patterns
- Created and maintained design systems using Atomic Design principles, ensuring consistency across products
- Led Micro Frontend implementations with Module Federation, enabling independent team deployments
- Hands-on experience with Next.js for SSR/SSG and Electron.js for cross-platform desktop applications

---

## Core Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React, TypeScript, Next.js |
| **State Management** | Redux Toolkit, React Query, Zustand |
| **UI & Design Systems** | Tailwind CSS, MUI, Atomic Design, Storybook |
| **Architecture** | Micro Frontends, Module Federation, Component-driven |
| **Platforms** | Web, React Native, Electron.js |
| **Testing & Tooling** | Jest, React Testing Library, Cypress, Webpack, Vite |
| **DevOps** | CI/CD, Docker, AWS, Vercel |

---

## Highlighted Work

### Enterprise React Applications
Built large-scale SPAs handling complex state management, real-time data, and high-traffic scenarios with focus on performance and maintainability.

### UI Design Systems
Developed comprehensive component libraries with Storybook documentation, theming support, and accessibility compliance following WCAG guidelines.

### Micro Frontend Architecture
Implemented Module Federation to decompose monolithic frontends into independently deployable applications, enabling team autonomy and faster releases.

### Desktop Applications
Delivered cross-platform desktop apps using Electron.js with native integrations, auto-updates, and optimized bundle sizes.

---

## What I Care About

- Clean architecture and separation of concerns
- Performance optimization and Core Web Vitals
- Developer experience and tooling
- Building reusable systems over one-off features

---

## Contact

- **LinkedIn:** [linkedin.com/in/rajkishormaharana](https://linkedin.com/in/rajkishormaharana)
- **GitHub:** [github.com/mrajkishor](https://github.com/mrajkishor)

Open to interesting conversations about frontend architecture, performance, and building great products.
`;

const GitHubReadme = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(markdownContent);
      setCopied(true);
      toast.success('README copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-accent/60" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
            </div>
            <span className="text-sm font-mono text-muted-foreground">README.md</span>
          </div>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-medium transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy Markdown'}
          </button>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-card rounded-xl border border-border p-8 md:p-12 card-shadow">
          <ProfileHeader />

          <Section title="About Me" delay={100}>
            <ul className="space-y-3">
              {aboutPoints.map((point, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-3 text-muted-foreground opacity-0 animate-slide-in"
                  style={{ animationDelay: `${200 + idx * 60}ms`, animationFillMode: 'forwards' }}
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Core Tech Stack" delay={200}>
            <TechStack />
          </Section>

          <Section title="Highlighted Work" delay={400}>
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <HighlightCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  delay={500 + idx * 100}
                />
              ))}
            </div>
          </Section>

          <Section title="What I Care About" delay={600}>
            <ul className="space-y-2">
              {values.map((value, idx) => (
                <li 
                  key={idx}
                  className="flex items-center gap-3 text-muted-foreground opacity-0 animate-slide-in"
                  style={{ animationDelay: `${700 + idx * 60}ms`, animationFillMode: 'forwards' }}
                >
                  <span className="text-accent">→</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Contact" delay={800}>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="font-medium text-foreground">LinkedIn:</span>
                <a 
                  href="https://linkedin.com/in/rajkishormaharana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/rajkishormaharana
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium text-foreground">GitHub:</span>
                <a 
                  href="https://github.com/mrajkishor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/mrajkishor
                </a>
              </p>
              <p 
                className="mt-6 text-sm italic opacity-0 animate-fade-in"
                style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
              >
                Open to interesting conversations about frontend architecture, performance, and building great products.
              </p>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default GitHubReadme;
