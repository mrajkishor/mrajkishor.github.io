interface SectionProps {
  title: string;
  subtitle?: string;
  num?: string;
  children: React.ReactNode;
  delay?: number;
  id?: string;
}

const Section = ({ title, subtitle, num, children, delay = 0, id }: SectionProps) => {
  return (
    <section
      id={id}
      className="mt-20 opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="mb-7">
        <div className="flex items-center gap-3 mb-1">
          {num && (
            <span className="font-mono text-[11px] text-primary/45 font-semibold tracking-widest select-none">
              {num}
            </span>
          )}
          <h2 className="text-base md:text-lg font-semibold text-foreground tracking-wide uppercase">
            {title}
          </h2>
          <div className="flex-1 gradient-divider" />
        </div>
        {subtitle && (
          <p className="text-[11px] font-mono text-muted-foreground/50 italic mt-1 ml-0">
            // {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

export default Section;
