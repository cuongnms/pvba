import FeatureList from "../component/FeatureList";

export default async function ArticleCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <FeatureList />
    </>
  );
}
