"use client";
import React from "react";

const Cart = () => {
  return (
    <>
      <div className="container px-8 mx-auto overflow-hidden my-20">
        <h4 className="text-lg text-[#808080] mb-10">
          Home / <span className="text-black"> Cart</span>
        </h4>
        <div className="space-y-10">
          <ul
            className="grid grid-cols-4 text-center p-5 py-7 shadow font-medium"
            style={{ borderRadius: "0.3rem" }}
          >
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>

          {/* Product Row */}
          <ul
            className="grid grid-cols-4 text-center items-center gap-4 p-5 shadow-md bg-white"
            style={{ borderRadius: "0.3rem" }}
          >
            {/* Product Column */}
            <li>
              <div className="flex flex-col items-center gap-2">
                <button className="text-red-500 hover:text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                <img
                  src="/images/lcd-monitor.svg"
                  alt="LCD Monitor"
                  className="h-16 w-16 object-contain rounded-md"
                />
                <span className="text-gray-800 font-medium">LCD Monitor</span>
              </div>
            </li>

            {/* Price Column */}
            <li>
              <span className="text-gray-600 font-semibold">$650</span>
            </li>

            {/* Quantity Column */}
            <li>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 py-1 px-2 text-center border rounded-md focus:ring focus:ring-indigo-300 appearance-none"
                onChange={(e) => {
                  if (parseInt(e.target.value) < 1) e.target.value = 1;
                }}
              />
            </li>

            {/* Subtotal Column */}
            <li>
              <span className="text-gray-800 font-semibold">$650</span>
            </li>
          </ul>
          <ul
            className="grid grid-cols-4 text-center items-center gap-4 p-5 shadow-md bg-white"
            style={{ borderRadius: "0.3rem" }}
          >
            {/* Product Column */}
            <li>
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <img
                    src="/images/lcd-monitor.svg"
                    alt="LCD Monitor"
                    className="h-16 w-16 object-contain rounded-md"
                  />
                  <button className="absolute top-0 -left-3 text-red-500 hover:text-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
                <span className="text-gray-800 font-medium">LCD Monitor</span>
              </div>
            </li>

            {/* Price Column */}
            <li>
              <span className="text-gray-600 font-semibold">$650</span>
            </li>

            {/* Quantity Column */}
            <li>
              <input
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 py-1 px-2 text-center border rounded-md focus:ring focus:ring-indigo-300 appearance-none"
                onChange={(e) => {
                  if (parseInt(e.target.value) < 1) e.target.value = 1;
                }}
              />
            </li>

            {/* Subtotal Column */}
            <li>
              <span className="text-gray-800 font-semibold">$650</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cart;
