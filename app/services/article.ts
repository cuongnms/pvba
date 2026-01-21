import { ObjectId } from "mongodb";

import { Article, ArticlesByCategory, ArticleUpdateInput } from "../types/model";
import clientPromise from "../lib/mongodb";

async function getArticlesCollection() {
  const client = await clientPromise;
  return client.db("pvba").collection<Article>("articles");
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

export async function findArticleBySlug(slug: string):Promise<Article | null> {
  const articles = await getArticlesCollection();
  const doc = await articles.findOne({ slug });
  if (!doc) return null;

  const { _id, ...article } = doc;
  return article;
}

export async function searchByContent(text: string) {
  const articles = await getArticlesCollection();
  articles.find({
    $text: { $search: text },
  });
}

export async function listArticles({
  category,
  limit = 10,
  skip = 0,
}: {
  category?: Article["category"];
  limit?: number;
  skip?: number;
}): Promise<Article[] | null> {
  try {
    const articlesColl = await getArticlesCollection();
    const filter: any = {};
    if (category) filter.category = category;

    const articles = await articlesColl
      .find(filter, {
        projection: {
          _id: 0, // loại bỏ _id
          title: 1,
          slug: 1,
          summary: 1,
          category: 1,
          thumbnail: 1,
          createdAt: 1,
          contentHtml: 1, // thêm nếu muốn trả về contentHtml
        },
      })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    if (!articles || articles.length === 0) return null;

    return articles;
  } catch (err) {
    console.error("Error fetching articles:", err);
    return null;
  }

}


export async function updateArticle(slug: string, data: ArticleUpdateInput) {
  const articles = await getArticlesCollection();
  const updateData: ArticleUpdateInput = {};

  if (data.category !== undefined) updateData.category = data.category;
  if (data.htmlContent !== undefined) updateData.htmlContent = data.htmlContent;
  if (data.textContent !== undefined) updateData.textContent = data.textContent;
  if (data.summary !== undefined) updateData.summary = data.summary;
  if (data.thumbnail !== undefined) updateData.thumbnail = data.thumbnail;

  return articles.updateOne(
    { slug: slug },
    {
      $set: {
        ...updateData,
        updatedAt: new Date(),
      },
    }
  );
}

export async function listArticlesByCategoryLimit({
  limitPerCategory = 5,
}: {
  limitPerCategory?: number;
}): Promise<
 ArticlesByCategory[]
> {
  const articlesColl = await getArticlesCollection();

  const result = await articlesColl
    .aggregate<ArticlesByCategory>([
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: "$category",
          articles: {
            $push: {
              title: "$title",
              slug: "$slug",
              summary: "$summary",
              category: "$category",
              thumbnail: "$thumbnail",
              authorName: "$authorName",
              createdAt: "$createdAt",
              contentHtml: "$contentHtml",
            },
          },
        },
      },

      {
        $project: {
          _id: 0,
          category: "$_id",
          articles: { $slice: ["$articles", limitPerCategory] },
        },
      },
    ])
    .toArray();

  return result;
}

