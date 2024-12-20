import React from "react";
import AllProductSlider from "./AllProductSlider";

const AllProducts = () => {
  const products = [
    {
      image: "/images/dog-food.svg",
      name: "Breed Dry Dog Food",
      discountedPrice: 100,
      rating: 3,
      buyers: 35,
    },
    {
      image: "/images/camera.svg",
      name: "CANON EOS DSLR Camera",
      discountedPrice: 360,
      rating: 4,
      buyers: 95,
    },
    {
      image: "/images/laptop.svg",
      name: "ASUS FHD Gaming Laptop",
      discountedPrice: 700,
      rating: 5,
      buyers: 325,
    },
    {
      image: "/images/products.svg",
      name: "Curology Product Set ",
      discountedPrice: 500,
      rating: 4,
      buyers: 145,
    },
    {
      image: "/images/car.svg",
      name: "Kids Electric Car",
      discountedPrice: 960,
      rating: 5,
      buyers: 65,
    },
    {
      image: "/images/shoes.svg",
      name: "Jr. Zoom Soccer Cleats",
      discountedPrice: 1160,
      rating: 5,
      buyers: 35,
    },
    {
      image: "/images/gamepad.svg",
      name: "GP11 Shooter USB Gamepad",
      discountedPrice: 660,
      rating: 4.5,
      buyers: 55,
    },
    {
      image: "/images/jacket.svg",
      name: "Quilted Satin Jacket",
      discountedPrice: 660,
      rating: 4.5,
      buyers: 55,
    },
    {
      image: "/images/lcd.svg",
      name: "Monitor",
      discountedPrice: 370,
      rating: 5,
      buyers: 20,
    },
    {
      image: "/images/chair.svg",
      name: "Chair",
      discountedPrice: 375,
      rating: 4.5,
      buyers: 75,
    },
    {
      image: "/images/gamepad.svg",
      name: "Gamepad",
      discountedPrice: 120,
      rating: 4.5,
      buyers: 88,
    },
    {
      image: "/images/product-keyboard.svg",
      name: "Keyboard",
      discountedPrice: 960,
      rating: 4,
      buyers: 52,
    },
    {
      image: "/images/lcd.svg",
      name: "Monitor",
      discountedPrice: 370,
      rating: 5,
      buyers: 30,
    },
    {
      image: "/images/camera.svg",
      name: "CANON EOS DSLR Camera",
      discountedPrice: 360,
      rating: 4,
      buyers: 95,
    },
  ];
  return (
    <>
      <div className="container mx-auto flex flex-col px-2  overflow-hidden">
      <div className="heading flex items-center mt-16 md:mt-24">
          <span className="bg-[#db4444] w-5 h-10 md:w-[30px] md:h-[55px] border rounded-[5px]"></span>
          <h4 className="text-[#db4444] font-bold mx-3 md:mx-5 text-md md:text-lg">
            Our Products
          </h4>
        </div>

        <div className="flex mt-10 items-center font-bold justify-start">
          <h1 className="text-4xl font-semibold">Flash Sales</h1>
        </div>
        <AllProductSlider products={products} />
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
