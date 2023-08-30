import { CardProps } from "@/types";
import React from "react";
import Image from "next/image";
import Movie from "@/public/assets/icon-category-movie.svg";
import BookmarkIcon from "../BookmarkIcon";

function Card({ item }: CardProps) {
  return (
    <div className="grid grid-cols-5 gap-5 w-full max-[1336px]:grid-cols-4">
      {item.map((item) => {
        return (
          <div key={item.title}>
            <div
              style={{
                backgroundImage: `linear-gradient(to top, rgba(5, 5, 5, 0.616), transparent),url(${item.thumbnail?.regular?.small})`,
              }}
              key={item.title}
              className="h-52 w-full bg-cover bg-no-repeat bg-center rounded-lg max-[1200px]:h-40"
            >
              <div className="flex justify-end p-2">
                <BookmarkIcon />
              </div>
            </div>
            <div className="text-xs mt-2 ml-1">
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
              <p className="text-white md:text-lg">{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
