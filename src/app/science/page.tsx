"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const articles = [
  {
    id: "electrolyte-heat",
    title: "How electrolyte helps us to train under heat",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
  },
  {
    id: "carbohydrate-endurance",
    title: "Role of Carbohydrate on endurance athletes",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80",
  },
  {
    id: "sugar-trap",
    title: "Uncovering the sweet trap of sugar in isotonic drinks",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
  },
  {
    id: "eah-hyponatremia",
    title: "EAH (Exercise Associated Hyponatremia): How only drinking water during long runs heighten your risks of cramping and underperformance",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
  },
];

export default function SciencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-background">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight"
            >
              YOU LOSE 500+ MG OF SODIUM IN JUST 1 HOUR OF ENDURANCE ACTIVITIES.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-foreground/70 max-w-3xl font-body leading-relaxed"
            >
              Your body doesn&apos;t just lose water when you sweat—it loses essential
              electrolytes that keep your muscles firing, your mind focused, and your
              body performing at its peak. Understanding the science of hydration is
              the first step to unlocking your true potential.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
              ARTICLES
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <ScrollReveal key={article.id} delay={index * 0.1}>
                <Link href={`/science/${article.id}`} className="group block">
                  <article className="bg-foreground text-background overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-category text-lg md:text-xl text-background leading-tight flex-grow">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-6 text-background/70 group-hover:text-background transition-colors">
                        <span className="text-sm tracking-wider">READ MORE</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                READY TO PUT SCIENCE INTO PRACTICE?
              </h2>
              <p className="text-foreground/70 text-lg font-body mb-10">
                Join the Last Man Standing waitlist and be the first to experience
                evidence-based hydration in action.
              </p>
              <Link
                href="/waitlist"
                className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-medium tracking-wider hover:bg-foreground/90 transition-colors"
              >
                JOIN WAITLIST
                <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
