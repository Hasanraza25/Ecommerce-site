import React from "react";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import ProductSlider from "../Products/ProductSlider";
import { products } from "@/app/data/products";

const Sales = () => {
  const targetDate = new Date("2024-12-31T00:00:00");

  const flashSaleProducts = products.filter((product) =>
    product.categories.includes("flash")
  );

  return (
    <div className="container mx-auto flex flex-col px-8 overflow-hidden">
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
        <ProductSlider products={flashSaleProducts} />
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
