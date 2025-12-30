"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
   const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        fixed bottom-18 right-6 z-50
        w-10 h-10 rounded-full
        bg-white text-black
        shadow-lg
        flex items-center justify-center
        transition
        dark:border-gray-700
      "
      aria-label="Scroll to top"
    >
      {theme==="dark" ? <img src="/img/dark.svg" alt="icon" className="w-8 h-8"/> : <img src="/img/light.svg" alt="icon" className="w-8 h-8"/>}
    </button>
  );
};




export default DarkModeToggle;
