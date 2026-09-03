import { useState } from "react";

import HeroBanner from "../components/HeroBanner/HeroBanner";
import ContinueWatchingCarousel from "../components/ContinueWatchingCarousel/ContinueWatchingCarousel";
import { MediaDetailModal, type MediaDetailItem } from "../components/MediaDetailModal";
import { TopRatingCarousel } from "../components/TopRatingCarousel";
import Carousel from "../components/common/Carousel";
import { PosterCard, type PosterItem } from "../components/PosterCard";
import continueWatchingItems from "../data/continueWatchingData";
import filmTrendingItems from "../data/filmTrending";
import heroBannerMovieData from "../data/heroBannerMovieData";
import rilisBaruItems from "../data/rilisBaru";
import topRatingItems from "../data/topRatingData";
import type { MediaRecommendation } from "../types/mediaDetail";

function toRecommendations(items: PosterItem[], selectedId: string): MediaRecommendation[] {
  return items
    .filter((item) => item.id !== selectedId)
    .slice(0, 3)
    .map((item) => {
      const badge = item.badge?.variant === "top10" || item.badge?.variant === "episode"
        ? { label: item.badge.label, variant: item.badge.variant }
        : undefined

      return {
        id: item.id,
        title: item.title,
        posterUrl: item.posterUrl,
        badge,
      }
    })
}

export default function FilmPage() {
  const [activeTrendingPopupId, setActiveTrendingPopupId] = useState<string | null>(null);
  const [activeTopRatingFilmPopupId, setActiveTopRatingFilmPopupId] = useState<string | null>(null);
  const [activeFilmTrendingPopupId, setActiveFilmTrendingPopupId] = useState<string | null>(null);
  const [activeRilisBaruPopupId, setActiveRilisBaruPopupId] = useState<string | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<MediaDetailItem | null>(null);

  const allPosterItems = [...topRatingItems, ...filmTrendingItems, ...rilisBaruItems]
  const recommendations = selectedMedia ? toRecommendations(allPosterItems, selectedMedia.id) : []

  return (
    <div className="bg-background-body text-white">
      <HeroBanner
        {...heroBannerMovieData}
      />

      <div className="bg-background-page-header">
        <ContinueWatchingCarousel title="Melanjutkan Tonton Film" handleItemClick={setSelectedMedia} watchItems={continueWatchingItems} key="continue-watching" />
        <TopRatingCarousel items={topRatingItems} onItemClick={setSelectedMedia} />
        <Carousel<PosterItem>
          title="Film Persembahan Chill"
          items={filmTrendingItems}
          getKey={(item) => item.id}
          renderItem={(item, index, carouselItems, viewportRef) => (
            <PosterCard
              item={item}
              onClick={setSelectedMedia}
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
          title="Top Rating Film Hari Ini"
          items={rilisBaruItems}
          getKey={(item) => item.id}
          renderItem={(item, index, carouselItems, viewportRef) => (
            <PosterCard
              item={item}
              onClick={setSelectedMedia}
              carouselViewportRef={viewportRef}
              isPopupOpen={activeTopRatingFilmPopupId === item.id}
              openPopup={() => setActiveTopRatingFilmPopupId(item.id)}
              closePopup={() => setActiveTopRatingFilmPopupId((currentId) => currentId === item.id ? null : currentId)}
              popupAlign={index === 0 ? "start" : index === carouselItems.length - 1 ? "end" : "center"}
            />
          )}
          gapItem="gap-4 lg:gap-7"
          emptyState={<p className="text-white/60 px-4 py-6">Belum ada rilisan baru.</p>}
        />
        <Carousel<PosterItem>
          title="Film Trending"
          items={rilisBaruItems}
          getKey={(item) => item.id}
          renderItem={(item, index, carouselItems, viewportRef) => (
            <PosterCard
              item={item}
              onClick={setSelectedMedia}
              carouselViewportRef={viewportRef}
              isPopupOpen={activeFilmTrendingPopupId === item.id}
              openPopup={() => setActiveFilmTrendingPopupId(item.id)}
              closePopup={() => setActiveFilmTrendingPopupId((currentId) => currentId === item.id ? null : currentId)}
              popupAlign={index === 0 ? "start" : index === carouselItems.length - 1 ? "end" : "center"}
            />
          )}
          gapItem="gap-4 lg:gap-7"
          emptyState={<p className="text-white/60 px-4 py-6">Belum ada rilisan baru.</p>}
        />
        <Carousel<PosterItem>
          title="Rilis Baru"
          items={rilisBaruItems}
          getKey={(item) => item.id}
          renderItem={(item, index, carouselItems, viewportRef) => (
            <PosterCard
              item={item}
              onClick={setSelectedMedia}
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
      <MediaDetailModal
        item={selectedMedia}
        recommendations={recommendations}
        onClose={() => setSelectedMedia(null)}
      />
    </div>
  )
}
