export type MediaContentType = "film" | "series"

export interface MediaRecommendation {
  id: string
  title: string
  posterUrl: string
  badge?: {
    label: string
    variant: "top10" | "episode"
  }
}

export interface MediaEpisode {
  id: string
  number: number
  title: string
  description: string
  duration: string
  imageUrl: string
}

export interface MediaDetailFields {
  contentType?: MediaContentType
  year?: string
  duration?: string
  description?: string
  cast?: string[]
  creator?: string
  episodes?: MediaEpisode[]
  recommendations?: MediaRecommendation[]
}
