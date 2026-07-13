"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-xl sticky top-0 z-50">
      <Container maxWidth="2xl" className="flex items-center justify-between py-4">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MEMsAI
            </span>
            <span className="text-xs text-slate-400 font-medium">Enterprise Memory</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-1 md:flex items-center">
          <NavLink href="#product">Product</NavLink>
          <NavLink href="#security">Security</NavLink>
          <NavLink href="#documentation">Documentation</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Search Placeholder */}
          <button className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:border-slate-600/50 hover:text-slate-300 transition-all group">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-sm">Search...</span>
            <kbd className="hidden group-hover:inline text-xs px-2 py-1 rounded bg-slate-700/50 border border-slate-600/50 ml-auto">
              ⌘K
            </kbd>
          </button>

          {/* Auth Buttons */}
          <Button
            variant="ghost"
            size="md"
            className="text-slate-300 hover:text-white hover:bg-slate-800/50"
          >
            Sign In
          </Button>
          <Button
            variant="primary"
            size="md"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/20"
          >
            Enter Vault
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:border-slate-600/50 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-700/50 bg-slate-900/95 backdrop-blur-xl">
          <Container maxWidth="2xl" className="py-4 flex flex-col gap-2">
            <MobileNavLink href="#product">Product</MobileNavLink>
            <MobileNavLink href="#security">Security</MobileNavLink>
            <MobileNavLink href="#documentation">Documentation</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <div className="border-t border-slate-700/50 pt-4 mt-4 flex gap-2">
              <Button variant="ghost" size="md" className="w-full text-slate-300">
                Sign In
              </Button>
              <Button variant="primary" size="md" className="w-full">
                Enter Vault
              </Button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 text-sm font-medium"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200 text-sm font-medium w-full"
    >
      {children}
    </Link>
  );
}
