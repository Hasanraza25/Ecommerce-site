import React from "react";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import ProductSlider from "../Products/ProductSlider";

const Sales = () => {
  const targetDate = new Date("2024-12-20T00:00:00");

  const products = [
    {
      image: "/images/product-game.svg",
      name: "Gamepad",
      discountedPrice: 120,
      originalPrice: 160,
      discount: 35,
      rating: 4.5,
      buyers: 88,
    },
    {
      image: "/images/product-keyboard.svg",
      name: "Keyboard",
      discountedPrice: 960,
      originalPrice: 1000,
      discount: 35,
      rating: 4,
      buyers: 122,
    },
    {
      image: "/images/lcd.svg",
      name: "Monitor",
      discountedPrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      buyers: 20,
    },
    {
      image: "/images/chair.svg",
      name: "Chair",
      discountedPrice: 375,
      originalPrice: 450,
      discount: 25,
      rating: 4.5,
      buyers: 75,
    },
    {
      image: "/images/chair.svg",
      name: "Gamepad",
      discountedPrice: 120,
      originalPrice: 150,
      discount: 40,
      rating: 4.5,
      buyers: 88,
    },
    {
      image: "/images/product-keyboard.svg",
      name: "Keyboard",
      discountedPrice: 960,
      originalPrice: 1050,
      discount: 35,
      rating: 4,
      buyers: 52,
    },
    {
      image: "/images/product-game.svg",
      name: "Monitor",
      discountedPrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      buyers: 30,
    },
    {
      image: "/images/chair.svg",
      name: "Chair",
      discountedPrice: 375,
      originalPrice: 500,
      discount: 25,
      rating: 4.5,
      buyers: 114,
    },
  ];

  return (
    <div className="container mx-auto flex flex-col px-2 overflow-hidden">
      
      <div className="heading flex items-center mt-16 md:mt-24">
        <span className="bg-[#db4444] w-5 h-10 md:w-[30px] md:h-[55px] border rounded-[5px]"></span>
        <h4 className="text-[#db4444] font-bold mx-3 md:mx-5 text-md md:text-lg">
          Today&#39;s
        </h4>
      </div>

      

        <div className="flex mt-10 md:items-center font-bold md:justify-start flex-col md:flex-row">
          <h1 className="text-4xl font-semibold">Flash Sales</h1>
          <div className="md:ml-20 mt-10 md:mt-0">
            <CountdownTimer targetDate={targetDate} />
          </div>
        </div>


      
      <div className="mt-6 md:mt-10">
        <ProductSlider products={products} />
      </div>

      
      <div className="text-center mt-6 md:mt-10 mb-8">
        <button className="bg-[#db4444] hover:bg-[#fa4545] py-3 px-6 sm:py-4 sm:px-10 text-white rounded-[5px] text-sm sm:text-base">
          View All Products
        </button>
      </div>

      
      <hr className="mb-6 md:mb-10" />
    </div>
  );
};

export default Sales;
