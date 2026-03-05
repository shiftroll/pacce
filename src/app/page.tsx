"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import backgroundImage from "@/images/background-image-03.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [furthestDistance, setFurthestDistance] = useState("");
  const [plannedLoops, setPlannedLoops] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; furthestDistance?: string; plannedLoops?: string }>({});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateForm = () => {
    const newErrors: { email?: string; furthestDistance?: string; plannedLoops?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!furthestDistance.trim()) {
      newErrors.furthestDistance = "Furthest distance is required";
    }

    if (!plannedLoops.trim()) {
      newErrors.plannedLoops = "Planned loops is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ email, furthestDistance, plannedLoops });
      setSubmitted(true);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-background/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-16 w-full max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 w-full"
            style={{ aspectRatio: '4150 / 2146' }}
          >
            <Image
              src="/images/last-man-standing.png"
              alt="Last Man Standing"
              width={800}
              height={414}
              className="w-full h-auto"
              priority
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-foreground italic"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}
          >
            &ldquo;What if you run without knowing when it ends?&rdquo;
          </motion.p>
        </div>
      </section>

      {/* Race for the Committed Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-12">
                RACE FOR THE COMMITTED
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-body">
                <p>
                  Last Man Standing is an elimination-style running event unlike any other.
                  Every hour, runners must complete a{" "}
                  <span className="highlight-green">6.7 km distance</span> within a{" "}
                  <span className="highlight-green">60 minute cut-off time</span>.
                </p>

                <p>
                  Miss the cut-off, or{" "}
                  <span className="highlight-red">choose not to line up for the next one</span>,
                  and you&apos;re out. The race continues, hour after hour, until only one
                  runner remains.
                </p>

                <p>
                  Every participant is{" "}
                  <span className="highlight-green">permitted to bring a support team of up to 2 people</span>{" "}
                  to help with nutrition, hydration, and mental support throughout the event.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Join Our Inner Circle Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-12">
                JOIN OUR INNER CIRCLE
              </h2>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal delay={0.1}>
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-heading text-foreground">1</span>
                  <div>
                    <h3 className="font-category text-xl text-foreground mb-2">
                      PRIORITY ACCESS
                    </h3>
                    <p className="text-foreground/70 font-body">
                      Be the first to know when registration opens and secure your spot
                      before the general public.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-heading text-foreground">2</span>
                  <div>
                    <h3 className="font-category text-xl text-foreground mb-2">
                      EARLY BIRD ADVANTAGE
                    </h3>
                    <p className="text-foreground/70 font-body">
                      Inner Circle members get exclusive early bird pricing not available
                      to the general public.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-heading text-foreground">3</span>
                  <div>
                    <h3 className="font-category text-xl text-foreground mb-2">
                      THE SURVIVAL SECRET
                    </h3>
                    <p className="text-foreground/70 font-body">
                      Get first access to our{" "}
                      <Link href="/science" className="underline hover:text-foreground">
                        performance nutrition products
                      </Link>{" "}
                      engineered specifically for endurance events like Last Man Standing.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Interest Form Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-12 text-center">
                INTERESTED?
              </h2>
            </ScrollReveal>

            {!submitted ? (
              <ScrollReveal delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm text-foreground/60 mb-2 tracking-wider">
                      E-MAIL <span className="text-accent-red">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                      className={`w-full input-styled ${errors.email ? "border-accent-red" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-accent-red text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-foreground/60 mb-2 tracking-wider">
                      FURTHEST DISTANCE <span className="text-accent-red">*</span>
                    </label>
                    <select
                      value={furthestDistance}
                      onChange={(e) => setFurthestDistance(e.target.value)}
                      required
                      className={`w-full input-styled ${errors.furthestDistance ? "border-accent-red" : ""}`}
                    >
                      <option value="">Select distance</option>
                      <option value="5K">5K</option>
                      <option value="10K">10K</option>
                      <option value="15K">15K</option>
                      <option value="Marathon">Marathon</option>
                    </select>
                    {errors.furthestDistance && (
                      <p className="text-accent-red text-sm mt-1">{errors.furthestDistance}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-foreground/60 mb-2 tracking-wider">
                      HOW MANY LOOPS ARE YOU PLANNING TO RUN? <span className="text-accent-red">*</span>
                    </label>
                    <select
                      value={plannedLoops}
                      onChange={(e) => setPlannedLoops(e.target.value)}
                      required
                      className={`w-full input-styled ${errors.plannedLoops ? "border-accent-red" : ""}`}
                    >
                      <option value="">Select loops</option>
                      <option value="5">5 loops</option>
                      <option value="10">10 loops</option>
                      <option value="15">15 loops</option>
                      <option value="20">20 loops</option>
                      <option value="25+">25+ loops</option>
                    </select>
                    {errors.plannedLoops && (
                      <p className="text-accent-red text-sm mt-1">{errors.plannedLoops}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-8 py-4 bg-foreground text-background font-medium tracking-wider hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                  >
                    JOIN THE INNER CIRCLE
                    <ArrowRight size={18} />
                  </button>
                </form>
              </ScrollReveal>
            ) : (
              <ScrollReveal>
                <div className="text-center">
                  <p className="text-2xl font-heading text-foreground mb-4">
                    YOU&apos;RE IN THE INNER CIRCLE
                  </p>
                  <p className="text-foreground/60 font-body">
                    We&apos;ll be in touch when registration opens. Start training.
                  </p>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
