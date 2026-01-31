// app/(public)/[category]/[slug]/ArticleDetailPage.tsx

import { findArticleBySlug } from "@/app/services/article";

// type Article = {
//   title: string;
//   contentHtml: string;
//   createdAt?: string;
//   category?: string;
// };

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const article = await findArticleBySlug((await params).slug);
  return (
    <article className="max-w-4xl mx-auto py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">
        {article?.title}
      </h1>

      {/* Meta */}
      {article?.createdAt && (
        <div className="text-sm text-muted-foreground mb-6">
          {new Date(article.createdAt).toLocaleDateString()}
        </div>
      )}

      {/* HTML content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: article?.htmlContent || "" }}
      />
    </article>
  );
}

