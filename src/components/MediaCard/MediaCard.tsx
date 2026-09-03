import { Check, ChevronDown, Play } from "lucide-react"
import type { MouseEvent, RefObject } from "react"
import { useEffect, useRef } from "react"

import { RatingBadge } from "../common/RatingBadge/RatingBadge"
import { HoverPreviewPortal } from "../common/HoverPreviewPortal"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { useHoverPreviewPosition } from "../../hooks/useHoverPreviewPosition"
import type { WatchItem } from "./mediaCard.types"

interface MediaCardProps {
  item: WatchItem
  onClick?: (item: WatchItem) => void
  width?: string   // default via CSS var, bisa dioverride per pemakaian
  height?: string
  carouselViewportRef?: RefObject<HTMLDivElement | null>
}

export function MediaCard({
  item,
  onClick,
  width = 'w-[309px]',
  height = 'h-[151px]',
  carouselViewportRef,
}: MediaCardProps) {
  const { cardRef, position, show, hide } = useHoverPreviewPosition()
  const closeTimerRef = useRef<number | null>(null)
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const scheduleHide = () => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(hide, 100)
  }

  const handleMouseEnter = () => {
    if (isMobile) return

    clearCloseTimer()
    show()
  }

  const handleMouseLeave = () => {
    scheduleHide()
  }

  const handleControlClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
  }

  useEffect(() => {
    return () => {
      clearCloseTimer()
    }
  }, [])

  useEffect(() => {
    const viewport = carouselViewportRef?.current

    if (!position || !viewport) return

    viewport.addEventListener("scroll", hide, { passive: true })

    return () => {
      viewport.removeEventListener("scroll", hide)
    }
  }, [carouselViewportRef, hide, position])

  return (
    <div
      ref={cardRef}
      data-testid={`cw-card-${item.id}`}
      onClick={() => onClick?.(item)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative cursor-pointer rounded-md bg-gray-800 ${width} ${height} lg:h-[162px] lg:w-[302px]`}
    >
      <div className={`overflow-hidden rounded-md bg-background-paper shadow-xl ${position && !isMobile ? "opacity-0" : "opacity-100"}`}>
        <div className={`relative ${width} ${height} lg:h-[162px] lg:w-[302px]`}>
          <img src={item.posterUrl} alt={item.title} className="h-full w-full object-cover" />

          {item.episodeLabel && (
            <span className="absolute left-2 top-2 rounded-full bg-primary-main-300 px-2.5 py-1 text-xs font-semibold text-white">
              {item.episodeLabel}
            </span>
          )}

          <div className="gradient-card-continue-watching absolute bottom-0 flex w-full items-center justify-between p-4">
            <p className="truncate text-sm font-medium text-white">{item.title}</p>
            <RatingBadge rating={item.rating} maxRating={item.maxRating} />
          </div>
        </div>

        <HoverPreviewPortal position={!isMobile ? position : null}>
          <div
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleHide}
            className="relative hidden overflow-hidden rounded-md bg-background-paper text-white shadow-xl lg:block"
          >
            <div className="relative h-[162px] w-full">
              <img
                src={item.previewPosterUrl ?? item.posterUrl}
                alt={item.title}
                className="h-full w-full bg-black object-cover"
              />
            </div>
            <div className="bg-background-paper p-3">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleControlClick}
                    aria-label={`Putar ${item.title}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/85"
                  >
                    <Play className="h-4 w-4 fill-current" />
                  </button>
                  <button
                    type="button"
                    onClick={handleControlClick}
                    aria-label={`Tambahkan ${item.title} ke daftar`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 text-white transition hover:border-white hover:bg-white/10"
                  >
                    <Check className="h-4 w-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleControlClick}
                  aria-label={`Info selengkapnya tentang ${item.title}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 text-white transition hover:border-white hover:bg-white/10"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>

              <div className="mb-2 flex items-center gap-2 text-xs text-white/85">
                <span className="rounded bg-white/20 px-1.5 py-0.5 text-white">
                  {item.ageRating}
                </span>
                <span>{item.episodeCount}</span>
              </div>

              <p className="line-clamp-2 text-xs text-white/85">
                {item.genres.join(" • ")}
              </p>
            </div>
          </div>
        </HoverPreviewPortal>
      </div>
    </div>
  )
}
