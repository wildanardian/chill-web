import { Outlet } from "react-router";
import { useState } from "react";

import type { GenreOption } from "./components/common/GenreDropdown";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";

const navItems = [
  { id: "series", label: "Series", href: "#" },
  { id: "film", label: "Film", href: "#" },
  { id: "daftar-saya", label: "Daftar Saya", href: "#" },
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

export default function Root() {
  const [selectedGenre, setSelectedGenre] = useState<GenreOption | null>(null);

  return (
    <div>
      <Navbar
        navItems={navItems}
        genreOptions={genreOptions}
        selectedGenre={selectedGenre}
        onGenreSelect={setSelectedGenre}
      />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
