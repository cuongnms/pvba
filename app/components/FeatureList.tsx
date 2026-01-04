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
    authorId: new ObjectId("507f1f77bcf86cd799439011"),
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
    authorId: new ObjectId("507f1f77bcf86cd799439011"),
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
    authorId: new ObjectId("507f1f77bcf86cd799439011"),
    htmlContent: "",
    textContent: "",

  },
  
];
export default function FeatureList() {
  return (
    <section className="mt-[2%]">
      <div className=" border-l-blue-900 border-l-2 mb-[2%]">
        <p className="pl-2 text-lg font-bold">GIỚI THIỆU</p>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          {articles.slice().map((a, idx) => (
            <ArticleCard
              key={idx}
              article={a}
              size={ArticleSize.MED}
              format={ArticleFormat.LIST}
            />
          ))}
        </div>
        <div>
          <div className=" border-l-blue-900 border-l-2 mb-[2%]">
            <p className="pl-2 text-lg font-bold">Xem nhiều</p>
          </div>
        </div>
      </div>
    </section>
  );
}
