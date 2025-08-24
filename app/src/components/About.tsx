import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      number: "7",
      label: "Years of Experience"
    },
    {
      number: "10+",
      label: "Full Stack Projects Delivered"
    },
    {
      number: "15+",
      label: "Technologies Worked With"
    },
    {
      number: "100%",
      label: "Commitment to Collaboration"
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
              Full Stack Java Developer passionate about building reliable, scalable, and user-focused applications across web and cloud platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                With 7 years of experience, I’ve worked on projects ranging from enterprise SaaS platforms to telecom and retail solutions.
                My journey began with curiosity for how software systems work, which grew into a career focused on full stack engineering and delivering business impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                On the frontend, I specialize in React and modern UI architectures. On the backend, I work with Java Spring Boot and microservices, integrating
                with SQL/NoSQL databases and deploying to AWS. My experience also covers system design, performance optimization, and cloud-native deployments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I enjoy mentoring, knowledge sharing, and collaborating with cross-functional teams. I believe impactful software is created
                when engineering excellence meets empathy and teamwork.
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
              <Card
                key={index}
                className="shadow-card border-border/50 hover:shadow-primary/20 transition-smooth"
              >
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
