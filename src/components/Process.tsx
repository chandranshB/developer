import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description: "Understanding your goals, target audience, and project requirements.",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating intuitive interfaces with thoughtful user experiences.",
  },
  {
    icon: Code,
    title: "Development",
    description: "Building robust, scalable solutions with clean, maintainable code.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deploying your project and ensuring everything runs smoothly.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 px-5 md:px-8 bg-white dark:bg-background">
      <div className="max-w-[980px] mx-auto">
        <div className="text-center mb-20">
          <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">Process</p>
          <h2 className="text-[40px] md:text-[48px] leading-[1.08] tracking-tight mb-4">
            How I work
          </h2>
          <p className="text-[19px] text-muted-foreground max-w-[600px] mx-auto leading-[1.5]">
            A streamlined approach to turning your ideas into reality.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-[88px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-card border-2 border-primary/20 dark:border-primary/30 mb-6 z-10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-[21px] leading-[1.19] tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-muted-foreground leading-[1.5]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}