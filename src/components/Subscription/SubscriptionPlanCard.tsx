import { Check } from "lucide-react"

interface SubscriptionPlanCardProps {
  name: string
  price: string
  account: string
  features: string[]
  buttonLabel?: string
  termsText?: string
}

export default function SubscriptionPlanCard({
  name,
  price,
  account,
  features,
  buttonLabel = "Langganan",
  termsText = "Syarat dan Ketentuan Berlaku",
}: SubscriptionPlanCardProps) {
  return (
    <article className="flex min-h-[372px] w-full max-w-[313px] flex-col rounded-xl bg-gradient-to-br from-[#5B7BF0] to-primary-main-200 px-8 py-8 text-white shadow-soft-card">
      <span className="mb-9 w-fit rounded-full bg-background-extra px-6 py-3 text-xl font-700">
        {name}
      </span>

      <div className="mb-8 text-base leading-7">
        <p>{price}</p>
        <p>{account}</p>
      </div>

      <ul className="mb-12 space-y-3 text-base">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="h-5 w-5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t border-white/20 pt-8 text-center">
        <button
          type="button"
          className="mb-3 w-full rounded-full bg-white px-6 py-3 text-base font-700 text-primary-main-300 transition hover:bg-white/90"
        >
          {buttonLabel}
        </button>
        <p className="text-sm text-white">{termsText}</p>
      </div>
    </article>
  )
}
