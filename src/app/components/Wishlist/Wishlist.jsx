"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import ProductCard from "../Products/ProductCard";

const Wishlist = () => {
  const { wishlistItems } = useWishlist();
  const { cartItems, addToCart } = useCart();

  const allItemsMovedToCart = wishlistItems.every((item) =>
    cartItems.some((cartItem) => cartItem.currentSlug === item.currentSlug)
  );

  const handleAddToCart = () => {
    // Filter items with stockStatus > 0
    const itemsToAdd = wishlistItems.filter(
      (item) =>
        !cartItems.some((cartItem) => cartItem.currentSlug === item.currentSlug) &&
        item.stockStatus > 0 // Ensure stockStatus is greater than 0
    );

    if (itemsToAdd.length > 0) {
      itemsToAdd.forEach((item) => addToCart(item));
      toast.success("Items added to Cart!", {
        autoClose: 2000,
        closeButton: false,
      });
    } else {
      toast.info("No items available for purchase or already in the cart.", {
        autoClose: 2000,
        closeButton: false,
      });
    }
  };

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
              <button
                className="bg-white py-4 px-12 text-black rounded-[5px] border border-[#808080] transition-all duration-300 ease-in-out transform hover:bg-[#db4444] hover:text-white hover:scale-105 hover:shadow-lg hover:border-transparent"
                onClick={handleAddToCart}
                disabled={allItemsMovedToCart}
              >
                {allItemsMovedToCart ? "All Items in Bag" : "Move All To Bag"}
              </button>
            )}
          </div>
        </div>
        <div
          className="w-full mt-12 overflow-x-hidden relative scrollbar-hide no-scrollbar"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-hidden" >
              {wishlistItems.map((product, index) => (
                <div key={index} className="md:min-w-[19rem] mx-auto">
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
      </div>
    </>
  );
};

export default Wishlist;
