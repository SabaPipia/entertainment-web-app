"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { clearUser } from "@/store/authActions";
import { useDispatch } from "react-redux";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import Carousel from "@/components/Carousel";
import Data from "@/data.json";
import { DataTypes } from "@/types";

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
  return (
    <div className="p-3">
      <SearchBar />
      {pathname.includes("home") ? (
        <>
          <h2 className="text-2xl text-white">Trending</h2>
          {carouselItems ? (
            <Carousel item={carouselItems} />
          ) : (
            <p>Loading or empty data...</p>
          )}
        </>
      ) : null}
    </div>
  );
}

export default Home;
