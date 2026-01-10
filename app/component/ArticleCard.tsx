// import Image from "next/image";
// import Link from "next/link";
// import { Article } from "../types/model";
// import { ArticleFormat, ArticleSize } from "../types/ui";

// interface Props {
//   article: Article;
//   size: ArticleSize;
//   format: ArticleFormat;
// }

// export default function ArticleCard({ article, size, format }: Props) {
//   const thumbnail =
//     article?.thumbnail?.trim() !== "" ? article.thumbnail : "/img/default.png";

//   const isList = format === ArticleFormat.LIST;

//   /** size-based config */
//   const config = {
//     XL: {
//       img: "w-full h-[420px]",
//       title: "text-2xl font-bold",
//       showSummary: true,
//     },
//     LARGE: {
//       img: "w-full h-[300px]",
//       title: "text-lg font-semibold",
//       showSummary: true,
//     },
//     MEDIUM: {
//       img: "w-full h-[200px]",
//       title: "text-base font-semibold",
//       showSummary: false,
//     },
//     SMALL: {
//       img: "w-[80px] h-[80px]",
//       title: "text-sm font-medium",
//       showSummary: false,
//     },
//   } as const;

//   /* SMALL layout (special – horizontal) */
//   if (size === ArticleSize.SMALL) {
//     return (
//       <Link href={`/${article.category}/${article.slug}`}>
//         <article className="flex gap-3 items-start">
//           <div className="relative w-[80px] h-[80px] shrink-0 overflow-hidden rounded-lg">
//             <Image
//               src={thumbnail}
//               alt={article.title}
//               fill
//               className="object-cover"
//             />
//           </div>

//           <div className="flex-1 min-w-0">
//             <h3 className="text-sm font-medium line-clamp-2">
//               {article.title}
//             </h3>
//             <p className="text-xs text-gray-500">
//               {new Date(article.createdAt).toLocaleDateString("vi-VN")}
//             </p>
//           </div>
//         </article>
//       </Link>
//     );
//   }

//   /* XL / LARGE / MEDIUM */
//   return (
//     <Link href={`/${article.category}/${article.slug}`}>
//       <article
//         className={`rounded-lg overflow-hidden ${isList ? "flex gap-4" : ""}`}
//       >
//         <div
//           className={`relative overflow-hidden rounded-lg shrink-0
//         ${config.XL.img}
//         ${isList ? "md:w-[280px]" : ""}`}
//         >
//           <Image
//             src={thumbnail}
//             alt={article.title}
//             fill
//             sizes="(max-width: 768px) 100vw, 280px"
//             className="object-cover transition-transform duration-500 hover:scale-105"
//           />
//         </div>

//         <div className={`${isList ? "py-2" : "pt-4"} min-w-0`}>
//           <h3 className={`${config.XL.title} line-clamp-2`}>{article.title}</h3>

//           <p className="text-xs text-gray-500 mt-1">
//             {new Date(article.createdAt).toLocaleDateString("vi-VN")}
//           </p>

//           {config.XL.showSummary && (
//             <p className="mt-2 text-sm text-gray-700 line-clamp-3">
//               {article.summary}
//             </p>
//           )}
//         </div>
//       </article>
//     </Link>
//   );
// }
// "use client";

import Image from "next/image";
import { text } from "stream/consumers";

type ArticleCardProps = {
  title: string;
  source?: string;
  image: string;
  variant?: "vertical" | "horizontal";
  textPosition?: "left" | "right";
  imageWidth?: number;
  imageHeight?: number;
};

export default function ArticleCard({
  title,
  source,
  image,
  variant = "vertical",
  textPosition = "right",
  imageWidth = 400,
  imageHeight = 250,
}: ArticleCardProps) {
  if (variant === "horizontal") {
    return (
      <div className={`flex gap-3 ${textPosition === "right" ? "flex-row" : "flex-row-reverse"}`}>
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="rounded-lg object-cover"
        />
        <div>
          <h4 className="font-medium text-sm leading-snug">{title}</h4>
          {source && <span className="text-xs text-gray-500">{source}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <Image
        src={image}
        alt={title}
        width={imageWidth}
        height={imageHeight}
        className="rounded-xl object-cover"
      />
      <h4 className="font-medium text-sm">{title}</h4>
      {source && <span className="text-xs text-gray-500">{source}</span>}
    </div>
  );
}
