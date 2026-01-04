import bcrypt from "bcryptjs";
import clientPromise from "./mongodb";

export async function initAdminIfNeeded() {
  const client = await clientPromise;
  const db = client.db("pvba_dev");

  const users = db.collection("users");

  const adminExists = await users.findOne({ role: "admin" });
  if (adminExists) return;

  const email = process.env.ADMIN_EMAIL || "admin@test.com";
  const password = process.env.ADMIN_PASSWORD || "123456";
  const name = process.env.ADMIN_NAME || "Administrator";

  const hashed = await bcrypt.hash(password, 10);

  await users.insertOne({
    email,
    password: hashed,
    name,
    role: "admin",
    createdAt: new Date(),
  });

  console.log("✅ Admin auto-created");
}
