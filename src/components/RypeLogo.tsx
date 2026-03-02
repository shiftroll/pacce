import Image from "next/image";

interface RypeLogoProps {
  variant?: "white" | "dark";
  className?: string;
}

export default function RypeLogo({ variant = "white", className = "" }: RypeLogoProps) {
  return (
    <Image
      src="/images/rype-logo.png"
      alt="RYPE"
      width={120}
      height={40}
      className={`${className} ${variant === "dark" ? "invert" : ""}`}
      priority
    />
  );
}
