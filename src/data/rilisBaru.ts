import type { PosterItem } from "../components/PosterCard/PosterCard.types"

import allOfUsPoster from "../assets/movie/portrait/allofus.png"
import bigHeroPoster from "../assets/movie/portrait/bighero.png"
import dutyAfterPoster from "../assets/movie/portrait/dutyafter.png"
import littleMermaidPoster from "../assets/movie/portrait/littlemermaid.png"
import missingPoster from "../assets/movie/portrait/missing.png"
import allOfUsPreview from "../assets/movie/landscape/allofus.png"
import bigHeroPreview from "../assets/movie/landscape/bighero6.png"
import littleMermaidPreview from "../assets/movie/landscape/littlemermaid.png"

export const rilisBaruItems: PosterItem[] = [
  {
    id: "rilis-1",
    title: "The Little Mermaid",
    posterUrl: littleMermaidPoster,
    previewPosterUrl: littleMermaidPreview,
    badge: { label: "Top 10", variant: "top10" },
    ageRating: "7+",
    episodeCount: "1 Film",
    genres: ["Fantasi", "Petualangan", "Keluarga"],
  },
  {
    id: "rilis-2",
    title: "Duty After School",
    posterUrl: dutyAfterPoster,
    badge: { label: "Episode Baru", variant: "episode" },
    ageRating: "18+",
    episodeCount: "10 Episode",
    genres: ["Aksi", "Thriller", "Drama"],
  },
  {
    id: "rilis-3",
    title: "Big Hero 6",
    posterUrl: bigHeroPoster,
    previewPosterUrl: bigHeroPreview,
    badge: { label: "Top 10", variant: "top10" },
    ageRating: "7+",
    episodeCount: "1 Film",
    genres: ["Animasi", "Aksi", "Komedi"],
  },
  {
    id: "rilis-4",
    title: "All of Us Are Dead",
    posterUrl: allOfUsPoster,
    previewPosterUrl: allOfUsPreview,
    badge: { label: "Episode Baru", variant: "episode" },
    ageRating: "18+",
    episodeCount: "12 Episode",
    genres: ["Horor", "Thriller", "Drama"],
  },
  {
    id: "rilis-5",
    title: "Missing",
    posterUrl: missingPoster,
    badge: { label: "Top 10", variant: "top10" },
    ageRating: "13+",
    episodeCount: "1 Film",
    genres: ["Misteri", "Thriller", "Drama"],
  },
]

export default rilisBaruItems
