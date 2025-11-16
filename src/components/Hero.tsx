import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-5 pt-20 md:px-8">
      <div className="max-w-[980px] w-full text-center space-y-8 py-20">
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
