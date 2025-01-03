"use client";
import { useCart } from "@/app/context/CartContext";
import { urlFor } from "@/sanity/lib/client";
import Link from "next/link";
import React, { useState } from "react";

export const Cart = () => {
  const { cartItems, calculateTotal, handleQuantityChange, removeFromCart } =
    useCart();
  const [removingItem, setRemovingItem] = useState(null);

  const handleRemove = (slug) => {
    setRemovingItem(slug);
    setTimeout(() => {
      removeFromCart(slug);
      setRemovingItem(null);
    }, 300);
  };

  return (
    <div className="container px-8 mx-auto overflow-hidden my-20">
      <h4 className="text-lg text-[#808080] mb-10">
        <Link href={"/"}>Home</Link> / <Link href={"/cart"}><span className="text-black"> Cart</span></Link> 
      </h4>
      {cartItems && cartItems.length > 0 ? (
        <div className="space-y-10">
          <ul
            className="md:grid grid-cols-4 text-center p-5 py-7 shadow font-medium hidden"
            style={{ borderRadius: "0.3rem" }}
          >
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>

          {cartItems.map((item) => (
            <ul
              key={item.currentSlug}
              className={`grid md:grid-cols-4 grid-cols-1 text-center items-center gap-4 p-5 shadow-md bg-white transition-transform duration-300 ${
                removingItem === item.slug ? "opacity-0 scale-90" : ""
              }`}
              style={{ borderRadius: "0.3rem" }}
            >
              <li className="md:col-span-1 flex flex-col lg:flex-row lg:justify-start lg:pl-10 items-center gap-2 lg:space-x-3">
                <div className="relative">
                  <img
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    className="h-16 w-16 object-contain rounded-md mx-auto"
                  />
                  <button
                    className="absolute top-0 -left-2 text-white bg-[#db4444] rounded-full hover:bg-[#fa4545]"
                    onClick={() => handleRemove(item.currentSlug)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <span className="text-gray-800 font-medium">{item.name}</span>
              </li>

              <li className="md:col-span-1 flex justify-between md:justify-center items-center">
                <span className="text-gray-600 font-semibold md:hidden">
                  Price:
                </span>
                <span className="text-gray-600 font-semibold md:ml-2">
                  ${item.discountedPrice}
                </span>
              </li>

              <li className="md:col-span-1 flex justify-between md:justify-center items-center">
                <span className="text-gray-600 font-semibold md:hidden">
                  Quantity:
                </span>
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(item.currentSlug, -1)}
                    className="px-3 sm:px-2 py-1 border rounded-md bg-[#f1f1f1] text-gray-600 hover:bg-[#e0e0e0]"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="w-16 py-1 px-2 text-center border rounded-md appearance-none"
                    readOnly
                  />
                  <button
                    onClick={() => handleQuantityChange(item.currentSlug, 1)}
                    className="px-3 sm:px-2 py-1  border rounded-md bg-[#f1f1f1] text-gray-600 hover:bg-[#e0e0e0]"
                  >
                    +
                  </button>
                </div>
              </li>

              <li className="md:col-span-1 flex justify-between md:justify-center items-center">
                <span className="text-gray-600 font-semibold md:hidden">
                  Subtotal:
                </span>
                <span className="text-gray-800 font-semibold md:ml-2">
                  ${item.discountedPrice * item.quantity}
                </span>
              </li>
            </ul>
          ))}

          <div className="container flex flex-col flex-wrap mt-10 items-start font-bold lg:justify-between mdd:justify-center justify-center mdd:space-y-5 lg:space-y-0 space-y-10 lg:flex-row">
            <div className="flex flex-wrap lg:space-x-4 space-x-0 lg:space-y-0 space-y-5 justify-center items-center mdd:w-full">
              <input
                type="text"
                placeholder="Coupon Code"
                className="border-2 border-black rounded-[5px] pl-5 pr-20 py-3 lg:w-auto w-full font-medium text-[#808080] outline-none"
              />
              <button className="bg-[#db4444] hover:bg-[#fa4545] py-3 px-12 lg:w-auto w-full text-white rounded-[5px]">
                Apply Coupon
              </button>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col space-y-5 border-2 border-black rounded-[5px] px-5 py-8 lg:w-[28rem] mdd:w-full">
              <h4 className="font-semibold text-xl tracking-wider">
                Cart Total
              </h4>
              <div className="flex flex-col space-y-3 font-medium">
                <div className="flex justify-between tracking-wide">
                  <p>Subtotal:</p>
                  <p>${calculateTotal()}</p>
                </div>
                <hr className="bg-black h-[1.5px]" />

                <div className="flex justify-between tracking-wide">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <hr className="bg-black h-[1.5px]" />
                <div className="flex justify-between tracking-wide">
                  <p>Total:</p>
                  <p>${calculateTotal()}</p>
                </div>
              </div>
              <Link href={"/checkout"} className="mx-auto">
                <button className="bg-[#db4444] hover:bg-[#fa4545] py-3 px-3 text-white rounded-[5px] lg:w-60 mdd:w-full mx-auto tracking-wider">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full pb-10 rounded-lg">
          <img
            src="/images/empty-cart.webp"
            alt="Empty Cart"
            className="w-60 h-60 mb-6"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Oops! Your cart is empty 😢
          </h2>
          <p className="text-gray-600 text-center text-sm md:text-base max-w-md mb-6">
            Looks like you haven’t added anything to your cart yet. But don’t
            worry, there’s plenty of amazing items waiting for you!
          </p>
          <Link
            href="/"
            className="px-6 py-3 bg-[#db4444] hover:bg-[#fa4545]  text-white font-semibold rounded-full shadow-md transition-all duration-300"
          >
            🛍️ Start Shopping Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
