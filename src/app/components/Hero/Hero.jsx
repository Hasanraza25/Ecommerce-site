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
    <div className="container lg:px-5 hero-content relative mx-auto">
      {/* Header Categories Button for Mobile/Tablet */}
      <div className="lg:hidden mt-4  px-8">
        <button
          onClick={toggleMobileDropdown}
          className="w-full bg-gray-100 text-lg font-semibold text-black py-2 px-4 rounded-md flex items-center justify-between sm:text-sm"
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
      <div className="flex items-center justify-center mx-auto  px-8">
        {isMobileDropdownOpen && (
          <div className="lg:hidden absolute top-12 w-[85%] px-2 bg-white shadow-lg z-30 border-none mx-auto">
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
