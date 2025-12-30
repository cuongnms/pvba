export type ArticleStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export type ArticleCategory =
  | "NHIP_SONG"
  | "KINH_DOANH"
  | "CONG_NGHE"
  | "TRI_THUC"
  | "VAN_HOA";

  export enum ArticleSize {
    SMALL, MED, LARGE
  }

export interface Article {
  id: string;              // UUID hoặc Mongo ObjectId
  slug: string;            // viettel-thai-nguyen
  title: string;
  summary: string;         // mô tả ngắn
  content: string;         // HTML hoặc Markdown
  thumbnail: string;       // URL ảnh
  category: ArticleCategory;

  author: {
    id: string;
    name: string;
    avatar?: string;
  };

  publishedAt: string;     // ISO string
  createdAt: string;
  updatedAt: string;

  status: ArticleStatus;
  isFeatured: boolean;
}
