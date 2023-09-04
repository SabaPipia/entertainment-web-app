import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import { InputProps } from "@/types";

function SearchBar({
  isSearching,
  setSearching,
  searchValue,
  setSearchValue,
}: InputProps) {
  const pathname = usePathname();
  let inputEnding = "movies or TV series";
  switch (pathname) {
    case "/movies":
      inputEnding = "movies";
      break;
    case "/tv-series":
      inputEnding = "TV series";
      break;
    case "/bookmarks":
      inputEnding = "bookmarked shows";
      break;
    default:
      break;
  }
  if (searchValue.length < 2) {
    setSearching(false);
  } else {
    setSearching(true);
  }
  return (
    <input
      className="w-full bg-transparent p-5 text-white text-lg focus:outline-none md:pt-0 md:pl-2"
      placeholder={`Search for ${inputEnding}`}
      value={searchValue}
      onChange={(e: any) => setSearchValue(e.target.value)}
    />
  );
}

export default SearchBar;
