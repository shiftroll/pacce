"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Beaker, Activity, Zap, Brain } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Hydration", "Recovery", "Nutrition"];

const articles = [
  {
    id: "sodium-science",
    title: "Why Sodium Is Your Most Important Electrolyte",
    excerpt: "Understanding the critical role of sodium in athletic performance and how to optimize your intake.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    category: "Hydration",
    readTime: "5 min read",
  },
  {
    id: "post-workout-window",
    title: "The Post-Workout Recovery Window: Myth or Reality?",
    excerpt: "We dive into the science behind the anabolic window and what research actually says about timing.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    category: "Recovery",
    readTime: "7 min read",
  },
  {
    id: "hydration-endurance",
    title: "Hydration Strategies for Endurance Athletes",
    excerpt: "How to calculate your sweat rate and develop a personalized hydration plan for long-distance events.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    category: "Hydration",
    readTime: "8 min read",
  },
  {
    id: "magnesium-performance",
    title: "Magnesium: The Overlooked Mineral for Performance",
    excerpt: "Why athletes are often deficient in magnesium and how supplementation can improve your results.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    category: "Nutrition",
    readTime: "6 min read",
  },
  {
    id: "sleep-recovery",
    title: "How Sleep Impacts Athletic Recovery",
    excerpt: "The connection between quality sleep and muscle repair, hormone regulation, and performance.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    category: "Recovery",
    readTime: "6 min read",
  },
  {
    id: "potassium-cramping",
    title: "Potassium and Muscle Cramping: What Science Says",
    excerpt: "Debunking myths about potassium and cramps while exploring the true causes of exercise-induced cramping.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    category: "Hydration",
    readTime: "5 min read",
  },
  {
    id: "carb-loading",
    title: "Modern Carb Loading: Beyond the Pasta Dinner",
    excerpt: "Evidence-based approaches to glycogen loading for marathon and ultra-endurance events.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    category: "Nutrition",
    readTime: "9 min read",
  },
  {
    id: "heat-adaptation",
    title: "Heat Adaptation: Training in Hot Conditions",
    excerpt: "How to safely acclimate to heat stress and the physiological benefits for performance.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&q=80",
    category: "Recovery",
    readTime: "7 min read",
  },
  {
    id: "protein-timing",
    title: "Protein Timing: Does It Really Matter?",
    excerpt: "Examining the latest research on protein distribution and its effects on muscle protein synthesis.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80",
    category: "Nutrition",
    readTime: "6 min read",
  },
];

const scienceStats = [
  { icon: Beaker, value: "12", label: "Research Studies Cited" },
  { icon: Activity, value: "1000+", label: "Athletes Tested" },
  { icon: Zap, value: "97%", label: "Satisfaction Rate" },
  { icon: Brain, value: "3", label: "Years of Development" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function SciencePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-primary-accent text-sm tracking-widest font-medium">
                THE SCIENCE
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-foreground mt-4">
                EVIDENCE-BASED HYDRATION
              </h1>
              <p className="mt-6 text-gray-400 text-lg tracking-wide leading-relaxed">
                We don&apos;t just make claims—we back everything with peer-reviewed
                research. Explore the science behind PACCE and learn how to
                optimize your performance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-dark-grey border-y border-secondary-accent">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {scienceStats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <stat.icon className="w-8 h-8 text-primary-accent mx-auto mb-3" />
                  <p className="font-heading text-3xl md:text-4xl text-foreground font-bold">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Formula Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary-accent text-sm tracking-widest font-medium">
                THE FORMULA
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide text-foreground mt-4">
                ENGINEERED FOR PERFORMANCE
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "Na",
                title: "SODIUM",
                value: "1000mg",
                description:
                  "Based on research showing 1000-1500mg sodium per liter is optimal for rapid fluid absorption. Our formula sits at the scientific sweet spot for maximum hydration efficiency.",
              },
              {
                icon: "K",
                title: "POTASSIUM",
                value: "200mg",
                description:
                  "Essential for maintaining cellular fluid balance and supporting nerve impulse transmission. Critical for preventing exercise-associated muscle cramping.",
              },
              {
                icon: "Mg",
                title: "MAGNESIUM",
                value: "60mg",
                description:
                  "Involved in over 300 enzymatic reactions including energy production and protein synthesis. Studies show athletes often have suboptimal magnesium status.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.15}>
                <div className="bg-secondary-accent p-8 h-full">
                  <div className="w-16 h-16 flex items-center justify-center border border-primary-accent mb-6">
                    <span className="font-heading text-2xl text-primary-accent">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl tracking-wide text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-accent text-3xl font-bold mb-4">
                    {item.value}
                  </p>
                  <p className="text-gray-400 text-sm tracking-wide leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="bg-dark-grey p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="font-heading text-2xl tracking-wide text-foreground mb-4">
                    ZERO COMPROMISES
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "No artificial sweeteners or colors",
                      "No proprietary blends - full transparency",
                      "Third-party tested for purity",
                      "Informed Sport certified",
                      "Vegan and gluten-free",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-accent" />
                        <span className="text-gray-300 tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80"
                    alt="Laboratory testing"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 md:py-32 bg-dark-grey">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary-accent text-sm tracking-widest font-medium">
                KNOWLEDGE HUB
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide text-foreground mt-4">
                ARTICLES & RESEARCH
              </h2>
            </div>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex gap-2 overflow-x-auto pb-4 mb-12 scrollbar-hide justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm font-medium tracking-wider whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? "bg-primary-accent text-background"
                      : "bg-secondary-accent text-foreground hover:bg-medium-grey"
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Article Grid */}
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article) => (
              <motion.div key={article.id} variants={staggerItem}>
                <Link href={`/science/${article.id}`} className="group block">
                  <article className="bg-secondary-accent overflow-hidden h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-primary-accent text-xs tracking-widest font-medium">
                        {article.category.toUpperCase()}
                      </span>
                      <h3 className="font-heading text-xl tracking-wide text-foreground mt-2 group-hover:text-primary-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-400 text-sm tracking-wide mt-3 flex-grow">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-background/20">
                        <span className="text-gray-500 text-xs tracking-wider">
                          {article.readTime}
                        </span>
                        <span className="text-primary-accent text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          READ MORE
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide text-foreground">
                READY TO EXPERIENCE THE DIFFERENCE?
              </h2>
              <p className="mt-6 text-gray-400 text-lg tracking-wide">
                Join thousands of athletes who trust PACCE for their hydration needs.
                Science-backed, athlete-approved.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/shop"
                  className="btn-primary px-8 py-4 text-base font-medium tracking-wider"
                >
                  SHOP NOW
                </Link>
                <a
                  href="https://www.tokopedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tokopedia px-8 py-4 text-base font-medium tracking-wider"
                >
                  BUY ON TOKOPEDIA
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
