"use client";

import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import { SearchBar, Carousel, Card } from "@/components";
import { DataTypes } from "@/types";
import { dataContext } from "../layout";

function Home() {
  const pathname = usePathname();
  const { data } = useContext(dataContext);
  const carouselItems = data?.filter((item: DataTypes) => item.isTrending);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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

  if (isSearching) {
    if (pathname === "/home") {
      recomendedItems = data?.filter((item: DataTypes) =>
        item.title
          ?.toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
      );
    } else if (pathname === "/movies") {
      recomendedItems = data?.filter((item: DataTypes) => {
        if (item.category === "Movie") {
          return item.title
            ?.toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase());
        }
      });
    } else if (pathname === "/tv-series") {
      recomendedItems = data?.filter((item: DataTypes) => {
        if (item.category === "TV Series") {
          return item.title
            ?.toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase());
        }
      });
    } else if (pathname === "/bookmarks") {
      recomendedItems = data?.filter((item: DataTypes) => {
        if (item.isBookmarked) {
          return item.title
            ?.toLocaleLowerCase()
            .includes(searchValue.toLocaleLowerCase());
        }
      });
    }
  }

  return (
    <>
      <SearchBar
        isSearching={isSearching}
        setSearching={setIsSearching}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      {isSearching ? (
        <>
          <h2 className="text-2xl text-white mb-5">
            Found {recomendedItems?.length} results for '{searchValue}'
          </h2>
          {recomendedItems ? <Card item={recomendedItems} /> : "Lol"}
        </>
      ) : (
        <>
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
      )}
    </>
  );
}

export default Home;
