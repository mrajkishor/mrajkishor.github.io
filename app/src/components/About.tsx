import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      number: "7",
      label: "Years Experience"
    },
    {
      number: "10+",
      label: "Projects Completed"
    },
    {
      number: "15+",
      label: "Technologies Mastered"
    },
    {
      number: "100%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Senior frontend engineer with a passion for building scalable, performant, and user-centric applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a frontend engineer with 7 years of experience building modern, high-performance web applications across telecom, enterprise SaaS, and retail industries. My journey started with a curiosity for how websites work — and evolved into a career focused on engineering scalable, accessible, and maintainable UI systems.

              </p>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, I’ve specialized in React, TypeScript, and design system architecture. I’ve led projects involving microfrontend platforms, optimized rendering pipelines, and implemented complex state management patterns using Redux, Zustand, and React Query.

              </p>
              <p className="text-muted-foreground leading-relaxed">
                Outside of work, I enjoy mentoring junior developers, contributing to open-source tools, and staying active in the frontend community. I believe great software is not just built — it's designed with empathy and intention.

              </p>
            </div>

            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <p className="text-muted-foreground">Profile Photo Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-card border-border/50 hover:shadow-primary/20 transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {highlight.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {highlight.label}
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

export default About;