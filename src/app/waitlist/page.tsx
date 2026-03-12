"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const distanceOptions = ["5K", "10K", "Half Marathon", "Marathon", "50K", "Ultra (>50K)", "100K+"];

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [furthestDistance, setFurthestDistance] = useState("");
  const [plannedLoops, setPlannedLoops] = useState("");
  const [community, setCommunity] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "waitlist", email, furthestDistance, plannedLoops, community }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto text-center px-8"
        >
          <div className="w-20 h-20 mx-auto flex items-center justify-center border-2 border-foreground mb-8">
            <Check className="w-10 h-10 text-foreground" />
          </div>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground">
            YOU&apos;RE ON THE LIST
          </h1>
          <p className="mt-6 text-foreground/60 text-lg font-body">
            We&apos;ll notify you when registration opens for Last Man Standing.
            Start training.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      <div className="section-container relative z-10">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
              JOIN THE WAITLIST
            </h1>
            <p className="text-foreground/60 font-body">
              Be the first to know when registration opens. Limited to 200 runners.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm text-foreground/60 mb-2 tracking-wider">
                E-MAIL
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full input-styled"
              />
            </div>

            <div>
              <label className="block text-sm text-foreground/60 mb-3 tracking-wider">
                FURTHEST DISTANCE
              </label>
              <div className="grid grid-cols-3 gap-2">
                {distanceOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFurthestDistance(option)}
                    className={`px-4 py-3 text-sm font-medium tracking-wider transition-all border ${furthestDistance === option
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-foreground/70 border-foreground/30 hover:border-foreground/60"
                      }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm text-foreground/60 mb-2 tracking-wider">
                HOW MANY LOOPS CAN YOU SURVIVE?
              </label>
              <input
                type="text"
                value={plannedLoops}
                onChange={(e) => setPlannedLoops(e.target.value)}
                placeholder="e.g., 10, 15, until I drop"
                className="w-full input-styled"
              />
            </div>

            <div>
              <label className="block text-sm text-foreground/60 mb-2 tracking-wider">
                COMMUNITY
              </label>
              <input
                type="text"
                value={community}
                onChange={(e) => setCommunity(e.target.value)}
                placeholder="Which community are you from?"
                className="w-full input-styled"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 py-4 bg-foreground text-background font-medium tracking-wider hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "PROCESSING..." : "NOTIFY ME"}
              {!isSubmitting && <ArrowRight size={18} />}
            </button>
            {submitError && (
              <p className="text-accent-red text-center text-sm">{submitError}</p>
            )}

            <p className="text-center text-foreground/40 text-sm">
              No spam. Unsubscribe anytime.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

