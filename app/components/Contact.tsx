export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container-page">
        <h3 className="section-title">Get in touch</h3>
        <div className="card max-w-2xl">
          <p className="text-slate-300">
            I&apos;m currently open to contract / consulting work and interesting
            full-time roles. The fastest way to reach me is email — I usually
            reply within a day.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:bapibiswas703@gmail.com"
              className="btn-primary"
            >
              Email me
            </a>
            <a
              href="https://linkedin.com/in/bapi-biswas"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://dev.to/bapibiswas703"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Dev.to ↗
            </a>
            <a
              href="https://github.com/bapibiswas703"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
