import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import BookmarkIcon from "../BookmarkIcon";

import Movie from "@/public/assets/icon-category-movie.svg";

import "swiper/css";
import { CarouselProps } from "@/types";

export default function Carousel({ item }: CarouselProps) {
  return (
    <Swiper
      slidesPerView={1.5}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      className="mySwiper h-36 w-full"
    >
      {item.map((item: any) => {
        return (
          <SwiperSlide
            style={{
              backgroundImage: `linear-gradient(to top, rgba(5, 5, 5, 0.616), transparent),url(${item.thumbnail.trending.large})`,
            }}
            className="bg-cover bg-no-repeat bg-center rounded-xl"
            key={item.title}
          >
            <div className="p-3 h-full flex flex-col justify-between">
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
                <p className="text-white">{item.title}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
