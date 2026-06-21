export default function Hero() {
  return (
    <section id="top" className="py-24 sm:py-32">
      <div className="container-page">
        <p className="font-mono text-sm text-accent mb-4">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
          Bapi Biswas.
        </h1>
        <h2 className="mt-2 text-3xl sm:text-5xl font-bold text-slate-400 tracking-tight">
          I build scalable backends &amp; AI-powered products.
        </h2>
        <p className="mt-6 max-w-2xl text-slate-400 leading-relaxed">
          Senior Software Engineer with ~6 years of experience designing
          microservices, GraphQL federations, and real-time systems. Currently
          working on AI/LLM integrations, n8n automation, and edge-native
          backends.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
