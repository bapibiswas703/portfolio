export default function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a href="#top" className="font-mono text-sm font-semibold text-white">
              bapi<span className="text-accent">.</span>dev
            </a>
            <span className="text-border">·</span>
            <p className="text-xs text-muted">Senior Software Engineer</p>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted border-t border-border pt-6">
          <p>© {new Date().getFullYear()} Bapi Biswas · Kolkata, India</p>
          <p>
            Built with{" "}
            <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="text-accent hover:underline">Next.js</a>
            {" & "}
            <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">Tailwind</a>
            {" · Deployed on "}
            <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">Vercel</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
