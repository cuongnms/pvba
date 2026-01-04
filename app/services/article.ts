import { ObjectId } from "mongodb";

import { Article } from "../types/model";
import clientPromise from "../lib/mongodb";

async function getArticlesCollection() {
  const client = await clientPromise;
  return client.db("mydb").collection<Article>("articles");
}


export async function createArticle(
  data: Omit<Article, "_id" | "createdAt" | "updatedAt">
) {
  const articles = await getArticlesCollection();

  const article: Article = {
    ...data,
    createdAt: new Date(),
  };

  const result = await articles.insertOne(article);
  return result.insertedId;
}

export async function findArticleBySlug(slug: string) {
  const articles = await getArticlesCollection();
  return articles.findOne({ slug });
}

export async function findArticleById(id: string) {
  const articles = await getArticlesCollection();
  return articles.findOne({ _id: new ObjectId(id) });
}

export async function listArticles({
  category,
  limit = 10,
  skip = 0,
}: {
  category?: Article["category"];
  limit?: number;
  skip?: number;
}) {
  const articles = await getArticlesCollection();

  const filter: any = {};
  if (category) filter.category = category;

  return articles
    .find(filter, {
      projection: {
        title: 1,
        slug: 1,
        summary: 1,
        category: 1,
        thumbnail: 1,
        createdAt: 1,
      },
    })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .toArray();
}


export async function updateArticle(
  articleId: string,
  data: Partial<
    Pick<
      Article,
      | "title"
      | "summary"
      | "category"
      | "htmlContent"
      | "textContent"
      | "thumbnail"
    >
  >
) {
  const articles = await getArticlesCollection();

  return articles.updateOne(
    { _id: new ObjectId(articleId) },
    {
      $set: {
        ...data,
        updatedAt: new Date(),
      },
    }
  );
}
