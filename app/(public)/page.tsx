//
// "use client";
import FeaturedSwiper from "../component/FeatureSwiper";

import ArticleCard from "../component/ArticleCard";
import VideoSwiper from "../component/VideoSwiper";
import MemberList from "../component/MemberList";
import { listArticlesByCategoryLimit } from "../services/article";
import Link from "next/link";
export default async function HomePage() {
  const articles = await listArticlesByCategoryLimit({ limitPerCategory: 5 });
  const news = articles.filter((i) => i.category === "tin-tuc-su-kien");
  const activities = articles.filter((i) => i.category === "hoat-dong");
  const libs = articles.filter((i) => i.category === "thu-vien");
  return (
    <main className="mx-auto px-4 py-6 space-y-12">
      {/* NỔI BẬT */}
      {articles && articles.length > 0 ? (
        <section>
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Main article */}
              <div className="md:col-span-2 space-y-3">
                <Link href={`/${news[0].category}/${news[0].articles[0].slug}`}>
                  <ArticleCard
                    style="hot-news"
                    title={news[0].articles[0].title}
                    source={news[0].articles[0].authorName}
                    summary={news[0].articles[0].summary}
                    image={news[0].articles[0].thumbnail}
                  />
                </Link>
              </div>

              <div className="md:col-span-2">
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-2">
                  {activities.slice(0, 3).map((article, index) => (
                    <Link
                      key={index}
                      href={`/${article.category}/${article.articles[index].slug}`}
                    >
                      <ArticleCard
                        key={index}
                        style="big-news"
                        title={article.articles[index].title}
                        summary={article.articles[index].summary}
                        image={article.articles[index].thumbnail}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full pt-8 flex flex-col md:flex-row gap-4">
              {libs.slice(1, 3).map((article, index) => (
                <div key={index} className="flex-1">
                  <Link
                    key={index}
                    href={`/${article.category}/${article.articles[index].slug}`}
                  >
                    <ArticleCard
                      style="small-news"
                      title={article.articles[index].title}
                      source={article.articles[index].authorName}
                      image={article.articles[index].thumbnail}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section>Chưa có bài viết</section>
      )}

      <FeaturedSwiper />

      {news && news.length > 0 ? (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="md:text-[2vw] font-bold border-l-4 border-red-600 pl-3 mb-6">
                Tin tức - Sự kiện
              </h2>
              <div className="space-y-3">
                <Link href={`/${news[0].category}/${news[0].articles[0].slug}`}>
                  <ArticleCard
                    style="big-news-right-text"
                    title={news[0].articles[0].title}
                    summary={news[0].articles[0].summary}
                    image={news[0].articles[0].thumbnail}
                  />
                </Link>
              </div>
              <div className="flex flex-col my-6 gap-6">
                {news.slice(1).map((article, index) => (
                  <Link
                    key={index}
                    href={`/${article.category}/${article.articles[index].slug}`}
                  >
                    <ArticleCard
                      key={index}
                      style="medium-news-right-text"
                      title={article.articles[index].title}
                      image={article.articles[index].thumbnail}
                    />
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:col-span-1">
              <h2 className="md:text-[2vw] font-bold border-l-4 border-red-600 pl-3 mb-6">
                Gương mặt doanh nhân
              </h2>
              <MemberList />
            </div>
          </div>
        </section>
      ) : (
        <section>Chưa có bài viết</section>
      )}

      {activities && activities.length > 0 ? (
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h2 className="md:text-[2vw] font-bold border-l-4 border-red-600 pl-3 mb-6">
                Hoạt động
              </h2>
              <div className="space-y-3">
                <Link href={`/${activities[0].category}/${activities[0].articles[0].slug}`}>
                  <ArticleCard
                    style="big-news-right-text"
                    title={activities[0].articles[0].title}
                    summary={activities[0].articles[0].summary}
                    image={activities[0].articles[0].thumbnail}
                  />
                </Link>
              </div>
              <div className="flex justify-between items-center my-6 gap-6">
                {activities.slice(1).map((article, index) => (
                  <Link
                    key={index}
                    href={`/${article.category}/${article.articles[index].slug}`}
                  >
                    <ArticleCard
                    key={index}
                    style="medium-news"
                    title={article.articles[index].title}
                    image={article.articles[index].thumbnail}
                  />
                  </Link>
                  
                ))}
              </div>
            </div>
            <div className="md:col-span-1">
              <h2 className="md:text-[2vw] font-bold border-l-4 border-red-600 pl-3 mb-6">
                Tra cứu
              </h2>
              <MemberList />
            </div>
          </div>
        </section>
      ) : (
        <section>Chưa có bài viết</section>
      )}
      <section>
        <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
          Thư viện
        </h2>

        <VideoSwiper />
      </section>
    </main>
  );
}
