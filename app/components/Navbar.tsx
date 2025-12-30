"use client";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

const categories = [
  "Nhịp sống",
  "Kinh doanh",
  "Công nghệ",
  "Tri thức",
  "Văn hóa Viettel",
];


const MobileCategory = dynamic(
  () => import("./MobileCategory"),
  { ssr: false }
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white border-b text-black">
      <div className="max-w-[1200px] mx-auto px-4 max-sm:hidden">
        <ul className="flex items-center gap-6 h-12 text-sm font-medium">
          <span className="inline-flex items-center text-center w-[2%]">
            <svg
              viewBox="0 0 25 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5445 9.46757L18.7448 4.78521L13.0772 0.206575C12.7364 -0.0688583 12.2566 -0.0688583 11.9124 0.206575L6.24478 4.78521L0.452017 9.46757C0.166898 9.6965 0 10.0506 0 10.4226V19.2508C0 20.2166 0.761474 21 1.70028 21H7.76773C8.28234 21 8.76912 20.7746 9.11335 20.3812L11.9054 17.1618C12.2427 16.7719 12.8338 16.7719 13.1711 17.1618L15.9631 20.3812C16.3039 20.7746 16.7942 21 17.3088 21H23.2997C24.2385 21 25 20.2166 25 19.2508V10.4226C24.9965 10.0506 24.8296 9.6965 24.5445 9.46757Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>

          {categories.map((m) => (
            <li key={m} className="hover:text-red-600 cursor-pointer">
              {m}
            </li>
          ))}

          <div className="flex-1" />

          <button className="md:hidden">☰</button>
        </ul>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:hidden">
        <ul className="flex items-center gap-6 h-12 text-sm font-medium">
          <Image
            src="/img/logo.jpg"
            alt="Viettel Family"
            width={160}
            height={40}
          />
          <div className="flex-1" />

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </ul>
      </div>

      <div className="h-[2px] bg-red-600" />
       <MobileCategory open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
