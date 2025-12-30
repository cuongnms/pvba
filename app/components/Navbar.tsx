"use client";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const categories = [
  "Nhịp sống",
  "Kinh doanh",
  "Công nghệ",
  "Tri thức",
  "Văn hóa Viettel",
];

const MobileCategory = dynamic(() => import("./MobileCategory"), {
  ssr: false,
});

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState("");
    const { resolvedTheme } = useTheme();

  return (
    <div className={`sticky top-0 z-50 border-b ${resolvedTheme === 'dark' ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="max-w-[1200px] mx-auto px-4 max-sm:hidden" >
        <ul
          className="flex items-center gap-6 h-12 text-sm font-medium"
                    onMouseLeave={() => setOpenCat("")}

        >
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
            <li
              key={m}
              className="relative cursor-pointer hover:text-red-600"
              onMouseEnter={() => setOpenCat(m)}
            >
              {/* Text */}
              <span className="px-1" >{m}</span>

              {/* Dropdown */}
              {openCat === m && (
                <div className="absolute top-full left-0 mt-3.5 bg-white shadow-lg min-w-[180px] z-50"
                          onMouseLeave={() => setOpenCat("")}

                >
                  <a className="block px-4 py-2 hover:bg-gray-100">
                    Category 1
                  </a>
                  <a className="block px-4 py-2 hover:bg-gray-100">
                    Category 2
                  </a>
                  <a className="block px-4 py-2 hover:bg-gray-100">
                    Category 3
                  </a>
                </div>
              )}
            </li>
          ))}

          <div className="flex-1" />

          <button className="sm:hidden">☰</button>
        </ul>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:hidden">
        <ul className="flex items-center gap-6 h-12 text-sm font-medium">
          <Image
            src="/img/logo.jpg"
            alt="Viettel Family"
            width={160}
            height={40}
          />
          <div className="flex-1" />
          <li className="relative cursor-pointer hover:text-red-600">
            <button className="bg-red-600 text-white px-4 py-1 rounded-full text-[10px]">
              Đăng nhập
            </button>
          </li>
          <button className="sm:hidden" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </ul>
      </div>

      <div className="h-[2px] bg-red-600 md:hidden" />
      <MobileCategory open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
