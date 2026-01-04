export enum ArticleSize {
  SMALL,
  MED,
  LARGE,
}

export enum ArticleFormat {
  GRID,
  LIST,
}

export type LoginState = {
  error?: string;
  success: boolean;
  username?: string;
  role?: string;
  token?: string;
};
