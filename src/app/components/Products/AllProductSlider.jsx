"use client";
import { useState } from "react";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AllProductSlider = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const productsPerPage = 8; // 8 products per page
  const totalPages = Math.ceil(products.length / productsPerPage); // Total pages

  // Get the products for the current page
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  const scrollLeft = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const scrollRight = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="relative flex flex-col justify-between w-full h-full mb-20 sm:mt-10 ">
      {/* Arrow Buttons Centered Above Slider */}
      <div className="md:-top-10 right-0 flex justify-end w-full mb-3">
        <button
          onClick={scrollLeft}
          disabled={currentPage === 0} // Disable when at the first page
          className={`bg-gray-200 w-11 h-11 mx-2 rounded-full shadow hover:bg-gray-300 ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-2xl" />
        </button>
        <button
          onClick={scrollRight}
          disabled={currentPage === totalPages - 1} // Disable when at the last page
          className={`bg-gray-200 w-11 h-11 rounded-full shadow hover:bg-gray-300 ${
            currentPage === totalPages - 1
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
        </button>
      </div>

      {/* Slider Container */}
      <div className="w-full mt-12 overflow-hidden relative">
        <div className="flex transition-transform duration-500 ease-in-out justify-center items-center mx-auto">
          {/* Cards Container */}
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-auto sm:pl-4">
            {displayedProducts.map((product, index) => (
              <div key={index} className="w-full">
                <ProductCard key={index} product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductSlider;
