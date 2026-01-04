import { Article } from "../types/article";
import { mapArticle } from "./mapper/article.mapper";
import clientPromise from "./mongodb";

export async function getUsers() {
  const client = await clientPromise;
  const db = client.db("pvba");

  const articles = await db
    .collection("article_collection")
    .find({})
    .toArray();

  return articles.map(mapArticle);


}
