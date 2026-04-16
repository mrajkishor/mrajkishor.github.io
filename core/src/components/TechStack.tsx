interface TechCategory {
  label: string;
  color: string;
  items: string[];
}

const techCategories: TechCategory[] = [
  {
    label: 'Frontend',
    color: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    items: ['React', 'TypeScript', 'Next.js', 'React Native', 'Redux Toolkit', 'React Query', 'Tailwind CSS', 'Storybook'],
  },
  {
    label: 'Backend',
    color: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    items: ['Java', 'Spring Boot', 'Spring Security', 'Node.js', 'Express.js', 'GraphQL', 'gRPC', 'REST APIs'],
  },
  {
    label: 'Messaging & Cache',
    color: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    items: ['Apache Kafka', 'Redis', 'AWS SQS', 'Webhooks'],
  },
  {
    label: 'Databases',
    color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'MySQL', 'Oracle', 'Elasticsearch', 'Qdrant'],
  },
  {
    label: 'Cloud & Infra',
    color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    items: ['AWS EKS', 'AWS Lambda', 'S3', 'RDS', 'API Gateway', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    label: 'Architecture',
    color: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    items: ['Microservices', 'MFE / Module Federation', 'DDD', 'Event-Driven', 'BFF Pattern', 'Serverless'],
  },
  {
    label: 'AI / ML',
    color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    items: ['RAG Pipelines', 'LLM Integration', 'MCP', 'Agentic AI', 'Vector DBs', 'Semantic Search', 'Prompt Engineering'],
  },
  {
    label: 'Testing & Tooling',
    color: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    items: ['JUnit 5', 'Mockito', 'Jest', 'Cypress', 'RTL', 'Nx Monorepo', 'Jenkins', 'GitLab CI'],
  },
];

const TechStack = () => {
  return (
    <div className="space-y-3">
      {techCategories.map((category, idx) => (
        <div
          key={category.label}
          className="grid grid-cols-[148px_1fr] gap-x-3 gap-y-2 items-start opacity-0 animate-slide-in"
          style={{ animationDelay: `${300 + idx * 60}ms`, animationFillMode: 'forwards' }}
        >
          {/* Fixed-width label column — text always starts at the same indent */}
          <span className={`tech-pill border justify-center w-full mt-0.5 ${category.color}`}>
            {category.label}
          </span>

          {/* Items column — wraps freely within its own column */}
          <div className="flex flex-wrap gap-1.5">
            {category.items.map((item) => (
              <span
                key={item}
                className="tech-pill bg-secondary/60 text-secondary-foreground border border-border hover:border-primary/30 hover:text-primary hover:bg-primary/5 cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
