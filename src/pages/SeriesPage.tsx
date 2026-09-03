import ContinueWatchingCarousel from "@/components/ContinueWatchingCarousel/ContinueWatchingCarousel";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import { MediaDetailModal, type MediaDetailItem } from "@/components/MediaDetailModal";
import { continueWatchSeriesItems } from "@/data/continueWatchSeries";
import heroBannerSeriesData from "@/data/heroBannerSeriesData";
import { useState } from "react";

export default function SeriesPage() {
  const [selectedMedia, setSelectedMedia] = useState<MediaDetailItem | null>(null);

  return (
    <div className="bg-background-body text-white">
      <HeroBanner
        {...heroBannerSeriesData}
      />

      <div className="bg-background-page-header">
        <ContinueWatchingCarousel title="Melanjutkan Tonton Series" handleItemClick={setSelectedMedia} watchItems={continueWatchSeriesItems} key="continue-watching" />
      </div>
      <MediaDetailModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </div>
  )
}
