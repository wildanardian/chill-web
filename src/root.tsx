import { Outlet } from "react-router";
import { useState } from "react";

import type { GenreOption } from "./components/common/GenreDropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import continueWatchingItems from "./data/continueWatchingData";
import filmTrendingItems from "./data/filmTrending";
import rilisBaruItems from "./data/rilisBaru";
import topRatingItems from "./data/topRatingData";
import type { PosterItem } from "./components/PosterCard";
import type { WatchItem } from "./components/MediaCard/mediaCard.types";
import type { MyListItem, MyListContextValue } from "./types/myList.types";

const navItems = [
  { id: "series", label: "Series", href: "/series" },
  { id: "film", label: "Film", href: "/film" },
  { id: "daftar-saya", label: "Daftar Saya", href: "/daftar-saya" }
];

const genreOptions: GenreOption[] = [
  { id: "aksi", label: "Aksi" },
  { id: "anak-anak", label: "Anak-anak" },
  { id: "anime", label: "Anime" },
  { id: "britania", label: "Britania" },
  { id: "drama", label: "Drama" },
  { id: "fantasi-ilmiah-fantasi", label: "Fantasi Ilmiah & Fantasi" },
  { id: "kejahatan", label: "Kejahatan" },
  { id: "kdrama", label: "KDrama" },
  { id: "komedi", label: "Komedi" },
  { id: "petualangan", label: "Petualangan" },
  { id: "perang", label: "Perang" },
  { id: "romantis", label: "Romantis" },
  { id: "sains-alam", label: "Sains & Alam" },
  { id: "thriller", label: "Thriller" },
];

const portraitPosterItems = [...topRatingItems, ...filmTrendingItems, ...rilisBaruItems]

function getPortraitPoster(item: PosterItem | WatchItem) {
  if ("badge" in item || "rank" in item) return item.posterUrl

  const matchedPoster = portraitPosterItems.find(
    (posterItem) => posterItem.title.toLowerCase() === item.title.toLowerCase()
  )

  return matchedPoster?.posterUrl ?? item.posterUrl
}

function toMyListItem(item: PosterItem | WatchItem): MyListItem {
  const badge =
    "badge" in item
      ? item.badge
      : "episodeLabel" in item && item.episodeLabel
        ? { label: item.episodeLabel, variant: "episode" as const }
        : undefined
  const type = item.contentType ?? (item.episodeCount.toLowerCase().includes("film") ? "film" : "series")

  return {
    ...item,
    poster: getPortraitPoster(item),
    type,
    badge,
    rating: "rating" in item ? item.rating : 0,
    maxRating: "maxRating" in item ? item.maxRating : undefined,
    isWatched: false,
  }
}

export default function Root() {
  const [selectedGenre, setSelectedGenre] = useState<GenreOption | null>(null);
  const [myList, setMyList] = useState<MyListItem[]>(() => continueWatchingItems.map(toMyListItem));

  const addToMyList = (item: PosterItem | WatchItem) => {
    setMyList((currentItems) => {
      if (currentItems.some((currentItem) => currentItem.id === item.id)) return currentItems

      return [...currentItems, toMyListItem(item)]
    })
  }

  const removeFromMyList = (id: string) => {
    setMyList((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const toggleMyList = (item: PosterItem | WatchItem) => {
    setMyList((currentItems) => {
      const exists = currentItems.some((currentItem) => currentItem.id === item.id)

      if (exists) return currentItems.filter((currentItem) => currentItem.id !== item.id)

      return [...currentItems, toMyListItem(item)]
    })
  }

  const toggleWatched = (id: string) => {
    setMyList((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, isWatched: !item.isWatched } : item
      )
    )
  }

  const isInMyList = (id: string) => myList.some((item) => item.id === id)

  const myListContext: MyListContextValue = {
    myList,
    addToMyList,
    removeFromMyList,
    toggleMyList,
    toggleWatched,
    isInMyList,
  }

  return (
    <div>
      <Navbar
        navItems={navItems}
        genreOptions={genreOptions}
        selectedGenre={selectedGenre}
        onGenreSelect={setSelectedGenre}
      />

      <main>
        <Outlet context={myListContext} />
      </main>

      <Footer />
    </div>
  );
}
