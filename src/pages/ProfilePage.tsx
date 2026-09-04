import { type FormEvent, useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router";

import Button from "@/components/common/Button/Button";
import InputField from "@/components/common/InputField";
import { PosterCard } from "@/components/PosterCard";
import { MediaDetailModal, type MediaDetailItem } from "@/components/MediaDetailModal";
import avatarIcon from "../assets/avatar/avatar.png";
import fileUploadIcon from "../assets/icons/file-upload-outline.png";
import warningLogo from "../assets/logo/warning.png";
import type { MyListContextValue, MyListItem } from "@/types/myList.types";
import { getProfileUser, saveProfileUser, type ProfileUser } from "@/utils/profileUser";

type ProfileField = "name" | "email" | "password"

export default function ProfilePage() {
  const { myList, addToMyList, toggleMyList, isInMyList } = useOutletContext<MyListContextValue>();
  const [activePopupId, setActivePopupId] = useState<string | null>(null);
  const [selectedMedia, setSelectedMedia] = useState<MediaDetailItem | null>(null);
  const previewItems = myList.slice(0, 6);

  const [user, setUser] = useState<ProfileUser>(() => getProfileUser());
  const [editingField, setEditingField] = useState<ProfileField | null>(null);

  useEffect(() => {
    saveProfileUser(user)
  }, [user])

  const updateUserField = (field: ProfileField, value: string) => {
    setUser((currentUser) => ({
      ...currentUser,
      [field]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEditingField(null)
  }

  return (
    <div className="min-h-screen bg-background-page-header px-4 pb-12 pt-8 text-white md:px-8 lg:px-20 lg:pb-20 lg:pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20">
        <div className="order-2 md:order-1 flex flex-col gap-6 md:gap-8">
          <h1 className="text-2xl font-700 lg:text-[32px]">Profil Saya</h1>
          <div className="flex items-center gap-6">
            <img src={avatarIcon} className="w-20 lg:w-35" />
            <div className="flex flex-col gap-2">
              <Button variant="outline" size="lg">
                Ubah Foto
              </Button>
              <div className="flex items-center justify-center gap-1">
                <img src={fileUploadIcon} />
                <span className="text-sm font-300">Maksimal 2MB</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <InputField
              label="Nama Pengguna"
              value={user.name}
              editable
              isEditing={editingField === "name"}
              onEdit={() => setEditingField("name")}
              onChange={(value) => updateUserField("name", value)}
            />
            <InputField
              label="Email"
              value={user.email}
              type="email"
              editable
              isEditing={editingField === "email"}
              onEdit={() => setEditingField("email")}
              onChange={(value) => updateUserField("email", value)}
            />
            <InputField
              label="Kata Sandi"
              value={user.password}
              type="password"
              editable
              isEditing={editingField === "password"}
              onEdit={() => setEditingField("password")}
              onChange={(value) => updateUserField("password", value)}
            />
            <Button type="submit" size="lg" className="mt-2 w-fit px-8">
              Simpan
            </Button>
          </form>
        </div>
        <div className="order-1 md:order-2 bg-background-extra flex h-fit items-center rounded-xl p-6 gap-5 ">
          <img src={warningLogo} className="w-19.5" />
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-700">Saat ini anda belum berlangganan</h3>
            <span className="text-light-secondary">Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</span>
            <div className="self-end">
              <Button variant="secondary" size="md">
                Mulai Berlangganan
              </Button>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-12 lg:mt-16">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-700 lg:text-[32px]">Daftar Saya</h2>
          <Link to="/daftar-saya" className="text-sm font-400 text-white transition hover:text-light-secondary lg:text-base">
            Lihat Semua
          </Link>
        </div>

        {previewItems.length === 0 ? (
          <p className="rounded-lg border border-outline-border bg-background-paper px-5 py-8 text-center text-sm text-light-secondary md:text-base">
            Belum ada film/series yang ditambahkan
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-x-4 gap-y-8 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-5 lg:gap-y-9">
            {previewItems.map((item: MyListItem) => {
              const displayItem = {
                ...item,
                posterUrl: item.poster,
                previewPosterUrl: item.previewPosterUrl ?? item.posterUrl,
              }

              return (
                <div key={item.id} className="justify-self-center">
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
                </div>
              )
            })}
          </div>
        )}
      </section>

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
