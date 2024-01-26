import React from "react";
import Image from "next/image";
import Movie from "@/public/assets/icon-category-movie.svg";
import Title from "./Title";

export default function Details({
  year,
  category,
  rating,
  title,
}: {
  year?: number;
  category?: string;
  rating?: string;
  title?: string;
}) {
  return (
    <div className="text-xs mt-2 ml-1 ">
      <div className="flex text-white gap-1 font-extralight max-[400px]:text-[9px]">
        <p>{year}</p>
        <div className="w-1 h-1 rounded-full bg-white my-auto mx-1" />
        <div className="flex gap-1">
          <div className="m-auto">
            <Image src={Movie} alt="category movie" />
          </div>
          <p>{category}</p>
        </div>
        <div className="w-1 h-1 rounded-full bg-white my-auto mx-1" />
        <p>{rating}</p>
      </div>
      <Title title={title} />
    </div>
  );
}
