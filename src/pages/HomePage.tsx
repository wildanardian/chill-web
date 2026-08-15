import { useState } from "react";

import HeroBanner from "../components/HeroBanner/HeroBanner";
import ContinueWatchingCarousel from "../components/ContinueWatchingCarousel/ContinueWatchingCarousel";
import { TopRatingCarousel } from "../components/TopRatingCarousel";
import Carousel from "../components/common/Carousel";
import { PosterCard, type PosterItem } from "../components/PosterCard";
import continueWatchingItems from "../data/continueWatchingData";
import filmTrendingItems from "../data/filmTrending";
import heroBannerData from "../data/heroBannerData";
import rilisBaruItems from "../data/rilisBaru";
import topRatingItems from "../data/topRatingData";

export default function HomePage() {
  const [activeTrendingPopupId, setActiveTrendingPopupId] = useState<string | null>(null);
  const [activeRilisBaruPopupId, setActiveRilisBaruPopupId] = useState<string | null>(null);

  return (
    <div className="bg-background-body text-white">
      <HeroBanner
        {...heroBannerData}
      />

      <div className="bg-background-page-header">
        <ContinueWatchingCarousel handleItemClick={() => { }} watchItems={continueWatchingItems} key="continue-watching" />
        <TopRatingCarousel items={topRatingItems} />
        <Carousel<PosterItem>
          title="Film Trending"
          items={filmTrendingItems}
          getKey={(item) => item.id}
          renderItem={(item, index, carouselItems, viewportRef) => (
            <PosterCard
              item={item}
              carouselViewportRef={viewportRef}
              isPopupOpen={activeTrendingPopupId === item.id}
              openPopup={() => setActiveTrendingPopupId(item.id)}
              closePopup={() => setActiveTrendingPopupId((currentId) => currentId === item.id ? null : currentId)}
              popupAlign={index === 0 ? "start" : index === carouselItems.length - 1 ? "end" : "center"}
            />
          )}
          gapItem="gap-4 lg:gap-7"
          emptyState={<p className="text-white/60 px-4 py-6">Belum ada film trending.</p>}
        />
        <Carousel<PosterItem>
          title="Rilis Baru"
          items={rilisBaruItems}
          getKey={(item) => item.id}
          renderItem={(item, index, carouselItems, viewportRef) => (
            <PosterCard
              item={item}
              carouselViewportRef={viewportRef}
              isPopupOpen={activeRilisBaruPopupId === item.id}
              openPopup={() => setActiveRilisBaruPopupId(item.id)}
              closePopup={() => setActiveRilisBaruPopupId((currentId) => currentId === item.id ? null : currentId)}
              popupAlign={index === 0 ? "start" : index === carouselItems.length - 1 ? "end" : "center"}
            />
          )}
          gapItem="gap-4 lg:gap-7"
          emptyState={<p className="text-white/60 px-4 py-6">Belum ada rilisan baru.</p>}
        />
      </div>
    </div>
  );
}
