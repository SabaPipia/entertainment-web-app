import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import BookmarkIcon from "../BookmarkIcon";

import Movie from "@/public/assets/icon-category-movie.svg";

import { CarouselProps } from "@/types";

export default function Carousel({ item }: CarouselProps) {
  const breakpoints = {
    900: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  };
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={2.5}
        breakpoints={breakpoints}
        spaceBetween={30}
        className="mySwiper h-64 w-full max-[1336px]:h-56 max-[580px]:h-40"
      >
        {item.map((item: any) => {
          return (
            <SwiperSlide
              style={{
                backgroundImage: `linear-gradient(to top, rgba(5, 5, 5, 0.616), transparent),url(${item.thumbnail.trending.large})`,
              }}
              className="bg-no-repeat bg-cover h-full rounded-xl"
              key={item.title}
            >
              <div className="p-3 flex flex-col justify-between h-full">
                <div className="flex justify-end">
                  <BookmarkIcon />
                </div>
                <div className="mb-2">
                  <div className="flex text-white gap-1 font-extralight">
                    <p>{item.year}</p>
                    <div className="w-1 h-1 rounded-full bg-white my-auto mx-1" />
                    <div className="flex gap-1">
                      <div className="m-auto">
                        <Image src={Movie} alt="category movie" />
                      </div>
                      <p>{item.category}</p>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-white my-auto mx-1" />
                    <p>{item.rating}</p>
                  </div>
                  <p className="text-white md:text-2xl">{item.title}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
