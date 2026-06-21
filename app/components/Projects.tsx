type Project = {
  title: string;
  description: string;
  tech: string[];
  code?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "AI SaaS Integration",
    description:
      "Multi-tenant SaaS platform with LLM-powered content generation and data extraction features. Built tenant isolation, rate limiting, and prompt-versioning on top of NestJS.",
    tech: ["NestJS", "Claude API", "OpenAI", "LangChain", "PostgreSQL"],
  },
  {
    title: "Multi-Tenant SaaS Platform",
    description:
      "Microservices architecture with GraphQL Federation. Reduced p95 latency by 40% and enabled independent service deployments.",
    tech: ["NestJS", "GraphQL", "Kafka", "Redis", "AWS"],
  },
  {
    title: "Real-Time Chat System",
    description:
      "Pub/sub-based chat engine handling 10K+ concurrent users with presence, typing indicators, and message persistence.",
    tech: ["Socket.IO", "Redis", "Node.js"],
  },
  {
    title: "n8n Automation Workflows",
    description:
      "Production automation pipelines connecting 10+ services — payment reconciliation, lead routing, and CI notifications.",
    tech: ["n8n", "REST", "Supabase", "Webhooks"],
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce with payment gateway integration, logistics APIs, and admin dashboard.",
    tech: ["Laravel", "MySQL", "AWS", "Firebase"],
  },
  {
    title: "Indian Amount Parser",
    description:
      "Zero-dependency parser for Indian-currency amounts across 20+ Indian languages. ESM, tree-shakable, <3 kB gzipped.",
    tech: ["JavaScript (ESM)"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container-page">
        <h3 className="section-title">Featured Projects</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h4 className="text-lg font-semibold text-white">{p.title}</h4>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3 text-sm">
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    Code ↗
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent hover:underline"
                  >
                    Live demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
