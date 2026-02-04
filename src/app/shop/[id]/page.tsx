"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Minus, Plus, Check, Truck, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import TrackedBuyButton from "@/components/TrackedBuyButton";

// Mock product data - in real app this would come from API/CMS
const productsData: Record<string, {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  description: string;
  longDescription: string;
  images: string[];
  category: string;
  benefits: string[];
  ingredients: string;
  usage: string;
  servings: string;
}> = {
  "electrolyte-original": {
    id: "electrolyte-original",
    name: "Electrolyte Mix Original",
    price: "Rp 185.000",
    priceNum: 185000,
    description: "Our flagship hydration formula for runners.",
    longDescription: "PACCE Electrolyte Mix Original is engineered specifically for runners. Whether you're training for a 5K or pushing through an ultramarathon, our formula ensures rapid hydration and sustained energy. Trusted by runners across Indonesia.",
    images: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
      "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800&q=80",
    ],
    category: "HYDRATION",
    benefits: [
      "Rapid fluid absorption during long runs",
      "Prevents cramping at mile 20+",
      "Sustained energy for marathon distances",
      "Zero artificial sweeteners",
    ],
    ingredients: "Sodium Citrate, Potassium Chloride, Magnesium Citrate, Natural Flavors, Stevia Leaf Extract",
    usage: "Mix one sachet with 500ml of cold water. Consume before, during, or after your run.",
    servings: "30 sachets per box",
  },
  "electrolyte-citrus": {
    id: "electrolyte-citrus",
    name: "Electrolyte Mix Citrus",
    price: "Rp 185.000",
    priceNum: 185000,
    description: "Refreshing citrus formula for hot weather runs.",
    longDescription: "Our citrus variant is perfect for those scorching morning runs or afternoon track sessions. The refreshing taste keeps you motivated while delivering the same scientifically-formulated electrolyte balance that runners trust.",
    images: [
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
      "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=800&q=80",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
    ],
    category: "HYDRATION",
    benefits: [
      "Refreshing citrus taste",
      "Ideal for hot weather training",
      "Rapid fluid absorption",
      "Zero artificial sweeteners",
    ],
    ingredients: "Sodium Citrate, Potassium Chloride, Magnesium Citrate, Natural Citrus Flavors, Citric Acid, Stevia Leaf Extract",
    usage: "Mix one sachet with 500ml of cold water. Best served chilled for hot runs.",
    servings: "30 sachets per box",
  },
  "recovery-blend": {
    id: "recovery-blend",
    name: "Recovery Blend Pro",
    price: "Rp 245.000",
    priceNum: 245000,
    description: "Post-run recovery formula for faster comeback.",
    longDescription: "PACCE Recovery Blend Pro is designed for the serious runner. After a hard tempo run or long distance effort, your muscles need to recover. Our formula combines amino acids with anti-inflammatory compounds to get you ready for tomorrow's run.",
    images: [
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?w=800&q=80",
      "https://images.unsplash.com/photo-1486218119243-13883505764c?w=800&q=80",
      "https://images.unsplash.com/photo-1461896836934-afa09fc6c0f0?w=800&q=80",
      "https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=800&q=80",
    ],
    category: "RECOVERY",
    benefits: [
      "Accelerates muscle recovery",
      "Reduces post-run inflammation",
      "Replenishes glycogen stores",
      "Ready for your next run faster",
    ],
    ingredients: "BCAAs (L-Leucine, L-Isoleucine, L-Valine), L-Glutamine, Tart Cherry Extract, Turmeric Extract, Electrolyte Blend",
    usage: "Mix one scoop with 400ml water within 30 minutes of completing your run.",
    servings: "25 servings per container",
  },
};

const relatedProducts = [
  {
    id: "electrolyte-citrus",
    name: "Electrolyte Mix Citrus",
    price: "Rp 185.000",
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=800&q=80",
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
    id: "hydration-pack",
    name: "Marathon Hydration Pack",
    price: "Rp 495.000",
    image: "https://images.unsplash.com/photo-1461896836934-afa09fc6c0f0?w=800&q=80",
    category: "BUNDLE",
  },
];

const scienceCards = [
  {
    icon: "Na",
    title: "SODIUM",
    value: "1000mg",
    description: "Optimal concentration for rapid fluid absorption during long runs.",
  },
  {
    icon: "K",
    title: "POTASSIUM",
    value: "200mg",
    description: "Prevents cramping at mile 20 and beyond.",
  },
  {
    icon: "Mg",
    title: "MAGNESIUM",
    value: "60mg",
    description: "Reduces post-run fatigue and supports recovery.",
  },
];

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Get product data or use default
  const product = productsData[productId] || productsData["electrolyte-original"];

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <>
      {/* Product Section */}
      <section className="pt-24 md:pt-32 pb-16 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Sticky Image Gallery */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-4">
              {/* Main Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative aspect-square overflow-hidden bg-secondary-accent"
              >
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 flex-shrink-0 overflow-hidden transition-all ${
                      selectedImage === index
                        ? "ring-2 ring-primary-accent"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right - Scrollable Content */}
            <div className="space-y-8">
              {/* Product Info */}
              <div>
                <span className="text-primary-accent text-sm tracking-widest font-medium">
                  {product.category}
                </span>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-foreground mt-2">
                  {product.name}
                </h1>
                <p className="text-2xl md:text-3xl text-foreground font-semibold mt-4">
                  {product.price}
                </p>
                <p className="text-gray-400 tracking-wide mt-4 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary-accent flex-shrink-0" />
                    <span className="text-gray-300 tracking-wide">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 tracking-wider text-sm">QUANTITY</span>
                <div className="flex items-center border border-secondary-accent">
                  <button
                    onClick={decrementQuantity}
                    className="p-3 hover:bg-secondary-accent transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="p-3 hover:bg-secondary-accent transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Purchase Button */}
              <div className="space-y-3">
                <TrackedBuyButton
                  productId={product.id}
                  productName={product.name}
                  productSlug={product.id}
                  variant="tokopedia"
                  size="lg"
                  className="w-full"
                />
                <p className="text-xs text-gray-500 tracking-wide text-center">
                  Transaction handled securely via Tokopedia
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-secondary-accent">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-400 tracking-wide">
                    Free shipping over Rp 300k
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-400 tracking-wide">
                    100% authentic guarantee
                  </span>
                </div>
              </div>

              {/* Product Details Accordion */}
              <div className="space-y-4 pt-4 border-t border-secondary-accent">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-4 border-b border-secondary-accent">
                    <span className="font-heading tracking-wide text-foreground">
                      INGREDIENTS
                    </span>
                    <Plus className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform" />
                  </summary>
                  <p className="py-4 text-gray-400 tracking-wide text-sm leading-relaxed">
                    {product.ingredients}
                  </p>
                </details>

                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-4 border-b border-secondary-accent">
                    <span className="font-heading tracking-wide text-foreground">
                      HOW TO USE
                    </span>
                    <Plus className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform" />
                  </summary>
                  <p className="py-4 text-gray-400 tracking-wide text-sm leading-relaxed">
                    {product.usage}
                  </p>
                </details>

                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-4 border-b border-secondary-accent">
                    <span className="font-heading tracking-wide text-foreground">
                      SERVINGS
                    </span>
                    <Plus className="w-5 h-5 text-gray-400 group-open:rotate-45 transition-transform" />
                  </summary>
                  <p className="py-4 text-gray-400 tracking-wide text-sm leading-relaxed">
                    {product.servings}
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Science Section */}
      <section className="py-20 md:py-32 bg-dark-grey">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary-accent text-sm tracking-widest font-medium">
                THE FORMULA
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-wide text-foreground mt-4">
                SCIENCE-BACKED INGREDIENTS
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scienceCards.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.15}>
                <div className="bg-secondary-accent p-8 text-center">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center border border-primary-accent mb-6">
                    <span className="font-heading text-2xl text-primary-accent">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl tracking-wide text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-accent text-2xl font-bold mb-4">
                    {item.value}
                  </p>
                  <p className="text-gray-400 text-sm tracking-wide">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 md:py-32 bg-background">
        <div className="section-container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-wide text-foreground">
                YOU MAY ALSO LIKE
              </h2>
            </div>
          </ScrollReveal>

          <div className="bento-grid">
            {relatedProducts.map((relProduct) => (
              <ScrollReveal key={relProduct.id}>
                <ProductCard {...relProduct} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
