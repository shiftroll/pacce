"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import RypeLogo from "./RypeLogo";

const navLinks = [
  { href: "/science", label: "Science" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "nav-blur border-b border-muted" : "bg-transparent"
        }`}
      >
        <nav className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-foreground hover:opacity-70 transition-opacity"
            >
              <RypeLogo variant="white" className="h-6 md:h-8 w-auto" />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link, index) => (
                <>
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative font-body text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <span key={`sep-${index}`} className="text-foreground/30">|</span>
                  )}
                </>
              ))}
            </div>

            {/* Right Section - Instagram */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/rlooprun"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex p-2 text-foreground hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              {/* Mobile Menu Button */}
              <button
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-foreground hover:opacity-70 transition-opacity"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center min-h-screen gap-8 p-8"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-bold tracking-wider text-foreground hover:text-foreground/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="https://instagram.com/rlooprun"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 text-foreground hover:opacity-70 transition-opacity"
              >
                <Instagram size={28} />
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
