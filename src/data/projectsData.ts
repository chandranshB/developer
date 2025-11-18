export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  tags: string[];
  year: string;
  duration: string;
  role: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "SNT",
    title: "SeetaNarayan Travels",
    subtitle: "A complete shopping experience with seamless checkout",
    thumbnail: "https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYzMjA2OTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Node.js", "PostgreSQL"],
    year: "2024",
    duration: "4 months",
    role: "Full-stack Developer",
  },
  // {
  //   id: "task-management",
  //   title: "Task Management",
  //   subtitle: "Collaborative workspace for teams",
  //   thumbnail: "https://images.unsplash.com/photo-1758411898007-6a17c74ef528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzMTM4ODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  //   tags: ["TypeScript", "React", "Firebase"],
  //   year: "2024",
  //   duration: "3 months",
  //   role: "Frontend Lead",
  // },
  // {
  //   id: "fitness-tracker",
  //   title: "Fitness Tracker",
  //   subtitle: "Track workouts and fitness goals",
  //   thumbnail: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMTQ5NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  //   tags: ["React Native", "GraphQL"],
  //   year: "2023",
  //   duration: "5 months",
  //   role: "Mobile Developer",
  // },
];
