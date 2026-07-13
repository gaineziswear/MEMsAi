"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700/50 bg-slate-900/80 backdrop-blur-xl mt-auto relative z-10">
      <Container maxWidth="2xl" className="py-12">
        {/* Main Footer Grid */}
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                MEMsAI
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your Intelligence. Your Memory. Your Control. The enterprise memory platform for the future.
            </p>
            <div className="flex gap-3 mt-4">
              <FooterSocialLink href="#" icon="twitter" />
              <FooterSocialLink href="#" icon="github" />
              <FooterSocialLink href="#" icon="linkedin" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#vaults">Vaults</FooterLink>
              <FooterLink href="#ai-agents">AI Agents</FooterLink>
              <FooterLink href="#security">Security</FooterLink>
              <FooterLink href="#roadmap">Roadmap</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
              <FooterLink href="#press">Press</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="#docs">Documentation</FooterLink>
              <FooterLink href="#api">API Reference</FooterLink>
              <FooterLink href="#guides">Guides</FooterLink>
              <FooterLink href="#support">Support</FooterLink>
              <FooterLink href="#status">Status</FooterLink>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-sm text-slate-400">
                &copy; {currentYear} MEMsAI. All rights reserved.
              </p>
              <div className="flex gap-4">
                <FooterLink href="#privacy" small>Privacy</FooterLink>
                <FooterLink href="#terms" small>Terms</FooterLink>
                <FooterLink href="#cookies" small>Cookies</FooterLink>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-slate-400">All systems operational</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  small,
}: {
  href: string;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-slate-400 hover:text-slate-200 transition-colors duration-200 ${
        small ? "text-xs" : "text-sm"
      }`}
    >
      {children}
    </Link>
  );
}

function FooterSocialLink({ href, icon }: { href: string; icon: string }) {
  const icons = {
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
  };

  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-slate-200 hover:border-slate-600/50 hover:bg-slate-700/50 transition-all duration-200"
    >
      {icons[icon as keyof typeof icons]}
    </Link>
  );
}
