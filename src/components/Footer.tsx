import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 py-16 px-5 md:px-8 bg-white dark:bg-background">
      <div className="max-w-[980px] mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/chandranshB"
              target="_blank" 
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/chandranshbinjola/" 
              target="_blank"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            {/* <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a> */}
          </div>
          
          <div className="text-center">
            <p className="text-[13px] text-muted-foreground">
              © 2025 shanDran. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}