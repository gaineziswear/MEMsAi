"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-auto">
      <Container maxWidth="2xl" className="py-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">MEMsAI</h3>
            <p className="mt-2 text-sm text-gray-600">
              Your Intelligence. Your Memory. Your Control.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-gray-900">Product</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Vaults
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-900">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-gray-200 pt-8 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} MEMsAI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Twitter
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              GitHub
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              LinkedIn
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
