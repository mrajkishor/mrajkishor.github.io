export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Distributed Task Scheduler",
    description: "A horizontally scalable, fault-tolerant task orchestration engine built for backend workflows using DAG execution. Supports retries, scheduling, event-based triggers, and observability with Prometheus and Grafana.",
    technologies: ["Java", "Redis", "PostgreSQL", "Kafka", "JWT", "React", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/mrajkishor/Distributed-Task-Scheduler",
    liveUrl: "https://coming-soon.com/distributed-task-scheduler"
  },
  {
    id: "2",
    title: "Chalaan.com – MSME Invoice & Inventory System",
    description: "A lightweight inventory and invoice management platform tailored for Indian MSMEs, kirana stores, and small retail shops. Currently focused on invoice tracking with plans to expand into multi-warehouse inventory, analytics, and payment reconciliation.",
    technologies: ["Next.js", "React Native", "Tailwind CSS", "AWS Lambda", "DynamoDB", "Stripe", "Firebase"],
    githubUrl: "https://github.com/mrajkishor/IMS-Invoice-services",
    liveUrl: "https://www.chalaan.com"
  },
  {
    id: "4",
    title: "StackSynapse – AI-Powered Frontend Knowledge Hub",
    description: "An AI-integrated learning platform designed to deliver curated frontend engineering content. Features include searchable topic maps, markdown-based notes, SEO-optimized routes, and future support for creator monetization and interactive tutorials.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MDX", "App Router", "OpenAI API", "Vercel", "AWS Serverless"],
    githubUrl: "https://github.com/mrajkishor/stacksynapse",
    liveUrl: "https://stacksynapse.com"
  },
  {
    id: "5",
    title: "ShopSync – AI-Powered Inventory & Logistics Platform",
    description: "An AI-driven inventory and logistics suite built for Indian SMBs and kirana stores. Combines invoice management, edge-based demand forecasting, and GNN-powered supplier optimization. Developed as part of an MCA final-year project, targeting the $20B Indian retail market.",
    technologies: ["React Native", "Next.js", "Spring Boot", "PostgreSQL", "Kafka", "Redis", "TensorFlow Lite", "PyTorch GNN", "Tailwind CSS", "Kubernetes"],
    githubUrl: "https://github.com/mrajkishor/ShopSync",
    liveUrl: "https://shopsync-dashboard.vercel.app"
  }
  ,
  {
    id: "6",
    title: "Portfolio Website",
    description: "A responsive personal portfolio website built with React and Tailwind CSS, featuring smooth animations and modern design.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "GitHub Pages"],
    githubUrl: "https://github.com/mrajkishor/mrajkishor.github.io",
    liveUrl: "https://mrajkishor.github.io"
  }
];