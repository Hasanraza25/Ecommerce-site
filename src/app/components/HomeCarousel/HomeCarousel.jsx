"use client";
import { useState, useEffect } from "react";

const HomeCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(2);
  const [touchStartX, setTouchStartX] = useState(0);

  const slides = [
    {
      id: 1,
      content: "Up to 10% off Voucher",
      image: "/images/mobile-slider.png",
    },
    {
      id: 2,
      content: "Up to 10% off Voucher",
      image: "/images/mobile-slider.png",
    },
    {
      id: 3,
      content: "Up to 10% off Voucher",
      image: "/images/mobile-slider.png",
    },
    {
      id: 4,
      content: "Up to 10% off Voucher",
      image: "/images/mobile-slider.png",
    },
    {
      id: 5,
      content: "Up to 10% off Voucher",
      image: "/images/mobile-slider.png",
    },
  ];

  // Handle touch swipe
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 50) {
      // Swipe Left
      setActiveSlide((prev) => (prev + 1) % slides.length);
    } else if (touchStartX - touchEndX < -50) {
      // Swipe Right
      setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <div
      className="relative lg:w-[65%] w-[90%] h-full md:h-[350px] lg:h-[400px] mt-10 pb-10 overflow-hidden lg:mx-0 mx-auto bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${activeSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-none w-full h-full flex flex-col md:flex-row items-center justify-between bg-black pt-10"
          >
            {/* Text Section */}
            <div className="text-white px-6 sm:px-8 md:px-12 lg:px-20 w-full md:flex-1 text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-lg md:text-xl lg:text-2xl">
                iPhone 14 Series
              </h3>
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl mt-2 sm:mt-4 font-semibold leading-tighter tracking-wider">
                {slide.content}
              </h1>
              <button className="text-lg mx-auto md:mx-0 md:text-xl mt-4 flex items-center justify-center md:justify-start">
                <span className="border-b-2 border-white">Shop Now</span>
                <img
                  src="/images/arrow-icon.svg"
                  alt="Arrow"
                  className="ml-2 w-4 md:w-6"
                />
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full md:flex-1 flex justify-center">
              <img
                src={slide.image}
                alt="Slide"
                className="object-contain w-full h-[200px] md:h-[300px] lg:h-[400px]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Circles */}
      <div className="absolute bottom-2 md:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 pb-4 md:pb-0">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer ${
              activeSlide === index ? "bg-[#DB4444] border-2" : "bg-[#828282]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
