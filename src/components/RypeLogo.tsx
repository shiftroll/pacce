"use client";

interface RypeLogoProps {
  variant?: "white" | "dark";
  className?: string;
}

export default function RypeLogo({ variant = "white", className = "" }: RypeLogoProps) {
  const fillColor = variant === "white" ? "#FFFFFF" : "#090A0B";

  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* R */}
      <path
        d="M0 0H12V50H0V0ZM12 0H28C35.732 0 42 6.268 42 14V14C42 21.732 35.732 28 28 28H12V0ZM12 28L32 50H18L0 30"
        fill={fillColor}
      />

      {/* Y */}
      <path
        d="M52 0L70 22L88 0H76L70 8L64 0H52ZM64 22V50H76V22"
        fill={fillColor}
      />

      {/* P */}
      <path
        d="M96 0H108V50H96V0ZM108 0H124C131.732 0 138 6.268 138 14V14C138 21.732 131.732 28 124 28H108V0Z"
        fill={fillColor}
      />

      {/* E */}
      <path
        d="M148 0H188V10H160V20H184V30H160V40H188V50H148V0Z"
        fill={fillColor}
      />
    </svg>
  );
}
