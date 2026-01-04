import clientPromise from "@/app/lib/mongodb";

export async function initIndexes() {
  const client = await clientPromise;
  const db = client.db("pvba");
  const users = db.collection("users");
  await users.createIndex({ email: 1 }, { unique: true });
  await users.createIndex({ username: 1 }, { unique: true });
  await users.createIndex({ role: 1 });
  const articles = db.collection("articles");
  await articles.createIndex({ slug: 1 }, { unique: true });
  await articles.createIndex({ category: 1, createdAt: -1 });
  await articles.createIndex({ authorId: 1 });
}
