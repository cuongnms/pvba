import { ObjectId } from "mongodb";
import { Article, ArticleCategory } from "../types/model";
import ArticleCard from "./ArticleCard";
import { ArticleFormat, ArticleSize } from "../types/ui";
import { listArticles } from "../services/article";

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
          <h2 className="md:text-[2vw] font-bold border-l-4 border-red-600 pl-3 mb-6">
            {label}
          </h2>
          <div className="space-y-3">
            <ArticleCard
              style="big-news-right-text"
              title="Tin nổi bật"
              summary="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
              image="/img/news/new-1.jpg"
            />
          </div>
          <div className="flex flex-col my-6 gap-6">
            {[1, 2, 3].map((i) => (
              <ArticleCard
                key={i}
                style="medium-news-right-text"
                title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025 "
                image="/img/news/new-1.jpg"
              />
            ))}
          </div>
        </div>
        <div className="md:col-span-1">
          <h2 className="md:text-[2vw] font-bold border-l-4 border-red-600 pl-3 mb-6">
            Xem nhiều
          </h2>
        </div>
      </div>
    </section>
  );
}
