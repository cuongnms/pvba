'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  {
    title: 'Câu chuyện VĂN HÓA',
    desc: 'Những câu chuyện người thật, việc thật diễn ra ngay trong công việc hằng ngày...',
    image: '/img/swiper/featured-1.png',
  },
  {
    title: 'Hành trình Viettel',
    desc: 'Giá trị cốt lõi được lan tỏa qua từng hành động nhỏ...',
    image: '/img/swiper/featured-1.png',
  },
];

export default function FeaturedSwiper() {
  return (
    <section className="relative bg-[#2f2f2f] text-white my-[2%]">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        className="h-[420px] md:h-[480px]"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full">
              {/* IMAGE */}
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
                priority={i === 0}
              />

              {/* DARK GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              {/* CONTENT */}
              <div className="absolute inset-0">
                <div className="max-w-[1000px] mx-auto h-full px-6 flex items-center">
                  <div className="max-w-lg">
                    <p className="uppercase tracking-widest text-sm mb-3">
                      Tiêu điểm
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {s.title}
                    </h2>

                    <p className="text-sm text-gray-200 mb-6">
                      {s.desc}
                    </p>

                    <button className="border border-white px-5 py-2 text-sm flex items-center gap-2 hover:bg-white hover:text-black transition">
                      + Tìm hiểu thêm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
