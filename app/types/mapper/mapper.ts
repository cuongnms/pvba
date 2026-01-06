// import { WithId } from "mongodb";
// import { Article, User } from "../model";
// import { IArticle, IUser } from "../ui";

// export async function mapperUser(
//   doc: WithId<User> | null
// ): Promise<IUser | null> {
//   if (!doc) return null;

//   const { _id, ...user } = doc;
//   return user;
// }

// export async function mapperArticle(
//   doc: WithId<Article> | null
// ): Promise<IArticle | null> {
//   if (!doc) return null;

//   const { _id, ...article } = doc;
//   return article;
// }
