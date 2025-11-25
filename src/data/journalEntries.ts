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
    id: "spectra-form-rescue",
    title: "Resurrecting a Dead Line: The Contact Form Rescue",
    date: "2025-11-12",
    // Explicitly mentioning the client/project here for context
    excerpt: "A P0 crisis at Spectra Geosolutions: turning a broken form that leaked raw code into a 7-layer secure communication fortress.",
    tags: ["PHP", "Security", "System Design", "Spectra Geosolutions"],
    readTime: "10 min read",
  },
  {
    id: "snt-concurrency-architecture",
    title: "Engineering Trust: Handling Race Conditions in Booking Systems",
    date: "2025-02-23",
    excerpt: "A deep dive into ensuring transactional integrity during high-concurrency booking events using pessimistic locking and optimistic UI patterns.",
    tags: ["System Design", "PostgreSQL", "Architecture", "Full Stack"],
    readTime: "8 min read",
  },
  {
    id: "stale-while-revalidate-engine",
    title: "The Illusion of Instant: My Custom Caching Engine",
    date: "2025-02-28",
    excerpt: "Why I hate loading spinners and how I built a custom Stale-While-Revalidate engine to make the app feel instant, even on flaky networks.",
    tags: ["Performance", "Architecture", "UX", "Local First"],
    readTime: "8 min read",
  },
  {
    id: "serverless-security-hardening",
    title: "Fort Knox at the Edge: Hardening Serverless Bookings",
    date: "2025-03-05",
    excerpt: "You can't trust the client. Here is how I used Supabase Edge Functions and cryptographic handshakes to stop bots without hurting real users.",
    tags: ["Security", "Serverless", "Supabase", "Backend"],
    readTime: "6 min read",
  },
];