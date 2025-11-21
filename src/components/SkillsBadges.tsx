import { motion } from "motion/react";
import { 
  SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, SiTailwindcss, 
  SiPostgresql, SiMongodb, SiGraphql, SiDocker, SiAmazon, // Changed from SiAmazonaws
  SiGit, SiFigma, SiJest, SiCypress, SiExpress, SiRedis, SiVercel 
} from "react-icons/si";
import { Plug, Sparkles, Smartphone } from "lucide-react";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "REST API", icon: Plug, color: "#0071e3" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" }, // Updated Icon
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "UI/UX", icon: Sparkles, color: "#FF69B4" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
  { name: "Cypress", icon: SiCypress, color: "#17202C" },
  { name: "React Native", icon: Smartphone, color: "#61DAFB" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
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
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative px-5 py-3 bg-muted/50 dark:bg-card rounded-full border border-black/5 dark:border-white/5 text-[15px] hover:bg-white dark:hover:bg-[#1d1d1f] hover:shadow-lg transition-all cursor-default flex items-center gap-2.5 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />
                
                {/* Icon */}
                <Icon 
                  className="w-[18px] h-[18px] text-muted-foreground group-hover:text-[var(--brand-color)] transition-colors duration-300"
                  style={{ "--brand-color": skill.color } as React.CSSProperties} 
                />
                
                {/* Text */}
                <span className="text-foreground/80 group-hover:text-foreground transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}