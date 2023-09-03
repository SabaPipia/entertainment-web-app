import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import BookmarkIconEmpty from "@/public/assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "@/public/assets/icon-bookmark-full.svg";
import PlayButton from "@/public/assets/icon-play.svg";
import Movie from "@/public/assets/icon-category-movie.svg";

import { CarouselProps } from "@/types";
import { useDispatch } from "@/context";
import { dataContext } from "@/app/layout";

export default function Carousel({ item }: CarouselProps) {
  const dispatch = useDispatch();
  const { data, setData } = useContext(dataContext);
  const handleBookmarkClick = (title: string) => {
    dispatch({
      type: "bookmark",
      task: { id: title },
      data: data || [],
    });
  };
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
              className="bg-no-repeat bg-cover h-full rounded-xl group"
              key={item.title}
            >
              <div className="p-3 flex flex-col justify-between h-full hover:backdrop-brightness-50 relative">
                <div
                  className="w-8 h-8 bg-bookmarkDarkBlue rounded-full flex justify-center bg-opacity-50 ml-auto"
                  onClick={() => item.title && handleBookmarkClick(item.title)}
                >
                  <div className="my-auto">
                    <Image
                      src={
                        item.isBookmarked ? BookmarkIconFull : BookmarkIconEmpty
                      }
                      alt="full bookmark"
                    />
                  </div>
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
                <div className="hidden cursor-pointer gap-3 absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] items-center bg-slate-100 bg-opacity-50 rounded-full p-2 text-white hover:backdrop-brightness-50 group-hover:flex">
                  <Image src={PlayButton} alt="play button " />
                  <span>Play</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
