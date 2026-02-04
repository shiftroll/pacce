"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";

const categories = ["All", "Hydration", "Recovery", "Performance", "Bundles"];

const products = [
  {
    id: "electrolyte-original",
    name: "Electrolyte Mix Original",
    price: "Rp 185.000",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    category: "HYDRATION",
  },
  {
    id: "electrolyte-citrus",
    name: "Electrolyte Mix Citrus",
    price: "Rp 185.000",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    category: "HYDRATION",
  },
  {
    id: "electrolyte-berry",
    name: "Electrolyte Mix Berry",
    price: "Rp 185.000",
    image: "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=800&q=80",
    category: "HYDRATION",
  },
  {
    id: "recovery-blend",
    name: "Recovery Blend Pro",
    price: "Rp 245.000",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80",
    category: "RECOVERY",
  },
  {
    id: "recovery-night",
    name: "Night Recovery Formula",
    price: "Rp 275.000",
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=800&q=80",
    category: "RECOVERY",
  },
  {
    id: "hydration-pack",
    name: "Marathon Hydration Pack",
    price: "Rp 495.000",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
    category: "BUNDLES",
  },
  {
    id: "pre-workout",
    name: "Pre-Run Formula",
    price: "Rp 225.000",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800&q=80",
    category: "PERFORMANCE",
  },
  {
    id: "endurance-mix",
    name: "Ultra Endurance Mix",
    price: "Rp 195.000",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    category: "HYDRATION",
  },
  {
    id: "ultra-pack",
    name: "Ultra Runner Pack",
    price: "Rp 750.000",
    image: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800&q=80",
    category: "BUNDLES",
  },
  {
    id: "focus-formula",
    name: "Race Day Focus",
    price: "Rp 235.000",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    category: "PERFORMANCE",
  },
  {
    id: "muscle-recovery",
    name: "Post-Run Recovery",
    price: "Rp 285.000",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80",
    category: "RECOVERY",
  },
  {
    id: "daily-hydration",
    name: "Daily Runner Sachet",
    price: "Rp 145.000",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=800&q=80",
    category: "HYDRATION",
  },
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

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-primary-accent text-sm tracking-widest font-medium">
                SHOP
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-foreground mt-4">
                FUEL YOUR RUN
              </h1>
              <p className="mt-6 text-gray-400 text-lg tracking-wide">
                Science-backed hydration and recovery products designed for
                runners who demand the best.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 md:top-20 z-30 bg-background/95 backdrop-blur-md border-y border-secondary-accent py-4">
        <div className="section-container">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? "bg-primary-accent text-background"
                    : "bg-secondary-accent text-foreground hover:bg-medium-grey"
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="bento-grid"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-dark-grey border-t border-secondary-accent">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-foreground">
                RUNNING CLUB OR TEAM?
              </h2>
              <p className="mt-4 text-gray-400 tracking-wide">
                Contact us for bulk pricing, team sponsorships, or race event partnerships.
              </p>
              <a
                href="mailto:hello@pacce.id"
                className="inline-block mt-6 text-primary-accent hover:text-foreground transition-colors tracking-wider"
              >
                HELLO@PACCE.ID
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
