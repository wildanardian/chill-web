import { InfoIcon } from "lucide-react";

import heroBackground from "../assets/hero/hero-series-section-banner.png";
import type { HeroAction } from "../components/HeroBanner/HeroActionItem";

export type HeroBannerData = {
  backgroundImage: string;
  title: string;
  description: string;
  actions: HeroAction[];
  ratingLabel: string;
};

const heroBannerSeriesData: HeroBannerData = {
  backgroundImage: heroBackground,
  title: "Happines",
  description:
    "Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.",
  actions: [
    {
      label: "Mulai",
      href: "/login",
    },
    {
      label: "Selengkapnya",
      href: "#detail",
      variant: "secondary",
      icon: <InfoIcon className="h-4 w-4" />,
    },
  ],
  ratingLabel: "18+",
};

export default heroBannerSeriesData;
