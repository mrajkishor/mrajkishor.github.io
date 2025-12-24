interface HighlightCardProps {
  title: string;
  description: string;
  delay?: number;
}

const HighlightCard = ({ title, description, delay = 0 }: HighlightCardProps) => {
  return (
    <div 
      className="p-4 rounded-lg bg-card border border-border card-shadow opacity-0 animate-fade-in hover:border-primary/30 transition-colors"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default HighlightCard;
