import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export function FeatureCard({ icon: Icon, title, description, color = "primary" }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-[20px] glass-card border border-black/5 dark:border-white/5 hover:shadow-lg transition-all">
      {Icon && (
        <div className={`w-12 h-12 rounded-full bg-${color}/10 flex items-center justify-center mb-4`}>
          <Icon className={`w-6 h-6 text-${color}`} />
        </div>
      )}
      <h3 className="text-[19px] leading-[1.3] tracking-tight mb-2">
        {title}
      </h3>
      <p className="text-[17px] text-muted-foreground leading-[1.5]">
        {description}
      </p>
    </div>
  );
}

interface FeatureGridProps {
  features: Array<{
    icon?: LucideIcon;
    title: string;
    description: string;
    color?: string;
  }>;
  columns?: 2 | 3;
}

export function FeatureCardGrid({ features, columns = 3 }: FeatureGridProps) {
  const colClasses = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <div className={`grid ${colClasses} gap-6 my-8`}>
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}
