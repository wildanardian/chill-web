import { VolumeOff } from "lucide-react";

export default function MuteButton() {
  return (
    <button
      type="button"
      aria-label="Matikan suara hero"
      className="inline-flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full border border-secondary-100 text-secondary-100 backdrop-blur-sm transition hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 lg:h-12 lg:w-12"
    >
      <VolumeOff className="w-3 h-3 lg:h-5 lg:w-5" />
    </button>
  )
}