"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export default function Tiles() {
  return (
    <div className="relative -top-20 mb-10 ps-5 md:ps-20">
      <h1 className="text-2xl font-semibold">
        Series sobre secretos y mentiras
      </h1>
      <Swiper
        spaceBetween={10}
        className="mt-4"
        slidesPerView={2}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
          1920: {
            slidesPerView: 7,
          },
        }}
      >
        <SwiperSlide>
          <Image
            className="rounded"
            src="/images/lupin.jpg"
            alt="Lupin"
            width={262}
            height={147}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded"
            src="/images/nam-soon.jpg"
            alt="Lupin"
            width={262}
            height={147}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded"
            src="/images/lupin.jpg"
            alt="Lupin"
            width={262}
            height={147}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded"
            src="/images/nam-soon.jpg"
            alt="Lupin"
            width={262}
            height={147}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded"
            src="/images/lupin.jpg"
            alt="Lupin"
            width={262}
            height={147}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded"
            src="/images/nam-soon.jpg"
            alt="Lupin"
            width={262}
            height={147}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded"
            src="/images/lupin.jpg"
            alt="Lupin"
            width={262}
            height={147}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded"
            src="/images/nam-soon.jpg"
            alt="Lupin"
            width={262}
            height={147}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
