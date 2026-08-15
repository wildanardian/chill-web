export type PosterBadgeVariant = "top10" | "episode"

export interface PosterItem {
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
