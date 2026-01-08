import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";
import Post from "../../component/Post";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");
  if (session.user.role !== "ADMIN") redirect("/");

  return <Post />;
}
