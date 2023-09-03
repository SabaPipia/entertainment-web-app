import React from "react";
import { usePathname } from "next/navigation";

function SearchBar() {
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

  return (
    <input
      className="w-full bg-transparent p-5 text-white text-lg focus:outline-none md:pt-0 md:pl-2"
      placeholder={`Search for ${inputEnding}`}
    />
  );
}

export default SearchBar;
