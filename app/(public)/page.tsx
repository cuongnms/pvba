//
// "use client";
import FeaturedSwiper from "../component/FeatureSwiper";

import Image from "next/image";
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
              <Image
                src="/img/news/new-1.jpg"
                alt="hero"
                width={900}
                height={500}
                className="rounded-xl object-cover"
              />
              <h3 className="text-xl font-semibold">
                Thứ trưởng Phạm Hoài Nam: “Viettel hãy phấn đấu để có nhiều anh
                hùng hơn nữa”
              </h3>
              <p className="text-gray-600 text-sm">
                Thứ trưởng Bộ Quốc phòng Phạm Hoài Nam khích lệ cán bộ nhân viên
                Viettel...
              </p>
            </div>

            {/* Side list */}
            {/* <div className="space-y-4 lg:col-span-2">
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <ArticleCard
                    key={i}
                    title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                    source="Viettel Group"
                    image="/img/news/new-1.jpg"
                    imageWidth={400}
                    imageHeight={300}
                  />
                ))}
              </div>
            </div> */}
            <div className="lg:col-span-2">
              {/* Mobile: list | Desktop: grid 2x2 */}
              <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2">
                {[1, 2, 3, 4].map((i) => (
                  <ArticleCard
                    key={i}
                    variant="horizontal" // ⭐ mobile list
                    title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                    source="Viettel Group"
                    image="/img/news/new-1.jpg"
                    imageWidth={120}
                    imageHeight={80}
                    // className="lg:[&>*]:block"    // nếu ArticleCard hỗ trợ className
                  />
                ))}
              </div>
            </div>
          </div>
          {/* <div className="pt-6 flex">
            {[1, 2, 3, 4].map((i) => (
              <ArticleCard
                key={i}
                variant="horizontal"
                title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                source="Viettel Group"
                image="/img/news/new-1.jpg"
                imageWidth={80}
                imageHeight={80}
              />
            ))}
          </div> */}
          <div className="pt-6 flex flex-col gap-4 lg:flex-row">
            {[1, 2, 3, 4].map((i) => (
              <ArticleCard
                key={i}
                variant="horizontal"
                title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                source="Viettel Group"
                image="/img/news/new-1.jpg"
                imageWidth={80}
                imageHeight={80}
              />
            ))}
          </div>
        </div>
      </section>

      <FeaturedSwiper />

      {/* TIN TỨC - SỰ KIỆN */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="lg:col-span-1 pr-6">
            <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
              Tin tức
            </h2>
            <div className="space-y-3">
              <ArticleCard
                key={0}
                variant="horizontal"
                title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                source="Viettel Group"
                image="/img/news/new-1.jpg"
                imageWidth={300}
                imageHeight={80}
              />
            </div>
            <div className="flex pt-6 gap-3">
              {[1, 2, 3].map((i) => (
                <ArticleCard
                  key={i}
                  // variant="horizontal"
                  title="Viettel Commerce cán mốc doanh thu cao nhất"
                  source="Viettel Commerce"
                  image="/img/news/new-1.jpg"
                  imageWidth={180}
                  imageHeight={20}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1 pl-6">
            <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
              Sự kiện
            </h2>
            <div className="space-y-3">
              <ArticleCard
                key={0}
                variant="horizontal"
                title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                source="Viettel Group"
                image="/img/news/new-1.jpg"
                imageWidth={300}
                imageHeight={80}
              />
            </div>
            <div className="flex pt-6 gap-3">
              {[1, 2, 3].map((i) => (
                <ArticleCard
                  key={i}
                  // variant="horizontal"
                  title="Viettel Commerce cán mốc doanh thu cao nhất"
                  source="Viettel Commerce"
                  image="/img/news/new-1.jpg"
                  imageWidth={200}
                  imageHeight={30}
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
            <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-3 mb-6">
              Hội viên
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main article */}
            <div className="lg:col-span-2">
              <ArticleCard
                key={0}
                variant="horizontal"
                title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                source="Viettel Group"
                image="/img/news/new-1.jpg"
                imageWidth={400}
                imageHeight={300}
              />
              <div className="flex flex-col gap-6 pt-6">
                {[1, 2, 3].map((i) => (
                  <ArticleCard
                    key={i}
                    variant="horizontal"
                    title="Viettel tăng trưởng bứt phá, kinh doanh hiệu quả năm 2025"
                    source="Viettel Group"
                    image="/img/news/new-1.jpg"
                    imageWidth={300}
                    imageHeight={300}
                  />
                ))}
              </div>
            </div>

            {/* Side list */}
            <div className="flex flex-col">
              <MemberList />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
