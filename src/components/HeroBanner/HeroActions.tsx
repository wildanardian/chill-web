import type { HeroAction } from "./HeroActionItem";
import HeroActionItem from "./HeroActionItem";

type HeroActionsProps = {
  actions: HeroAction[];
  className?: string;
};

export default function HeroActions({
  actions, className = "",
}: HeroActionsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {actions.map((action, index) => (
        <HeroActionItem key={index} action={action} />
      ))}
    </div>
  )
}
