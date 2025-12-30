export default function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <article className="max-w-3xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-4">
        {params.slug.replaceAll("-", " ")}
      </h1>
      <p className="text-gray-600 leading-relaxed">
      </p>
    </article>
  );
}
