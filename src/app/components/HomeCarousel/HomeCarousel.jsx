"use client";
import { useState } from "react";

const HomeCarousel = () => {
  // State to manage the active slide
  const [activeSlide, setActiveSlide] = useState(2); // 3rd slide is active by default (index 2)

  // Array of 5 slide items (representing their content)
  const slides = [
    { id: 1, content: "Up to 10% off Voucher", image: "/images/mobile-slider.png" },
    { id: 2, content: "Up to 10% off Voucher", image: "/images/mobile-slider.png" },
    { id: 3, content: "Up to 10% off Voucher", image: "/images/mobile-slider.png" },
    { id: 4, content: "Up to 10% off Voucher", image: "/images/mobile-slider.png" },
    { id: 5, content: "Up to 10% off Voucher", image: "/images/mobile-slider.png" },
  ];

  return (
    <div className="relative w-[70rem] h-[400px] mt-10 pb-10 overflow-hidden">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${activeSlide * 100}%)`, // Shift the entire container
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="flex-none w-full h-full bg-black flex items-center justify-start "
          >
            <div className="h-full text-white px-20">
              <div className="flex justify-between items-center w-[13rem]">
                <img src="/images/apple-icon.png" alt="" />
                <h3 className="text-[1.2rem]">iPhone 14 Series</h3>
              </div>
              <h1 className="text-6xl mt-4 font-semibold leading-tight">Up to 10% off Voucher</h1>
              <div>

              <button className="text-[1.3rem] mt-4 tracking-wider flex justify-center items-center">
                <h3 className="border-b-2 border-b-white">Shop Now</h3>
                <img src="/images/arrow-icon.svg" alt="" className="ml-4" />
              </button>
              </div>
            </div>
            <div className="h-full mt-5 me-10">
              <img src={slide.image} alt="" width={900} height={900} />
            </div>
          </div>
        ))}
      </div>

      {/* Circles indicating each slide */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setActiveSlide(index)}
            className={`w-4 h-4 rounded-full ${
              activeSlide === index ? "bg-[#DB4444] border-2" : "bg-[#828282]"
            } cursor-pointer`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
