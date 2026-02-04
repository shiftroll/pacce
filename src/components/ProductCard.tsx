"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
}: ProductCardProps) {
  return (
    <Link href={`/shop/${id}`}>
      <motion.div
        className="card group cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {/* Image Container - 70% of card */}
        <div className="relative aspect-[4/5] overflow-hidden bg-medium-grey">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium tracking-wider bg-primary-accent text-background">
              {category}
            </span>
          </div>
        </div>

        {/* Content - 30% of card */}
        <div className="p-4 space-y-2">
          <h3 className="font-heading text-lg tracking-wide text-foreground group-hover:text-primary-accent transition-colors">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">{price}</span>
            <span className="text-xs text-primary-accent opacity-0 group-hover:opacity-100 transition-opacity tracking-wider">
              VIEW PRODUCT →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
