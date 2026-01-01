import Image from "next/image";
import Link from "next/link";
import { Article, ArticleFormat, ArticleSize } from "../types/article";

interface Props {
  article: Article;
  size: ArticleSize;
  format: ArticleFormat;
}

export default function ArticleCard({ article, size, format }: Props) {
  return (
    <Link href={`/article/${article.slug}`}>
      {(size === ArticleSize.LARGE || size === ArticleSize.MED) && (
        <article className={`rounded-lg overflow-hidden ${format === ArticleFormat.LIST ? "flex w-full h-50" :""}`}>
          <div
            className={`relative overflow-hidden rounded-lg ${
              size === ArticleSize.LARGE
                ? "h-55 md:h-75" : "h-40"
            } ${format === ArticleFormat.LIST ? "md:w-80 aspect-square shrink-0" : ""}`}
          >
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-105 hover:brightness-90 rounded-lg"
            />
          </div>

          <div className={` ${format === ArticleFormat.LIST ? "px-4" :"py-4"}`}>
            <h3 className={`text-sm md:text-base lg:text-smfont-semibold`}>
              {article.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(article.publishedAt).toLocaleDateString("vi-VN")}
            </p>
            {size === ArticleSize.LARGE && (
              <>
                <p className="mt-[3%] text-sm">
                  Chiều 29/12, Viettel và UBND tỉnh Thái Nguyên ký kết thỏa
                  thuận hợp tác giai đoạn 2026–2030. Chương trình nhằm cụ thể
                  hóa việc thực hiện Nghị quyết số 57-NQ/TW ngày 22/12/2024 của
                  Bộ Chính trị.
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
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-105 rounded-lg"
            />
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-1">
            <h3 className="text-sm md:text-base text-left ">
              {article.title}
            </h3>

            <p className="text-xs text-gray-500">{article.author.name}</p>
          </div>

          
        </article>
      )}
    </Link>
  );
}
