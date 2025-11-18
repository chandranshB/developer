import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { projectsData } from "../data/projectsData";

interface ProjectsListPageProps {
  onProjectClick: (id: string) => void;
}

export function ProjectsListPage({ onProjectClick }: ProjectsListPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-32 px-5 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">Portfolio</p>
          <h1 className="text-[48px] md:text-[64px] leading-[1.05] tracking-tight mb-6">
            Featured Projects
          </h1>
          <p className="text-[21px] text-muted-foreground max-w-[700px] mx-auto leading-[1.4]">
            A collection of projects I've worked on, each with its own story and challenges.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onProjectClick(project.id)}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-card rounded-[28px] overflow-hidden border border-black/5 dark:border-white/5 hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 text-[13px] text-muted-foreground mb-4">
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.role}</span>
                  </div>

                  <h2 className="text-[28px] leading-[1.14] tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="text-[17px] text-muted-foreground leading-[1.5] mb-6">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-[13px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center text-[17px] text-primary group-hover:gap-2 transition-all">
                    View project
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
