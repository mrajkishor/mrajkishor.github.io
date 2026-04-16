interface HighlightCardProps {
  title: string;
  description: string;
  icon?: string;
  metric?: string;
  delay?: number;
}

const HighlightCard = ({ title, description, icon, metric, delay = 0 }: HighlightCardProps) => {
  return (
    <div
      className="group p-5 rounded-xl glass hover:border-primary/30 hover:shadow-lg hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in cursor-default"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center shrink-0 transition-colors text-base">
          {icon ?? <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
              {title}
            </h3>
            {metric && (
              <span className="shrink-0 text-[10px] font-mono text-accent/70 bg-accent/8 border border-accent/15 rounded-full px-2 py-0.5 whitespace-nowrap">
                {metric}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
