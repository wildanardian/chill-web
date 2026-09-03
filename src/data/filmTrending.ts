import type { PosterItem } from "../components/PosterCard/PosterCard.types"

import amancalledottoPoster from "../assets/movie/portrait/amancalledotto.png"
import guardianPoster from "../assets/movie/portrait/guardian.png"
import littleMermaidPoster from "../assets/movie/portrait/littlemermaid.png"
import quantumaniaPoster from "../assets/movie/portrait/quantumania.png"
import tomorrowPoster from "../assets/movie/portrait/tomorrow.png"
import amancalledottoPreview from "../assets/movie/landscape/amancalledotto.png"
import littleMermaidPreview from "../assets/movie/landscape/littlemermaid.png"
import tomorrowPreview from "../assets/movie/landscape/thetomorrowwar.png"

export const filmTrendingItems: PosterItem[] = [
  {
    id: "trending-1",
    title: "The Tomorrow War",
    posterUrl: tomorrowPoster,
    previewPosterUrl: tomorrowPreview,
    badge: { label: "Top 10", variant: "top10" },
    contentType: "film",
    year: "2021",
    duration: "2j 18m",
    ageRating: "13+",
    episodeCount: "1 Film",
    genres: ["Aksi", "Petualangan", "Sains"],
    description: "Seorang guru direkrut untuk bertempur di masa depan ketika umat manusia menghadapi perang besar melawan alien.",
    cast: ["Chris Pratt", "Yvonne Strahovski", "J.K. Simmons"],
    creator: "Chris McKay",
  },
  {
    id: "trending-2",
    title: "Ant-Man and the Wasp: Quantumania",
    posterUrl: quantumaniaPoster,
    badge: { label: "Top 10", variant: "top10" },
    ageRating: "13+",
    episodeCount: "1 Film",
    genres: ["Aksi", "Petualangan", "Fantasi"],
  },
  {
    id: "trending-3",
    title: "Guardians of the Galaxy Vol. 3",
    posterUrl: guardianPoster,
    badge: { label: "Top 10", variant: "top10" },
    contentType: "film",
    year: "2023",
    duration: "2j 29m",
    ageRating: "13+",
    episodeCount: "1 Film",
    genres: ["Aksi", "Komedi", "Sains"],
    description: "Masih goyah karena kehilangan Gamora, Peter Quill mengumpulkan timnya untuk mempertahankan alam semesta dan salah satu dari mereka.",
    cast: ["Chris Pratt", "Chukwudi Iwuji", "Bradley Cooper"],
    creator: "James Gunn",
  },
  {
    id: "trending-4",
    title: "A Man Called Otto",
    posterUrl: amancalledottoPoster,
    previewPosterUrl: amancalledottoPreview,
    badge: { label: "Top 10", variant: "top10" },
    ageRating: "13+",
    episodeCount: "1 Film",
    genres: ["Drama", "Komedi", "Keluarga"],
  },
  {
    id: "trending-5",
    title: "The Little Mermaid",
    posterUrl: littleMermaidPoster,
    previewPosterUrl: littleMermaidPreview,
    badge: { label: "Top 10", variant: "top10" },
    ageRating: "7+",
    episodeCount: "1 Film",
    genres: ["Fantasi", "Petualangan", "Keluarga"],
  },
]

export default filmTrendingItems
