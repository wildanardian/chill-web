import { useState } from "react"
import { useOutletContext } from "react-router"

import { MediaDetailModal, type MediaDetailItem } from "../components/MediaDetailModal"
import { PosterCard } from "../components/PosterCard"
import type { MyListContextValue, MyListItem } from "../types/myList.types"

export default function MyListPage() {
  const { myList, addToMyList, toggleMyList, isInMyList } = useOutletContext<MyListContextValue>()
  const [activePopupId, setActivePopupId] = useState<string | null>(null)
  const [selectedMedia, setSelectedMedia] = useState<MediaDetailItem | null>(null)

  return (
    <div className="min-h-screen bg-background-page-header px-4 pb-12 pt-8 text-white md:px-8 lg:px-20 lg:pb-20 lg:pt-12">
      <h1 className="mb-8 text-2xl font-700 md:text-3xl lg:text-4xl">Daftar Saya</h1>

      {myList.length === 0 ? (
        <div className="rounded-lg border border-outline-border bg-background-paper px-5 py-8 text-center text-sm text-light-secondary md:text-base">
          Belum ada film/series yang ditambahkan
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-5 lg:gap-y-9">
          {myList.map((item: MyListItem) => {
            const displayItem = {
              ...item,
              posterUrl: item.poster,
              previewPosterUrl: item.previewPosterUrl ?? item.posterUrl,
            }

            return (
              <div key={item.id} className="group relative w-[96px] justify-self-center lg:w-[200px]">
                <PosterCard
                  item={displayItem}
                  onClick={setSelectedMedia}
                  size="compact"
                  isPopupOpen={activePopupId === item.id}
                  openPopup={() => setActivePopupId(item.id)}
                  closePopup={() => setActivePopupId((currentId) => currentId === item.id ? null : currentId)}
                  onAddToMyList={addToMyList}
                  onToggleMyList={toggleMyList}
                  isInMyList={isInMyList(item.id)}
                />

                {item.isWatched ? (
                  <span className="mt-2 block text-center text-xs text-success-default">Sudah ditonton</span>
                ) : null}
              </div>
            )
          })}
        </div>
      )}

      <MediaDetailModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
        onAddToMyList={addToMyList}
        onToggleMyList={toggleMyList}
        isInMyList={selectedMedia ? isInMyList(selectedMedia.id) : false}
      />
    </div>
  )
}
