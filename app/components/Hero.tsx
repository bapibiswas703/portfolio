export default function Hero() {
  const stats = [
    { value: "6+", label: "Years experience" },
    { value: "10K+", label: "Concurrent users" },
    { value: "3", label: "Payment gateways" },
    { value: "20+", label: "Projects shipped" },
  ];

  return (
    <section id="top" className="relative min-h-[92vh] flex items-center py-24 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,92,252,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,252,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(circle, #7c5cfc, transparent)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl pointer-events-none"
           style={{ background: "radial-gradient(circle, #06d6a0, transparent)" }} />

      <div className="container-page relative z-10 w-full">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-accent-2/30 bg-accent-2/5 px-4 py-1.5 mb-8">
          <span className="glow-dot" />
          <span className="font-mono text-xs text-accent-2">Available for full-time & contract roles</span>
        </div>

        <p className="font-mono text-sm text-accent mb-3 animate-fade-up">Hi, my name is</p>

        <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight leading-tight animate-fade-up delay-100">
          Bapi Biswas<span className="text-accent">.</span>
        </h1>

        <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight animate-fade-up delay-200"
            style={{
              background: "linear-gradient(135deg, #94a3b8, #64748b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
          I build scalable backends &amp;<br className="hidden sm:block" /> AI-powered products.
        </h2>

        <p className="mt-6 max-w-xl text-slate-400 leading-relaxed text-base animate-fade-up delay-300">
          Senior Software Engineer with ~6 years of experience designing microservices,
          GraphQL federations, and real-time systems. Currently working on AI/LLM integrations,
          n8n automation, and Supabase-powered backends.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up delay-300">
          <a href="#projects" className="btn-primary">
            View my work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="mailto:bapibiswas703@gmail.com" className="btn-ghost">
            Get in touch
          </a>
          <a
            href="https://linkedin.com/in/bapi-biswas-86333a156"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-border animate-fade-up delay-300">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-number">{s.value}</div>
              <div className="text-xs text-muted mt-1 font-mono">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
