export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container-page">
        <p className="section-label">About me</p>
        <h3 className="section-title">Who I am</h3>
        <div className="section-divider" />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4 text-slate-400 leading-relaxed">
            <p>
              I&apos;m a <span className="text-white font-medium">Senior Software Engineer</span> at{" "}
              <span className="text-white font-medium">Webskitters Technology Solutions</span> in Kolkata, India,
              where I&apos;ve spent the last 4+ years building production systems for SaaS, FinTech,
              E-Commerce, and real-time products.
            </p>
            <p>
              My core focus is backend architecture — designing distributed systems with{" "}
              <span className="text-accent font-mono text-sm">NestJS</span>,{" "}
              <span className="text-accent font-mono text-sm">GraphQL Federation</span>,{" "}
              <span className="text-accent font-mono text-sm">Kafka</span>, and{" "}
              <span className="text-accent font-mono text-sm">Redis</span> — but I also ship full-stack
              features when the product needs it.
            </p>
            <p>
              In 2026, AI is not optional for engineers — it&apos;s the baseline. I&apos;ve been deep in the
              LLM world, integrating <span className="text-white font-medium">Claude</span> and{" "}
              <span className="text-white font-medium">OpenAI</span> into multi-tenant SaaS products,
              building intelligent automation pipelines with <span className="text-white font-medium">n8n</span>,
              and using <span className="text-white font-medium">Supabase</span> as a scalable backend layer.
            </p>
            <p>
              Outside of work, I maintain open-source tools including a zero-dependency{" "}
              <a
                href="https://github.com/bapibiswas703/Indian-Amount-Parser"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-accent-2 transition-colors underline underline-offset-2"
              >
                Indian Amount Parser
              </a>{" "}
              supporting 20+ Indian languages, and write technical notes on Dev.to.
            </p>
          </div>

          <div className="space-y-4">
            <div className="card-glow">
              <p className="text-xs font-mono text-accent/70 uppercase tracking-widest mb-4">Quick facts</p>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "Role", value: "Senior Software Engineer" },
                  { label: "Experience", value: "~6 years" },
                  { label: "Location", value: "Kolkata, India" },
                  { label: "Focus", value: "Backend · AI/LLM · Microservices" },
                  { label: "Available for", value: "Full-time & Contract" },
                ].map((item) => (
                  <li key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-muted text-xs">{item.label}</span>
                    <span className="text-slate-200">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-glow">
              <p className="text-xs font-mono text-accent/70 uppercase tracking-widest mb-4">Education</p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-slate-200 font-medium">GNIIT — Software Engineering</p>
                  <p className="text-muted text-xs mt-0.5">NIIT · 2015–2018</p>
                </div>
                <div>
                  <p className="text-slate-200 font-medium">Higher Secondary (B.Com)</p>
                  <p className="text-muted text-xs mt-0.5">Balia High School, WBCHSE · 2013</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
