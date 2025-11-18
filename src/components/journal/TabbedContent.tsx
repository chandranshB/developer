import { useState } from "react";
import { motion } from "motion/react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabbedContentProps {
  tabs: Tab[];
}

export function TabbedContent({ tabs }: TabbedContentProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="my-8">
      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-4 py-2 text-[15px] transition-colors"
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className={activeTab === tab.id ? "text-foreground" : "text-muted-foreground"}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
