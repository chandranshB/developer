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
    id: "snt-concurrency-architecture",
    title: "Engineering Trust: Handling Race Conditions in Booking Systems",
    date: "2025-02-23",
    excerpt: "A deep dive into ensuring transactional integrity during high-concurrency booking events using pessimistic locking and optimistic UI patterns.",
    tags: ["System Design", "PostgreSQL", "Architecture", "Full Stack"],
    readTime: "8 min read",
  },
];
