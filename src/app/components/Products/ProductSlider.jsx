"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductSlider = ({ products }) => {
  const [scrollPosition, setScrollPosition] = useState(0); // Current scroll position
  const [visibleCards, setVisibleCards] = useState(4); // Default to 4 cards for desktop
  const cardWidth = 250; // Width of each card in pixels
  const [loopedProducts, setLoopedProducts] = useState([
    ...products,
    ...products,
  ]); // Initialize with extra first products

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile: 1 card visible
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet: 2 cards visible
      } else {
        setVisibleCards(4); // Desktop: 4 cards visible
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleScrollRight = () => {
    setScrollPosition((prev) => prev + cardWidth);

    // Append all products dynamically when nearing the end
    if (
      scrollPosition + visibleCards * cardWidth >=
      (loopedProducts.length - visibleCards) * cardWidth
    ) {
      setLoopedProducts((prevProducts) => [...prevProducts, ...products]);
    }
  };

  const handleScrollLeft = () => {
    // Decrease scroll position
    setScrollPosition((prev) => prev - cardWidth);

    // Prepend all products dynamically when at the start
    if (scrollPosition <= 0) {
      setLoopedProducts((prevProducts) => [...products, ...prevProducts]);
      setScrollPosition(products.length * cardWidth); // Adjust scroll position to maintain continuity
    }
  };
  return (
    <div className="relative flex flex-col h-full mb-20 mt-20 lg:mt-0">
      {/* Arrow Buttons */}
      <div className="absolute md:-top-20 -top-10 right-0">
        <button
          onClick={handleScrollLeft}
          className="w-11 h-11 mx-2 rounded-full shadow bg-gray-200 hover:bg-gray-300"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
        </button>
        <button
          onClick={handleScrollRight}
          className="w-11 h-11 mx-2 rounded-full shadow bg-gray-200 hover:bg-gray-300"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-2xl" />
        </button>
      </div>

      {/* Slider Container */}
      <div className="w-full mt-12 overflow-hidden relative">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${scrollPosition}px)`, // Slide by the scroll position
            width: `${loopedProducts.length * cardWidth}px`, // Total width of the slider
          }}
        >
          {loopedProducts.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 md:px-8"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
