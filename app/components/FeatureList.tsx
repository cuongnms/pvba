import { ArticleFormat, ArticleSize } from "../types/article";
import ArticleCard from "./ArticleCard";
const articles: Article[] = [
  {
    id: "1",
    slug: "viettel-thai-nguyen",
    title: "Viettel và Thái Nguyên dùng công nghệ...",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    content: "<p>Nội dung bài viết...</p>",
    thumbnail: "/img/news/new-1.jpg",
    category: "TIN_TUC_SU_KIEN",

    author: {
      id: "a1",
      name: "Viettel Group",
    },

    publishedAt: "2025-01-01T08:00:00Z",
    createdAt: "2024-12-30T10:00:00Z",
    updatedAt: "2024-12-31T09:00:00Z",

    status: "PUBLISHED",
    isFeatured: true,
  },
  {
    id: "2",
    slug: "viettel-thai-nguyen",
    title: "Viettel và Thái Nguyên dùng công nghệ...",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    content: "<p>Nội dung bài viết...</p>",
    thumbnail: "/img/news/new-2.jpg",
    category: "TIN_TUC_SU_KIEN",

    author: {
      id: "a1",
      name: "Viettel Group",
    },

    publishedAt: "2025-01-01T08:00:00Z",
    createdAt: "2024-12-30T10:00:00Z",
    updatedAt: "2024-12-31T09:00:00Z",

    status: "PUBLISHED",
    isFeatured: true,
  },
  {
    id: "3",
    slug: "viettel-thai-nguyen",
    title: "Viettel và Thái Nguyên dùng công nghệ...",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    content: "<p>Nội dung bài viết...</p>",
    thumbnail: "/img/news/new-2.jpg",
    category: "TIN_TUC_SU_KIEN",

    author: {
      id: "a1",
      name: "Viettel Group",
    },

    publishedAt: "2025-01-01T08:00:00Z",
    createdAt: "2024-12-30T10:00:00Z",
    updatedAt: "2024-12-31T09:00:00Z",

    status: "PUBLISHED",
    isFeatured: true,
  },
  {
    id: "4",
    slug: "viettel-thai-nguyen",
    title: "Viettel và Thái Nguyên dùng công nghệ...",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    content: "<p>Nội dung bài viết...</p>",
    thumbnail: "/img/news/new-1.jpg",
    category: "TIN_TUC_SU_KIEN",

    author: {
      id: "a1",
      name: "Viettel Group",
    },

    publishedAt: "2025-01-01T08:00:00Z",
    createdAt: "2024-12-30T10:00:00Z",
    updatedAt: "2024-12-31T09:00:00Z",

    status: "PUBLISHED",
    isFeatured: true,
  },
  {
    id: "5",
    slug: "viettel-thai-nguyen",
    title: "Viettel và Thái Nguyên dùng công nghệ...",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    content: "<p>Nội dung bài viết...</p>",
    thumbnail: "/img/news/new-1.jpg",
    category: "TIN_TUC_SU_KIEN",

    author: {
      id: "a1",
      name: "Viettel Group",
    },

    publishedAt: "2025-01-01T08:00:00Z",
    createdAt: "2024-12-30T10:00:00Z",
    updatedAt: "2024-12-31T09:00:00Z",

    status: "PUBLISHED",
    isFeatured: true,
  },
  {
    id: "6",
    slug: "viettel-thai-nguyen",
    title: "Viettel và Thái Nguyên dùng công nghệ...",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    content: "<p>Nội dung bài viết...</p>",
    thumbnail: "/img/news/new-1.jpg",
    category: "TIN_TUC_SU_KIEN",

    author: {
      id: "a1",
      name: "Viettel Group",
    },

    publishedAt: "2025-01-01T08:00:00Z",
    createdAt: "2024-12-30T10:00:00Z",
    updatedAt: "2024-12-31T09:00:00Z",

    status: "PUBLISHED",
    isFeatured: true,
  },
  {
    id: "7",
    slug: "viettel-thai-nguyen",
    title: "Viettel và Thái Nguyên dùng công nghệ...",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    content: "<p>Nội dung bài viết...</p>",
    thumbnail: "/img/news/new-1.jpg",
    category: "TIN_TUC_SU_KIEN",

    author: {
      id: "a1",
      name: "Viettel Group",
    },

    publishedAt: "2025-01-01T08:00:00Z",
    createdAt: "2024-12-30T10:00:00Z",
    updatedAt: "2024-12-31T09:00:00Z",

    status: "PUBLISHED",
    isFeatured: true,
  },
  {
    id: "8",
    slug: "viettel-thai-nguyen",
    title:
      "Viettel và Thái Nguyên dùng công nghệ ứng dụng công nghệ để phát triển địa phương Viettel",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    content: "<p>Nội dung bài viết...</p>",
    thumbnail: "/img/news/new-1.jpg",
    category: "TIN_TUC_SU_KIEN",

    author: {
      id: "a1",
      name: "Viettel Group",
    },

    publishedAt: "2025-01-01T08:00:00Z",
    createdAt: "2024-12-30T10:00:00Z",
    updatedAt: "2024-12-31T09:00:00Z",

    status: "PUBLISHED",
    isFeatured: true,
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
          {articles.slice().map((a) => (
            <ArticleCard
              key={a.id}
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
