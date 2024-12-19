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
} from "@fortawesome/free-regular-svg-icons"; // Outline heart
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isEyeClicked, setIsEyeClicked] = useState(false);
  return (
    <div className="flex-shrink-0 max-w-[20rem] h-full rounded-lg relative mr-4 border-none">
      <div className="bg-[#f5f5f5] w-full p-4 h-60 flex items-center">
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-sm px-3 py-1 rounded">
            -{product.discount}%
          </span>
        )}

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain"
        />

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

          {/* Eye Button */}
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
      <div className="mt-4 p-4">
        <h3 className="text-lg ">{product.name}</h3>
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

        {/* Ratings */}
        <div className="flex items-center space-x-1 mt-2">
          {Array(Math.floor(product.rating))
            .fill()
            .map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="text-[#ffad33]"
              />
            ))}
          {product.rating % 1 !== 0 && (
            <FontAwesomeIcon icon={faStarHalfAlt} className="text-[#ffad33]" />
          )}
          <div className="ml-2">({product.buyers})</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
