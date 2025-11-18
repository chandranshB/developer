export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
}

export const journalEntries: JournalEntry[] = [
  {
    id: "solving-state-management",
    title: "Solving Complex State Management in React",
    date: "2025-01-15",
    excerpt: "Exploring different approaches to managing global state in large React applications and when to use each solution.",
    tags: ["React", "State Management", "Architecture"],
    readTime: "5 min read",
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization Tips",
    date: "2025-01-08",
    excerpt: "Practical techniques I learned while optimizing a production app, reducing load time by 60%.",
    tags: ["Performance", "Web Vitals", "Optimization"],
    readTime: "7 min read",
  },
  {
    id: "typescript-patterns",
    title: "TypeScript Patterns That Changed My Code",
    date: "2024-12-20",
    excerpt: "Advanced TypeScript patterns and generics that made my code more type-safe and maintainable.",
    tags: ["TypeScript", "Best Practices", "Code Quality"],
    readTime: "6 min read",
  },
];
