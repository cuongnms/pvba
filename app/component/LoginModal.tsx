"use client";

import { FormEvent } from "react";
import { signIn } from "next-auth/react";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = (formData.get("username") as string)?.trim();
    const password = (formData.get("password") as string)?.trim();
    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res?.ok) {
      window.location.href = "/admin";
    } else {
      alert("Login failed");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-90 rounded-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            className="border w-full p-2 rounded"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border w-full p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
