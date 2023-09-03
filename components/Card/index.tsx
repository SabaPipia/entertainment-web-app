import { CardProps } from "@/types";
import React from "react";
import Image from "next/image";
import Movie from "@/public/assets/icon-category-movie.svg";
import BookmarkIconEmpty from "@/public/assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "@/public/assets/icon-bookmark-full.svg";
import PlayButton from "@/public/assets/icon-play.svg";

function Card({ item }: CardProps) {
  return (
    <div className="grid grid-cols-5 gap-5 w-full max-[1336px]:grid-cols-4 max-[950px]:grid-cols-3 max-[580px]:grid-cols-2">
      {item.map((item) => {
        return (
          <div key={item.title} className="relative group">
            <div
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.50), transparent),url(${item.thumbnail?.regular?.small})`,
              }}
              key={item.title}
              className="h-52 w-full bg-cover bg-no-repeat bg-center rounded-lg max-[1200px]:h-40 max-[1200px]:w-full max-[660px]:h-28 max-[580px]:h-44 max-[444px]:h-28 transition-all cursor-pointer hover:brightness-50 group group-hover:brightness-50"
            ></div>
            <div className="flex justify-end p-2 absolute z-100 top-0 right-0 group cursor-pointer">
              <div className="w-8 h-8 bg-bookmarkDarkBlue rounded-full flex justify-center bg-opacity-50">
                <div className="my-auto">
                  {item.isBookmarked ? (
                    <Image src={BookmarkIconFull} alt="empty bookmark" />
                  ) : (
                    <Image src={BookmarkIconEmpty} alt="empty bookmark" />
                  )}
                </div>
              </div>
            </div>
            <div className="text-xs mt-2 ml-1 ">
              <div className="flex text-white gap-1 font-extralight max-[400px]:text-[9px]">
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
              <p className="text-white text-lg max-[580px]:text-sm max-[400px]:text-[12px]">
                {item.title}
              </p>
            </div>
            <div className="hidden gap-3 absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-100%] items-center bg-slate-100 bg-opacity-50 rounded-full p-2 text-white cursor-pointer group-hover:flex max-[400px]:gap-">
              <Image src={PlayButton} alt="play button" />
              <span>Play</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
