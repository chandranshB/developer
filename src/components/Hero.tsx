import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 md:px-8 pt-20 overflow-hidden">
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-pink-500/20 blur-3xl" />
      </div>
      
      <div className="max-w-[980px] mx-auto text-center relative z-10">
        <div className="space-y-6">
          <h1 className="text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] tracking-tight">
            Developer.<br />Designer.<br />Creator.
          </h1>
          
          <p className="text-[21px] md:text-[24px] text-muted-foreground max-w-[700px] mx-auto leading-[1.4] tracking-tight">
            Crafting beautiful digital experiences that combine thoughtful design with efficiency & powerful technology.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            onClick={() => scrollToSection("projects")} 
            className="rounded-full px-8 h-12 text-[17px] bg-primary hover:bg-primary/90 transition-all"
          >
            See my work
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection("contact")}
            className="rounded-full px-8 h-12 text-[17px] text-primary hover:bg-primary/5 transition-all"
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}
