import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEMsAI - Personal Intelligence Vault",
  description: "User-owned AI memory platform for personal and professional intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Container maxWidth="2xl" className="min-h-screen py-8">
          {children}
        </Container>
      </body>
    </html>
  );
}