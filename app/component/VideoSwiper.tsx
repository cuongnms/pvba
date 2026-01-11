"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/img/news/new-1.jpg",
  "/img/news/new-2.jpg",
  "/img/news/new-2.jpg",
  "/img/news/new-2.jpg",
  "/img/news/new-2.jpg",
  "/img/news/new-2.jpg",
  "/img/news/new-2.jpg",
  "/img/news/new-2.jpg",
  "/img/news/new-2.jpg",
  "/img/news/new-2.jpg",
  "/img/news/new-2.jpg",
];

export default function VideoSwiper() {
  return (
    <div className="relative">
  <Swiper
    modules={[Navigation]}
    navigation
    spaceBetween={16}
    slidesPerView="auto"
    slidesOffsetBefore={16}
    slidesOffsetAfter={16}
    className="overflow-visible"
  >
    {images.map((src, index) => (
      <SwiperSlide
        key={index}
        className="!w-[280px] lg:!w-[360px]"
      >
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src={src}
            alt={`activity-${index}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
  );
}
