"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartSolid,
  faEye as faEyeSolid,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  faHeart as faHeartOutline,
  faEye as faEyeOutline,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isEyeClicked, setIsEyeClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex-shrink-0 max-w-[19rem] min-w-[15rem] h-full rounded-lg relative mr-4 border-none cursor-pointer">
      {/* Image Section */}
      <div
        className="bg-[#f5f5f5] w-full p-4 h-60 flex flex-col justify-between items-center relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-3 py-1 rounded">
            -{product.discount}%
          </span>
        )}

        {/* Centered Image */}
        <div className="flex justify-center items-center mx-auto w-full flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-50 h-50 object-contain"
          />
        </div>

        {/* Add To Cart Section */}
        {isHovered && (
          <div className="bg-black text-white w-full text-center py-2 absolute bottom-0">
            <Link href="#">Add To Cart</Link>
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 right-2 flex flex-col space-y-2">
          <button
            className={`bg-white w-8 h-8 rounded-full flex items-center justify-center hover:text-red-500 ${
              isHeartClicked ? "text-red-500" : "text-black"
            }`}
            onClick={() => setIsHeartClicked(!isHeartClicked)}
          >
            <FontAwesomeIcon
              icon={isHeartClicked ? faHeartSolid : faHeartOutline}
              className="text-[1.2rem]"
            />
          </button>

          <button
            className={`bg-white w-8 h-8 rounded-full flex items-center justify-center hover:text-red-500 ${
              isEyeClicked ? "text-red-500" : "text-black"
            }`}
            onClick={() => setIsEyeClicked(!isEyeClicked)}
          >
            <FontAwesomeIcon
              icon={isEyeClicked ? faEyeSolid : faEyeOutline}
              className="text-[1.2rem]"
            />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-4 p-4">
        <h3 className="text-lg">{product.name}&nbsp;</h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-red-500 text-lg font-bold">
            ${product.discountedPrice}
          </span>
          {product.originalPrice && (
            <span className="text-gray-500 text-lg line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Rating Section */}
        <div className="flex items-center space-x-1 mt-2">
          {Array(5)
            .fill()
            .map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={
                  i < Math.floor(product.rating)
                    ? faStar
                    : i < product.rating
                    ? faStarHalfAlt
                    : faStar
                }
                style={{
                  color: i < product.rating ? "#ffad33" : "#bfbfbf",
                }}
              />
            ))}
          <div className="ml-2">({product.buyers})</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
