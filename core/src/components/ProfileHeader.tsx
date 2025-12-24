import { Github, Linkedin, MapPin } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <header className="opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Raj Kishor Maharana
          </h1>
          <p className="text-lg md:text-xl text-primary font-medium mt-1">
            Senior Frontend Engineer | React Specialist
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/mrajkishor" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm font-mono">mrajkishor</span>
          </a>
          <a 
            href="https://linkedin.com/in/rajkishormaharana" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
        <MapPin className="w-4 h-4" />
        <span>Hyderabad, India</span>
      </div>
      
      <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-primary pl-4">
        Building performant, scalable frontend systems that power enterprise products and deliver exceptional user experiences.
      </p>
    </header>
  );
};

export default ProfileHeader;
