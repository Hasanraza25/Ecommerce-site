import React from "react";

const Featured = () => {
  return (
    <div className="container mx-auto flex flex-col px-4 mb-20">
      <div className="heading flex items-center mt-16 md:mt-24">
        <span className="bg-[#db4444] w-5 h-10 md:w-[30px] md:h-[55px] border rounded-[5px]"></span>
        <h4 className="text-[#db4444] font-bold mx-3 md:mx-5 text-md md:text-lg">
          Featured
        </h4>
      </div>

      <div className="flex mt-10 items-center font-bold justify-start">
        <h1 className="text-4xl font-semibold">New Arrival</h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-10 justify-between mt-20">
        <div className="bg-black w-full rounded-xl relative flex flex-col ">
          <img src="images/featured/ps5.svg" alt="" className="ml-10 mt-20 " />
          <div className="text-white absolute bottom-10 sm:bottom-5 lg:mx-12 sm:mx-5 mx-8">
            <h2 className="lg:text-3xl text-5xl font-bold lg:mb-4 mb-10 sm:mb-4 sm:text-2xl">
              PlayStation 5
            </h2>
            <p className="lg:text-lg text-2xl mb-4 lg:w-[70%] w-[90%] sm:text-sm ">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="text-lg mx-auto md:mx-0 md:text-xl">
              <span className="border-b-2 border-[#878787]">Shop Now</span>
            </button>
          </div>
        </div>
        <div className="bg-black w-full rounded-xl relative flex flex-col mt-10 lg:mt-0">
          <img src="images/laptop.svg" alt="" className="ml-5 mt-11 " />
          <div className="text-white absolute bottom-10 sm:bottom-5 lg:mx-12 sm:mx-5 mx-8">
            <h2 className="lg:text-3xl text-5xl font-bold lg:mb-4 mb-10 sm:mb-4 sm:text-2xl">
              Laptop
            </h2>
            <p className="lg:text-lg text-2xl mb-4 lg:w-[70%] w-[90%] sm:text-sm ">
            ASUS FHD Gaming Laptop 
            </p>
            <button className="text-lg mx-auto md:mx-0 md:text-xl">
              <span className="border-b-2 border-[#878787]">Shop Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
