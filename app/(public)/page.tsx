//
// "use client";
import FeaturedSwiper from "../component/FeatureSwiper";

import ArticleCard from "../component/ArticleCard";
import VideoSwiper from "../component/VideoSwiper";
import MemberList from "../component/MemberList";
export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-6 space-y-12">
      {/* NỔI BẬT */}
      <section>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main article */}
            <div className="lg:col-span-2 space-y-3">
              <ArticleCard
                style="style1"
                title="Tin nổi bật"
                summary="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                image="/img/news/new-1.jpg"
              />
            </div>

            <div className="lg:col-span-2">
              <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-2">
                {[1, 2, 3, 4].map((i) => (
                  <ArticleCard
                    key={i}
                    style="style1"
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
                  style="style3"
                  title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025 "
                  image="/img/news/new-1.jpg"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedSwiper />

      {/* TIN TỨC - SỰ KIỆN */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-6">
          <div className="md:col-span-1 lg:pr-6">
            <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
              Tin tức
            </h2>
            <div className="space-y-3">
              <ArticleCard
                style="style1"
                title="Tin nổi bật"
                summary="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                image="/img/news/new-1.jpg"
              />
            </div>
            <div className="flex max-sm:flex-col pt-6 gap-6 max-sm:pb-6">
              {[1, 2, 3].map((i) => (
                <ArticleCard
                  key={i}
                  style="style2"
                  title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025 "
                  image="/img/news/new-1.jpg"
                  textPosition="bottom"
                />
              ))}
            </div>
          </div>
          <div className="md:col-span-1 lg:pl-6">
            <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
              Sự kiện
            </h2>
            <div className="space-y-3">
              <ArticleCard
                style="style1"
                title="Tin nổi bật"
                summary="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                image="/img/news/new-1.jpg"
              />
            </div>
            <div className="flex max-sm:flex-col pt-6 gap-6 max-sm:pb-6">
              {[1, 2, 3].map((i) => (
                <ArticleCard
                  key={i}
                  style="style2"
                  title="Viettel Commerce cán mốc doanh thu cao nhất"
                  image="/img/news/new-1.jpg"
                  textPosition="bottom"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
          Thư viện
        </h2>

        <VideoSwiper />
      </section>
      {/* CÔNG NGHỆ */}
      <section>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            <h2 className="lg:col-span-2 text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
              Hoạt động
            </h2>
            <h2 className="max-sm:hidden text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
              Hội viên
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main article */}
            <div className="lg:col-span-2">
              <ArticleCard
                key={0}
                title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                source="Viettel Group"
                image="/img/news/new-1.jpg"
                style="style2"
                textPosition="bottom"
              />
              <div className="flex flex-col gap-6 pt-6">
                {[1, 2, 3].map((i) => (
                  <ArticleCard
                    key={i}
                    title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                    source="Viettel Group"
                    image="/img/news/new-1.jpg"
                    style="style2"
                    textPosition="right"
                  />
                ))}
              </div>
            </div>

            {/* Side list */}
            <div className="flex flex-col">
              <h2 className="md:hidden text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
                Hội viên
              </h2>
              <MemberList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
