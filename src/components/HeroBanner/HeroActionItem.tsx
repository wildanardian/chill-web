import type { ReactNode } from "react";
import { Link } from "react-router";

export type HeroAction = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
};

const VARIANT_STYLES: Record<NonNullable<HeroAction["variant"]>, string> = {
  primary: "bg-primary-main-300 text-white hover:bg-primary-main-200",
  secondary: "bg-background-paper text-white hover:bg-background-body",
}

const BASE_STYLES = "inline-flex items-center justify-center gap-2 rounded-full px-3 py-1 lg:px-6.5 lg:py-2.5 text-xs lg:text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40";

export default function HeroActionItem({ action }: { action: HeroAction }) {
  const classes = `${BASE_STYLES} ${VARIANT_STYLES[action.variant ?? "primary"]}`;
  const content = (
    <>
      {action.icon}
      <span>{action.label}</span>
    </>
  );

  if (action.href) {
    return (
      <Link to={action.href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={action.onClick} className={classes}>
      {content}
    </button>
  );
}