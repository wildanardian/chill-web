import { InfoIcon } from "lucide-react";

import heroBackground from "../assets/hero/hero-film-section-banner.png";
import type { HeroAction } from "../components/HeroBanner/HeroActionItem";

export type HeroBannerData = {
  backgroundImage: string;
  title: string;
  description: string;
  actions: HeroAction[];
  ratingLabel: string;
};

const heroBannerMovieData: HeroBannerData = {
  backgroundImage: heroBackground,
  title: "Avatar 3",
  description:
    "Avatar 3 melanjutkan cerita konflik antara manusia dan Na'vi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Na'vi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi.",
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

export default heroBannerMovieData;
