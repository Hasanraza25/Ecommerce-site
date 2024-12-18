"use client";
import React, { useState } from "react";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import HomeCarousel from "../HomeCarousel/HomeCarousel";

const Hero = () => {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <div className="px-0 lg:px-20 xl:px-32 hero-content relative">
      {/* Header Categories Button for Mobile/Tablet */}
      <div className="lg:hidden px-8 mt-4">
        <button
          onClick={toggleMobileDropdown}
          className="w-full bg-gray-100 text-lg font-semibold text-black py-2 px-4 rounded flex items-center justify-between"
        >
          Categories
          <svg
            className={`w-5 h-5 transform transition-transform ${
              isMobileDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className="px-4">
        {isMobileDropdownOpen && (
          <div className="lg:hidden absolute top-12 w-[95%]  bg-white shadow-lg z-30 border-t border-gray-200">
            <CategoryDropdown />
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="flex">
        <div className="hidden lg:block ">
          <CategoryDropdown />
        </div>
        <HomeCarousel />
      </div>
    </div>
  );
};

export default Hero;
