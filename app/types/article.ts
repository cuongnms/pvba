export type ArticleStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export type ArticleCategory =
  | "GIOI_THIEU"
  | "TIN_TUC_SU_KIEN"
  | "HOAT_DONG"
  | "VAN_HOA"
  | "THONG_BAO";

  export enum ArticleSize {
    SMALL, MED, LARGE
  }

  export enum ArticleFormat {
    GRID, LIST
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


