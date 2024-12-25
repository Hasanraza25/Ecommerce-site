"use client";
import { useCart } from "@/app/context/CartContext";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductDetail = () => {
  const { cartItems, calculateTotal, handleQuantityChange, removeFromCart } =
    useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    "/images/product-game.svg",
    "/images/product-game.svg",
    "/images/product-keyboard.svg",
    "/images/product-game.svg",
  ];

  return (
    <div className="container lg:px-12 px-8 mx-auto overflow-hidden my-20">
      <h4 className="text-lg text-[#808080] mb-10">
        <Link href={"/account"}>Account</Link> / <Link href={"/"}>Gaming</Link>{" "}
        /{" "}
        <Link href={"/"}>
          <span className="text-black"> Havic HV G-92 Gamepad</span>
        </Link>
      </h4>

      <div className="flex flex-col md:flex-row sm:items-start sm:justify-center gap-10 w-full">
        <div className="flex lg:flex-row-reverse flex-col md:flex-row w-full md:w-1/2 mx-auto flex-shrink-0">
          <div className="md:w-[500px] w-full h-[300px] md:h-full p-4 bg-[#f5f5f5] rounded-md lg:ml-10">
            <img
              src={images[selectedImageIndex]}
              alt="Selected"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex md:flex-col justify-between gap-2 h-full w-full md:w-[100px] md:ml-4 mt-4 md:mt-0">
            {images.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer w-full md:w-28 h-28 sm:h-20 bg-[#f5f5f5] p-1 rounded-md border ${
                  selectedImageIndex === index
                    ? "border-2 border-[#db4444]"
                    : ""
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-full md:w-1/2 space-y-6">
          <div className="flex flex-col space-y-4">
            <h1 className="text-4xl font-bold">Havic HV G-92 Gamepad</h1>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <div className="flex items-center space-x-1">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      style={{
                        color: i < 5 ? "#ffad33" : "#bfbfbf",
                      }}
                    />
                  ))}
              </div>
              <div className="ml-2 text-[#737373]">(150 Reviews)</div>
              <span className="hidden md:block text-gray-400">|</span>
              <p className="text-[#66FFA3] font-medium">In Stock</p>
            </div>
          </div>

          <h2 className="text-3xl font-medium">$192.00</h2>
          <p className="text-xl">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble-free install & mess-free removal. Pressure
            sensitive.
          </p>

          <div className="flex flex-wrap items-center gap-6 w-full">
            <div className="border rounded-[5px] flex items-center">
              <button
                onClick={() => handleQuantityChange(4, -1)}
                className="bg-gray-100 px-4 py-3 text-lg border rounded-[5px] font-bold text-gray-600 hover:bg-gray-200"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value="2"
                className="w-16 text-center text-lg font-semibold border-gray-300 focus:outline-none"
                readOnly
              />
              <button
                onClick={() => handleQuantityChange(4, 1)}
                className="bg-[#db4444] px-4 py-3 text-lg border rounded-[5px] font-bold text-white hover:bg-red-600"
              >
                +
              </button>
            </div>

            <div className="flex items-center">
              <button className="red-button py-4 px-6 sm:px-3 h-full">
                Buy Now
              </button>
              <Image
                src="/images/wishlist.svg"
                alt="Wishlist Logo"
                width={45}
                height={45}
                className="my-4 mx-10 border border-black rounded-[5px] text-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
