export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "Django"],
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "UI/UX Design", "Git", "Docker", "AWS"],
    },
  ];

  return (
    <section id="skills" className="py-32 px-5 md:px-8 bg-white">
      <div className="max-w-[980px] mx-auto">
        <div className="text-center mb-20">
          <p className="text-[14px] text-primary mb-3 tracking-wide uppercase">Expertise</p>
          <h2 className="text-[40px] md:text-[48px] leading-[1.08] tracking-tight mb-4">
            What I Do
          </h2>
          <p className="text-[19px] text-muted-foreground max-w-[600px] mx-auto leading-[1.5]">
            Technologies and disciplines I use to bring ideas to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-[24px] leading-[1.17] tracking-tight">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-[17px] text-muted-foreground leading-[1.5] flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
