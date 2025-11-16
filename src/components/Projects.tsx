import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { url } from "inspector";

const projects = [
  {
    title: "seetaNarayan Travels web app",
    description: "A complete dynamic travel booking system with proper booking system and authentication.",
    image: "https://seetanarayantravels.in/assets/logo-main.png",
    url: "https://seetanarayantravels.in",
    tags: ["React", "Node.js", "PostgreSQL", "Vite", "PostgreSQL", "ESLint"],
    scale: 0.5,
    // color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Spectra GeoSolutions website",
    description: "A website for seectra-geosolutions",
    image: "images/spectraGeosolutions.webp",
    url: "https://spectrageosolutions.com",
    tags: ["PHP", "Jquery", "MySQL", "Linux", "devOps"],
    // scale: 0.96,
    // color: "from-purple-500 to-pink-500",
  },  {
    title: "Leave Calculator",
    description: "A website that tells you number of days you can miss/attend classes to be able to sit in the exams, i.e. 75%",
    image: "images/attCalc.svg",
    url:"https://chandranshb.github.io/attendanceTracker/",
    tags: ["HTML", "JavaScript", "CSS", "React"],
    color: "from-green-500 to-green-500",
    scale: 0.5,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-5 md:px-8">
      <div className="max-w-[980px] mx-auto">
        <div className="text-center mb-20">
          <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">Portfolio</p>
          <h2 className="text-[40px] md:text-[48px] leading-[1.08] tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-[19px] text-muted-foreground max-w-[600px] mx-auto leading-[1.5]">
            Recent projects that showcase my approach to design and development.
          </p>
        </div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <Card className="overflow-hidden border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    {/* wrapper allows independent scaling of the image without clobbering hover transforms on the img itself */}
                    <div
                      className="w-full h-full"
                      style={project.scale ? { transform: `scale(${project.scale})`, transformOrigin: 'center', transition: 'transform 0.7s' } : undefined}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 mix-blend-multiply`} />
                  </div>
                  
                  <div className={`p-12 lg:p-16 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-[32px] leading-[1.125] tracking-tight mb-4">
                      {project.title}
                    </h3>
                    <p className="text-[17px] text-muted-foreground leading-[1.5] mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="rounded-full px-3 py-1 text-[13px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center text-[17px] text-primary hover:text-primary/80 transition-colors group/link"
                        >
                          View project
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center text-[17px] text-muted-foreground opacity-60 cursor-not-allowed"
                          aria-disabled="true"
                        >
                          View project
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
