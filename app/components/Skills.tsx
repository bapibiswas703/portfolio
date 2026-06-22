type Group = { title: string; items: string[]; icon: string };

const groups: Group[] = [
  {
    title: "Languages & Backend",
    icon: "⚙️",
    items: ["TypeScript", "JavaScript", "Node.js", "PHP"],
  },
  {
    title: "Frameworks",
    icon: "🏗️",
    items: ["NestJS", "Express.js", "Laravel", "GraphQL", "Apollo Federation"],
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    items: ["Claude API", "OpenAI API", "LangChain", "n8n", "Prompt Engineering", "AI Agents"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    items: ["React.js", "Next.js", "Vue.js", "Angular", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase", "Neo4j"],
  },
  {
    title: "Messaging & Architecture",
    icon: "📡",
    items: ["Apache Kafka", "Socket.IO", "gRPC", "Microservices", "API Gateways", "Redis Pub/Sub"],
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    items: ["AWS (EC2, S3, Lambda)", "Docker", "Git", "GitHub Actions", "CI/CD", "Vercel"],
  },
  {
    title: "Payments",
    icon: "💳",
    items: ["Stripe", "Tap Payments", "Moyasar"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container-page">
        <p className="section-label">What I work with</p>
        <h3 className="section-title">Skills & Technologies</h3>
        <div className="section-divider" />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="card-glow group">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-base">{g.icon}</span>
                <p className="text-sm font-semibold text-white">{g.title}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="chip">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-10">
          <p className="text-xs font-mono text-accent/70 uppercase tracking-widest mb-4">Certifications</p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "JavaScript (Basic)", issuer: "HackerRank", year: "2022" },
              { name: "Problem Solving (Basic)", issuer: "HackerRank", year: "2022" },
              { name: "Advanced Prompt Engineering", issuer: "LinkedIn Learning", year: "2024" },
            ].map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-2.5 text-sm"
              >
                <span className="text-accent-2 text-base">✓</span>
                <div>
                  <span className="text-slate-200 font-medium">{c.name}</span>
                  <span className="text-muted text-xs ml-2">— {c.issuer} · {c.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
