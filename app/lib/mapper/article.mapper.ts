import { Article } from "@/app/types/article";
import { WithId, Document } from "mongodb";

export function mapArticle(
  u: WithId<Document>
): Article {
  return {
    id: u._id.toString(),
    slug: u.slug,
    title: u.title,
    summary: u.summary,
    thumbnail: u.thumbnail,
    category: u.category,

    author: {
      id: u.author.id,
      name: u.author.name,
    },

    publishedAt: u.publishedAt.toISOString(),
    createdAt: u.createdAt.toISOString(),
    updatedAt: u.updatedAt.toISOString(),

    status: u.status,
    isFeatured: u.isFeatured,
  };
}
