import LogoNew from "../assets/logo/logo-new.png";
import BackgroundRegister from "../assets/background/bg-signup.jpg";
import GoogleIcon from "../assets/icons/google.png";
import useBodyBackground from "../hooks/useBodyBackground";
import AuthCard from "../components/AuthCard";
import AuthField from "../components/AuthField";
import AuthButton from "../components/AuthButton";
import { Link, useNavigate } from "react-router";

export default function Register() {
  useBodyBackground({imageUrl: BackgroundRegister});
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen mx-auto text-white">
      <AuthCard>
        <img
          src={LogoNew}
          alt="Logo"
          className="w-23.5 lg:w-40.75 mx-auto"
        />
        <div className="flex flex-col items-center gap-1 lg:gap-2">
          <h3 className="mt-6 text-lg font-bold lg:text-2xl">Daftar</h3>
          <p className="text-xs lg:text-base">Selamat Datang</p>
        </div>
        <AuthField
          className="mt-4"
          label="Username"
          type="text"
          placeholder="Masukkan username Anda"
          autoComplete="username"
        />
        <AuthField
          className="mt-4 mb-3"
          label="Kata Sandi"
          type="password"
          placeholder="Masukkan kata sandi"
          autoComplete="current-password"
        />
        <AuthField
          className="mt-4 mb-3"
          label="Konfirmasi Kata Sandi"
          type="password"
          placeholder="Konfirmasi kata sandi"
          autoComplete="current-password"
        />
        <div className="flex items-center justify-between mb-6">
          <span className="text-[#C1C2C4] text-xs lg:text-base">Sudah punya akun? <Link to="/login" className="text-xs text-white lg:text-base hover:underline">Masuk</Link></span>
        </div>
        <AuthButton onClick={() => navigate("/") }>
          Masuk
        </AuthButton>
        <p className="w-full py-2 text-xs text-center lg:text-base">Atau</p>
        <AuthButton iconSrc={GoogleIcon} iconAlt="Google Icon">
          Masuk dengan Google
        </AuthButton>
      </AuthCard>
    </div>
  )
}