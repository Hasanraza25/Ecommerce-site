"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartSolid,
  faEye as faEyeSolid,
  faStar,
  faStarHalfAlt,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import {
  faHeart as faHeartOutline,
  faEye as faEyeOutline,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/app/context/CartContext";

const ProductCard = ({
  product,
  reviewsVisible = true,
  isHeartVisible = true,
  isEyeVisible = true,
  isTrashVisible = false,
}) => {
  const { addToCart } = useCart();
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [isEyeClicked, setIsEyeClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
  };
  const pathName = usePathname();
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
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-[#00ff66] text-white text-sm px-3 py-1 rounded">
            NEW
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

        <div
          className={`bg-black text-white w-full text-center py-2 absolute bottom-0 ${
            isHovered ? "lg:block" : "lg:hidden"
          } md:block sm:block`}  onClick={handleAddToCart}
        >
          <button>Add To Cart</button>
        </div>

        <div className="absolute top-4 right-2 flex flex-col space-y-2">
          {isHeartVisible && (
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
          )}
          {isEyeVisible && (
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
          )}
          {isTrashVisible && (
            <button
              className={`bg-white w-8 h-8 rounded-full flex items-center justify-center hover:text-red-500`}
            >
              <FontAwesomeIcon icon={faTrashCan} className="text-[1.2rem]" />
            </button>
          )}
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

        {reviewsVisible && (
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
        )}
      </div>
    </div>
  );
};

export default ProductCard;
