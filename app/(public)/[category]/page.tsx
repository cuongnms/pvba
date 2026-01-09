import FeatureList from "@/app/component/FeatureList";
import { getLabelFromCategory } from "@/app/helper/helper";
import { ArticleCategory } from "@/app/types/model";

interface Props {
  params: { category: string };
}

export default async function CategoryPage({ params }: Props) {
   const resolvedParams = await params;
  const path = `${resolvedParams.category}` as ArticleCategory;


  return <FeatureList category={path} label={getLabelFromCategory(path)} />;
}
