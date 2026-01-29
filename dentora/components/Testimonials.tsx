"use client";

import React from "react";
import { testimonialsItems } from "@/data/data";
import Image from "next/image";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Testimonials = () => {
  return (
    <div className="container">
      <div className="max-w-2xl space-y-2">
        <p className="subtitle">Testimonials</p>
        <h2 className="title">Hear from Our 1,000+ Happy Patients</h2>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur. Amet platea egestas aliquam
          habitant. Hac
        </p>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        loop={true}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        className="mt-11"
      >
        {testimonialsItems.map((item) => (
          <SwiperSlide
            key={item.id}
            className="border-primary-200 flex flex-col items-start gap-5 overflow-hidden rounded-md border p-5 sm:flex-row"
          >
            <div className="max-w-max shrink-0">
              <Image
                src={item.img}
                alt={item.author}
                width={95}
                height={95}
                className="ring-primary-600 size-16 rounded-full ring-4"
              />
            </div>
            <div className="space-y-4">
              <p>{item.text}</p>
              <p className="card-title">{item.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-11 flex items-center justify-center gap-2.5 lg:mt-16">
        <button className="bg-primary-600 hover:bg-primary-700 border-primary-800 focus:bg-primary-700 prev-btn flex size-10 items-center justify-center rounded-full border text-white transition-colors">
          <RiArrowLeftLine />
        </button>
        <button className="bg-primary-600 hover:bg-primary-700 border-primary-800 focus:bg-primary-700 next-btn flex size-10 items-center justify-center rounded-full border text-white transition-colors">
          <RiArrowRightLine />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
