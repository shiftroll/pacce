"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ExternalLink, Loader2 } from "lucide-react";
import { useAffiliate } from "./AffiliateProvider";
import { trackAffiliateClick, buildTokopediaUrl } from "@/lib/affiliate";

interface TrackedBuyButtonProps {
  productId?: string;
  productName?: string;
  productSlug?: string;
  variant?: "primary" | "tokopedia";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export default function TrackedBuyButton({
  productId,
  productName,
  productSlug,
  variant = "tokopedia",
  size = "md",
  className = "",
  children,
  showIcon = true,
}: TrackedBuyButtonProps) {
  const { affiliateId } = useAffiliate();
  const [isTracking, setIsTracking] = useState(false);

  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wider transition-all duration-300";

  const variants = {
    primary: "bg-primary-accent text-background hover:bg-opacity-90",
    tokopedia:
      "border border-tokopedia-green text-tokopedia-green bg-transparent hover:bg-tokopedia-green hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const handleClick = async () => {
    setIsTracking(true);

    const redirectUrl = buildTokopediaUrl("https://www.tokopedia.com/pacce", productSlug);

    // Track the click if there's an affiliate attribution
    if (affiliateId) {
      await trackAffiliateClick({
        affiliateId,
        productId,
        productName,
        redirectUrl,
      });
    }

    // Small delay to ensure tracking completes
    setTimeout(() => {
      window.open(redirectUrl, "_blank", "noopener,noreferrer");
      setIsTracking(false);
    }, 100);
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={isTracking}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isTracking ? (
        <Loader2 className="mr-2 animate-spin" size={18} />
      ) : showIcon ? (
        <ShoppingCart className="mr-2" size={18} />
      ) : null}
      {children || "BUY ON TOKOPEDIA"}
      {!isTracking && <ExternalLink className="ml-2" size={14} />}
    </motion.button>
  );
}
