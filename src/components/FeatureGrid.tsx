import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative p-8 rounded-[28px] bg-white dark:bg-card border border-black/5 dark:border-white/5 hover:shadow-xl transition-all duration-500">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-[21px] leading-[1.19] tracking-tight mb-3">
                {feature.title}
              </h3>
              <p className="text-[17px] text-muted-foreground leading-[1.5]">
                {feature.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}