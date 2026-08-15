import { VolumeOff } from "lucide-react";
// import { useState } from "react";
import HeroActions from "./HeroActions";
import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroContent from "./HeroContent";
import HeroDescription from "./HeroDescription";
import HeroTitle from "./HeroTitle";
import { type HeroAction } from './HeroActionItem';
// import { GenreDropdown, type GenreOption } from "../common/GenreDropdown";
// import { genreOptions } from "@/data/genreData";

type HeroBannerProps = {
  backgroundImage: string;
  title: string;
  description: string;
  actions: HeroAction[];
  ratingLabel?: string;
  eyebrow?: string;
  className?: string;
  showMuteControl?: boolean;
};

export default function HeroBanner({
  backgroundImage,
  title,
  description,
  actions,
  ratingLabel = "18+",
  className = "",
  showMuteControl = true,
}: HeroBannerProps) {
  // const [selectedGenre, setSelectedGenre] = useState<GenreOption | null>(null);

  return (
    <section
      className={`relative h-[225px] w-full overflow-hidden md:h-[420px] lg:h-[587px] ${className}`}
    >
      <HeroBackground imageUrl={backgroundImage} alt={title} />
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#181a1c]"></div>

      <div className="absolute left-4 top-4 z-20 md:left-8 md:top-8 lg:left-20 lg:top-12 hidden md:block">
        {/* <GenreDropdown
          options={genreOptions}
          selected={selectedGenre}
          onSelect={setSelectedGenre}
          className="text-xs md:text-sm"
          triggerClassName="px-4 py-2 min-w-[115px] w-auto h-[44px]"
        /> */}
      </div>

      <HeroContent className="relative z-10 flex h-full flex-col justify-end px-4 pb-4 pt-10 md:px-8 md:pb-8 lg:px-20 lg:pb-20">
        <div className="max-w-[280px] space-y-2 sm:max-w-xl md:max-w-2xl md:space-y-3 lg:max-w-3xl lg:space-y-4">

          <HeroTitle className="max-w-2xl text-2xl font-black leading-none drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl lg:text-7xl">
            {title}
          </HeroTitle>

          <HeroDescription className="max-w-2xl text-[10px] leading-4 text-white/85 sm:text-sm sm:leading-5 md:text-base lg:text-[1.05rem] lg:leading-7 line-clamp-2">
            {description}
          </HeroDescription>
        </div>

        <div className="mt-2 flex w-full items-center justify-between gap-3 md:mt-3 lg:mt-4">
          <div className="flex min-w-0 items-center gap-2">
            <HeroActions actions={actions} />
            <HeroBadge label={ratingLabel} variant="outline" />
          </div>

          {showMuteControl ? (
            <button
              type="button"
              aria-label="Matikan suara hero"
              className="inline-flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full border border-secondary-100 text-secondary-100 backdrop-blur-sm transition hover:bg-black/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 lg:h-12 lg:w-12"
            >
              <VolumeOff className="w-3 h-3 lg:h-5 lg:w-5" />
              {/* <span className="sr-only">Matikan suara</span> */}
            </button>
          ) : null}
        </div>
      </HeroContent>
    </section>
  );

}
