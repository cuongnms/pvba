
import ArticleCard from "./ArticleCard";
import { ArticleFormat, ArticleSize } from "../types/ui";
import { listArticles } from "../services/article";

export default async function FeatureSection() {
  const articles = await listArticles({ limit: 8 });

  return (
    <section className="mt-[2%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      <div className="lg:col-span-2">
        <ArticleCard article={articles[0]} size={ArticleSize.LARGE} format={ArticleFormat.GRID} />
      </div>
      <div className="lg:col-span-2">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {articles.slice(1, 5).map((a,idx) => (
            <ArticleCard key={idx} article={a} size={ArticleSize.MED} format={ArticleFormat.GRID} />
          ))}
        </div>
      </div>

      {articles.slice(5).map((a,idx) => (
        <ArticleCard key={idx} article={a} size={ArticleSize.SMALL} format={ArticleFormat.GRID}/>
      ))}
    </section>
  );
}
