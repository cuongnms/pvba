"use server";

import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import clientPromise from "../lib/mongodb";
import { LoginState } from "../types/article";



export async function loginAction(
  prevState: LoginState,
  formData: FormData
) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { error: "Missing username or password" };
  }

  const client = await clientPromise;
  const db = client.db("pvba_dev");

  const user = await db.collection("users").findOne({
    email: username, // hoặc username field nếu bạn có
  });

  if (!user) {
    return { error: "User not found" };
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    return { error: "Invalid password" };
  }

  (await cookies()).set({
    name: "session",
    value: user._id.toString(),
    httpOnly: true,
    path: "/",
  });

  return { success: true };
}
