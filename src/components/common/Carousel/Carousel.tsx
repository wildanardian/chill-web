import type { RefObject } from 'react'
import type { WheelEvent } from 'react'
import { useCarouselScroll } from '../../../hooks/useCarouselScroll'
import { NavButton } from './NavButton'

export interface CarouselProps<T> {
  title?: string
  items: T[]
  getKey: (item: T) => string
  renderItem: (item: T, index: number, items: T[], viewportRef: RefObject<HTMLDivElement | null>) => React.ReactNode
  className?: string
  gapItem?: string
  emptyState?: React.ReactNode
}

export default function Carousel<T>({
  title,
  items,
  getKey,
  renderItem,
  className = '',
  gapItem = '',
  emptyState = null,
}: CarouselProps<T>) {
  const { ref, scrollLeft, scrollRight, canScrollLeft, canScrollRight } = useCarouselScroll()

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches
    const isHorizontalWheel = Math.abs(event.deltaX) > Math.abs(event.deltaY)

    if (isDesktop && isHorizontalWheel) {
      event.preventDefault()
    }
  }

  if (items.length === 0) return <>{emptyState}</>

  return (
    <section className={`relative overflow-visible bg-background-page-header px-4 py-8 md:px-8 lg:px-20 lg:py-10 lg:hover:z-50 ${className}`}>
      {title && (
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-700 text-xl md:text-2xl">{title}</h2>
        </div>
      )}

      <div className="group relative overflow-visible">
        <NavButton direction="left" onClick={scrollLeft} disabled={!canScrollLeft} />
        <NavButton direction="right" onClick={scrollRight} disabled={!canScrollRight} />

        <div
          ref={ref}
          onWheel={handleWheel}
          className={`scrollbar-hide flex overflow-x-auto overflow-y-hidden px-1 py-2 scroll-smooth lg:pb-0 lg:pt-8 ${gapItem ? gapItem : 'gap-4 lg:gap-6'}`}
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {items.map((item, index) => (
            <div key={getKey(item)} className="shrink-0 overflow-visible" style={{ scrollSnapAlign: 'start' }}>
              {renderItem(item, index, items, ref)}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
