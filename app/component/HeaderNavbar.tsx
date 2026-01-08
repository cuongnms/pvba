"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import LoginButton from "./LoginButton";
import { MenuItem } from "../lib/common";

const MobileCategory = dynamic(() => import("./MobileCategory"), {
  ssr: false,
});


export default function HeaderNavbar({
  menu,
}: {
  menu: MenuItem[];
}){
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState("");

  return (
    <>
      <div className="relative w-full aspect-[1500/205]">
        <Image
          src="/img/banner-2026.png"
          alt="Chúc mừng năm mới 2026"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="sticky top-0 z-50">
        {/* HEADER */}
        <div className="border-b max-sm:hidden bg-white text-black">
          <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
            <Image
              src="/img/logo.jpg"
              alt="Viettel Family"
              width={160}
              height={40}
            />
            <LoginButton />
          </div>
        </div>

        {/* NAVBAR DESKTOP */}
        <nav className="border-b max-sm:hidden bg-white text-black">
          <div className="max-w-[1200px] mx-auto px-4">
            <ul
              className="flex items-center gap-6 h-12 text-sm font-medium"
              onMouseLeave={() => setOpenCat("")}
            >
              <Link href="/" className="inline-flex items-center w-[2%]">
                🏠
              </Link>

              {menu.map((m, idx) => (
                <li
                  key={idx}
                  className="relative cursor-pointer"
                  onMouseEnter={() => setOpenCat(m.href)}
                >
                  <Link href={m.href} onClick={() => console.log("click ", m.href)}className="hover:text-red-600">
                    {m.label}
                  </Link>
                </li>
              ))}

              <div className="flex-1" />
            </ul>
          </div>
        </nav>

        {/* MOBILE */}
        <div className="sm:hidden border-b bg-white text-black ">
          <div className="px-4 h-12 flex items-center">
            <Image src="/img/logo.jpg" alt="logo" width={140} height={36} />
            <div className="flex-1" />
            <LoginButton />
            <button
              className="text-xl mx-4 flex justify-center items-center leading-none"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>

          <MobileCategory menu={menu} open={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </>
  );
}
