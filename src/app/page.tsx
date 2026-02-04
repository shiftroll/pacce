"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";

const products = [
  {
    id: "electrolyte-original",
    name: "Electrolyte Mix Original",
    price: "Rp 185.000",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
    category: "HYDRATION",
  },
  {
    id: "electrolyte-citrus",
    name: "Electrolyte Mix Citrus",
    price: "Rp 185.000",
    image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&q=80",
    category: "HYDRATION",
  },
  {
    id: "recovery-blend",
    name: "Recovery Blend Pro",
    price: "Rp 245.000",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    category: "RECOVERY",
  },
  {
    id: "hydration-pack",
    name: "Complete Hydration Pack",
    price: "Rp 495.000",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    category: "BUNDLE",
  },
  {
    id: "pre-workout",
    name: "Pre-Workout Formula",
    price: "Rp 225.000",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    category: "PERFORMANCE",
  },
  {
    id: "endurance-mix",
    name: "Endurance Mix",
    price: "Rp 195.000",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    category: "HYDRATION",
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-running-through-the-city-at-night-1282-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-background/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-foreground leading-tight"
          >
            HYDRATION.
            <br />
            <span className="text-primary-accent">WITHOUT COMPROMISE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-gray-300 tracking-wide max-w-2xl mx-auto"
          >
            Engineered with precision. Formulated with science. Built for athletes
            who refuse to settle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="/shop" variant="ghost" size="lg">
              SHOP NOW
            </Button>
            <Button href="/science" variant="primary" size="lg">
              THE SCIENCE
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-foreground/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* The Event Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <ScrollReveal direction="left">
                <span className="text-primary-accent text-sm tracking-widest font-medium">
                  UPCOMING EVENT
                </span>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.1}>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-foreground">
                  LAST MAN
                  <br />
                  STANDING
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <p className="text-gray-400 text-lg tracking-wide leading-relaxed">
                  The ultimate test of endurance. Run until you can&apos;t. The last
                  runner standing claims victory. No pace. No mercy. Just pure
                  athletic determination.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button href="/last-man-standing" variant="ghost">
                    LEARN MORE
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                  <Button
                    href="https://www.eventbrite.com"
                    external
                    variant="primary"
                  >
                    REGISTER NOW
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Image */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80"
                  alt="Runner at night"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 border border-primary-accent/20" />
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-4">
                  <p className="text-sm tracking-wider text-gray-400">
                    NEXT EVENT
                  </p>
                  <p className="font-heading text-xl tracking-wide text-foreground">
                    MARCH 15, 2026 • JAKARTA
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why PACCE Section */}
      <section className="py-20 md:py-32 bg-dark-grey">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary-accent text-sm tracking-widest font-medium">
                THE SCIENCE
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground mt-4">
                ENGINEERED FOR PERFORMANCE
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "SODIUM",
                value: "1000mg",
                description:
                  "Optimal sodium concentration for rapid fluid absorption and electrolyte balance during intense exercise.",
                icon: "Na",
              },
              {
                title: "POTASSIUM",
                value: "200mg",
                description:
                  "Essential for muscle function and nerve transmission. Prevents cramping during extended performance.",
                icon: "K",
              },
              {
                title: "MAGNESIUM",
                value: "60mg",
                description:
                  "Supports energy production and muscle recovery. Critical for over 300 enzymatic reactions.",
                icon: "Mg",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.15}>
                <div className="bg-secondary-accent p-8 group hover:border-primary-accent border border-transparent transition-colors">
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
            <div className="text-center mt-12">
              <Button href="/science" variant="ghost">
                EXPLORE THE SCIENCE
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Showcase - Bento Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <span className="text-primary-accent text-sm tracking-widest font-medium">
                  SHOP
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground mt-4">
                  OUR PRODUCTS
                </h2>
              </div>
              <Link
                href="/shop"
                className="mt-4 md:mt-0 text-foreground hover:text-primary-accent transition-colors flex items-center gap-2 text-sm tracking-wider"
              >
                VIEW ALL
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bento-grid"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial / Social Proof Section */}
      <section className="py-20 md:py-32 bg-dark-grey border-y border-secondary-accent">
        <div className="section-container">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-primary-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl tracking-wide text-foreground leading-relaxed">
                &quot;PACCE HAS COMPLETELY TRANSFORMED MY TRAINING. THE DIFFERENCE
                IN MY ENDURANCE AND RECOVERY IS UNDENIABLE.&quot;
              </blockquote>
              <div className="mt-8">
                <p className="text-foreground font-medium tracking-wider">
                  ANDI PRATAMA
                </p>
                <p className="text-gray-500 text-sm tracking-wider">
                  PROFESSIONAL ULTRAMARATHON RUNNER
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="relative overflow-hidden bg-secondary-accent p-8 md:p-16">
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground">
                  READY TO ELEVATE YOUR PERFORMANCE?
                </h2>
                <p className="mt-6 text-gray-400 text-lg tracking-wide">
                  Join thousands of athletes who trust PACCE for their hydration
                  needs. Available exclusively on Tokopedia.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button
                    href="https://www.tokopedia.com"
                    external
                    variant="tokopedia"
                    size="lg"
                  >
                    SHOP ON TOKOPEDIA
                  </Button>
                  <Button href="/shop" variant="ghost" size="lg">
                    BROWSE PRODUCTS
                  </Button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-primary-accent to-transparent" />
              </div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-primary-accent/20 rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-primary-accent/10 rounded-full" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
