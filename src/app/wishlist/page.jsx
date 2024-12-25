"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../components/Products/ProductCard";
import { useWishlist } from "../context/WishlistContext";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const { wishlistItems } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    wishlistItems.forEach((item) => {
      addToCart(item);
    });
    toast.success("Items Added to Cart!", {
      autoClose: 2000,
      closeButton: false,
    });
  };

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
      isNew: true,
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
      <div className="container mx-auto flex flex-col px-8 overflow-hidden my-10">
        <div className="container flex mt-10 items-center font-bold justify-between flex-col md:flex-row">
          <h1 className="text-xl font-medium">
            Wishlist &#40;{wishlistItems.length}&#41;
          </h1>
          <div className="mt-10 md:mt-0">
            {wishlistItems && wishlistItems.length > 0 && (
              <Link href={"/cart"} onClick={handleAddToCart}>
                <button className="bg-white py-4 px-12 text-black rounded-[5px] border border-[#808080] transition-all duration-300 ease-in-out transform hover:bg-[#db4444] hover:text-white hover:scale-105 hover:shadow-lg hover:border-transparent">
                  Move All To Bag
                </button>
              </Link>
            )}
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
            cursor: isMobileOrTablet ? "grab" : "default",
          }}
        >
          {wishlistItems && wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             { wishlistItems.map((product, index) => (
              <div key={index} className="md:min-w-[20rem] mx-auto">
                <ProductCard
                  product={product}
                  reviewsVisible={false}
                  isHeartVisible={false}
                  isEyeVisible={false}
                  isTrashVisible={true}
                />
              </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full pb-10 rounded-lg">
              <img
                src="/images/empty-wishlist.svg"
                alt="Empty Wishlist"
                className="w-60 h-60 mb-6"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Oops! Your wishlist is empty 💔
              </h2>
              <p className="text-gray-600 text-center text-sm md:text-base max-w-md mb-6">
                It seems like you haven’t added any favorites yet. Don’t miss
                out on items you’ll love—start adding to your wishlist now!
              </p>
              <Link
                href="/"
                className="px-6 py-3 bg-[#db4444] hover:bg-[#fa4545]  text-white font-semibold rounded-full shadow-md transition-all duration-300"
              >
                💖 Explore & Add to Wishlist
              </Link>
            </div>
          )}
        </div>
        <div className="container flex mt-32 items-center font-bold justify-between flex-col md:flex-row">
          <div className="heading flex items-center">
            <span className="bg-[#db4444] w-5 h-10 md:w-[30px] md:h-[55px] border rounded-[5px]"></span>
            <h4 className="text-black font-medium mx-3 md:mx-5 text-xl">
              Just For You
            </h4>
          </div>
          <div className="mt-10 md:mt-0">
            <button className=" py-4 px-12 text-black rounded-[5px] border border-[#808080] transition-all duration-300 ease-in-out transform hover:bg-[#db4444] hover:text-white hover:scale-105 hover:shadow-lg hover:border-transparent">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsB.map((product, index) => (
              <div key={index} className="md:min-w-[20rem] mx-auto">
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
