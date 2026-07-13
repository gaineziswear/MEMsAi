"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <Container maxWidth="2xl" className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-blue-600">MEMsAI</div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden gap-8 md:flex">
          <Link href="#product" className="text-gray-700 hover:text-gray-900 transition-colors">
            Product
          </Link>
          <Link href="#security" className="text-gray-700 hover:text-gray-900 transition-colors">
            Security
          </Link>
          <Link
            href="#documentation"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Documentation
          </Link>
        </div>

        {/* CTA Button */}
        <Button variant="primary" size="md">
          Enter Vault
        </Button>
      </Container>
    </nav>
  );
}
