type Group = { title: string; items: string[] };

const groups: Group[] = [
  {
    title: "Languages & Backend",
    items: ["TypeScript", "JavaScript", "Node.js", "PHP"],
  },
  {
    title: "Frameworks",
    items: ["NestJS", "Express", "Laravel", "GraphQL", "Apollo Federation"],
  },
  {
    title: "AI & Automation",
    items: ["OpenAI API", "Claude API", "LangChain", "n8n"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Angular"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase"],
  },
  {
    title: "Messaging & Architecture",
    items: ["Apache Kafka", "Socket.IO", "gRPC", "Microservices"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Docker", "Git", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Payments",
    items: ["Stripe", "Tap Payments", "Moyasar"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container-page">
        <h3 className="section-title">Skills</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="card">
              <p className="text-sm font-medium text-accent">{g.title}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="chip">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
