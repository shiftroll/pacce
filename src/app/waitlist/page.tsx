"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";

const distanceOptions = [
  { value: "10k", label: "10K" },
  { value: "15k", label: "15K" },
  { value: "half-marathon", label: "Half Marathon (21K)" },
  { value: "marathon", label: "Marathon (42K)" },
  { value: "ultra", label: "Ultra (50K+)" },
];

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [farthestDistance, setFarthestDistance] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API
    console.log({ fullName, email, farthestDistance });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="pt-32 pb-20 bg-background min-h-screen flex items-center">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg mx-auto text-center"
          >
            <div className="w-20 h-20 mx-auto flex items-center justify-center border-2 border-foreground mb-8">
              <Check className="w-10 h-10 text-foreground" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-wide text-foreground">
              YOU&apos;RE ON THE LIST
            </h1>
            <p className="mt-6 text-medium-grey text-lg tracking-wide leading-relaxed">
              We&apos;ll notify you when registration opens for Last Man Standing.
              Get ready to test your limits.
            </p>
            <div className="mt-10">
              <Button href="/" variant="ghost">
                BACK TO HOME
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-dark-grey text-sm tracking-widest font-medium">
                LAST MAN STANDING
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-foreground mt-4">
                JOIN THE WAITLIST
              </h1>
              <p className="mt-6 text-medium-grey text-lg tracking-wide leading-relaxed">
                Be the first to know when registration opens. Spots are limited
                to 200 runners.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="pb-32 bg-background">
        <div className="section-container">
          <ScrollReveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto space-y-8"
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium tracking-wider text-foreground mb-2"
                >
                  FULL NAME
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-background border border-muted text-foreground placeholder:text-medium-grey tracking-wide focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium tracking-wider text-foreground mb-2"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-background border border-muted text-foreground placeholder:text-medium-grey tracking-wide focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Farthest Run Distance */}
              <div>
                <label className="block text-sm font-medium tracking-wider text-foreground mb-3">
                  FARTHEST RUN DISTANCE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {distanceOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setFarthestDistance(option.value)}
                      className={`px-4 py-3 text-sm font-medium tracking-wider transition-all ${
                        farthestDistance === option.value
                          ? "bg-foreground text-background"
                          : "bg-secondary text-foreground hover:bg-muted"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  JOIN WAITLIST
                </Button>
                <p className="mt-4 text-medium-grey text-xs tracking-wide text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
