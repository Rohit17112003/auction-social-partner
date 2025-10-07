"use client";
import React, { useState, useRef, useEffect } from "react";

const SearchBar = ({
  placeholder = "Search ID/Location",
  value,
  onChange,
  filterOptions = [],
  selectedFilter,
  setSelectedFilter,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex w-full items-center justify-between p-5 relative">
      {/* Search Input */}
      <div className="relative w-[80%] lg:w-80">
        <i className="ri-search-line absolute font-light text-lg left-4 top-1/2 -translate-y-1/2 text-pink"></i>
        <input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="w-full rounded-full bg-extralightgray border border-lightgray pl-10 pr-4 py-3 md:py-2.5 text-[1rem] font-medium tracking-wide outline-none"
        />
      </div>

      {/* Filter Button */}
      <div className="relative flex items-center space-x-2 text-sm text-text cursor-pointer" ref={dropdownRef}>
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center space-x-2"
        >
          <i className="ri-filter-2-line ri-xl font-light text-2xl"></i>
          <span className="text-pink text-[1rem]">Filter</span>
        </div>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-lightgray rounded shadow-lg z-50">
            {filterOptions.map((option, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedFilter(option);
                  setShowDropdown(false);
                }}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  selectedFilter === option ? "bg-gray-200 font-bold" : ""
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
