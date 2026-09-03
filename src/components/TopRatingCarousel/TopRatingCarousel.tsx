import { useState } from "react"
import Carousel from "../common/Carousel"
import { PosterCard, type PosterItem } from "../PosterCard"

export interface TopRatingCarouselProps {
  title?: string
  items: PosterItem[]
  onItemClick?: (item: PosterItem) => void
  onAddToMyList?: (item: PosterItem) => void
  onToggleMyList?: (item: PosterItem) => void
  isInMyList?: (id: string) => boolean
  className?: string
}

export function TopRatingCarousel({
  title = "Top Rating Film dan Series Hari ini",
  items,
  onItemClick,
  onAddToMyList,
  onToggleMyList,
  isInMyList,
  className = "",
}: TopRatingCarouselProps) {
  const [activePopupId, setActivePopupId] = useState<string | null>(null)

  return (
    <Carousel
      title={title}
      items={items}
      getKey={(item) => item.id}
      renderItem={(item, index, carouselItems, viewportRef) => (
        <PosterCard
          item={item}
          onClick={onItemClick}
          carouselViewportRef={viewportRef}
          isPopupOpen={activePopupId === item.id}
          openPopup={() => setActivePopupId(item.id)}
          closePopup={() => setActivePopupId((currentId) => currentId === item.id ? null : currentId)}
          onAddToMyList={onAddToMyList}
          onToggleMyList={onToggleMyList}
          isInMyList={isInMyList?.(item.id) ?? false}
          popupAlign={index === 0 ? "start" : index === carouselItems.length - 1 ? "end" : "center"}
        />
      )}
      className={className}
      gapItem="gap-4 lg:gap-7"
      emptyState={<p className="px-4 text-white/60">Belum ada film top rating saat ini.</p>}
    />
  )
}
