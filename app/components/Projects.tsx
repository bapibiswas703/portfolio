type Project = {
  title: string;
  description: string;
  tech: string[];
  code?: string;
  demo?: string;
  badge?: string;
  outcome?: string;
};

const projects: Project[] = [
  {
    title: "AI SaaS Integration",
    badge: "AI / LLM",
    description:
      "Multi-tenant SaaS platform with LLM-powered content generation, data extraction, and intelligent workflows. Built tenant isolation, rate limiting, prompt-versioning, and cost tracking on top of NestJS.",
    outcome: "Reduced manual processing time by 60%",
    tech: ["NestJS", "Claude API", "OpenAI", "LangChain", "PostgreSQL", "TypeScript"],
  },
  {
    title: "n8n Automation Workflows",
    badge: "Automation",
    description:
      "Production automation pipelines connecting 10+ services — payment reconciliation, lead routing, CI notifications, and CRM sync. Built reusable workflow templates for the team.",
    outcome: "10+ services connected, zero manual tasks",
    tech: ["n8n", "REST APIs", "Supabase", "Webhooks", "PostgreSQL"],
  },
  {
    title: "Multi-Tenant SaaS Platform",
    badge: "Microservices",
    description:
      "Microservices architecture with GraphQL Federation across 5+ independent services. Enabled zero-downtime deployments and independent service scaling.",
    outcome: "Reduced p95 latency by 40%",
    tech: ["NestJS", "GraphQL Federation", "Kafka", "Redis", "AWS", "Docker"],
  },
  {
    title: "Real-Time Chat System",
    badge: "Real-time",
    description:
      "Pub/sub-based chat engine with presence tracking, typing indicators, read receipts, and message persistence. Built to handle enterprise-scale concurrent connections.",
    outcome: "10K+ concurrent users supported",
    tech: ["Socket.IO", "Redis Pub/Sub", "Node.js", "PostgreSQL"],
  },
  {
    title: "E-Commerce Platform (zeropower.in)",
    badge: "Full Stack",
    description:
      "Full-stack e-commerce platform with multi-gateway payment integration (Stripe, Tap, Moyasar), logistics APIs, inventory management, and admin dashboard.",
    outcome: "3 payment gateways, multi-currency",
    tech: ["Laravel", "MySQL", "AWS EC2", "Firebase", "PHP"],
    demo: "https://zeropower.in",
  },
  {
    title: "Indian Amount Parser",
    badge: "Open Source",
    description:
      "Zero-dependency ESM library for parsing Indian-currency amounts — digits or words — from free-form text across 20+ Indian languages including English. Tree-shakable, < 3 kB gzipped.",
    outcome: "20+ Indian languages supported",
    tech: ["JavaScript (ESM)", "Zero dependencies"],
    code: "https://github.com/bapibiswas703/Indian-Amount-Parser",
  },
];

const badgeColors: Record<string, string> = {
  "AI / LLM":     "bg-purple-500/10 text-purple-300 border-purple-500/20",
  "Automation":   "bg-teal-500/10 text-teal-300 border-teal-500/20",
  "Microservices":"bg-blue-500/10 text-blue-300 border-blue-500/20",
  "Real-time":    "bg-orange-500/10 text-orange-300 border-orange-500/20",
  "Full Stack":   "bg-green-500/10 text-green-300 border-green-500/20",
  "Open Source":  "bg-pink-500/10 text-pink-300 border-pink-500/20",
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container-page">
        <p className="section-label">What I&apos;ve built</p>
        <h3 className="section-title">Featured Projects</h3>
        <div className="section-divider" />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className="card-glow flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className={`text-xs font-mono font-medium px-2.5 py-1 rounded-md border ${
                    badgeColors[p.badge ?? ""] ?? "bg-accent/10 text-accent border-accent/20"
                  }`}
                >
                  {p.badge}
                </span>
                <div className="flex gap-3 text-sm shrink-0">
                  {p.code && (
                    <a href={p.code} target="_blank" rel="noreferrer"
                       className="text-muted hover:text-accent transition-colors flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer"
                       className="text-muted hover:text-accent-2 transition-colors flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                      </svg>
                      Live
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-base font-semibold text-white mb-2">{p.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">{p.description}</p>

              {p.outcome && (
                <div className="mt-3 flex items-center gap-2 text-xs text-accent-2 font-mono">
                  <span>→</span>
                  <span>{p.outcome}</span>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
