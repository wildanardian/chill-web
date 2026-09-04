import LogoNew from "../assets/logo/logo-new.png";
import BackgroundLogin from "../assets/background/bg-signin.jpg";
import GoogleIcon from "../assets/icons/google.png";
import { Link, useNavigate } from "react-router";
import { type FormEvent, useState } from "react";
import AuthCard from "../components/AuthCard";
import AuthField from "../components/AuthField";
import AuthButton from "../components/AuthButton";
import useBodyBackground from "../hooks/useBodyBackground";
import { getProfileUser } from "../utils/profileUser";

export default function Login() {
  useBodyBackground({imageUrl: BackgroundLogin});
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const profileUser = getProfileUser();
    const isValidLogin =
      username.trim() === profileUser.name &&
      password.trim() === profileUser.password;

    if (!isValidLogin) {
      setErrorMessage("Username atau kata sandi salah.");
      return;
    }

    localStorage.setItem("authUser", JSON.stringify({
      username: profileUser.name,
      email: profileUser.email,
    }));
    setErrorMessage("");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen mx-auto text-white">
      <AuthCard>
        <form onSubmit={handleSubmit}>
        <img
          src={LogoNew}
          alt="Logo"
          className="w-23.5 lg:w-40.75 mx-auto"
        />
        <div className="flex flex-col items-center gap-1 lg:gap-2">
          <h3 className="mt-6 text-lg font-bold lg:text-2xl">Masuk</h3>
          <p className="text-xs lg:text-base">Selamat datang kembali</p>
        </div>
        <AuthField
          className="mt-4"
          label="Username"
          type="text"
          placeholder="Masukkan username Anda"
          autoComplete="username"
          value={username}
          onChange={(value) => {
            setUsername(value);
            setErrorMessage("");
          }}
        />
        <AuthField
          className="mt-4 mb-3"
          label="Kata Sandi"
          type="password"
          placeholder="Masukkan kata sandi"
          autoComplete="current-password"
          value={password}
          onChange={(value) => {
            setPassword(value);
            setErrorMessage("");
          }}
        />
        {errorMessage ? (
          <p className="mb-3 text-xxs text-error-default lg:text-sm">{errorMessage}</p>
        ) : null}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[#C1C2C4] text-xxs lg:text-base">Belum punya akun? <Link to="/register" className="text-xxs text-white lg:text-base hover:underline">Daftar</Link></span>
          <a href="#" className="text-xxs text-white lg:text-base hover:underline">Lupa kata sandi?</a>
        </div>
        <AuthButton type="submit" className="text-xxs">
          Masuk
        </AuthButton>
        <p className="w-full py-2 text-xxs text-center lg:text-base">Atau</p>
        <AuthButton iconSrc={GoogleIcon} iconAlt="Google Icon" className="text-xxs">
          Masuk dengan Google
        </AuthButton>
        </form>
      </AuthCard>
    </div>
  )
}
