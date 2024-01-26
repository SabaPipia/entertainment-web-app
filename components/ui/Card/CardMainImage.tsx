import React, { useContext } from "react";
import Image from "next/image";
import { useDispatch } from "@/context";
import { dataContext } from "@/app/layout";
import BookmarkIconEmpty from "@/public/assets/icon-bookmark-empty.svg";
import BookmarkIconFull from "@/public/assets/icon-bookmark-full.svg";
import PlayButton from "@/public/assets/icon-play.svg";
export default function CardMainImage({
  title,
  isBookmarked,
  thumbnail,
}: {
  title: string | undefined;
  isBookmarked: boolean | undefined;
  thumbnail: string | undefined;
}) {
  const dispatch = useDispatch();
  const { data } = useContext(dataContext);
  const handleBookmarkClick = (title: string) => {
    dispatch({
      type: "bookmark",
      task: { id: title },
      data: data || [],
    });
  };
  console.log(typeof thumbnail);
  return (
    <div key={title} className="relative group">
      <div
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.50), transparent),url(${thumbnail})`,
        }}
        key={title}
        className="h-52 w-full bg-cover bg-no-repeat bg-center rounded-lg max-[1200px]:h-40 max-[1200px]:w-full max-[660px]:h-28 max-[580px]:h-44 max-[444px]:h-28 transition-all cursor-pointer hover:brightness-50 group group-hover:brightness-50"
      ></div>
      <div className="flex justify-end p-2 absolute z-100 top-0 right-0 group cursor-pointer">
        <div
          className="w-8 h-8 bg-bookmarkDarkBlue rounded-full flex justify-center bg-opacity-50 hover:bg-white"
          onClick={() => title && handleBookmarkClick(title)}
        >
          <div className="w-full h-full flex justify-center items-center hover:brightness-0">
            <Image
              src={isBookmarked ? BookmarkIconFull : BookmarkIconEmpty}
              alt="empty bookmark"
            />
          </div>
        </div>
      </div>
      <div className="hidden gap-3 absolute top-2/4 left-2/4 translate-x-[-50%] translate-y-[-100%] items-center bg-slate-100 bg-opacity-50 rounded-full p-2 text-white cursor-pointer group-hover:flex max-[400px]:gap-[2px]">
        <Image src={PlayButton} alt="play button" />
        <span>Play</span>
      </div>
    </div>
  );
}
