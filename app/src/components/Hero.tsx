import { Button } from '@/components/ui/button';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiBook } from 'react-icons/fi';

const Hero = () => {

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-16 md:pt-0"
    >      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-6 leading-tight mt-8 md:mt-0 break-words">


            Hi, I'm{' '}
            <span className="text-gradient">
              Rajkishor
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
            {/* Senior Frontend Engineer • React & TypeScript Specialist */}
            Frontend Developer • React
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I specialize in building scalable, high-performance web applications using React, TypeScript, and modern frontend tooling. With 7 years of experience, I focus on clean architecture, microfrontends, and developer-first UI systems that deliver real-world business impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="gradient-primary hover:shadow-primary transition-smooth"
            >
              View Projects
            </Button>

            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <FiMail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">

            <a
              href="/notes"
              className="p-3 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
              aria-label="View Notes"
            >
              <FiBook className="w-6 h-6" />
            </a>


            <a
              href="https://github.com/mrajkishor"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mrajkishor331"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="assets/doc/resume/FronteendDeveloperRajkishor.docx"
              download
              className="p-3 text-muted-foreground hover:text-accent transition-smooth hover:scale-110"
            >
              <FiDownload className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;