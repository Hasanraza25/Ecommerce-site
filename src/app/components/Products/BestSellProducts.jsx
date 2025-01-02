"use client";
import React, { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ClipLoader } from "react-spinners";
import { client } from "@/app/lib/client";

const BestSellProducts = () => {
  const [bestSellProducts, setBestSellProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBestSellProducts = async () => {
      try {
        const query = `*[_type == 'products' && 'best-sell' in section] | order(_createdAt desc){
                 name, "currentSlug": slug.current, image, price, description, discountedPrice, originalPrice, discount, rating, isNew, buyers, stockStatus
               }`;
        const data = await client.fetch(query); // Fetch directly from Sanity

        setBestSellProducts(data);
      } catch (err) {
        setError("Fetching Product Failed!", err);
      } finally {
        setLoading(false);
      }
    };
    getBestSellProducts();
  }, []);

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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <ClipLoader color="#db4444" size={80} />
      </div>
    );
  }

  if (error) {
    return <p className="text-center">{error}</p>;
  }

  return (
    <>
      <div className="container mx-auto flex flex-col px-8 overflow-hidden">
        <div className="heading flex items-center mt-16 md:mt-24">
          <span className="bg-[#db4444] w-5 h-10 md:w-[30px] md:h-[55px] border rounded-[5px]"></span>
          <h4 className="text-[#db4444] font-bold mx-3 md:mx-5 text-md md:text-lg">
            This Month
          </h4>
        </div>
        <div className="flex mt-10 items-center font-bold justify-between flex-col md:flex-row">
          <h1 className="text-4xl font-semibold">Best Selling Products</h1>
          <div className="mb-10 mt-10 md:mt-0">
            <button className="red-button py-4 px-12">View All</button>
          </div>
        </div>
        {/* Slider Container */}
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
          <div className="flex justify-between mx-auto w-full">
            {bestSellProducts.map((product, index) => (
              <div key={index} className="w-auto mx-auto">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <hr className="mb-10" />
      </div>
    </>
  );
};

export default BestSellProducts;
