import { Check, Plus, X } from "lucide-react"
import { useEffect } from "react"
import { createPortal } from "react-dom"

import type { MediaContentType, MediaDetailFields, MediaRecommendation } from "../../types/mediaDetail"
import MuteButton from "../common/Button/MuteButton"

export interface MediaDetailItem extends MediaDetailFields {
  id: string
  title: string
  posterUrl: string
  previewPosterUrl?: string
  ageRating: string
  episodeCount: string
  genres: string[]
}

interface MediaDetailModalProps {
  item: MediaDetailItem | null
  recommendations?: MediaRecommendation[]
  onClose: () => void
  onAddToMyList?: (item: MediaDetailItem) => void
  onToggleMyList?: (item: MediaDetailItem) => void
  isInMyList?: boolean
}

function getContentType(item: MediaDetailItem): MediaContentType {
  if (item.contentType) return item.contentType

  return item.episodeCount.toLowerCase().includes("film") ? "film" : "series"
}

function getBadgeClass(variant: NonNullable<MediaRecommendation["badge"]>["variant"]) {
  if (variant === "episode") {
    return "absolute left-2 top-2 rounded-full bg-primary-main-300 px-2 py-1 text-[10px] font-semibold text-white"
  }

  return "absolute right-0 top-0 flex h-8 w-6 items-center justify-center rounded-bl bg-error-pressed px-1 text-center text-[10px] leading-3 text-white"
}

export function MediaDetailModal({
  item,
  recommendations = [],
  onClose,
  onAddToMyList,
  onToggleMyList,
  isInMyList = false,
}: MediaDetailModalProps) {
  useEffect(() => {
    if (!item) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [item, onClose])

  if (!item || typeof document === "undefined") return null

  const contentType = getContentType(item)
  const modalRecommendations = item.recommendations ?? recommendations
  const heroImage = item.previewPosterUrl ?? item.posterUrl
  const metadata = [item.year, contentType === "film" ? item.duration : item.episodeCount, item.ageRating].filter(Boolean)
  const description = item.description ?? `${item.title} menghadirkan cerita ${item.genres.join(", ").toLowerCase()} yang siap ditonton.`
  const creatorLabel = contentType === "film" ? "Pembuat Film" : "Pembuat Film"

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] overflow-y-auto bg-background-page-header/90 px-5 py-8 text-white backdrop-blur-[2px] md:px-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="media-detail-title"
      onMouseDown={onClose}
    >
      <div
        className="mx-auto min-h-[70vh] w-full max-w-[920px] overflow-hidden rounded bg-background-page-header shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="relative h-[190px] md:h-[554px] overflow-hidden md:min-h-[470px]">
          <img src={heroImage} alt={item.title} className="absolute inset-0 h-[190px] lg:h-[554px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-background-page-header" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-background-page-header/85 text-white transition hover:bg-background-extra"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="absolute inset-x-0 bottom-0 px-5 pb-8 md:px-14">
            <h2 id="media-detail-title" className="mb-2 lg:mb-6 w-full text-base font-700 leading-tight md:text-4xl">
              {item.title}
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 lg:gap-2.5">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-full bg-primary-main-300 px-3 py-1 lg:px-10 lg:py-2.5 text-xs lg:text-base font-700 text-white transition hover:bg-primary-main-200"
                >
                  Mulai
                </button>
                <button
                  type="button"
                  aria-label={isInMyList ? `Hapus ${item.title} dari daftar` : `Tambahkan ${item.title} ke daftar`}
                  onClick={() => onToggleMyList?.(item) ?? onAddToMyList?.(item)}
                  className="flex h-6 w-6 lg:h-11 lg:w-11 items-center justify-center rounded-full border border-white/70 text-white transition hover:border-white hover:bg-white/10"
                >
                  {isInMyList ? <Check className="h-4 w-4 lg:h-6 lg:w-6" /> : <Plus className="h-4 w-4 lg:h-6 lg:w-6" />}
                </button>
              </div>
              <MuteButton />
            </div>
          </div>
        </div>

        <div className="px-5 pb-10 pt-3 md:px-14">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-white/85">
                {metadata.map((value) => (
                  <span key={value} className={value === item.ageRating ? "rounded-full border border-white/55 px-2 py-0.5 text-white" : ""}>
                    {value}
                  </span>
                ))}
              </div>
              <p className="w-full text-xxs leading-[1.4] text-white md:text-base">{description}</p>
            </div>

            <dl className="grid grid-cols-[86px_1fr] gap-x-3 gap-y-3 text-sm leading-5 text-white/85">
              {item.cast?.length ? (
                <>
                  <dt className="text-light-secondary">Cast</dt>
                  <dd>: {item.cast.join(", ")}</dd>
                </>
              ) : null}
              <dt className="text-light-secondary">Genre</dt>
              <dd>: {item.genres.join(", ")}</dd>
              {item.creator ? (
                <>
                  <dt className="text-light-secondary">{creatorLabel}</dt>
                  <dd>: {item.creator}</dd>
                </>
              ) : null}
            </dl>
          </div>

          {contentType === "series" && item.episodes?.length ? (
            <section className="mt-11">
              <h3 className="mb-5 text-xl font-700">Episode</h3>
              <div className="space-y-3">
                {item.episodes.map((episode, index) => (
                  <article
                    key={episode.id}
                    className={`grid grid-cols-[24px_114px_1fr] items-center gap-4 rounded p-3 ${index === 0 ? "bg-white/20" : ""}`}
                  >
                    <span className="text-center text-base text-white">{episode.number}</span>
                    <img src={episode.imageUrl} alt={episode.title} className="h-16 w-[114px] rounded object-cover" />
                    <div className="min-w-0">
                      <div className="mb-1 flex items-start justify-between gap-3">
                        <h4 className="truncate text-sm font-700 text-white">{episode.title}</h4>
                        <span className="shrink-0 text-xs text-white/85">{episode.duration}</span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-5 text-white/70">{episode.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {contentType === "film" && modalRecommendations.length ? (
            <section className="mt-11">
              <h3 className="mb-5 text-xl font-700">Rekomendasi Serupa</h3>
              <div className="grid grid-cols-3 gap-2.5">
                {modalRecommendations.slice(0, 3).map((recommendation) => (
                  <article key={recommendation.id} className="relative overflow-hidden rounded bg-background-paper">
                    <img
                      src={recommendation.posterUrl}
                      alt={recommendation.title}
                      className="w-full object-cover"
                    />
                    {recommendation.badge ? (
                      <span className={getBadgeClass(recommendation.badge.variant)}>
                        {recommendation.badge.label}
                      </span>
                    ) : null}
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </div>
    </div>,
    document.body
  )
}
