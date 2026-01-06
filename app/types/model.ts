// models/article.ts
import { ObjectId } from "mongodb";

export type ArticleCategory =
  | "GIOI_THIEU"
  | "TIN_TUC_SU_KIEN"
  | "HOAT_DONG"
  | "VAN_HOA"
  | "THONG_BAO";

  export type UserRole = "ADMIN" | "EDITOR" | "USER"
export interface User {
  _id?: ObjectId;
  email: string;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: UserRole;
  createdAt: Date;
  updatedAt?: Date;
}

export interface Article {
  _id?: ObjectId;
  title: string;
  slug: string;
  summary: string;
  category: ArticleCategory;
  htmlContent: string;
  textContent: string;
  thumbnail: string;
  authorName: string;
  createdAt: Date;
  updatedAt?: Date;
}

export type UserUpdateInput = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
};

export type ArticleUpdateInput = {
  title?: string;
  category?: ArticleCategory;
  summary?: string;
  htmlContent?: string;
  textContent?: string;
  thumbnail?: string;
};