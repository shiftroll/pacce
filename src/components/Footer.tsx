"use client";

import Link from "next/link";
import { Instagram, Twitter, Youtube, Mail } from "lucide-react";
import PacceLogo from "./PacceLogo";

const footerLinks = {
  company: [
    { href: "/science", label: "The Science" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  events: [
    { href: "/last-man-standing", label: "Last Man Standing" },
    { href: "/waitlist", label: "Join Waitlist" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  { href: "mailto:hello@pacce.id", icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-muted">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-foreground">
              <PacceLogo className="h-7 w-auto" />
            </Link>
            <p className="mt-4 text-medium-grey text-sm tracking-wide leading-relaxed max-w-sm">
              Premium electrolyte hydration engineered for peak athletic performance.
              Science-backed formula for champions.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 text-medium-grey hover:text-foreground transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider text-foreground mb-4">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-medium-grey text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Events Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold tracking-wider text-foreground mb-4">
              EVENTS
            </h4>
            <ul className="space-y-3">
              {footerLinks.events.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-medium-grey text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-medium-grey text-xs tracking-wide">
            © {new Date().getFullYear()} PACCE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-medium-grey text-xs hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-medium-grey text-xs hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
