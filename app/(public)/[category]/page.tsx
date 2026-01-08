import FeatureList from "@/app/component/FeatureList";
import { ArticleCategory } from "@/app/types/model";

interface Props {
  params: { category: ArticleCategory }; // dynamic segment
}

// ✅ Không unwrap bằng await params.category
export default async function CategoryPage({ params }: Props) {
   const path = `/${params.category}`; // build path từ params
   console.log("path ", path);


  return <FeatureList category={"GIOI_THIEU"} label={""} />;
}
