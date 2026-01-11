"use client";

import Image from "next/image";

type ArticleStyle = "style1" | "style2" | "style3";
type TextPosition = "left" | "right" | "bottom";

type ArticleCardProps = {
  title: string;
  summary?: string;
  source?: string;
  image: string;
  style: ArticleStyle;
  textPosition?: TextPosition;
};

export default function ArticleCard({
  title,
  summary,
  source,
  image,
  style,
  textPosition = "right",
}: ArticleCardProps) {
  /* =========================
     STYLE 1
     image top – text bottom
     16/9 – same on all devices
  ========================= */
  if (style === "style1") {
    return (
      <article className="flex flex-col gap-3">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="font-semibold text-base line-clamp-2">{title}</h3>
          {source && <p className="text-xs text-gray-500 mt-1">{source}</p>}
          {summary && <p className="text-xs text-gray-500 mt-1">{summary}</p>}
        </div>
      </article>
    );
  }

  /* =========================
     STYLE 2
     mobile: text bottom
     pc: left | right | bottom
  ========================= */
  if (style === "style2") {
    const layoutClass =
      textPosition === "bottom"
        ? "flex-col"
        : textPosition === "left"
        ? "flex-col md:flex-row-reverse"
        : "flex-col md:flex-row";

        const flexWidth = textPosition !== "bottom" ? "w-1/2" : "w-full";

    return (
      <article className={`flex gap-4 md:${layoutClass} max-sm:${textPosition === "bottom" ? "flex-col" : "flex-row"}`}>
        {/* Image */}
        <div className={`relative ${flexWidth} aspect-[16/9] overflow-hidden rounded-lg shrink-0`}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
          {source && <p className="text-xs text-gray-500 mt-1">{source}</p>}
        </div>
      </article>
    );
  }

  return (
    <article className="flex gap-4 flex-row items-start">
      {/* Image */}
      <div
        className="
        relative w-full
        aspect-square
        flex-[0_0_40%]
        max-sm:flex-[0_0_30%]
        overflow-hidden rounded-lg shrink-0
      "
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm">{title}</h3>
        {source && <p className="text-xs text-gray-500 mt-1">{source}</p>}
        {summary && <p className="text-xs text-gray-500 mt-1">{summary}</p>}

      </div>
    </article>
  );
}
