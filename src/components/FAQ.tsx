import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. A typical website takes 4-8 weeks from initial consultation to launch, while larger applications can take 3-6 months. I'll provide a detailed timeline during our initial discussion.",
  },
  {
    question: "Do you work with clients remotely?",
    answer: "Absolutely! I work with clients worldwide and have established processes for remote collaboration including regular video calls, shared project boards, and real-time communication channels.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various databases. I'm always learning new tools and frameworks to deliver the best solutions for each project.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! I offer maintenance packages and ongoing support to ensure your project continues to run smoothly. This includes updates, bug fixes, and minor enhancements as needed.",
  },
  {
    question: "What's your approach to responsive design?",
    answer: "I follow a mobile-first approach, ensuring your project looks and works beautifully on all devices. Every project is thoroughly tested across different screen sizes and browsers before launch.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 px-5 md:px-8 dark:bg-background">
      <div className="max-w-[780px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">FAQ</p>
          <h2 className="text-[40px] md:text-[48px] leading-[1.08] tracking-tight mb-4">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-[20px] border border-black/5 dark:border-white/5 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-[19px] leading-[1.5] pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted dark:bg-background flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-[17px] text-muted-foreground leading-[1.5]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}