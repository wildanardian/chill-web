import { useState } from "react";
import { ChevronRightIcon } from "lucide-react";
import logo from "../assets/logo/logo-footer.png";

type FooterSection = "genre" | "bantuan";

export default function Footer() {
  const [openSection, setOpenSection] = useState<FooterSection | null>(null);

  const toggleSection = (section: FooterSection) => {
    setOpenSection((currentSection) =>
      currentSection === section ? null : section
    );
  };

  return (
    <footer className="page-shell border-outline-border flex flex-col gap-10 border-t bg-background-page-header px-5 py-5 lg:flex-row lg:items-start lg:justify-between lg:px-20 lg:py-15">
      {/* <!-- Left Section: Logo & Copyright --> */}
      <div className="space-y-3 lg:my-auto lg:flex-none">
        <img
          src={logo}
          alt="Logo"
          className="h-[24.75] w-21 lg:h-11 lg:w-40.75"
        />
        <p className="text-xs text-[#E7E3FC99] lg:text-base">
          @2023 Chill All Rights Reserved.
        </p>
      </div>

      {/* <!-- Middle Section: Genre --> */}
      <div className="w-full space-y-1 lg:w-fit lg:flex-none lg:space-y-0">
        <button
          type="button"
          onClick={() => toggleSection("genre")}
          aria-expanded={openSection === "genre"}
          aria-controls="acc-genre"
          className="flex w-full items-center justify-between text-left text-base text-white lg:pointer-events-none lg:cursor-default"
        >
          <span className="text-base font-bold">Genre</span>
          <ChevronRightIcon
            id="icon-genre"
            className={`h-4 w-4 transition-transform duration-200 lg:hidden ${openSection === "genre" ? "rotate-90" : ""}`}
          />
        </button>
        <div
          id="acc-genre"
          className={`mt-4 flex-wrap gap-8 text-sm text-[#E7E3FC99] lg:flex lg:flex-nowrap lg:gap-10 xl:gap-12 ${openSection === "genre" ? "flex" : "hidden"}`}
        >
          {/* Column 1 */}
          <div className="flex w-fit flex-col gap-3">
            <a href="#" className="transition-colors hover:text-white">
              Aksi
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Anak-anak
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Anime
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Britania
            </a>
          </div>
          {/* Column 2 */}
          <div className="flex w-fit flex-col gap-3">
            <a href="#" className="transition-colors hover:text-white">
              Drama
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Fantasi Ilmiah & Fantasi
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Kejahatan
            </a>
            <a href="#" className="transition-colors hover:text-white">
              KDrama
            </a>
          </div>
          {/* Column 3 */}
          <div className="flex w-fit flex-col gap-3">
            <a href="#" className="transition-colors hover:text-white">
              Komedi
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Petualangan
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Perang
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Romantis
            </a>
          </div>
          {/* Column 4 */}
          <div className="flex w-fit flex-col gap-3">
            <a href="#" className="transition-colors hover:text-white">
              Sains & Alam
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Thriller
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Right Section: Bantuan --> */}
      <div className="w-full space-y-1 lg:w-fit lg:flex-none lg:space-y-0">
        <button
          type="button"
          onClick={() => toggleSection("bantuan")}
          aria-expanded={openSection === "bantuan"}
          aria-controls="acc-bantuan"
          className="flex w-full items-center justify-between text-left text-base text-white lg:pointer-events-none lg:cursor-default"
        >
          <span className="text-base font-bold">Bantuan</span>
          <ChevronRightIcon
            id="icon-bantuan"
            className={`h-4 w-4 transition-transform duration-200 lg:hidden ${openSection === "bantuan" ? "rotate-90" : ""}`}
          />
        </button>
        <div
          id="acc-bantuan"
          className={`mt-4 text-sm text-[#E7E3FC99] lg:block ${openSection === "bantuan" ? "block" : "hidden"}`}
        >
          <div className="flex flex-col gap-3">
            <a href="#" className="transition-colors hover:text-white">
              FAQ
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Kontak Kami
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Privasi
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
