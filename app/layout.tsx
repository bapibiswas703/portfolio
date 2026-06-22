import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bapi Biswas — Senior Software Engineer",
  description:
    "Senior Software Engineer with ~6 years of experience in Node.js, NestJS, GraphQL, microservices, AI/LLM integrations, n8n automation and Supabase.",
  openGraph: {
    title: "Bapi Biswas — Senior Software Engineer",
    description:
      "Backend & full-stack engineer building scalable systems and AI-powered products.",
    type: "website",
    url: "https://bapi-biswas-portfolio.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bapi Biswas — Senior Software Engineer",
    description: "Backend & full-stack engineer building scalable, AI-powered products.",
  },
  keywords: [
    "Bapi Biswas","Senior Software Engineer","Node.js","NestJS","GraphQL",
    "Microservices","AI","LLM","n8n","Supabase","Kafka","Redis","TypeScript",
    "Backend Engineer","Full Stack Engineer","Kolkata",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
