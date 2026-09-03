import type { ReactNode } from "react";

type HeroBackgroundProps = {
  imageUrl: string;
  alt?: string;
  className?: string;
  children?: ReactNode;
};

export default function HeroBackground({
  imageUrl,
  alt = "",
  className = "",
  children,
}: HeroBackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-[225px] lg:h-[587px] object-cover object-top"
        loading="eager"
      />
      {children}
    </div>
  );
}
