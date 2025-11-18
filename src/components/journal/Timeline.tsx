interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="my-12 space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary/20 last:pb-0 last:border-l-0">
          {/* Dot */}
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
          
          <div className="space-y-2">
            <div className="text-[13px] text-primary uppercase tracking-wide">{item.date}</div>
            <h3 className="text-[21px] leading-[1.3] tracking-tight">{item.title}</h3>
            <p className="text-[17px] text-muted-foreground leading-[1.5]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
