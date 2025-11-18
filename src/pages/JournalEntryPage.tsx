import { motion } from "motion/react";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { journalEntries } from "../data/journalEntries";
import { journalContent } from "../data/journalContent";

interface JournalEntryPageProps {
  entryId: string;
  onBack: () => void;
}

export function JournalEntryPage({ entryId, onBack }: JournalEntryPageProps) {
  const entry = journalEntries.find((e) => e.id === entryId);
  const Content = journalContent[entryId];

  if (!entry || !Content) return null;

  return (
    <div className="min-h-screen pt-24 pb-32 px-5 md:px-8">
      <div className="max-w-[780px] mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8 -ml-4 hover:bg-muted/50 rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Button>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {entry.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="rounded-full px-3 py-1 text-[13px]">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-[40px] md:text-[56px] leading-[1.05] tracking-tight mb-6">
            {entry.title}
          </h1>

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
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Content />
        </motion.article>
      </div>
    </div>
  );
}