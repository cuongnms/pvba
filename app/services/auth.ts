"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { LoginState } from "../types/ui";
import { findUserByUsername } from "./user";

export async function loginService(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const userName = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!userName || !password) {
    return { success: false, error: "Missing username or password" };
  }
  const user = await findUserByUsername(userName) ;

  if (!user) {
    return { success: false, error: "User not found" };
  }

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) {
    return { success: false, error: "Invalid password" };
  }

  const cookieStore = await cookies();
  cookieStore.set({
    name: "session",
    value: user._id.toString(),
    httpOnly: true,
    path: "/",
  });

  return {
    success: true,
    username: user.userName,
    role: user.role,
  };
}
