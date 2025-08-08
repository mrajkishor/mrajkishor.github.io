import { Card, CardContent } from '@/components/ui/card';
import { 
  FiCode, 
  FiDatabase, 
  FiCloud, 
  FiSmartphone,
  FiGitBranch,
  FiTool
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiCode className="w-6 h-6" />,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
      title: "Backend",
      icon: <FiDatabase className="w-6 h-6" />,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"]
    },
    {
      title: "Cloud & DevOps",
      icon: <FiCloud className="w-6 h-6" />,
      skills: ["AWS", "Vercel", "Docker", "GitHub Actions", "Nginx", "Linux"]
    },
    {
      title: "Mobile & Desktop",
      icon: <FiSmartphone className="w-6 h-6" />,
      skills: ["React Native", "Electron", "PWA", "Responsive Design", "Mobile-First", "Cross-Platform"]
    },
    {
      title: "Version Control",
      icon: <FiGitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub", "GitLab", "Branch Management", "Code Review", "CI/CD"]
    },
    {
      title: "Tools & Testing",
      icon: <FiTool className="w-6 h-6" />,
      skills: ["Jest", "Cypress", "Webpack", "Vite", "ESLint", "Prettier"]
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
              A comprehensive toolkit of modern technologies and frameworks that I use to build robust applications
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
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className="flex items-center justify-between p-2 rounded-md bg-background/50 hover:bg-primary/10 transition-smooth"
                      >
                        <span className="text-sm font-medium">{skill}</span>
                        <div className="flex space-x-1">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div 
                              key={dot}
                              className={`w-2 h-2 rounded-full ${
                                dot <= 4 ? 'bg-primary' : 'bg-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
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