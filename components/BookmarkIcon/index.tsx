import React from "react";
import BookmarkIconEmpty from "@/public/assets/icon-bookmark-empty.svg";
// import BookmarkIco from "@/public/assets/icon-bookmark-full.svg";
import Image from "next/image";

const BookmarkIcon = () => {
  return (
    <div className="w-8 h-8 bg-bookmarkDarkBlue rounded-full flex justify-center">
      <div className="my-auto">
        <Image src={BookmarkIconEmpty} alt="empty bookmark" />
      </div>
    </div>
  );
};

export default BookmarkIcon;
