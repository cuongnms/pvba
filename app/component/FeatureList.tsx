import { ObjectId } from "mongodb";
import { Article, ArticleCategory } from "../types/model";
import ArticleCard from "./ArticleCard";
import { ArticleFormat, ArticleSize } from "../types/ui";
import { listArticles } from "../services/article";
import Link from "next/link";

export default async function FeatureList({
  category,
  label,
}: {
  category?: ArticleCategory;
  label?: string;
}) {
  const articles = await listArticles({ category: category, limit: 10 });

  return (
    <section className="mt-[2%]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h2 className="md:text-[clamp(16px,2vw,20px)] font-bold border-l-4 border-red-600 pl-3 mb-6">
            {label}
          </h2>
          {articles && articles.length > 0 ? (
            <>
              <div className="space-y-3">
                <Link
                  href={`/${articles[0].category}/${articles[0].articles[0].slug}`}
                >
                  <ArticleCard
                    style="big-news-right-text"
                    title={articles[0].title}
                    summary={articles[0].summary}
                    image={articles[0].thumbnail || ""}
                  />
                </Link>
              </div>
              <div className="flex flex-col my-6 gap-6">
                {articles.slice(1).map((article, i) => (
                  <Link
                  href={`/${article.category}/${article.slug}`}
                >
                  <ArticleCard
                    key={i}
                    style="medium-news-right-text"
                    title={article.title}
                    image={article.thumbnail}
                  />
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <>Chưa có bài viết</>
          )}
        </div>
        <div className="md:col-span-1">
          <h2 className="md:text-[clamp(16px,2vw,20px)] font-bold border-l-4 border-red-600 pl-3 mb-6">
            Xem nhiều
          </h2>
        </div>
      </div>
    </section>
  );
}
