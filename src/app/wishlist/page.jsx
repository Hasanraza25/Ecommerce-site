"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../components/Products/ProductCard";

const Wishlist = () => {
  const productsA = [
    {
      image: "/images/best-sell/bag.svg",
      name: "Gucci duffle bag",
      discountedPrice: 960,
      originalPrice: 1160,
      discount: "35",
    },

    {
      image: "/images/best-sell/cooler.svg",
      name: "RGB liquid CPU Cooler",
      discountedPrice: 1960,
    },
    {
      image: "/images/gamepad.svg",
      name: "GP11 Shooter USB Gamepad ",
      discountedPrice: 550,
    },

    {
      image: "/images/jacket.svg",
      name: "Quilted Satin Jacket ",
      discountedPrice: 750,
    },
  ];

  const productsB = [
    {
      image: "/images/laptop.svg",
      name: "ASUS FHD Gaming Laptop ",
      discountedPrice: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 5,
      buyers: 65,
    },
    {
      image: "/images/lcd.svg",
      name: "IPS LCD Gaming Monitor",
      discountedPrice: 1160,
      rating: 4.5,
      buyers: 65,
    },
    {
      image: "/images/product-game.svg",
      name: "HAVIT HV-G92 Gamepad",
      discountedPrice: 560,
      rating: 5,
      buyers: 65,
    },
    {
      image: "/images/product-keyboard.svg",
      name: "AK-900 Wired Keyboard",
      discountedPrice: 200,
      rating: 5,
      buyers: 65,
    },
  ];

  const sliderRef = useRef(null);

  // Dragging Logic
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Detect screen size to enable/disable drag
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024); // Enable drag for screen widths less than 1024px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleMouseDown = (e) => {
    if (!isMobileOrTablet) return;
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    if (!isMobileOrTablet) return;
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    if (!isMobileOrTablet) return;
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !isMobileOrTablet) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // Scroll faster
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <>
      <div className="container mx-auto flex flex-col px-2 overflow-hidden my-10">
        <div className="container flex mt-10 items-center font-bold justify-between flex-col md:flex-row">
          <h1 className="text-xl font-medium">Wishlist &#40;4&#41;</h1>
          <div className="mt-10 md:mt-0">
            <button className="bg-white py-4 px-12 text-black rounded-[5px] border border-[#808080]">
              Move All To Bag
            </button>
          </div>
        </div>
        <div
          className="w-full mt-12 overflow-x-auto relative scrollbar-hide no-scrollbar"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            cursor: isMobileOrTablet ? "grab" : "default", // Grab cursor only on mobile/tablet
          }}
        >
          <div className="flex justify-between">
            {productsA.map((product, index) => (
              <div key={index} className=" min-w-[20rem]">
                <ProductCard
                  product={product}
                  reviewsVisible={false}
                  isHeartVisible={false}
                  isEyeVisible={false}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="container flex mt-32 items-center font-bold justify-between flex-col md:flex-row">
          <div className="heading flex items-center">
            <span className="bg-[#db4444] w-5 h-10 md:w-[30px] md:h-[55px] border rounded-[5px]"></span>
            <h4 className="text-black font-medium mx-3 md:mx-5 text-xl">
              Just For You
            </h4>
          </div>
          <div className="mt-10 md:mt-0">
            <button className="bg-white py-4 px-12 text-black rounded-[5px] border border-[#808080]">
              See All
            </button>
          </div>
        </div>
        <div
          className="w-full mt-12  mb-20 overflow-x-auto relative scrollbar-hide no-scrollbar "
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{
            cursor: isMobileOrTablet ? "grab" : "default", // Grab cursor only on mobile/tablet
          }}
        >
          <div className="flex justify-between">
            {productsB.map((product, index) => (
              <div key={index} className=" min-w-[20rem]">
                <ProductCard product={product} isHeartVisible={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
