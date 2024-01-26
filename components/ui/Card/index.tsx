import { CardProps } from "@/types";
import React from "react";

import Image from "next/image";
import Movie from "@/public/assets/icon-category-movie.svg";

import CardMainImage from "./CardMainImage";

function Card({ item }: CardProps) {
  return (
    <div className="grid grid-cols-5 gap-5 w-full max-[1336px]:grid-cols-4 max-[950px]:grid-cols-3 max-[580px]:grid-cols-2">
      {item.map((item) => {
        return (
          <div>
            <CardMainImage
              title={item.title}
              isBookmarked={item.isBookmarked}
              thumbnail={item.thumbnail?.regular?.small}
            />
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
          </div>
        );
      })}
    </div>
  );
}

export default Card;
