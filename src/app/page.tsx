"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FilmStrip from "@/components/FilmStrip";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Email submitted:", email);
      setSubmitted(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Film Strip Borders */}
      <FilmStrip position="top" />
      <FilmStrip position="bottom" />
      <FilmStrip position="left" />
      <FilmStrip position="right" />

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-man-running-on-the-beach-at-sunset-1817-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 md:px-16 max-w-4xl mx-auto">
        {/* LMS Logo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight">
            LAST MAN
            <br />
            STANDING
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/80 tracking-wide max-w-2xl mx-auto mb-16 font-body"
        >
          6.7 km loop. Every hour on the hour. No finish line. Until Last Man Standing.
        </motion.p>

        {/* Email Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto"
        >
          {!submitted ? (
            <>
              <p className="text-sm text-foreground/60 mb-6 tracking-wide">
                Join our interest list, and be the Last Man Standing in 2026.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 input-styled text-center sm:text-left"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-foreground text-background font-medium tracking-wider hover:bg-foreground/90 transition-colors"
                >
                  Notify Me.
                </button>
              </form>
            </>
          ) : (
            <div className="text-foreground">
              <p className="text-xl font-medium mb-2">You&apos;re on the list.</p>
              <p className="text-foreground/60">We&apos;ll notify you when registration opens.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
