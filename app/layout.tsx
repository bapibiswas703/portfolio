import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bapi Biswas — Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in Node.js, NestJS, GraphQL, microservices, and AI/LLM integrations.",
  openGraph: {
    title: "Bapi Biswas — Senior Software Engineer",
    description:
      "Backend & full-stack engineer building scalable systems and AI-powered products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
