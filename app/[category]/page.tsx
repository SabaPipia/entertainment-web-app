"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import SearchBar from "@/components/SearchBar";
import Carousel from "@/components/Carousel";
import Data from "@/data.json";
import { DataTypes } from "@/types";
import Card from "@/components/Card";

function Home() {
  const [data, setData] = useState<DataTypes[]>();

  const pathname = usePathname();

  useEffect(() => {
    setData(Data);
  }, []);

  const carouselItems = data?.filter((item: DataTypes) => item.isTrending);

  let recomendedItems: DataTypes[] | undefined;
  let BookmarkedMovies: DataTypes[] | undefined;
  let BookmarkedTvSeries: DataTypes[] | undefined;
  let heading = "Recomended for you";

  if (pathname === "/home") {
    heading = "Recomended for you";
    recomendedItems = data?.filter((item: DataTypes) => !item.isTrending);
  } else if (pathname === "/movies") {
    heading = "Movies";
    recomendedItems = data?.filter(
      (item: DataTypes) => item.category === "Movie"
    );
  } else if (pathname === "/tv-series") {
    heading = "TV Series";
    recomendedItems = data?.filter(
      (item: DataTypes) => item.category === "TV Series"
    );
  } else if (pathname === "/bookmarks") {
    BookmarkedMovies = data?.filter((item: DataTypes) => {
      if (item.isBookmarked && item.category === "Movie") {
        return item;
      }
    });
    BookmarkedTvSeries = data?.filter((item: DataTypes) => {
      if (item.isBookmarked && item.category === "TV Series") {
        return item;
      }
    });
  }

  return (
    <>
      <SearchBar />
      {pathname.includes("home") ? (
        <div>
          <h2 className="text-2xl text-white mb-5">Trending</h2>
          {carouselItems ? (
            <Carousel item={carouselItems} />
          ) : (
            <p>Loading or empty data...</p>
          )}
        </div>
      ) : null}
      {pathname === "/bookmarks" ? (
        <>
          <h2 className="text-2xl text-white my-3">Bookmarked Movies</h2>
          {BookmarkedMovies ? <Card item={BookmarkedMovies} /> : null}
          <h2 className="text-2xl text-white my-3">Bookmarked TV Series</h2>
          {BookmarkedTvSeries ? <Card item={BookmarkedTvSeries} /> : null}
        </>
      ) : (
        <>
          <h2 className="text-2xl text-white my-3">{heading}</h2>
          {recomendedItems ? (
            <Card item={recomendedItems} />
          ) : (
            <p>Loading or empty data...</p>
          )}
        </>
      )}
    </>
  );
}

export default Home;
