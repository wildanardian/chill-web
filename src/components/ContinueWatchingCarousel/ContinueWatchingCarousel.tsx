import Carousel from "../common/Carousel/Carousel";
import { MediaCard } from "../MediaCard/MediaCard";
import { type WatchItem } from "../MediaCard/mediaCard.types";

export interface ContinueWatchingCarouselProps {
  watchItems: WatchItem[]
  handleItemClick: (item: WatchItem) => void
}

export default function ContinueWatchingCarousel({ watchItems, handleItemClick }: ContinueWatchingCarouselProps) {
  return (
    <Carousel
      title="Melanjutkan Tonton Film"
      items={watchItems}
      getKey={(item) => item.id}
      renderItem={(item, _index, _items, viewportRef) => (
        <MediaCard
          item={item}
          onClick={handleItemClick}
          carouselViewportRef={viewportRef}
        />
      )}
      emptyState={<p className="text-white/60 px-4">Belum ada tontonan.</p>}
    />
  )
}
