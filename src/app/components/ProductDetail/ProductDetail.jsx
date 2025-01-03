"use client";
import { useCart } from "@/app/context/CartContext";
import { useWishlist } from "@/app/context/WishlistContext";
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
import { ClipLoader } from "react-spinners";
import { client, urlFor } from "@/sanity/lib/client";

export const revalidate = 10;

const ProductDetail = ({ params }) => {
  const { slug } = params;
  const [product, setProduct] = useState(null);
  const { cartItems, addToCart, handleQuantityChange } = useCart();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isWiggling, setIsWiggling] = useState(false);


  
  useEffect(() => {
    if (!isAddedToCart) {
      const interval = setInterval(() => {
        setIsWiggling(true); // Start wiggle animation
        setTimeout(() => setIsWiggling(false), 1000); // Stop animation after 1 second
      }, 3000); // Trigger every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [isAddedToCart]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == 'products' && slug.current == '${slug}']{
          name, "currentSlug": slug.current, image, price, description, discountedPrice, originalPrice, discount, rating, isNew, buyers, stockStatus
        }[0]`
        const data = await client.fetch(query);
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  useEffect(() => {
    if (product) {
      setIsAddedToCart(cartItems.some((item) => item.slug === product.currentSlug));
    }
  }, [product, cartItems]);

  useEffect(() => {
    if (product) {
      setIsHeartClicked(wishlistItems.some((item) => item.slug === product.currentSlug));
    }
  }, [wishlistItems, product]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <ClipLoader color="#db4444" size={80} />
      </div>
    );
  }

  if (error) {
    return <p className="text-center">{error.message}</p>;
  }

  const cartItem = cartItems.find((item) => item.slug === product.currentSlug);
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
      removeFromWishlist(product.slug);
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

      <div className="flex flex-col md:flex-row sm:items-start sm:justify-center gap-10 w-full overflow-hidden">
        <div className="flex lg:flex-row-reverse flex-col md:flex-row w-full md:w-1/2 mx-auto flex-shrink-0">
          <div className="md:w-[500px] w-full h-[300px] md:h-[500px] p-4 bg-[#f5f5f5] rounded-md lg:ml-10">
            <img
              src={urlFor(images[selectedImageIndex]).url()}
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
                  src={urlFor(image).url()}
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
                onClick={() => handleQuantityChange(product.currentSlug, -1)}
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
                onClick={() => handleQuantityChange(product.currentSlug, 1)}
                className="bg-[#db4444] px-4 py-3 text-lg border rounded-[5px] font-bold text-white hover:bg-red-600"
              >
                +
              </button>
            </div>

            <div className="flex items-center gap-10">
              <button
                onClick={handleAddToCart}
                className={`bg-[#db4444] hover:bg-[#fa4545] p-4 text-white text-lg rounded-[5px] cursor-pointer py-4 px-10 sm:px-3 h-full transition-transform duration-500 ${
                  isWiggling && product.stockStatus !== 0
                    ? "animate-wiggle"
                    : ""
                }`}
                disabled={isAddedToCart || product.stockStatus === 0}
              >
                {isAddedToCart
                  ? "Added to Cart"
                  : product.stockStatus === 0
                  ? "Out Of Stock"
                  : "Buy Now"}
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
