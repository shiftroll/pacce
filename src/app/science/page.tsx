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
    title: "Why Sodium Is Critical for Marathon Runners",
    excerpt: "Understanding the critical role of sodium in preventing hyponatremia during long distance runs.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    category: "Hydration",
    readTime: "5 min read",
  },
  {
    id: "post-run-window",
    title: "The 30-Minute Post-Run Window: Myth or Reality?",
    excerpt: "We dive into the science behind recovery timing and what research says about refueling after runs.",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80",
    category: "Recovery",
    readTime: "7 min read",
  },
  {
    id: "hydration-marathon",
    title: "Hydration Strategies for Marathon Day",
    excerpt: "How to calculate your sweat rate and develop a personalized hydration plan for race day.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    category: "Hydration",
    readTime: "8 min read",
  },
  {
    id: "magnesium-cramping",
    title: "Magnesium: The Overlooked Mineral for Runners",
    excerpt: "Why runners are often deficient in magnesium and how it affects cramping and recovery.",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    category: "Nutrition",
    readTime: "6 min read",
  },
  {
    id: "sleep-running",
    title: "How Sleep Impacts Your Running Performance",
    excerpt: "The connection between quality sleep and running economy, injury prevention, and race times.",
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=800&q=80",
    category: "Recovery",
    readTime: "6 min read",
  },
  {
    id: "potassium-cramping",
    title: "Why Runners Cramp at Mile 20",
    excerpt: "Debunking myths about potassium and cramps while exploring the true causes of running cramps.",
    image: "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=800&q=80",
    category: "Hydration",
    readTime: "5 min read",
  },
  {
    id: "carb-loading",
    title: "Carb Loading for Marathons: The Modern Approach",
    excerpt: "Evidence-based approaches to glycogen loading for your next marathon or ultra event.",
    image: "https://images.unsplash.com/photo-1461896836934-afa09fc6c0f0?w=800&q=80",
    category: "Nutrition",
    readTime: "9 min read",
  },
  {
    id: "heat-running",
    title: "Running in the Heat: Adaptation Strategies",
    excerpt: "How to safely train in hot conditions and the physiological benefits for race performance.",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800&q=80",
    category: "Recovery",
    readTime: "7 min read",
  },
  {
    id: "fueling-ultras",
    title: "Fueling for Ultramarathons: Beyond Gels",
    excerpt: "Advanced nutrition strategies for running 50K, 100K, and beyond without bonking.",
    image: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800&q=80",
    category: "Nutrition",
    readTime: "6 min read",
  },
];

const scienceStats = [
  { icon: Beaker, value: "12", label: "Research Studies Cited" },
  { icon: Activity, value: "1000+", label: "Runners Tested" },
  { icon: Zap, value: "97%", label: "Runner Satisfaction" },
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
                ENGINEERED FOR RUNNERS
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
                  "Optimal for preventing hyponatremia during long runs and marathons. Our formula matches what elite runners lose in sweat during race conditions.",
              },
              {
                icon: "K",
                title: "POTASSIUM",
                value: "200mg",
                description:
                  "Essential for muscle function and preventing cramping at mile 20 and beyond. Critical for runners pushing through the wall.",
              },
              {
                icon: "Mg",
                title: "MAGNESIUM",
                value: "60mg",
                description:
                  "Reduces post-run fatigue and supports recovery. Studies show runners often have suboptimal magnesium status after long training blocks.",
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
