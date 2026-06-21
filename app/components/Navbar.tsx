export default function Navbar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur">
      <nav className="container-page flex h-14 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold text-white">
          bapi<span className="text-accent">.</span>dev
        </a>
        <ul className="hidden gap-6 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-slate-300 hover:text-white transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://github.com/bapibiswas703"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-slate-300 hover:text-white transition"
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}
