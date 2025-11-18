import { motion } from "motion/react";
import { Badge } from "../components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { journalEntries } from "../data/journalEntries";

interface InsightsPageProps {
  onEntryClick: (id: string) => void;
}

export function InsightsPage({ onEntryClick }: InsightsPageProps) {
  return (
    <div className="min-h-screen pt-24 pb-32 px-5 md:px-8">
      <div className="max-w-[980px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">Journal</p>
          <h1 className="text-[48px] md:text-[64px] leading-[1.05] tracking-tight mb-6">
            Insights & Learnings
          </h1>
          <p className="text-[21px] text-muted-foreground max-w-[700px] leading-[1.4]">
            Real-time problems I face, solutions I discover, and things I'm currently working on.
          </p>
        </motion.div>

        {/* Journal Entries */}
        <div className="space-y-6">
          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onEntryClick(entry.id)}
              className="bg-white dark:bg-card rounded-[28px] p-8 md:p-10 border border-black/5 dark:border-white/5 hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between gap-6 mb-4">
                <div className="flex-1">
                  <h2 className="text-[28px] md:text-[32px] leading-[1.125] tracking-tight mb-3 group-hover:text-primary transition-colors">
                    {entry.title}
                  </h2>
                  <p className="text-[17px] text-muted-foreground leading-[1.5] mb-4">
                    {entry.excerpt}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[15px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {entry.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {entry.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-[13px]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
