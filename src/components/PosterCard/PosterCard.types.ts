import type { MediaDetailFields } from "../../types/mediaDetail"

export type PosterBadgeVariant = "top10" | "episode" | "premium"

export interface PosterItem extends MediaDetailFields {
  id: string
  title: string
  posterUrl: string
  previewPosterUrl?: string
  badge?: {
    label: string
    variant: PosterBadgeVariant
  }
  rank?: number
  ageRating: string
  episodeCount: string
  genres: string[]
}
