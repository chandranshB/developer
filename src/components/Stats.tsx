import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

interface StatItemProps {
  stat: Stat;
  index: number;
}

function StatItem({ stat, index }: StatItemProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const controls = animate(count, stat.value, {
            duration: 2,
            delay: index * 0.2,
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [count, stat.value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-10 rounded-[28px] glass-card border border-black/5 dark:border-white/5 text-center hover:shadow-xl transition-all duration-300"
    >
      <div className="text-[48px] md:text-[56px] leading-none tracking-tight text-primary mb-3">
        <motion.span>{rounded}</motion.span>
        {stat.suffix && <span className="text-primary">{stat.suffix}</span>}
      </div>
      <p className="text-[17px] text-muted-foreground">{stat.label}</p>
    </motion.div>
  );
}

const stats: Stat[] = [
  { value: 5, label: "Years Experience", suffix: "+" },
  { value: 10, label: "Projects Completed", suffix: "+" },
  { value: 5, label: "Happy Clients", suffix: "+" },
  { value: 100, label: "Client Satisfaction", suffix: "%" },
];

export function Stats() {
  return (
    <section className="py-32 px-5 md:px-8">
      <div className="max-w-[980px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}