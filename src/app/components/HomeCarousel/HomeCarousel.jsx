  "use client";
  import { useState } from "react";

  const HomeCarousel = () => {
    // State to manage the active slide
    const [activeSlide, setActiveSlide] = useState(2); // 3rd slide is active by default (index 2)

    // Array of 5 slide items (representing their content)
    const slides = [
      { id: 1, content: "Slide 1 Content", image: "/images/mobile-slider.png" },
      { id: 2, content: "Slide 2 Content", image: "/images/mobile-slider.png" },
      { id: 3, content: "Slide 3 Content", image: "/images/mobile-slider.png" },
      { id: 4, content: "Slide 4 Content", image: "/images/mobile-slider.png" },
      { id: 5, content: "Slide 5 Content", image: "/images/mobile-slider.png" },
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
              className="flex-none w-full h-full bg-black flex items-center justify-between px-8"
            >
              {/* Slide content */}
              <div className="flex flex-col justify-center items-start">
                <h2 className="text-white text-3xl">{slide.content}</h2>
                <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded">
                  Shop Now
                </button>
              </div>
              {/* Slide image */}
              <div className="flex justify-end">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-[390px] h-[390px] object-cover"
                />
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
                activeSlide === index ? "bg-blue-500" : "bg-gray-300"
              } cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  export default HomeCarousel;
