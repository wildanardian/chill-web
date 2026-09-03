import type { MediaDetailFields } from "../../types/mediaDetail"

export interface WatchItem extends MediaDetailFields {
  id: string
  title: string
  posterUrl: string
  previewPosterUrl?: string
  rating: number
  maxRating?: number
  episodeLabel?: string
  ageRating: string
  episodeCount: string
  genres: string[]
}
