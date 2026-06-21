export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="container-page">
        <h3 className="section-title">About</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4 text-slate-300 leading-relaxed">
            <p>
              I&apos;m a Senior Software Engineer at{" "}
              <span className="text-white">Webskitters Technology Solutions</span>{" "}
              in Kolkata, India, where I&apos;ve spent the last 4+ years building
              production systems for SaaS, FinTech, E-Commerce, and real-time
              products.
            </p>
            <p>
              My core focus is on the backend — designing distributed systems
              with NestJS, GraphQL Federation, Kafka, and Redis — but I also
              ship full-stack features when the product needs it. Recently
              I&apos;ve been deep in the LLM world, integrating Claude and
              OpenAI into multi-tenant SaaS products and building automation
              pipelines with n8n.
            </p>
            <p>
              Outside of work, I maintain a few open-source tools (including a
              zero-dependency Indian-amount parser) and write technical notes
              on Dev.to.
            </p>
          </div>
          <div className="card">
            <p className="text-sm text-slate-400">Quick facts</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li>
                <span className="text-muted">Role:</span> Senior Software
                Engineer
              </li>
              <li>
                <span className="text-muted">Experience:</span> ~6 years
              </li>
              <li>
                <span className="text-muted">Location:</span> Kolkata, India
              </li>
              <li>
                <span className="text-muted">Focus:</span> Backend, AI/LLM,
                Microservices
              </li>
              <li>
                <span className="text-muted">Available for:</span> Contract /
                consulting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
