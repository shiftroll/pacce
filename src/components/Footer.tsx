"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import RypeLogo from "./RypeLogo";

const footerLinks = [
  { href: "/last-man-standing", label: "Last Man Standing" },
  { href: "/science", label: "Science" },
  { href: "/waitlist", label: "Join Waitlist" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-muted">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <Link href="/" className="text-foreground">
            <RypeLogo variant="white" className="h-6 w-auto" />
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/60 text-sm hover:text-foreground transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <a
            href="https://instagram.com/rlooprun"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-foreground/60 hover:text-foreground transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-muted text-center">
          <p className="text-foreground/40 text-xs tracking-wide">
            © {new Date().getFullYear()} RYPE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
