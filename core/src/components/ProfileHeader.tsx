import { Github, Linkedin, MapPin, User } from 'lucide-react';
import ProfilePic from '../assets/images/profile_pic.jpeg';

const ProfileHeader = () => {
  return (
    <header className="opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
      {/* Main header row */}
      <div className="flex flex-col gap-6 mb-4">
        {/* Profile info section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
          {/* Avatar */}
          <div className="relative shrink-0 self-center sm:self-start">
            <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 rounded-full bg-muted border-2 border-primary/30 flex items-center justify-center overflow-hidden">
              <User className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground" />
              <img
                src={ProfilePic}
                alt="Raj Kishor Maharana"
                className="w-full h-full object-cover rounded-full"
              />

            </div>
            <div className="absolute bottom-1 right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-background" />
          </div>

          {/* Name and title */}
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Raj Kishor Maharana
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-primary font-medium mt-1">
              Senior Frontend Engineer | React Specialist
            </p>

            {/* Location - shown inline on mobile */}
            <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground text-sm mt-2">
              <MapPin className="w-4 h-4" />
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6">
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
            <span className="text-sm font-mono hidden sm:inline">rajkishormaharana</span>
          </a>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-muted-foreground text-base sm:text-lg leading-relaxed border-l-2 border-primary pl-4">
        Building performant, scalable frontend systems that power enterprise products and deliver exceptional user experiences.
      </p>
    </header>
  );
};

export default ProfileHeader;
