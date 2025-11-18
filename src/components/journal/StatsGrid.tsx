interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
}

export function StatsGrid({ stats, columns = 3 }: StatsGridProps) {
  const colClasses = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${colClasses[columns]} gap-6 my-8`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-6 rounded-[20px] bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/5 border border-primary/20"
        >
          <div className="text-[40px] md:text-[48px] leading-none tracking-tight text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-[17px] mb-1">{stat.label}</div>
          {stat.description && (
            <div className="text-[15px] text-muted-foreground">{stat.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}
