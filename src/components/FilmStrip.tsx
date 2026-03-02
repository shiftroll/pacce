"use client";

interface FilmStripProps {
  position: "top" | "bottom" | "left" | "right";
  className?: string;
}

export default function FilmStrip({ position, className = "" }: FilmStripProps) {
  const isHorizontal = position === "top" || position === "bottom";

  const positionClasses = {
    top: "top-0 left-0 right-0 h-8",
    bottom: "bottom-0 left-0 right-0 h-8",
    left: "top-0 bottom-0 left-0 w-8",
    right: "top-0 bottom-0 right-0 w-8",
  };

  // Film strip holes pattern
  const holes = Array.from({ length: isHorizontal ? 30 : 40 }, (_, i) => i);

  return (
    <div
      className={`absolute ${positionClasses[position]} bg-muted/50 flex ${
        isHorizontal ? "flex-row" : "flex-col"
      } items-center justify-around z-20 ${className}`}
    >
      {holes.map((i) => (
        <div
          key={i}
          className={`${
            isHorizontal ? "w-4 h-3" : "w-3 h-4"
          } bg-background rounded-sm`}
        />
      ))}
    </div>
  );
}
