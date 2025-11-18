import { motion } from "motion/react";
import { 
  Code2, 
  FileCode, 
  Triangle, 
  Hexagon, 
  Palette, 
  Database, 
  Leaf, 
  Diamond, 
  Plug, 
  Container, 
  Cloud, 
  Package, 
  Target, 
  Sparkles, 
  TestTube, 
  CircuitBoard, 
  Smartphone, 
  Train, 
  Circle,
  Zap
} from "lucide-react";

const skills = [
  { name: "React", icon: Code2 },
  { name: "TypeScript", icon: FileCode },
  { name: "Next.js", icon: Triangle },
  { name: "Node.js", icon: Hexagon },
  { name: "Tailwind CSS", icon: Palette },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Leaf },
  { name: "GraphQL", icon: Diamond },
  { name: "REST API", icon: Plug },
  { name: "Docker", icon: Container },
  { name: "AWS", icon: Cloud },
  { name: "Git", icon: Package },
  { name: "Figma", icon: Target },
  { name: "UI/UX", icon: Sparkles },
  { name: "Jest", icon: TestTube },
  { name: "Cypress", icon: CircuitBoard },
  { name: "React Native", icon: Smartphone },
  { name: "Express", icon: Train },
  { name: "Redis", icon: Circle },
  { name: "Vercel", icon: Zap },
];

export function SkillsBadges() {
  return (
    <section className="py-32 px-5 md:px-8 bg-white dark:bg-background">
      <div className="max-w-[980px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">Tech Stack</p>
          <h2 className="text-[40px] md:text-[48px] leading-[1.08] tracking-tight mb-4">
            Technologies I use
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-3 bg-muted/50 dark:bg-card rounded-full border border-black/5 dark:border-white/5 text-[15px] hover:bg-white dark:hover:bg-card hover:shadow-md transition-all cursor-default flex items-center gap-2.5"
              >
                <Icon className="w-[18px] h-[18px] text-primary" />
                <span>{skill.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}