import { ObjectId } from "mongodb";
import { Article, ArticleCategory } from "../types/model";
import ArticleCard from "./ArticleCard";
import { ArticleFormat, ArticleSize } from "../types/ui";
import { listArticles } from "../services/article";

export default async function FeatureCategory({category, label}: {category?: ArticleCategory, label?: string}) {
  const articles = await listArticles({ category: category,limit: 10 });
  
  return (
    <section className="mt-[2%]">
      <div className=" md:border-l-blue-900 md:border-l-2 mb-[2%]">
        <p className="pl-2 text-lg font-bold">{label}</p>
      </div>
      <div className="md:grid md:grid-cols-3">
        <div className="col-span-2">
          {/* {articles?.slice().map((a, idx) => (
            // <ArticleCard
            //   key={idx}
            //   article={a}
            //   size={ArticleSize.MEDIUM}
            //   format={ArticleFormat.LIST}
            // />
          ))} */}
        </div>
      </div>
    </section>
  );
}
