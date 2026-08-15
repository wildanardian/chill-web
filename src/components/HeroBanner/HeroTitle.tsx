import type { ReactNode } from "react";

type HeroTitleProps = {
	children: ReactNode;
	className?: string;
};

export default function HeroTitle({
	children,
	className = "",
}: HeroTitleProps) {
	return <h1 className={className}>{children}</h1>;
}
