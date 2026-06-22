type Role = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  current?: boolean;
};

const roles: Role[] = [
  {
    company: "Webskitters Technology Solutions Pvt. Ltd.",
    role: "Senior Software Engineer",
    period: "Oct 2021 — Present",
    location: "Kolkata, West Bengal, India",
    current: true,
    bullets: [
      "Lead backend architecture for multi-tenant SaaS products using NestJS + GraphQL Federation across 5+ microservices.",
      "Designed Kafka-based event pipelines that reduced inter-service latency by 40% and enabled independent service deployments.",
      "Shipped AI/LLM features (Claude API, OpenAI) into production with prompt-versioning, tenant-scoped rate limits, and cost tracking.",
      "Integrated global payment gateways (Stripe, Tap Payments, Moyasar) and built reconciliation workflows in n8n.",
      "Built real-time chat & notification system using Socket.IO + Redis Pub/Sub handling 10K+ concurrent users.",
      "Migrated ORM stack from Sequelize → Drizzle, cutting average query execution time significantly.",
      "Leveraged Supabase (PostgreSQL + Auth + Realtime) as a scalable BaaS layer for rapid SaaS feature development.",
    ],
  },
  {
    company: "Bijoy Business Solution and Services Pvt. Ltd.",
    role: "Software Developer",
    period: "Apr 2020 — Sep 2021",
    location: "Durgapur, West Bengal, India",
    bullets: [
      "Designed and developed RESTful APIs for E-Commerce platform (zeropower.in) with full test coverage.",
      "Built and migrated databases; optimized queries reducing load times significantly.",
      "Integrated payment gateways and third-party logistics APIs.",
      "Developed real-time chat features and worked on CMS backend APIs.",
      "Contributed to full-stack development using Node.js, Express.js, Angular 8, PostgreSQL, and MongoDB.",
      "Deployed and maintained applications on AWS EC2.",
    ],
  },
  {
    company: "Codeachi Technologies Pvt. Ltd.",
    role: "Web Developer",
    period: "Jan 2019 — Mar 2020",
    location: "Kolkata, West Bengal, India",
    bullets: [
      "Developed frontend and backend for web applications using Node.js, PHP/Laravel, and Angular.",
      "Contributed to CMS product features and REST API integrations.",
      "Supported AWS EC2 deployments and maintained production servers.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container-page">
        <p className="section-label">Where I&apos;ve worked</p>
        <h3 className="section-title">Experience</h3>
        <div className="section-divider" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-border to-transparent" />

          <ol className="space-y-10 pl-8">
            {roles.map((r, idx) => (
              <li key={r.company} className="relative">
                {/* Dot */}
                <span
                  className={`absolute -left-[34px] top-1.5 h-3.5 w-3.5 rounded-full border-2 transition-all ${
                    r.current
                      ? "bg-accent border-accent shadow-lg shadow-accent/40"
                      : "bg-bg border-border"
                  }`}
                />

                {/* Card */}
                <div className="card-glow">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {r.role}
                        <span className="text-accent"> @ {r.company}</span>
                      </h4>
                      <p className="text-xs text-muted mt-0.5">{r.location}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {r.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-2/10 border border-accent-2/20 px-2.5 py-1 text-xs text-accent-2 font-mono">
                          <span className="glow-dot w-1.5 h-1.5" />
                          Current
                        </span>
                      )}
                      <span className="font-mono text-xs text-muted bg-surface border border-border px-2.5 py-1 rounded-md">
                        {r.period}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <span className="text-accent mt-1 shrink-0 text-xs">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
