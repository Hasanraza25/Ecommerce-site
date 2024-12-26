"use client";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
import { products } from "@/app/data/products";
import {
  faStar,
  faStarHalfAlt,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductDetail = ({ params }) => {
  const { productId } = params;
  const [product, setProduct] = useState(null);
  const { cartItems, addToCart, handleQuantityChange } = useCart();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);

 
  useEffect(() => {
    const fetchedProduct = products.find(
      (product) => product.id === parseInt(productId)
    );
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setIsAddedToCart(cartItems.some((item) => item.id === fetchedProduct.id));
    }
  }, [productId, cartItems]);

  useEffect(() => {
    const fetchedProduct = products.find(
      (product) => product.id === parseInt(productId)
    );
    if (wishlistItems.some((item) => item.id === fetchedProduct.id)) {
      setIsHeartClicked(true);
    }
  }, [wishlistItems, productId]);

  if (!product) return <div>Loading...</div>;

  const cartItem = cartItems.find((item) => item.id === product.id);
  const productQuantity = cartItem ? cartItem.quantity : 1;

  const handleAddToCart = () => {
    addToCart(product);
    setIsAddedToCart(true);
    toast.success("Item added to Cart!", {
      autoClose: 2000,
      closeButton: false,
    });
  };

  const handleAddToWishlist = () => {
    setIsHeartClicked(!isHeartClicked);
    if (isHeartClicked) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
      toast.success("Product added to Wishlist!", {
        autoClose: 2000,
        closeButton: false,
      });
    }
  };

  const images = [product.image, product.image, product.image, product.image];

  return (
    <div className="container lg:px-12 px-8 mx-auto overflow-hidden my-20">
      <h4 className="text-lg text-[#808080] mb-10">
        <Link href={"/"}>Products</Link> /
        <Link href={"/"}>
          <span className="text-black"> {product.name}</span>
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
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              <div className="flex items-center space-x-1">
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
              </div>
              <div className="ml-2 text-[#737373]">
                ({product.buyers} Reviews)
              </div>
              <span className="hidden md:block text-gray-400">|</span>
              {product.stockStatus && product.stockStatus > 0 ? (
                <p className="text-[#66FFA3] font-medium">In Stock</p>
              ) : (
                <p className="text-[#db4444] font-medium">Out Of Stock</p>
              )}
            </div>
          </div>

          <h2 className="text-3xl font-medium">${product.discountedPrice}</h2>
          <p className="text-xl">{product.description}</p>

          <div className="flex flex-wrap items-center gap-6 w-full">
            <div className="border rounded-[5px] flex items-center">
              <button
                onClick={() => handleQuantityChange(product.id, -1)}
                className="bg-gray-100 px-4 py-3 text-lg border rounded-[5px] font-bold text-gray-600 hover:bg-gray-200"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={productQuantity}
                className="w-16 text-center text-lg font-semibold border-gray-300 focus:outline-none"
                readOnly
              />
              <button
                onClick={() => handleQuantityChange(product.id, 1)}
                className="bg-[#db4444] px-4 py-3 text-lg border rounded-[5px] font-bold text-white hover:bg-red-600"
              >
                +
              </button>
            </div>

            <div className="flex items-center gap-10">
              <button
                onClick={handleAddToCart}
                className="bg-[#db4444] hover:bg-[#fa4545] p-4 text-white text-lg rounded-[5px] cursor-pointer py-4 px-10 sm:px-3 h-full"
                disabled={isAddedToCart || product.stockStatus === 0}
              >
                {isAddedToCart ? "Added to Cart" : "Buy Now"}
              </button>

              <button
                className={`bg-white w-14 h-14 border border-black rounded-[5px] flex items-center justify-center hover:text-red-500 ${
                  isHeartClicked ? "text-red-500" : "text-black"
                }`}
                onClick={handleAddToWishlist}
              >
                <FontAwesomeIcon
                  icon={isHeartClicked ? faHeartSolid : faHeartOutline}
                  className="text-[1.5rem]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
