import React from "react";

function SearchBar() {
  return (
    <input
      className="w-full bg-transparent p-5 text-white text-lg focus:outline-none"
      placeholder="Search for movies or TV series"
    />
  );
}

export default SearchBar;
