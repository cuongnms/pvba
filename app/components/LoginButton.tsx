"use client";

import { useState } from "react";
import LoginModal from "./LoginModal";

export default function LoginButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="bg-red-600 text-white px-4 py-1 rounded-full"
        onClick={() => setOpen(true)}
      >
        Đăng nhập
      </button>
      {open && <LoginModal onClose={() => setOpen(false)} />}
    </>
  );
}
