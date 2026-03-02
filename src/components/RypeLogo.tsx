"use client";

import { useState } from "react";
import Image from "next/image";

interface RypeLogoProps {
  variant?: "white" | "dark";
  className?: string;
}

export default function RypeLogo({ variant = "white", className = "" }: RypeLogoProps) {
  const [imageError, setImageError] = useState(false);
  const fillColor = variant === "white" ? "#FFFFFF" : "#090A0B";

  // Try to load PNG first, fallback to SVG
  if (!imageError) {
    return (
      <Image
        src="/images/rype-logo.png"
        alt="RYPE"
        width={120}
        height={40}
        className={`${className} ${variant === "dark" ? "invert" : ""}`}
        priority
        unoptimized
        onError={() => setImageError(true)}
      />
    );
  }

  // SVG fallback
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ height: "100%", width: "auto" }}
    >
      <text
        x="0"
        y="40"
        fontFamily="Arial Black, sans-serif"
        fontSize="48"
        fontWeight="900"
        fill={fillColor}
        letterSpacing="-2"
      >
        RYPE
      </text>
    </svg>
  );
}
