import { createArticle, listArticles, updateArticle } from "@/app/services/article";
import { NextRequest, NextResponse } from "next/server";
import { getErrorMessage, processHtmlContent, slugify } from "@/app/helper/helper";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";

// export async function GET() {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//   }

//   const articles = await listArticles({});
//   console.log("articles:", articles);
//   return NextResponse.json(articles);
// }

export async function POST(req: NextRequest) {
  try {

    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    if (!["ADMIN", "EDITOR"].includes(session.user?.role ?? "")) {
      return NextResponse.json(
        { error: "Forbidden" },
        { status: 403 }
      );
    }

    const body = await req.json();

    const {
      title,
      slug,
      category,
      htmlContent,
      thumbnail,
      authorName,
    } = body;

    if (!title || !category || !htmlContent) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const { contentHtml, contentText, excerpt} = processHtmlContent(htmlContent);
    const articleUpdateData = {
      title,
      slug,
      summary: excerpt,
      category,
      htmlContent: contentHtml,
      textContent: contentText, 
      thumbnail,
      authorName,
    };

    const result = await updateArticle(slug, articleUpdateData);

    return NextResponse.json({ success: true, articleId: result });
  } catch (err: unknown) {
    console.error(err);
    return NextResponse.json({ error: getErrorMessage(err) }, { status: 500 });
  }
}
