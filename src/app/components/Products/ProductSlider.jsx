"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductSlider = ({ products }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); 
  const cardWidth = 350; 
  const totalCards = products.length;

  
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); 
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); 
      } else {
        setVisibleCards(3); 
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  
  const containerWidth = visibleCards * cardWidth; 
  const totalScrollableWidth = totalCards * cardWidth; 
  const maxScrollPosition = Math.max(totalScrollableWidth - containerWidth, 0); 

  const isLeftDisabled = scrollPosition === 0;
  const isRightDisabled = scrollPosition >= maxScrollPosition;

  
  const scrollLeft = () => {
    if (!isLeftDisabled) {
      setScrollPosition((prev) => Math.max(prev - cardWidth, 0));
    }
  };

  const scrollRight = () => {
    if (!isRightDisabled) {
      setScrollPosition((prev) =>
        Math.min(prev + cardWidth, maxScrollPosition)
      );
    }
  };

  return (
    <div className="relative flex flex-col h-full mb-20 mt-20 lg:mt-0">
      {/* Arrow Buttons Centered Above Slider */}
      <div className="absolute md:-top-20 -top-10  flex justify-end w-full">
        <button
          onClick={scrollLeft}
          disabled={isLeftDisabled}
          className={`w-11 h-11 mx-2 rounded-full shadow ${
            isLeftDisabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
        </button>
        <button
          onClick={scrollRight}
          disabled={isRightDisabled}
          className={`w-11 h-11 rounded-full shadow ${
            isRightDisabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </button>
      </div>

      {/* Slider Container */}
      <div className="w-full mt-12 overflow-hidden relative">
        {/* Cards Container */}
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
