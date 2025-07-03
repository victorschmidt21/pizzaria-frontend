"use client";
import Image from "next/image";
import logoImg from "/public/logo.png";
import Link from "next/link";
import { LogOut } from "lucide-react";
import style from "./style.module.scss";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
export default function Header() {
    const router = useRouter();

  function handleLogout() {
    deleteCookie("login", { path: "/" });
    router.replace("/")
  }
  return (
    <header className={style.header}>
      <Image
        alt="Logo do restaurante"
        src={logoImg}
        priority={true}
        quality={100}
        height={20}
        width={200}
      />
      <nav className={style.headerMenu}>
        <Link href={"/dashboard/category"}>Categoria</Link>
        <Link href={"/dashboard/product"}>Produto</Link>
        <form action={handleLogout}>
          <button type="submit">
            <LogOut size={24} color="#fff" />
          </button>
        </form>
      </nav>
    </header>
  );
}
