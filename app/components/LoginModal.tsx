"use client";

import { useActionState } from "react";
import { LoginState } from "../types/ui";
import { loginService } from "../services/auth";

const initialState: LoginState = {
  success: false
};

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [state, formAction] = useActionState(loginService, initialState);

  if (state.success) {
    window.location.reload();
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

        <form action={formAction} className="space-y-4">
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

          {state.error && <p className="text-red-500 text-sm">{state.error}</p>}

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

