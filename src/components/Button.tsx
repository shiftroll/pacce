"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "ghost" | "primary" | "tokopedia";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "ghost",
  size = "md",
  href,
  external = false,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wider transition-all duration-300";

  const variants = {
    ghost:
      "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
    primary:
      "bg-primary-accent text-background hover:bg-opacity-90",
    tokopedia:
      "border border-tokopedia-green text-tokopedia-green bg-transparent hover:bg-tokopedia-green hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href}>
        <motion.span
          className={buttonClasses}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
