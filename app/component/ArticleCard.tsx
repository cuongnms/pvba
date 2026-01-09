import Image from "next/image";
import Link from "next/link";
import { Article } from "../types/model";
import { ArticleFormat, ArticleSize } from "../types/ui";

interface Props {
  article: Article;
  size: ArticleSize;
  format: ArticleFormat;
}

export default function ArticleCard({ article, size, format }: Props) {
  const thumbnail = article &&
  article?.thumbnail && article?.thumbnail.trim() !== ""
    ? article.thumbnail
    : "/img/default.png";
  return (
    <Link href={`/${article?.category}/${article?.slug}`}>
      {(size === ArticleSize.LARGE || size === ArticleSize.MED) && (
        <article className={`rounded-lg overflow-hidden ${format === ArticleFormat.LIST ? "flex w-full h-50" :""}`}>
          <div
            className={`relative overflow-hidden rounded-lg ${
              size === ArticleSize.LARGE
                ? "h-55 md:h-75" : "h-40"
            } ${format === ArticleFormat.LIST ? "md:w-80 aspect-square shrink-0" : ""}`}
          >
            <Image
              src={thumbnail}
              alt={article?.title ?? 'Default thumbnail'}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-105 hover:brightness-90 rounded-lg"
            />
          </div>

          <div className={` ${format === ArticleFormat.LIST ? "px-4" :"py-4"}`}>
            <h3 className={`text-sm md:text-base lg:text-smfont-semibold`}>
              {article?.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(article?.createdAt).toLocaleDateString("vi-VN")}
            </p>
            {size === ArticleSize.LARGE && (
              <>
                <p className="mt-[3%] text-sm">
                  {article?.summary}
                </p>
              </>
            )}
          </div>
        </article>
      )}
      {size === ArticleSize.SMALL && (
        <article className="rounded-lg flex items-start gap-4">
          <div className={`relative w-30 aspect-square shrink-0 overflow-hidden rounded-lg`}>
            <Image
              src={thumbnail}
              alt={article?.title ?? 'Default thumbnail'}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-105 rounded-lg"
            />
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-1">
            <h3 className="text-sm md:text-base text-left ">
              {article.title}
            </h3>

            <p className="text-xs text-gray-500">{article.category}</p>
          </div>

          
        </article>
      )}
    </Link>
  );
}
