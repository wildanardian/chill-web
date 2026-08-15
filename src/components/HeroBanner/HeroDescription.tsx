import type { ReactNode } from "react";

type HeroDescriptionProps = {
	children: ReactNode;
	className?: string;
};

export default function HeroDescription({
	children,
	className = "",
}: HeroDescriptionProps) {
	return <p className={className}>{children}</p>;
}
