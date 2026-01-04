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

  export type LoginState = {
  error?: string;
  success?: boolean;
};


export interface Article {
  id: string;              // UUID hoặc Mongo ObjectId
  slug: string;            // viettel-thai-nguyen
  title: string;
  summary: string;         // mô tả ngắn
  thumbnail: string;       // URL ảnh
  category: ArticleCategory;
  author: {
    id: string;
    name: string;
  };
  publishedAt: string;     // ISO string
  createdAt: string;
  updatedAt: string;
  status: ArticleStatus;
  isFeatured: boolean;
}


export interface User {
  _id?: string;
  email: string;
  password: string;
  name: string;
  role: "admin" | "user";
  createdAt: Date;
}
