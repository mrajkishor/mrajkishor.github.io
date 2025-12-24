interface SectionProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const Section = ({ title, children, delay = 0 }: SectionProps) => {
  return (
    <section 
      className="opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-8 mb-4 pb-2 border-b border-border flex items-center gap-2">
        <span className="w-1 h-6 bg-primary rounded-full" />
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
