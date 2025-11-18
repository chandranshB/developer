import { motion, AnimatePresence } from "motion/react";
import { TabSwitcher } from "./TabSwitcher";
import { FeatureGrid } from "./FeatureGrid";
import { Layers, Zap, Globe, Database, Shield, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function TechShowcase() {
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const tabs = [
    {
      id: "frontend",
      label: "Frontend",
      content: (
        <FeatureGrid
          features={[
            {
              icon: Layers,
              title: "React & Next.js",
              description: "Building dynamic, server-rendered applications with the latest React features.",
            },
            {
              icon: Zap,
              title: "Performance",
              description: "Optimized code and lazy loading for lightning-fast user experiences.",
            },
            {
              icon: Globe,
              title: "Responsive Design",
              description: "Seamless experiences across all devices and screen sizes.",
            },
          ]}
        />
      ),
    },
    {
      id: "backend",
      label: "Backend",
      content: (
        <FeatureGrid
          features={[
            {
              icon: Database,
              title: "Database Design",
              description: "Efficient data modeling with PostgreSQL and MongoDB.",
            },
            {
              icon: Shield,
              title: "Security First",
              description: "Industry-standard authentication and data protection practices.",
            },
            {
              icon: Zap,
              title: "API Development",
              description: "RESTful and GraphQL APIs built for scale and performance.",
            },
          ]}
        />
      ),
    },
    {
      id: "mobile",
      label: "Mobile",
      content: (
        <FeatureGrid
          features={[
            {
              icon: Smartphone,
              title: "React Native",
              description: "Cross-platform mobile apps with native performance.",
            },
            {
              icon: Zap,
              title: "Offline Support",
              description: "Apps that work seamlessly even without connectivity.",
            },
            {
              icon: Globe,
              title: "App Store Ready",
              description: "Deployment expertise for both iOS and Android platforms.",
            },
          ]}
        />
      ),
    },
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <section className="py-32 px-5 md:px-8 dark:bg-background">
      <div className="max-w-[980px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">Expertise</p>
          <h2 className="text-[40px] md:text-[48px] leading-[1.08] tracking-tight mb-4">
            Full-stack capabilities
          </h2>
          <p className="text-[21px] text-muted-foreground max-w-[700px] mx-auto leading-[1.4]">
            From frontend to backend, mobile to web, delivering complete solutions.
          </p>
        </div>

        {/* Desktop Tabs */}
        {!isMobile && <TabSwitcher tabs={tabs} />}

        {/* Mobile Accordion */}
        {isMobile && (
          <div className="space-y-4">
            {tabs.map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-[28px] overflow-hidden border border-black/5 dark:border-white/5"
              >
                <button
                  onClick={() => toggleSection(tab.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-[19px] tracking-tight">{tab.label}</span>
                  <motion.div
                    animate={{ rotate: expandedSection === tab.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedSection === tab.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-6">
                        {tab.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}