export default async function Search({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <article className="max-w-3xl mt-[2%]">
      <h1 className="text-3xl font-bold mb-4">
      </h1>
      <p className="text-gray-600 leading-relaxed">
        {slug}
      </p>
    </article>
  );
}
