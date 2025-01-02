"use client";
import Image from "next/image";
import React from "react";
import { useCart } from "../context/CartContext";
import { urlFor } from "@/sanity/lib/client";

const CheckOut = () => {
  const { cartItems, calculateTotal } = useCart();
  return (
    <div className="container px-8 mx-auto overflow-hidden my-20">
      <h4 className="text-lg text-[#808080] mb-10">
        Home / My Account / Product / View Cart /{" "}
        <span className="text-black"> CheckOut</span>
      </h4>
      <div className="container">
        <h1 className="text-3xl font-medium tracking-wide py-5 text-start mdd:text-center">
          Billing Details
        </h1>
        <form action="">
          <div className="flex mdd:flex-wrap justify-between mdd:justify-center mt-4 w-full lg:space-x-20 mdd:space-x-0 mdd:space-y-20">
            <ul className="text-[#999999] text-sm tracking-wide space-y-4 w-full lg:w-1/2 mdd:w-full">
              <li className="space-y-1 w-full">
                <h5>First Name</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Company Name</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Street Address</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Apartment, floor, etc. &#40;optional&#41;</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Town/City*</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Phone Number*</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Email Address*</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <div className="flex space-x-2 items-center">
                <input
                  type="checkbox"
                  id="save-info"
                  className="peer hidden" // Hide default checkbox
                />
                <label
                  htmlFor="save-info"
                  className="w-5 h-5 border-2 border-gray-300 rounded-sm peer-checked:bg-red-500 peer-checked:border-red-500 peer-checked:ring-2 peer-checked:ring-white peer-checked:ring-offset-2 cursor-pointer"
                >
                  <svg
                    className="w-full h-full text-white peer-checked:block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </label>
                <p className="text-black text-base">
                  Save this information for faster check-out next time
                </p>
              </div>
            </ul>
            <div className="flex flex-col space-y-10 w-full lg:w-1/2 mdd:w-full text-lg">
              <div className="space-y-10 ">
                {cartItems.map((item, index) => {
                  return (
                    <div
                      className="flex justify-between items-center"
                      key={index}
                    >
                      <div className="flex space-x-7 items-center ">
                        <Image
                          src={urlFor(item.image).url()}
                          alt=""
                          width={49}
                          height={42}
                        />
                        <p>{item.name}</p>
                      </div>
                      <p>${item.discountedPrice * item.quantity}</p>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-5">
                <div className="flex justify-between tracking-wide">
                  <p>Subtotal:</p>
                  <p>${calculateTotal()}</p>
                </div>
                <hr />

                <div className="flex justify-between tracking-wide">
                  <p>Shipping:</p>
                  <p>Free</p>
                </div>
                <hr />
                <div className="flex justify-between tracking-wide">
                  <p>Total:</p>
                  <p>${calculateTotal()}</p>
                </div>
              </div>
              <div className="space-y-4 tracking-wide">
                <div className="flex justify-between items-center">
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label
                    htmlFor="creditCard"
                    className="ml-3 my-3 text-lg font-medium text-gray-800"
                  >
                    Credit Card
                  </label>
                  <div class="ml-auto flex flex-wrap items-center justify-end lg:space-x-4">
                    <img
                      src="/images/icons/visa-icon.svg"
                      alt="Visa"
                      class=" mr-2"
                    />
                    <img
                      src="/images/icons/master-card.svg"
                      alt="Visa"
                      class="mr-2"
                    />
                    <img
                      src="/images/icons/paypal-icon.svg"
                      alt="Visa"
                      class="mr-2"
                    />
                  </div>
                </div>
                <div className="flex space-x-3 items-center">
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-3 text-lg font-medium text-gray-800"
                  >
                    PayPal
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap lg:space-x-4 space-x-0 lg:space-y-0 space-y-5 justify-start items-center mdd:w-full">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border-2 border-black rounded-[5px] pl-5 pr-20 py-3 lg:w-auto w-full font-medium text-[#808080] outline-none"
                />
                <button className="bg-[#db4444] hover:bg-[#fa4545] py-3 px-12 lg:w-auto w-full text-white rounded-[5px]">
                  Apply Coupon
                </button>
              </div>
              <button className="bg-[#db4444] hover:bg-[#fa4545] py-3 px-12 lg:w-auto w-full text-white rounded-[5px]">
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
