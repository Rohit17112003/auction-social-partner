"use client";
import React from "react";

const SearchBar = ({ placeholder = "Search ID/Location" }) => {
  return (
    <div className="flex w-full items-center justify-between p-5">
      {/* Search Input with Remix Icon */}
      <div className="relative w-[80%] lg:w-80">
        <i className="ri-search-line absolute font-light text-lg left-4 top-1/2 -translate-y-1/2 text-pink"></i>
        <input
          type="search"
          placeholder={placeholder}
          className="w-full rounded-full bg-extralightgray border border-lightgray pl-10 pr-4 py-3 md:py-2.5 text-[1rem] font-medium tracking-wide outline-none"
        />
      </div>

      {/* Filter Icon with Text */}
      <div className="flex items-center space-x-2 text-sm text-text">
        <i className="ri-filter-2-line ri-lg font-light text-2xl"></i>
        <span className="text-pink">Filter</span>
      </div>
    </div>
  );
};

export default SearchBar;
