import React from "react";
import CategorySlider from "./CategorySlider";

const Category = () => {
  const products = [
    {
      image: "/images/categories/phone.svg",
      name: "Phones",
    },
    {
      image: "/images/categories/computer.svg",
      name: "Computers",
    },
    {
      image: "/images/categories/watch.svg",
      name: "SmartWatch",
    },
    {
      image: "/images/categories/camera.svg",
      name: "Camera",
    },
    {
      image: "/images/categories/headphone.svg",
      name: "HeadPhones",
    },
    {
      image: "/images/categories/gamepad.svg",
      name: "Gaming",
    },
    {
      image: "/images/categories/phone.svg",
      name: "Phones",
    },
    {
      image: "/images/categories/computer.svg",
      name: "Computers",
    },
    {
      image: "/images/categories/watch.svg",
      name: "SmartWatch",
    },
    {
      image: "/images/categories/camera.svg",
      name: "Camera",
    },
  ];
  return (
    <>
      <div className="container mx-auto flex flex-col my-20">
        <div className="heading container mx-auto flex items-center">
          <span className="bg-[#db4444] w-[30px] h-[55px] border rounded-[5px]"></span>
          <h4 className="text-[#db4444] font-bold mx-5 text-lg">Categories</h4>
        </div>
        <div className="flex mt-10 items-center font-bold justify-start">
          <h1 className="text-4xl font-semibold">Browse By Category</h1>
        </div>
        <CategorySlider products={products} />
        <hr className="mb-10" />
      </div>
    </>
  );
};

export default Category;
