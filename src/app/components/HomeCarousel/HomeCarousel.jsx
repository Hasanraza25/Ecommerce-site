"use client";
import { useState, useEffect } from "react";

const HomeCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(2);
  const [touchStartX, setTouchStartX] = useState(0);

  const slides = [
    {
      id: 1,
      title: "High-Quality Headphones",
      content: "Up to 10% off on premium headphones.",
      image: "/images/headphone.png",
      backgroundColor: "#F5A623",
    },
    {
      id: 2,
      title: "Smartwatch Offer",
      content: "Exclusive deals on smartwatches.",
      image: "/images/watch.png",
      backgroundColor: "#50E3C2",
    },
    {
      id: 3,
      title: "Fashionable Shirts",
      content: "Flash sale on trendy shirts.",
      image: "/images/shirt.png",
      backgroundColor: "#4A90E2",
    },
    {
      id: 4,
      title: "Gaming Monitor Deals",
      content: "Big discounts on gaming monitors.",
      image: "/images/monitor.png",
      backgroundColor: "#010201",
    },
    {
      id: 5,
      title: "Smartphone Discounts",
      content: "Save big on the latest smartphones.",
      image: "/images/white-gamepad.png",
      backgroundColor: "#E94E77",
    },
  ];

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 50) {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    } else if (touchStartX - touchEndX < -50) {
      setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col justify-center mt-10 pb-10 overflow-hidden lg:mx-0 mx-auto"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeSlide * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-none w-full h-[700px] md:h-[500px] flex flex-col md:flex-row items-center justify-center my-auto"
              style={{ backgroundColor: slide.backgroundColor }}
            >
              {/* Text Section */}
              <div className="text-white px-6 sm:px-8 md:px-12 mt-10 w-full md:flex-1 text-center md:text-left mb-6 md:mb-0 sm:justify-items-center">
                <div className="flex items-center space-x-4 mb-5">
                  <img src="/images/apple-icon.png" alt="" />
                  <h3 className="text-lg md:text-xl lg:text-2xl">
                    {slide.title}
                  </h3>
                </div>
                <h1 className="text-3xl slide-content lg:text-6xl lg:leading-snug mt-2 sm:mt-4 font-semibold tracking-wider">
                  {slide.content}
                </h1>
                <button className="text-lg mx-auto md:mx-0 md:text-xl mt-4 flex items-center justify-center md:justify-start space-x-4">
                  <span className="border-b-2 border-white pb-2">Shop Now</span>
                  <img
                    src="/images/arrow-icon.svg"
                    alt="Arrow"
                    className="ml-2 mb-2 w-4 md"
                  />
                </button>
              </div>

              {/* Image Section */}
              <div className="w-full md:flex-1 flex justify-center">
                <img
                  src={slide.image}
                  alt="Slide"
                  className="object-contain md:w-[500px] lg:h-[500px] w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-10 md:bottom-14 left-1/2 transform -translate-x-1/2 flex space-x-3 pb-4 md:pb-0">
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

      {/* Navigation Circles */}
    </div>
  );
};

export default HomeCarousel;
