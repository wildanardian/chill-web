import { Check, ChevronDown, Play } from "lucide-react"
import type { MouseEvent, RefObject } from "react"
import { Fragment, useEffect, useRef } from "react"
import { HoverPreviewPortal } from "../common/HoverPreviewPortal"
import { useHoverPreviewPosition } from "../../hooks/useHoverPreviewPosition"
import type { PosterItem, PosterBadgeVariant } from "./PosterCard.types"

interface PosterCardProps {
  item: PosterItem
  onClick?: (item: PosterItem) => void
  popupAlign?: "start" | "center" | "end"
  carouselViewportRef?: RefObject<HTMLDivElement | null>
  isPopupOpen: boolean
  openPopup: () => void
  closePopup: () => void
}

const BADGE_STYLES: Record<PosterBadgeVariant, string> = {
  top10: "absolute right-1 top-0 flex w-[15px] h-[22px] lg:h-[48px] lg:w-[31px] items-center justify-center rounded-tr-[4px] rounded-bl-[4px] lg:rounded-bl-md lg:rounded-tr-md bg-error-pressed px-1 text-center text-[7px] lg:text-sm font-normal lg:leading-5 text-white",
  episode: "absolute left-2 top-2 rounded-full bg-primary-main-300 px-[5px] py-[2px] lg:py-1 lg:px-2.5 text-[6px] lg:text-sm font-semibold text-white",
}

export function PosterCard({
  item,
  onClick,
  carouselViewportRef,
  isPopupOpen,
  openPopup,
  closePopup,
}: PosterCardProps) {
  const { cardRef, position, show, hide } = useHoverPreviewPosition()
  const closeTimerRef = useRef<number | null>(null)

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const closePreview = () => {
    clearCloseTimer()
    hide()
    closePopup()
  }

  const scheduleClosePreview = () => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(closePreview, 100)
  }

  const isDesktopViewport = () => {
    return window.matchMedia("(min-width: 1024px)").matches
  }

  const isCardFullyVisible = () => {
    const card = cardRef.current
    const viewport = carouselViewportRef?.current

    if (!card || !viewport) return true

    const cardRect = card.getBoundingClientRect()
    const viewportRect = viewport.getBoundingClientRect()
    const tolerance = 1

    return (
      cardRect.left >= viewportRect.left - tolerance &&
      cardRect.right <= viewportRect.right + tolerance
    )
  }

  const handleBasePointerEnter = () => {
    if (!isDesktopViewport() || !isCardFullyVisible()) return

    clearCloseTimer()
    show()
  }

  const handleBasePointerLeave = () => {
    scheduleClosePreview()
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
    if (position && !isPopupOpen) {
      openPopup()
    }
  }, [isPopupOpen, openPopup, position])

  useEffect(() => {
    const viewport = carouselViewportRef?.current

    if (!isPopupOpen || !viewport) return

    const closeOnCarouselScroll = () => {
      closePreview()
    }

    viewport.addEventListener("scroll", closeOnCarouselScroll, { passive: true })

    return () => {
      viewport.removeEventListener("scroll", closeOnCarouselScroll)
    }
  }, [carouselViewportRef, isPopupOpen])

  return (
    <div
      ref={cardRef}
      data-testid={`poster-card-${item.id}`}
      onClick={() => onClick?.(item)}
      className={`group relative h-[144px] w-[96px] cursor-pointer rounded-lg lg:h-[365px] lg:w-[234px] ${isPopupOpen ? "bg-transparent lg:z-0" : "z-0"}`}
    >
      <div
        onPointerEnter={handleBasePointerEnter}
        onPointerLeave={handleBasePointerLeave}
        className={`overflow-hidden rounded-lg  ${isPopupOpen ? "opacity-0" : "opacity-100"}`}
      >
        <img
          src={item.posterUrl}
          alt={item.title}
          className="h-[144px] w-[96px] object-cover lg:h-[365px] lg:w-[234px] rounded-lg"
        />

        {item.badge ? (
          <span className={BADGE_STYLES[item.badge.variant]}>
            {item.badge.label}
          </span>
        ) : null}
      </div>

      <HoverPreviewPortal position={isPopupOpen ? position : null}>
        <div
          onPointerEnter={clearCloseTimer}
          onPointerLeave={scheduleClosePreview}
          className="relative hidden h-[460px] w-[408px] overflow-hidden rounded-lg bg-background-paper text-white opacity-100 shadow-2xl transition duration-300 ease-out lg:block"
        >
          <img
            src={item.previewPosterUrl ?? item.posterUrl}
            alt={item.title}
            className="h-[254px] w-full bg-black object-cover"
          />

          {/* {item.badge ? (
            <span className={BADGE_STYLES[item.badge.variant]}>
              {item.badge.label}
            </span>
          ) : null} */}

          <div className="h-[180px] bg-background-paper p-7.5">
            <div className="mb-4 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleControlClick}
                  aria-label={`Putar ${item.title}`}
                  className="flex h-13.5 w-13.5 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/85"
                >
                  <Play className="h-5 w-5 fill-current" />
                </button>
                <button
                  type="button"
                  onClick={handleControlClick}
                  aria-label={`Tambahkan ${item.title} ke daftar`}
                  className="flex h-13.5 w-13.5 items-center justify-center rounded-full border border-white/70 text-white transition hover:border-white hover:bg-white/10"
                >
                  <Check className="h-5 w-5" />
                </button>
              </div>
              <button
                type="button"
                onClick={handleControlClick}
                aria-label={`Info selengkapnya tentang ${item.title}`}
                className="flex h-13.5 w-13.5 items-center justify-center rounded-full border border-white/70 text-white transition hover:border-white hover:bg-white/10"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-2 flex items-center gap-4 text-xl text-white/85">
              <span className="rounded-full bg-white/20 px-3 py-1 text-white">
                {item.ageRating}
              </span>
              <span className="text-xl">{item.episodeCount}</span>
            </div>

            <div className="flex w-full items-center justify-between text-lg text-light-secondary">
              {item.genres.map((genre, index) => (
                <Fragment key={genre}>
                  <span>{genre}</span>
                  {index < item.genres.length - 1 ? (
                    <span
                      className="h-2 w-2 shrink-0 rounded-full bg-light-secondary"
                      aria-hidden="true"
                    />
                  ) : null}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </HoverPreviewPortal>
    </div>
  )
}
