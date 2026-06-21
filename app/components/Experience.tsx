type Role = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  current?: boolean;
};

const roles: Role[] = [
  {
    company: "Webskitters Technology Solutions",
    role: "Senior Software Engineer",
    period: "2021 — Present",
    current: true,
    bullets: [
      "Lead backend architecture for multi-tenant SaaS products in NestJS + GraphQL Federation",
      "Designed Kafka-based event pipelines that cut inter-service latency by 40%",
      "Shipped AI/LLM features (Claude, OpenAI) into production with prompt-versioning and tenant-scoped rate limits",
      "Integrated global payment gateways (Stripe, Tap, Moyasar) and built reconciliation workflows in n8n",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="container-page">
        <h3 className="section-title">Experience</h3>
        <ol className="relative space-y-6 border-l border-border pl-6">
          {roles.map((r) => (
            <li key={r.company} className="relative">
              <span
                className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full border ${
                  r.current
                    ? "bg-accent border-accent"
                    : "bg-bg border-border"
                }`}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-lg font-semibold text-white">
                  {r.role}{" "}
                  <span className="text-accent">@ {r.company}</span>
                </h4>
                <p className="font-mono text-xs text-muted">{r.period}</p>
              </div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
