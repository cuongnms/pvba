"use client";

import Image from "next/image";

type ArticleStyle =
  | "hot-news"
  | "big-news"
  | "medium-news"
  | "small-news"
  | "big-news-right-text"
  | "medium-news-right-text"
  | "big-news-left-text";

type ArticleCardProps = {
  title: string;
  summary?: string;
  source?: string;
  image: string;
  style: ArticleStyle;
};

export default function ArticleCard({
  title,
  summary,
  source,
  image,
  style,
}: ArticleCardProps) {
  /* =========================
     STYLE 1
     image top – text bottom
     16/9 – same on all devices
  ========================= */
  if (style === "hot-news") {
    return (
      <article className="flex flex-col">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="my-2">
          <h1 className="font-semibold text-xl line-clamp-2 my-2">{title}</h1>
          {source && <p className="text-xs text-gray-500 my-2">{source}</p>}
          {summary && <p className="text-xs text-gray-500 my-2">{summary}</p>}
        </div>
      </article>
    );
  }

  if (style === "big-news") {
    return (
      <>
        <article className="flex flex-col">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="my-2">
            <h1 className="font-semibold text-base line-clamp-2 my-1">
              {title}
            </h1>
            {summary && <p className="text-xs text-gray-500 my-1">{summary}</p>}
          </div>
        </article>
      </>
    );
  }

  if (style === "medium-news") {
    return (
      <>
        <article className="flex flex-col">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="my-2">
            <h1 className="font-semibold text-base line-clamp-2 my-1">
              {title}
            </h1>
            {summary && <p className="text-xs text-gray-500 my-1">{summary}</p>}
          </div>
        </article>
      </>
    );
  }

  if (style === "big-news-right-text") {
    return (
      <>
        <article className="max-sm:flex max-sm:flex-col md:grid md:grid-cols-2 md:gap-4">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg md:col-span-1">
            <Image
              src={image}
              alt={title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="max-sm:my-2">
            <h1 className="font-semibold text-base line-clamp-2 max-sm:my-1">
              {title}
            </h1>
            {summary && (
              <p className="text-xs text-gray-500 max-sm:my-1">{summary}</p>
            )}
          </div>
        </article>
      </>
    );
  }

  if (style === "big-news-left-text") {
    return (
      <>
        <article className="max-sm:flex max-sm:flex-col md:grid md:grid-cols-2 md:gap-4">
          <div className="max-sm:my-2">
            <h1 className="font-semibold text-base line-clamp-2 max-sm:my-1">
              {title}
            </h1>
            {summary && (
              <p className="text-xs text-gray-500 max-sm:my-1">{summary}</p>
            )}
          </div>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg md:col-span-1">
            <Image
              src={image}
              alt={title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </article>
      </>
    );
  }

  if (style === "medium-news-right-text") {
    return (
      <>
        <article className="max-sm:flex max-sm:flex-col md:grid md:grid-cols-3 md:gap-4">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg md:col-span-1">
            <Image
              src={image}
              alt={title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="font-semibold text-base line-clamp-2 max-sm:my-1">
              {title}
            </h1>
            {summary && (
              <p className="text-xs text-gray-500 max-sm:my-1">{summary}</p>
            )}
          </div>
        </article>
      </>
    );
  }

  if (style === "small-news") {
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
}
