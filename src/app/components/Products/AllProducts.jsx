import React from "react";
import AllProductSlider from "./AllProductSlider";
import { products } from "@/app/data/products";

const AllProducts = () => {
  const ourProducts = products.filter((product) => 
     product.categories.includes("our-products")
  );

  return (
    <>
      <div className="container mx-auto flex flex-col px-8  overflow-hidden">
        <div className="heading flex items-center mt-16 md:mt-24">
          <span className="bg-[#db4444] w-5 h-10 md:w-[30px] md:h-[55px] border rounded-[5px]"></span>
          <h4 className="text-[#db4444] font-bold mx-3 md:mx-5 text-md md:text-lg">
            Our Products
          </h4>
        </div>

        <div className="flex mt-10 items-center font-bold justify-start">
          <h1 className="text-4xl font-semibold">Explore Our Products</h1>
        </div>
        <AllProductSlider products={ourProducts} />
        <div className="text-center mb-10">
          <button className="bg-[#db4444] hover:bg-[#fa4545] py-4 px-10 text-white rounded-[5px]">
            Explore Our Products
          </button>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
