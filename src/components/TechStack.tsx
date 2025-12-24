import TechBadge from './TechBadge';

interface TechCategory {
  label: string;
  items: string[];
  variant?: 'default' | 'primary' | 'accent';
}

const techCategories: TechCategory[] = [
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js'],
    variant: 'primary',
  },
  {
    label: 'State Management',
    items: ['Redux Toolkit', 'React Query', 'Zustand'],
  },
  {
    label: 'UI & Design Systems',
    items: ['Tailwind CSS', 'MUI', 'Atomic Design', 'Storybook'],
  },
  {
    label: 'Architecture',
    items: ['Micro Frontends', 'Module Federation', 'Component-driven'],
    variant: 'accent',
  },
  {
    label: 'Platforms',
    items: ['Web', 'React Native', 'Electron.js'],
  },
  {
    label: 'Testing & Tooling',
    items: ['Jest', 'React Testing Library', 'Cypress', 'Webpack', 'Vite'],
  },
  {
    label: 'DevOps',
    items: ['CI/CD', 'Docker', 'AWS', 'Vercel'],
  },
];

const TechStack = () => {
  return (
    <div className="space-y-4">
      {techCategories.map((category, idx) => (
        <div 
          key={category.label} 
          className="opacity-0 animate-slide-in"
          style={{ animationDelay: `${300 + idx * 80}ms`, animationFillMode: 'forwards' }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground w-36 shrink-0">
              {category.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <TechBadge key={item} variant={category.variant}>
                  {item}
                </TechBadge>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
