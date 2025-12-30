import Image from "next/image";
import Link from "next/link";
import { Article, ArticleSize } from "../types/article";

interface Props {
  article: Article;
  size: ArticleSize;
}

export default function ArticleCard({ article, size }: Props) {
  return (
    <Link href={`/article/${article.slug}`}>
      {(size === ArticleSize.LARGE || size === ArticleSize.MED) && (
        <article className="rounded-lg overflow-hidden hover:shadow-md">
          <div
            className={`relative ${
              size === ArticleSize.LARGE
                ? "h-[220px] md:h-[300px]"
                : "h-[160px] md:h-[140px]"
            }`}
          >
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 ease-out hover:scale-105 hover:brightness-90 rounded-lg"
            />
          </div>

          <div className="py-4">
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
        <article className="rounded-lg flex items-start hover:shadow-md gap-2 overflow-hidden">
          <div className={`relative w-30 aspect-square shrink-0`}>
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

          {/* <div className="py-2 flex flex-col justify-between">
            <h3
              className={`text-sm md:text-base lg:text-sm font-semibold text-left line-clamp-4`}
            >
              {article.title}
            </h3>
            <h3
              className={`text-sm md:text-base lg:text-sm`}
            >
              {article.author.name}
            </h3>
          </div> */}
        </article>
      )}
    </Link>
  );
}
