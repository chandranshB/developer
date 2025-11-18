import { Button } from "./ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "motion/react";

export function CallToAction() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 px-5 md:px-8 relative overflow-hidden dark:bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-[780px] mx-auto text-center relative"
      >
        <div className="bg-white dark:bg-card rounded-[40px] p-12 md:p-16 shadow-2xl border border-black/5 dark:border-white/5">
          <h2 className="text-[40px] md:text-[48px] leading-[1.08] tracking-tight mb-6">Ready to start your project?</h2>
          <p className="text-[19px] text-muted-foreground leading-[1.5] mb-10 max-w-[600px] mx-auto">
            Let's discuss how we can work together to bring your vision to life with cutting-edge technology and beautiful design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="rounded-full px-8 h-12 text-[17px] bg-primary hover:bg-primary/90 transition-all"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              asChild
              className="rounded-full px-8 h-12 text-[17px] border-black/10 dark:border-white/10 hover:bg-muted/50 transition-all"
            >
              <a href="resume.pdf" download="HIRE ME ASAP.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download resume
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}