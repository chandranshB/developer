import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (currentPage !== "home") {
      onNavigate("home");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const menuItems = [
    { label: "About", action: () => scrollToSection("about") },
    { label: "Work", action: () => handleNavigation("projects") },
    { label: "Insights", action: () => handleNavigation("insights") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-black/5 dark:border-white/10 bg-white/80 dark:bg-background/80 backdrop-blur-xl">
      <nav className="max-w-[980px] mx-auto px-5 py-4 md:px-8">
        <div className="flex items-center justify-between"> 
          <button
            onClick={() => handleNavigation("home")}
            className="text-[21px] hover:text-primary transition-colors tracking-tight"
          >
            shanDran
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-[17px] text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-4 space-y-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="block w-full text-left text-[17px] text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}