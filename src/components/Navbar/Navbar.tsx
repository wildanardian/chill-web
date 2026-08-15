import { Link } from "react-router"
import mobileLogo from "../../assets/logo/logo-mobile-navbar.png"
import desktopLogo from "../../assets/logo/logo-new.png";
import { GenreDropdown, type GenreOption } from "../common/GenreDropdown"
import ProfileMenu from "./ProfileMenu";

export interface NavItem {
  id: string
  label: string
  href: string
}

export interface NavbarProps {
  navItems: NavItem[]
  genreOptions: GenreOption[]
  selectedGenre?: GenreOption | null
  onGenreSelect: (option: GenreOption) => void
  activeNavId?: string
  className?: string
}

export default function Navbar({
  navItems,
  genreOptions,
  selectedGenre = null,
  onGenreSelect,
  activeNavId,
  className = "",
}: NavbarProps) {
  return (
    <nav className={`sticky top-0 z-50 h-14 bg-background-page-header px-6 text-white md:h-22 md:px-16 lg:px-28 ${className}`}>
      <div className="mx-auto flex h-full items-center justify-between">
        <div className="flex min-w-0 items-center gap-5 md:gap-8 lg:gap-20">
          <Link to="/" className="shrink-0">
            <img src={mobileLogo} alt="CHILL" className="w-5 md:w-7 md:hidden" />
            <img src={desktopLogo} alt="CHILL" className="w-24 hidden md:block" />
          </Link>

          <ul className="flex items-center gap-4 text-xxs text-white md:gap-6 lg:gap-20 lg:text-lg">
            {navItems.map((item) => {
              const isActive = activeNavId === item.id

              return (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className={`whitespace-nowrap transition hover:text-white ${isActive ? "font-semibold text-white" : "text-white"}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className="md:hidden">
              <GenreDropdown
                options={genreOptions}
                selected={selectedGenre}
                onSelect={onGenreSelect}
                variant="sheet"
                triggerClassName="rounded-none bg-transparent px-0 py-0 text-xxs font-normal hover:bg-transparent"
              />
            </li>
          </ul>
        </div>

        <ProfileMenu />
      </div>
    </nav>
  )
}

/*
const navItems: NavItem[] = [
  { id: "series", label: "Series", href: "/series" },
  { id: "film", label: "Film", href: "/film" },
  { id: "daftar-saya", label: "Daftar Saya", href: "/daftar-saya" },
]

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
]

<Navbar
  navItems={navItems}
  genreOptions={genreOptions}
  selectedGenre={selectedGenre}
  onGenreSelect={setSelectedGenre}
  activeNavId="series"
/>
*/
