import Image from "next/image";

const menus = [
  "Nhịp sống",
  "Kinh doanh",
  "Công nghệ",
  "Tri thức",
  "Văn hóa Viettel",
  "Vì Viettel tốt lên",
];

export default function Header() {
  return (
    <header className="w-full">
      {/* TOP BANNER */}
      <div className="relative w-full aspect-[1500/205]">
        <Image
          src="/img/banner-2026.png"
          alt="Chúc mừng năm mới 2026"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* LOGO + ACTION */}
      <div className="bg-white border-b max-sm:hidden">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/img/logo.jpg"
            alt="Viettel Family"
            width={160}
            height={40}
          />

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <button className="bg-red-600 text-white px-4 py-1 rounded-full">
              Đăng nhập
            </button>            
          </div>
        </div>
      </div>
    </header>
  );
}
