import React from "react";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import HomeCarousel from "../HomeCarousel/HomeCarousel";

const Hero = () => {
  return (
    <>
      <div className="flex">
        <CategoryDropdown />
        <HomeCarousel />
      </div>
    </>
  );
};

export default Hero;
