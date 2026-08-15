import type { ReactNode } from "react";

type HeroContentProps = {
	children: ReactNode;
	className?: string;
};

export default function HeroContent({
	children,
	className = "",
}: HeroContentProps) {
	return <div className={className}>{children}</div>;
}
