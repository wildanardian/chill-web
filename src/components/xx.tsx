import { useCarouselScroll } from '../hooks/useCarouselScroll'

export interface WatchItem {
  id: string
  title: string
  posterUrl: string
  rating: number
  maxRating?: number
  episodeLabel?: string
}

export interface ContinueWatchingCarouselProps {
  title?: string
  items: WatchItem[]
  onItemClick?: (item: WatchItem) => void
  className?: string
}

// Component
export default function ContinueWatchingCarousel({
  title = 'Melanjutkan Tonton Film',
  items,
  onItemClick,
  className = '',
}: ContinueWatchingCarouselProps) {
  const { ref, scrollLeft, scrollRight, canScrollLeft, canScrollRight } = useCarouselScroll()

  // CSS string to hide scrollbars (including webkit)
  const scrollbarCSS = `
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  `

  return (
    <section className={`bg-background-page-header p-4 ${className}`}>
      <style>{scrollbarCSS}</style>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-white font-bold text-lg">{title}</h2>
      </div>

      <div className="relative group">
        {/* Left nav */}
        <button
          data-testid="cw-prev"
          onClick={scrollLeft}
          aria-label="Scroll left"
          disabled={!canScrollLeft}
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center transform transition-opacity ${canScrollLeft ? 'opacity-100' : 'opacity-40 pointer-events-none'
            } sm:opacity-0 md:opacity-0 md:group-hover:opacity-100`}
        >
          ‹
        </button>

        {/* Right nav */}
        <button
          data-testid="cw-next"
          onClick={scrollRight}
          aria-label="Scroll right"
          disabled={!canScrollRight}
          className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center transform transition-opacity ${canScrollRight ? 'opacity-100' : 'opacity-40 pointer-events-none'
            } md:opacity-0 md:group-hover:opacity-100`}
        >
          ›
        </button>

        <div
          ref={ref}
          className="scrollbar-hide overflow-x-auto flex gap-4 py-2 px-1 scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              data-testid={`cw-card-${item.id}`}
              onClick={() => onItemClick?.(item)}
              className="shrink-0 cursor-pointer transform transition-transform hover:scale-105"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="relative rounded-md overflow-hidden bg-gray-800 w-[309px] h-[151px] lg:w-[302px] lg:h-[162px]">
                <img
                  src={item.posterUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {item.episodeLabel && (
                  <span className="absolute left-2 top-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {item.episodeLabel}
                  </span>
                )}

                <div className="absolute bottom-0 p-4 flex items-center justify-between w-full gradient-card-continue-watching">
                  <p className="text-white text-sm font-medium truncate">{item.title}</p>
                  <p className="text-white text-xs">★ {item.rating}{item.maxRating ? `/${item.maxRating}` : '/5'}</p>
                </div>

                {/* <div className="absolute left-0 right-0 bottom-0 px-2 py-3 bg-linear-to-t from-black/80 to-transparent">

                </div>

                <div className="absolute right-2 bottom-2 bg-black/60 text-yellow-300 text-xs font-semibold px-2 py-1 rounded-full">
                  ★ {item.rating}{item.maxRating ? `/${item.maxRating}` : '/5'}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

