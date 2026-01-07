import { ObjectId } from "mongodb";
import { Article } from "../types/model";
import ArticleCard from "./ArticleCard";
import { ArticleFormat, ArticleSize } from "../types/ui";

const articles: Article[] = [
  {
    _id: new ObjectId("507f1f77bcf86cd799439011"),
    slug: "viettel-thai-nguyen",
    title: "Viettel và Thái Nguyên dùng công nghệ...",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    thumbnail: "/img/news/new-1.jpg",
    category: "TIN_TUC_SU_KIEN",
    createdAt: new Date("2024-12-30T10:00:00Z"),
    updatedAt: new Date("2024-12-30T10:00:00Z"),
    authorName: "ADMIN",
    htmlContent: "",
    textContent: "",

  },
  {
    _id: new ObjectId("507f1f77bcf86cd799439011"),
    slug: "viettel-thai-nguyen",
    title: "Viettel và Thái Nguyên dùng công nghệ...",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    thumbnail: "/img/news/new-1.jpg",
    category: "TIN_TUC_SU_KIEN",

    createdAt: new Date("2024-12-30T10:00:00Z"),
    updatedAt: new Date("2024-12-30T10:00:00Z"),
    authorName: "ADMIN",
    htmlContent: "",
    textContent: "",

  },
  {
    _id: new ObjectId("507f1f77bcf86cd799439011"),
    slug: "viettel-thai-nguyen",
    title: "Viettel và Thái Nguyên dùng công nghệ...",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    thumbnail: "/img/news/new-1.jpg",
    category: "TIN_TUC_SU_KIEN",
    createdAt: new Date("2024-12-30T10:00:00Z"),
    updatedAt: new Date("2024-12-30T10:00:00Z"),
    authorName: "ADMIN",
    htmlContent: "",
    textContent: "",
  },
  
];

export default function FeatureSection() {
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
