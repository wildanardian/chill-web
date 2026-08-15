import type { WatchItem } from '../components/MediaCard/mediaCard.types'

import amancalledottoPoster from '../assets/movie/landscape/amancalledotto.png'
import avatarPoster from '../assets/movie/landscape/avatar.png'
import bigHeroPoster from '../assets/movie/landscape/bighero6.png'
import blueLockPoster from '../assets/movie/landscape/bluelock.png'
import dontLookUpPoster from '../assets/movie/landscape/dontlookup.png'
import littleMermaidPoster from '../assets/movie/landscape/littlemermaid.png'

export const continueWatchingItems: WatchItem[] = [
  {
    id: '1',
    title: 'Dont Look Up',
    posterUrl: '/src/assets/movie/landscape/dontlookup.png',
    previewPosterUrl: dontLookUpPoster,
    rating: 4.5,
    maxRating: 5,
    ageRating: '13+',
    episodeCount: '1 Film',
    genres: ['Komedi', 'Drama', 'Sains'],
    // episodeLabel: 'Episode Baru',
  },
  {
    id: '2',
    title: 'A Man Called Otto',
    posterUrl: '/src/assets/movie/landscape/amancalledotto.png',
    previewPosterUrl: amancalledottoPoster,
    rating: 4.0,
    ageRating: '13+',
    episodeCount: '1 Film',
    genres: ['Drama', 'Komedi', 'Keluarga'],
  },
  {
    id: '3',
    title: 'Avatar',
    posterUrl: '/src/assets/movie/landscape/avatar.png',
    previewPosterUrl: avatarPoster,
    rating: 3.8,
    ageRating: '13+',
    episodeCount: '1 Film',
    genres: ['Aksi', 'Petualangan', 'Fantasi'],
  },
  {
    id: '4',
    title: 'Big Hero 6',
    posterUrl: '/src/assets/movie/landscape/bighero6.png',
    previewPosterUrl: bigHeroPoster,
    rating: 4.7,
    episodeLabel: 'Episode Baru',
    ageRating: '7+',
    episodeCount: '1 Film',
    genres: ['Animasi', 'Aksi', 'Komedi'],
  },
  {
    id: '5',
    title: 'Blue Lock',
    posterUrl: '/src/assets/movie/landscape/bluelock.png',
    previewPosterUrl: blueLockPoster,
    rating: 4.2,
    ageRating: '13+',
    episodeCount: '24 Episode',
    genres: ['Anime', 'Olahraga', 'Drama'],
  },
  {
    id: '6',
    title: 'Dont Look Up',
    posterUrl: '/src/assets/movie/landscape/dont-look-up.png',
    previewPosterUrl: dontLookUpPoster,
    rating: 4.2,
    ageRating: '13+',
    episodeCount: '1 Film',
    genres: ['Komedi', 'Drama', 'Sains'],
  },
  {
    id: '7',
    title: 'Fast & Furious',
    posterUrl: '/src/assets/movie/landscape/fastfurious.png',
    rating: 4.2,
    ageRating: '13+',
    episodeCount: '1 Film',
    genres: ['Aksi', 'Kriminal', 'Thriller'],
  },
  {
    id: '8',
    title: 'Little Mermaid',
    posterUrl: '/src/assets/movie/landscape/littlemermaid.png',
    previewPosterUrl: littleMermaidPoster,
    rating: 4.2,
    ageRating: '7+',
    episodeCount: '1 Film',
    genres: ['Fantasi', 'Petualangan', 'Keluarga'],
  },
]

export default continueWatchingItems
