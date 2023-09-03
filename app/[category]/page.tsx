"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { clearUser } from "@/store/authActions";
import { useDispatch } from "react-redux";
import SearchBar from "@/components/SearchBar";
import Carousel from "@/components/Carousel";
import Data from "@/data.json";
import { DataTypes } from "@/types";
import Card from "@/components/Card";

function Home() {
  const [data, setData] = useState<DataTypes[]>();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  useEffect(() => {
    setData(Data);
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(clearUser());
        router.push("/Authentication/login");
      })
      .catch((err) => {});
  };
  const carouselItems = data?.filter((item: DataTypes) => item.isTrending);
  let recomendedItems: DataTypes[] | undefined;
  if (pathname === "/home") {
    recomendedItems = data?.filter((item: DataTypes) => !item.isTrending);
  } else if (pathname === "/movies") {
    recomendedItems = data?.filter(
      (item: DataTypes) => item.category === "Movie"
    );
  } else if (pathname === "/tv-series") {
    recomendedItems = data?.filter(
      (item: DataTypes) => item.category === "TV Series"
    );
  } else if (pathname === "/bookmarks") {
    recomendedItems = data?.filter((item: DataTypes) => item.isBookmarked);
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

      <>
        <h2 className="text-2xl text-white my-3">Recomended for you</h2>
        {recomendedItems ? (
          <Card item={recomendedItems} />
        ) : (
          <p>Loading or empty data...</p>
        )}
      </>
    </>
  );
}

export default Home;
