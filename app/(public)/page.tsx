//
// "use client";
import FeaturedSwiper from "../component/FeatureSwiper";

import ArticleCard from "../component/ArticleCard";
import VideoSwiper from "../component/VideoSwiper";
import MemberList from "../component/MemberList";
export default function HomePage() {
  return (
    <main className="mx-auto px-4 py-6 space-y-12">
      {/* NỔI BẬT */}
      <section>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Main article */}
            <div className="md:col-span-2 space-y-3">
              <ArticleCard
                style="hot-news"
                title="Tin nổi bật"
                source="Admin"
                summary="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                image="/img/news/new-1.jpg"
              />
            </div>

            <div className="md:col-span-2">
              <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-2">
                {[1, 2, 3, 4].map((i) => (
                  <ArticleCard
                    key={i}
                    style="big-news"
                    title="Tin nổi bật"
                    summary="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                    image="/img/news/new-1.jpg"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="w-full pt-8 flex flex-col md:flex-row gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-1">
                <ArticleCard
                  style="small-news"
                  title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                  source="Viettel Group"
                  image="/img/news/new-1.jpg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedSwiper />

      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="md:text-[2vw] font-bold border-l-4 border-red-600 pl-3 mb-6">
              Tin tức - Sự kiện
            </h2>
            <div className="space-y-3">
              <ArticleCard
                style="big-news-right-text"
                title="Tin nổi bật"
                summary="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                image="/img/news/new-1.jpg"
              />
            </div>
            <div className="flex flex-col my-6 gap-6">
              {[1, 2, 3].map((i) => (
                <ArticleCard
                  key={i}
                  style="medium-news-right-text"
                  title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025 "
                  image="/img/news/new-1.jpg"
                />
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


      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="md:text-[2vw] font-bold border-l-4 border-red-600 pl-3 mb-6">
              Hoạt động
            </h2>
            <div className="space-y-3">
              <ArticleCard
                style="big-news-right-text"
                title="Tin nổi bật"
                summary="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                image="/img/news/new-1.jpg"
              />
            </div>
            <div className="flex justify-between items-center my-6 gap-6">
              {[1, 2, 3].map((i) => (
                <ArticleCard
                  key={i}
                  style="medium-news"
                  title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025 "
                  image="/img/news/new-1.jpg"
                />
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
      <section>
        <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
          Thư viện
        </h2>

        <VideoSwiper />
      </section>

      
    </main>
  );
}
