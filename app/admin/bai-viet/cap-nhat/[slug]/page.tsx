import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";
import Post from "../../../../component/Post";
import { findArticleBySlug } from "@/app/services/article";

export default async function Page({params}: {params: Promise<{ slug: string }>;}) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  if (session.user.role !== "ADMIN") redirect("/");

  const article = await findArticleBySlug((await params).slug);
  if(!article){
    redirect("/admin/bai-viet");
  }
  return <Post article={article} />;
}
