import type { ReactNode } from "react";

type HeroBadgeProps = {
  label: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function HeroBadge({
  label,
  variant = "solid",
  className = "",
}: HeroBadgeProps) {
  const badgeStyles =
    variant === "outline"
      ? "border border-secondary-100 bg-black/15 text-secondary-100"
      : "bg-white/15 text-secondary-100";

  return (
    <span
      className={`inline-flex px-1 py-1 lg:px-2.5 lg:py-2.5 items-center justify-center rounded-full text-xs lg:text-base font-semibold tracking-wide backdrop-blur-sm ${badgeStyles} ${className}`}
    >
      {label}
    </span>
  );
}
