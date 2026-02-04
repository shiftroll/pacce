"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Trophy, Users, Calendar, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import Accordion from "@/components/Accordion";

const faqItems = [
  {
    question: "WHAT IS LAST MAN STANDING?",
    answer:
      "Last Man Standing is an elimination-style endurance running event. Participants run laps at set intervals. Each lap, the slowest runners are eliminated until only one remains. It's not about being the fastest—it's about lasting the longest.",
  },
  {
    question: "WHAT ARE THE RULES?",
    answer:
      "Runners must complete each lap within the allotted time (typically 6-8 minutes per 400m lap). If you fail to cross the start line before the buzzer sounds for the next lap, you're eliminated. The last runner standing wins. No pacing, no teams—just you against the clock.",
  },
  {
    question: "WHO CAN PARTICIPATE?",
    answer:
      "The event is open to runners of all levels aged 18 and above. However, we recommend having a base fitness level of being able to run continuously for at least 60 minutes. A medical clearance may be required for participants over 40 years old.",
  },
  {
    question: "WHAT SHOULD I BRING?",
    answer:
      "Bring your running shoes, comfortable athletic wear, and a positive mindset. We'll provide hydration stations with PACCE electrolytes, timing chips, and basic medical support. You may also bring personal nutrition, extra clothes, and a support crew if desired.",
  },
  {
    question: "HOW LONG DOES THE EVENT LAST?",
    answer:
      "The duration varies based on participant endurance. Typically, events last between 3-8 hours, with some elite editions lasting 12+ hours. The world record for similar formats exceeds 24 hours. Come prepared to push your limits.",
  },
  {
    question: "WHAT ARE THE PRIZES?",
    answer:
      "The Last Man Standing receives a trophy, a year's supply of PACCE products, and bragging rights. Additional prizes are awarded for specific achievements like most improved, best sportsmanship, and milestone completions (50, 100, 150 laps).",
  },
  {
    question: "IS THERE A REFUND POLICY?",
    answer:
      "Registrations are transferable up to 14 days before the event. Refunds are available up to 30 days before the event date (minus a 10% processing fee). No refunds are issued within 30 days of the event. Deferrals to future events may be available.",
  },
];

export default function LastManStandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=1920&q=80"
            alt="Runner on track at dusk"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary-accent text-sm tracking-widest font-medium"
          >
            PACCE PRESENTS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider text-foreground mt-4"
          >
            LAST MAN
            <br />
            STANDING
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-300 tracking-wide max-w-2xl mx-auto"
          >
            The ultimate test of endurance. Run until you can&apos;t. The last
            runner standing claims victory.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              href="https://www.eventbrite.com"
              external
              variant="primary"
              size="lg"
            >
              REGISTER NOW
            </Button>
            <Button href="#concept" variant="ghost" size="lg">
              LEARN MORE
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Event Details Bar */}
      <section className="bg-primary-accent py-4">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-background">
            <div className="flex items-center gap-2">
              <Calendar size={20} />
              <span className="font-medium tracking-wider">MARCH 15, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span className="font-medium tracking-wider">
                GELORA BUNG KARNO, JAKARTA
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span className="font-medium tracking-wider">LIMITED TO 200 RUNNERS</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Concept Section */}
      <section id="concept" className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <ScrollReveal>
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80"
                  alt="Runner in action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 border border-primary-accent/20" />
              </div>
            </ScrollReveal>

            {/* Text Content */}
            <div className="space-y-6">
              <ScrollReveal direction="right">
                <span className="text-primary-accent text-sm tracking-widest font-medium">
                  THE CONCEPT
                </span>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.1}>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground">
                  ONE RUNS. MANY FALL. ONE REMAINS.
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.2}>
                <p className="text-gray-400 text-lg tracking-wide leading-relaxed">
                  Inspired by the legendary Big Dog&apos;s Backyard Ultra, Last Man
                  Standing strips running to its purest form. No GPS watches
                  matter. No splits to chase. Just you, the track, and the clock.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <p className="text-gray-400 text-lg tracking-wide leading-relaxed">
                  Every few minutes, a horn sounds. You must be at the start line
                  ready for the next lap. Miss it, and you&apos;re out. Simple rules.
                  Brutal execution. Legendary results.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.4}>
                <div className="pt-4">
                  <Button href="#faq" variant="ghost">
                    READ THE RULES
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 md:py-32 bg-dark-grey">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary-accent text-sm tracking-widest font-medium">
                HOW IT WORKS
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground mt-4">
                THE RULES
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "THE CLOCK",
                description:
                  "Every 6 minutes, the horn sounds. You must complete one 400m lap and return to the start line before the next horn. No exceptions.",
              },
              {
                icon: MapPin,
                title: "THE TRACK",
                description:
                  "A standard 400m athletics track. One direction. One purpose. The surface is your battlefield, and every step counts.",
              },
              {
                icon: Trophy,
                title: "THE VICTORY",
                description:
                  "The last runner who completes a lap within the time limit wins. There can only be one. Glory awaits those who endure.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.15}>
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center border border-primary-accent mb-6">
                    <item.icon className="w-10 h-10 text-primary-accent" />
                  </div>
                  <h3 className="font-heading text-2xl tracking-wide text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 tracking-wide leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary-accent text-sm tracking-widest font-medium">
                REGISTRATION INCLUDES
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground mt-4">
                WHAT YOU GET
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "PACCE HYDRATION",
                description: "Unlimited PACCE electrolytes throughout the event",
              },
              {
                icon: Trophy,
                title: "FINISHER MEDAL",
                description: "Custom medal for all participants who start",
              },
              {
                icon: Users,
                title: "RACE KIT",
                description: "Official event t-shirt, bib number, and timing chip",
              },
              {
                icon: Clock,
                title: "LIVE TRACKING",
                description: "Real-time lap tracking and leaderboard updates",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="bg-secondary-accent p-6 border border-transparent hover:border-primary-accent transition-colors">
                  <item.icon className="w-8 h-8 text-primary-accent mb-4" />
                  <h3 className="font-heading text-lg tracking-wide text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm tracking-wide">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-dark-grey">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary-accent text-sm tracking-widest font-medium">
                GOT QUESTIONS?
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground mt-4">
                FAQ
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Accordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground">
                ARE YOU READY TO BE THE LAST ONE STANDING?
              </h2>
              <p className="mt-6 text-gray-400 text-lg tracking-wide">
                Registration closes when we hit 200 runners or 7 days before the
                event—whichever comes first. Don&apos;t wait.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href="https://www.eventbrite.com"
                  external
                  variant="primary"
                  size="lg"
                >
                  REGISTER ON EVENTBRITE
                </Button>
              </div>
              <p className="mt-4 text-gray-500 text-sm tracking-wide">
                Early Bird: Rp 350.000 • Regular: Rp 450.000
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mobile Floating Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-background/95 backdrop-blur-md border-t border-secondary-accent md:hidden">
        <Button
          href="https://www.eventbrite.com"
          external
          variant="primary"
          size="lg"
          className="w-full"
        >
          REGISTER ON EVENTBRITE
        </Button>
      </div>
    </>
  );
}
