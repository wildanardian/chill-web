import type { PosterItem } from "../components/PosterCard"

import allOfUsPoster from "../assets/movie/portrait/allofus.png"
import bigHeroPoster from "../assets/movie/portrait/bighero.png"
import jurassicPoster from "../assets/movie/portrait/jurassic.png"
import sonicPoster from "../assets/movie/portrait/sonic2.png"
import suzumePoster from "../assets/movie/portrait/suzume.png"
import bluelockPoster from "../assets/movie/portrait/bluelock.png"

import allOfUsPreview from "../assets/movie/landscape/allofus.png"
import bigHeroPreview from "../assets/movie/landscape/bighero6.png"
import blueLockPreview from "../assets/movie/landscape/bluelock.png"
import suzumePreview from "../assets/movie/landscape/suzume.png"
import jurassicPreview from "../assets/movie/landscape/jurassic.png"


export const topRatingItems: PosterItem[] = [
  {
    id: "top-1",
    title: "Suzume",
    posterUrl: suzumePoster,
    previewPosterUrl: suzumePreview,
    badge: { label: "Episode Baru", variant: "episode" },
    rank: 1,
    ageRating: "13+",
    episodeCount: "1 Film",
    genres: ["Anime", "Petualangan", "Fantasi"],
  },
  {
    id: "top-2",
    title: "Jurassic World",
    posterUrl: jurassicPoster,
    previewPosterUrl: jurassicPreview,
    rank: 2,
    ageRating: "13+",
    episodeCount: "1 Film",
    genres: ["Aksi", "Petualangan", "Sains"],
  },
  {
    id: "top-3",
    title: "Sonic 2",
    posterUrl: sonicPoster,
    badge: { label: "Episode Baru", variant: "episode" },
    rank: 3,
    ageRating: "7+",
    episodeCount: "1 Film",
    genres: ["Komedi", "Petualangan", "Keluarga"],
  },
  {
    id: "top-4",
    title: "All of Us Are Dead",
    posterUrl: allOfUsPoster,
    previewPosterUrl: allOfUsPreview,
    rank: 4,
    ageRating: "18+",
    episodeCount: "12 Episode",
    genres: ["Horor", "Thriller", "Drama"],
  },
  {
    id: "top-5",
    title: "Big Hero 6",
    posterUrl: bigHeroPoster,
    previewPosterUrl: bigHeroPreview,
    badge: { label: "Episode Baru", variant: "episode" },
    rank: 5,
    ageRating: "7+",
    episodeCount: "1 Film",
    genres: ["Animasi", "Aksi", "Komedi"],
  },
  {
    id: "top-6",
    title: "Blue Lock",
    posterUrl: bluelockPoster,
    previewPosterUrl: blueLockPreview,
    rank: 6,
    ageRating: "13+",
    episodeCount: "24 Episode",
    genres: ["Anime", "Olahraga", "Drama"],
  },
  {
    id: "top-7",
    title: "Jurassic World",
    posterUrl: jurassicPoster,
    rank: 2,
    ageRating: "13+",
    episodeCount: "1 Film",
    genres: ["Aksi", "Petualangan", "Sains"],
  },
  {
    id: "top-8",
    title: "Sonic 2",
    posterUrl: sonicPoster,
    badge: { label: "Episode Baru", variant: "episode" },
    rank: 3,
    ageRating: "7+",
    episodeCount: "1 Film",
    genres: ["Komedi", "Petualangan", "Keluarga"],
  },
]

export default topRatingItems
