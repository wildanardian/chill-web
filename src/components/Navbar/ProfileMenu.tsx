import { ChevronDownIcon } from "lucide-react"
import { useRef, useState } from "react"
import { Link } from "react-router"

import avatarLogo from "../../assets/avatar/avatar-icon.png"
import LogoutIcon from "../../assets/icons/logout.svg"
import ProfileIcon from "../../assets/icons/profile.svg"
import StarIcon from "../../assets/icons/star.svg"
import { useClickOutside } from "../../hooks/useClickOutside"

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useClickOutside(menuRef, () => setIsOpen(false))

  return (
    <div className="relative flex items-center gap-1 md:gap-2" ref={menuRef}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 md:gap-2"
      >
        <img
          src={avatarLogo}
          alt="Avatar Icon"
          className="w-5 rounded-full md:w-10"
        />
        <ChevronDownIcon
          className={`h-4 w-4 text-white transition-transform duration-200 md:h-7 md:w-7 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen ? (
        <div
          role="menu"
          className="absolute right-0 top-8 z-50 h-fit w-38 rounded-sm bg-background-page-header py-1 shadow-soft-card md:top-14 md:w-45 md:py-2"
        >
          <Link
            to="#"
            role="menuitem"
            className="flex items-center gap-3 whitespace-nowrap rounded-t-sm px-3 py-2 text-[10px] text-blue-400 hover:bg-white/10 md:gap-4 md:px-5 md:py-3 md:text-[14px]"
          >
            <img src={ProfileIcon} alt="Profile Icon" className="h-4 w-4 md:h-6 md:w-6" />
            Profil Saya
          </Link>
          <Link
            to="#"
            role="menuitem"
            className="flex items-center gap-3 px-3 py-2 text-[10px] text-white hover:bg-white/10 md:gap-4 md:px-5 md:py-3 md:text-[14px]"
          >
            <img src={StarIcon} alt="Star Icon" className="h-4 w-4 md:h-6 md:w-6" />
            Ubah Premium
          </Link>
          <Link
            to="#"
            role="menuitem"
            className="flex items-center gap-3 rounded-b-sm px-3 py-2 text-[10px] text-white hover:bg-white/10 md:gap-4 md:px-5 md:py-3 md:text-[14px]"
          >
            <img src={LogoutIcon} alt="Logout Icon" className="h-4 w-4 md:h-6 md:w-6" />
            Keluar
          </Link>
        </div>
      ) : null}
    </div>
  )
}