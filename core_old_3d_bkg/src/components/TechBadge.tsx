interface TechBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent';
}

const TechBadge = ({ children, variant = 'default' }: TechBadgeProps) => {
  const variants = {
    default: 'bg-muted text-muted-foreground',
    primary: 'bg-primary/10 text-primary border border-primary/20',
    accent: 'bg-accent/10 text-accent border border-accent/20',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-md text-sm font-mono font-medium ${variants[variant]} transition-colors hover:opacity-80`}>
      {children}
    </span>
  );
};

export default TechBadge;
