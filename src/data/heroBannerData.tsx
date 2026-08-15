import { InfoIcon } from "lucide-react";

import heroBackground from "../assets/hero/hero-section-banner.png";
import type { HeroAction } from "../components/HeroBanner/HeroActionItem";

export type HeroBannerData = {
  backgroundImage: string;
  title: string;
  description: string;
  actions: HeroAction[];
  ratingLabel: string;
};

const heroBannerData: HeroBannerData = {
  backgroundImage: heroBackground,
  title: "Happiness",
  description:
    "Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen setelah wabah misterius menyebar di kota.",
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

export default heroBannerData;
