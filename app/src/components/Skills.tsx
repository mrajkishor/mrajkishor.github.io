import { Card, CardContent } from '@/components/ui/card';
import {
  FiCode,
  FiDatabase,
  FiCloud,
  FiSmartphone,
  FiGitBranch,
  FiTool,
  FiUsers,
  FiCpu
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "UI (Web & Mobile)",
      icon: <FiCode className="w-6 h-6" />,
      skills: [
        { name: "React", rating: 5 }
      ]
    },
    {
      title: "Backend",
      icon: <FiDatabase className="w-6 h-6" />,
      skills: [
        { name: "Java (Spring Ecosystem)", rating: 4 },
        { name: "Spring Boot", rating: 4 },
        { name: "REST APIs", rating: 4 }
      ]
    },
    {
      title: "Database",
      icon: <FiDatabase className="w-6 h-6" />,
      skills: [
        { name: "SQL", rating: 4 },
        { name: "NoSQL", rating: 4 }
      ]
    },
    {
      title: "System Design",
      icon: <FiGitBranch className="w-6 h-6" />,
      skills: [
        { name: "Microservices (Kafka, Redis, etc.)", rating: 5 },
        { name: "MFE (Webpack, Vite)", rating: 5 }
      ]
    },
    {
      title: "DevOps & CI/CD",
      icon: <FiTool className="w-6 h-6" />,
      skills: [
        { name: "GitLab CI/CD", rating: 2 },
        { name: "Azure DevOps", rating: 2 },
        { name: "Docker", rating: 2 },
        { name: "Kubernetes", rating: 2 }
      ]
    },
    {
      title: "CS Fundamentals",
      icon: <FiCpu className="w-6 h-6" />,
      skills: [
        { name: "Data Structures & Algorithms", rating: 5 },
        { name: "Operating Systems (Linux level)", rating: 5 },
        { name: "Computer Networks", rating: 5 }
      ]
    },
    {
      title: "Cloud",
      icon: <FiCloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", rating: 4 }
      ]
    },
    {
      title: "Data / AI & ML",
      icon: <FiTool className="w-6 h-6" />,
      skills: [
        { name: "Python", rating: 3 },
        { name: "Spark", rating: 3 },
        { name: "Flink", rating: 3 },
        { name: "Kafka", rating: 3 },
        { name: "NLP", rating: 3 },
        { name: "Chatbots", rating: 3 },
        { name: "LLM Models (BERT/Llama etc.)", rating: 3 },
        { name: "Data science and AI/ML (Basics)", rating: 3 }
      ]
    },
    {
      title: "Behavioral",
      icon: <FiUsers className="w-6 h-6" />,
      // handled differently: badges instead of dots
      skills: [
        { name: "Driving cross-functional delivery" },
        { name: "Team Leadership" },
        { name: "Stakeholder Management" },
        { name: "Mentoring" },
        { name: "Conflict Resolution" }
      ],
      isBehavioral: true
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A Java Full Stack toolkit covering frontend, backend, databases, cloud, system design, CS fundamentals, and modern AI/ML integrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="group shadow-card hover:shadow-primary/20 transition-smooth border-border/50 hover:border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth mr-3">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {category.isBehavioral ? (
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    ) : (
                      category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2 rounded-md bg-background/50 hover:bg-primary/10 transition-smooth"
                        >
                          <span className="text-sm font-medium">{skill.name}</span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((dot) => (
                              <div
                                key={dot}
                                className={`w-2 h-2 rounded-full ${dot <= (skill.rating ?? 0) ? 'bg-primary' : 'bg-muted'
                                  }`}
                              />
                            ))}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
