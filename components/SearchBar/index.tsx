import React from "react";

function SearchBar() {
  return (
    <input
      className="w-full bg-transparent p-5 text-white text-lg focus:outline-none md:pt-0 md:pl-2"
      placeholder="Search for movies or TV series"
    />
  );
}

export default SearchBar;
