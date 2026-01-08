"use client";

import { useState } from "react";
import LoginModal from "./LoginModal";
import { signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  if (status === "loading" || !session) {
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

  if(session.user.role === "ADMIN") {
    <>
      <div className="flex gap-5 items-center">
        Xin chào, {session.user.name}
        <button
          className="bg-red-600 text-white px-4 py-1 rounded-full"
          onClick={() =>
            signOut({
              callbackUrl: "/admin", // redirect sau logout
            })
          }
        >
          Logout
        </button>
      </div>
    </>
  }
  return (
    <>
      <div className="flex gap-5 items-center">
        Xin chào, {session.user.name}
        <button
          className="bg-red-600 text-white px-4 py-1 rounded-full"
          onClick={() =>
            signOut({
              callbackUrl: "/", // redirect sau logout
            })
          }
        >
          Logout
        </button>
      </div>
    </>
  );
}
