import { useState, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import ProfilePic from '../assets/images/profile_pic.jpeg';

const stats = [
  { value: '7.5+', label: 'Years Exp.' },
  { value: '9+',   label: 'Projects' },
  { value: 'F500', label: 'Clients' },
  { value: 'AI/ML', label: 'Explorer' },
];

const DEFAULT_TILT = { x: 6, y: -10 };

const ProfileHeader = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState(DEFAULT_TILT);
  const [shine, setShine] = useState({ x: 30, y: 30, opacity: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const dx = (e.clientX - rect.left) / rect.width;   // 0→1
    const dy = (e.clientY - rect.top)  / rect.height;  // 0→1
    // map to ±20deg tilt
    setTilt({ x: (0.5 - dy) * 28, y: (dx - 0.5) * 28 });
    setShine({ x: dx * 100, y: dy * 100, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt(DEFAULT_TILT);
    setShine(prev => ({ ...prev, opacity: 0 }));
    setHovered(false);
  };

  return (
    <div className="relative overflow-hidden -mx-6 md:-mx-8 lg:-mx-12 mb-4 px-6 md:px-8 lg:px-12 pt-12 md:pt-16 pb-12 md:pb-14">
      {/* Background: dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      {/* Glow orbs */}
      <div className="absolute top-0 left-0 w-[320px] md:w-[480px] h-[320px] md:h-[480px] bg-primary/8 rounded-full blur-[100px] md:blur-[120px] animate-glow pointer-events-none" />
      <div
        className="absolute bottom-0 right-0 w-[240px] md:w-[360px] h-[240px] md:h-[360px] bg-accent/8 rounded-full blur-[80px] md:blur-[100px] animate-glow pointer-events-none"
        style={{ animationDelay: '1.8s' }}
      />

      <div className="relative flex flex-col md:flex-row md:items-center gap-8 md:gap-14">

        {/* Profile pic — top on mobile, right on desktop */}
        <div className="shrink-0 self-center order-first md:order-last opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="relative animate-float"
            style={{ perspective: '600px', cursor: 'default' }}
          >
            {/* Glow bloom — expands on hover */}
            <div
              className="absolute inset-[-20px] md:inset-[-28px] rounded-2xl bg-gradient-to-br from-primary/50 to-accent/40 blur-3xl animate-glow"
              style={{ transition: 'opacity 0.3s ease', opacity: hovered ? 1.4 : 1 }}
            />

            {/* 3D card wrapper */}
            <div
              style={{
                transform: `rotateY(${tilt.y}deg) rotateX(${tilt.x}deg)`,
                transformStyle: 'preserve-3d',
                transition: hovered
                  ? 'transform 0.08s ease-out'
                  : 'transform 0.5s ease-out',
              }}
            >
              {/* Back depth layers */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/70 to-accent/50"
                style={{ transform: 'translateZ(-10px)', filter: 'brightness(0.45)' }}
              />
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/50 to-accent/30"
                style={{ transform: 'translateZ(-5px)', filter: 'brightness(0.6)' }}
              />

              {/* Gradient border face */}
              <div
                className="absolute inset-[-2px] rounded-2xl bg-gradient-to-br from-primary via-accent to-primary/80"
                style={{ transform: 'translateZ(0)' }}
              />

              {/* Image */}
              <div
                className="relative w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden"
                style={{
                  transform: 'translateZ(2px)',
                  boxShadow: hovered
                    ? '0 32px 64px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.06)'
                    : '0 24px 48px rgba(0,0,0,0.65)',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <img
                  src={ProfilePic}
                  alt="Rajkishor Maharana"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 30%' }}
                />
              </div>

              {/* Glass shine — follows cursor */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  transform: 'translateZ(3px)',
                  background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.10) 35%, transparent 65%)`,
                  opacity: shine.opacity,
                  transition: hovered ? 'opacity 0.15s ease' : 'opacity 0.4s ease',
                }}
              />

              {/* Static top-left gloss (always visible) */}
              <div
                className="absolute inset-[2px] rounded-2xl pointer-events-none"
                style={{
                  transform: 'translateZ(3px)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 40%, transparent 60%)',
                }}
              />
            </div>

            {/* Status badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-card/95 backdrop-blur-sm rounded-full px-3 py-1 border border-green-500/40 shadow-xl shadow-black/40 whitespace-nowrap">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-green-400 font-medium">available & caffeinated</span>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4 opacity-0 animate-fade-in"
            style={{ animationFillMode: 'forwards' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Full Stack Engineer · Java + MERN · AI/RAG
          </div>

          {/* Name */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight mb-3 opacity-0 animate-fade-in"
            style={{ animationDelay: '80ms', animationFillMode: 'forwards' }}
          >
            <span className="text-gradient">Rajkishor</span>
            <br />
            <span className="text-foreground">Maharana</span>
          </h1>

          {/* Tagline — shorter on mobile */}
          <p
            className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed mb-1.5 opacity-0 animate-fade-in"
            style={{ animationDelay: '160ms', animationFillMode: 'forwards' }}
          >
            7.5+ years building enterprise systems — Java/Spring Boot, Node.js, React/TypeScript, Kafka, AWS.
            Micro Frontend architect, GenAI/RAG integrator, Fortune 500 delivery across Healthcare, Telecom, BFSI, Retail & Aviation.
          </p>
          <div className="mb-5" />

          {/* Stats — 2-col grid on mobile, flex row on desktop */}
          <div
            className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center md:justify-start gap-3 sm:gap-x-8 sm:gap-y-3 mb-7 opacity-0 animate-fade-in"
            style={{ animationDelay: '240ms', animationFillMode: 'forwards' }}
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl font-bold text-gradient leading-none">{s.value}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5 font-mono uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-wrap justify-center md:justify-start gap-2.5 opacity-0 animate-fade-in"
            style={{ animationDelay: '320ms', animationFillMode: 'forwards' }}
          >
            <a
              href="https://github.com/mrajkishor"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/85 transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/rajkishormaharana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:border-primary/40 hover:text-primary transition-all"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:mrajkishor331@gmail.com"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:border-accent/40 hover:text-accent transition-all"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
