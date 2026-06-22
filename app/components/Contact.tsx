export default function Contact() {
  const links = [
    {
      label: "Email",
      value: "bapibiswas703@gmail.com",
      href: "mailto:bapibiswas703@gmail.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/bapi-biswas-86333a156",
      href: "https://linkedin.com/in/bapi-biswas-86333a156",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "github.com/bapibiswas703",
      href: "https://github.com/bapibiswas703",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: "Dev.to",
      value: "dev.to/bapi_biswas_703",
      href: "https://dev.to/bapi_biswas_703",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.29zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.6-2.36.74-.06c.4-.03.74 0 .74.06 0 .63-1.1 4.48-1.46 5.52z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container-page">
        <p className="section-label">Get in touch</p>
        <h3 className="section-title">Let&apos;s work together</h3>
        <div className="section-divider" />

        <div className="grid gap-8 md:grid-cols-2 max-w-3xl">
          {/* Left: message */}
          <div className="card-glow">
            <h4 className="text-white font-semibold mb-3">Open to opportunities</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              I&apos;m currently open to <span className="text-white">full-time roles</span> and{" "}
              <span className="text-white">contract / consulting work</span>. If you&apos;re building
              something with distributed systems, AI, or SaaS — let&apos;s talk.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              The fastest way to reach me is email. I typically reply within 24 hours.
            </p>
            <a href="mailto:bapibiswas703@gmail.com" className="btn-primary mt-6 inline-flex">
              Send me an email
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: links */}
          <div className="space-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center gap-4 card group hover:border-accent/40 transition-all"
              >
                <span className="text-muted group-hover:text-accent transition-colors shrink-0">
                  {l.icon}
                </span>
                <div>
                  <p className="text-xs text-muted font-mono">{l.label}</p>
                  <p className="text-sm text-slate-200 group-hover:text-white transition-colors">{l.value}</p>
                </div>
                <svg
                  width="14" height="14" viewBox="0 0 12 12" fill="none"
                  className="ml-auto text-muted group-hover:text-accent transition-colors shrink-0"
                >
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
