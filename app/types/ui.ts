import { ArticleCategory, UserRole } from "./model";

export enum ArticleSize {
  XL = "XL",
  LARGE = "LARGE",
  MEDIUM = "MEDIUM",
  SMALL = "SMALL",
}

export enum ArticleFormat {
  GRID = "GRID",
  LIST = "LIST",
}

export type LoginState = {
  error?: string;
  success: boolean;
  username?: string;
  role?: string;
  token?: string;
};

export interface IUser {
  email: string;
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role: UserRole;
}

export interface IArticle {
  title: string;
  slug: string;
  summary: string;
  category: ArticleCategory;
  htmlContent: string;
  textContent: string;
  thumbnail: string;
  authorName: string;
  createdAt: Date;
}