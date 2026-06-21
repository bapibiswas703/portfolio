export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted">
        <p>
          Built with Next.js &amp; Tailwind · Deployed on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            Vercel
          </a>
        </p>
        <p>
          © {new Date().getFullYear()} Bapi Biswas
        </p>
      </div>
    </footer>
  );
}
