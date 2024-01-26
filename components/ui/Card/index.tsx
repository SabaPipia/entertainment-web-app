import { CardProps } from "@/types";
import React from "react";
import CardMainImage from "./CardMainImage";
import Details from "./Details";

function Card({ item }: CardProps) {
  return (
    <div className="grid grid-cols-5 gap-5 w-full max-[1336px]:grid-cols-4 max-[950px]:grid-cols-3 max-[580px]:grid-cols-2">
      {item.map((item) => (
        <div key={item.title}>
          <CardMainImage
            title={item.title}
            isBookmarked={item.isBookmarked}
            thumbnail={item.thumbnail?.regular?.small}
          />
          <Details
            year={item.year}
            category={item.category}
            rating={item.rating}
            title={item.title}
          />
        </div>
      ))}
    </div>
  );
}

export default Card;
