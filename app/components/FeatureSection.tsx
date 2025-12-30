import { Article, ArticleSize } from "../types/article";
import ArticleCard from "./ArticleCard";

const articles: Article[] = [
  {
    id: "1",
    slug: "viettel-thai-nguyen",
    title: "Viettel và Thái Nguyên dùng công nghệ...",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    content: "<p>Nội dung bài viết...</p>",
    thumbnail: "/img/news/new-1.jpg",
    category: "CONG_NGHE",

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
    category: "CONG_NGHE",

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
    category: "CONG_NGHE",

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
    category: "CONG_NGHE",

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
    category: "CONG_NGHE",

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
    category: "CONG_NGHE",

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
    category: "CONG_NGHE",

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
    category: "CONG_NGHE",

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
    title: "Viettel và Thái Nguyên dùng công nghệ ứng dụng công nghệ để phát triển địa phương Viettel",
    summary: "Ứng dụng công nghệ để phát triển địa phương",
    content: "<p>Nội dung bài viết...</p>",
    thumbnail: "/img/news/new-1.jpg",
    category: "CONG_NGHE",

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

export default function FeaturedSection() {
  return (
    <section className="mt-[2%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-2">
        <ArticleCard article={articles[0]} size={ArticleSize.LARGE} />
      </div>
      <div className="lg:col-span-2">
        <div className="grid grid-cols-2 grid-rows-2 gap-8">
          {articles.slice(1,5).map((a) => (
            <ArticleCard key={a.id} article={a} size={ArticleSize.MED} />
          ))}
        </div>
      </div>
     
        {articles.slice(5).map((a) => (
          <ArticleCard key={a.id} article={a} size={ArticleSize.SMALL} />
        ))}
      
    </section>
  );
}
