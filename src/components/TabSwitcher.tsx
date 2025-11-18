import { useState } from "react";
import { motion } from "motion/react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
}

export function TabSwitcher({ tabs }: TabSwitcherProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-1 p-1 bg-muted/50 dark:bg-card/50 rounded-full border border-black/5 dark:border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative px-6 py-2.5 text-[15px] rounded-full transition-colors"
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white dark:bg-card shadow-sm rounded-full border border-black/5 dark:border-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors ${
                activeTab === tab.id ? "text-foreground" : "text-muted-foreground"
              }`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="relative">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={false}
            animate={{
              opacity: activeTab === tab.id ? 1 : 0,
              y: activeTab === tab.id ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            className={activeTab === tab.id ? "block" : "hidden"}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
}