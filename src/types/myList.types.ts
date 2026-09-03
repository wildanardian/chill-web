import type { PosterItem } from "../components/PosterCard"
import type { WatchItem } from "../components/MediaCard/mediaCard.types"
import type { MediaContentType } from "./mediaDetail"

export type MyListItem = PosterItem &
  WatchItem & {
    poster: string
    type: MediaContentType
    isWatched: boolean
  }

export interface MyListContextValue {
  myList: MyListItem[]
  addToMyList: (item: PosterItem | WatchItem) => void
  removeFromMyList: (id: string) => void
  toggleMyList: (item: PosterItem | WatchItem) => void
  toggleWatched: (id: string) => void
  isInMyList: (id: string) => boolean
}
