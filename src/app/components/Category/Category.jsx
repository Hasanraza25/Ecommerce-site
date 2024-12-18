import React from "react";
import CategorySlider from "./CategorySlider";

const Category = () => {
  const products = [
    {
      image: "/images/categories/phone.svg",
      hoverImage: "/images/categories/hover-phone.svg",
      name: "Phones",
    },
    {
      image: "/images/categories/computer.svg",
      hoverImage: "/images/categories/hover-computer.svg",
      name: "Computers",
    },
    {
      image: "/images/categories/watch.svg",
      hoverImage: "/images/categories/hover-watch.svg",
      name: "SmartWatch",
    },
    {
      image: "/images/categories/camera.svg",
      hoverImage: "/images/categories/hover-camera.svg",
      name: "Camera",
    },
    {
      image: "/images/categories/headphone.svg",
      hoverImage: "/images/categories/hover-headphone.svg",
      name: "HeadPhones",
    },
    {
      image: "/images/categories/gamepad.svg",
      hoverImage: "/images/categories/hover-gamepad.svg",
      name: "Gaming",
    },
    {
      image: "/images/categories/phone.svg",
      hoverImage: "/images/categories/hover-phone.svg",
      name: "Phones",
    },
    {
      image: "/images/categories/computer.svg",
      hoverImage: "/images/categories/hover-computer.svg",
      name: "Computers",
    },
    {
      image: "/images/categories/watch.svg",
      hoverImage: "/images/categories/hover-watch.svg",
      name: "SmartWatch",
    },
    {
      image: "/images/categories/camera.svg",
      hoverImage: "/images/categories/hover-camera.svg",
      name: "Camera",
    },
  ];
  return (
    <>
      <div className="mx-auto flex flex-col px-10 lg:px-40 overflow-hidden">
        <div className="heading flex items-center mt-16 md:mt-24">
          <span className="bg-[#db4444] w-5 h-10 md:w-[30px] md:h-[55px] border rounded-[5px]"></span>
          <h4 className="text-[#db4444] font-bold mx-3 md:mx-5 text-md md:text-lg">
            Categories
          </h4>
        </div>

        <div className="flex mt-10 md:items-center font-bold md:justify-start flex-col md:flex-row">
          <h1 className="text-4xl font-semibold">Browse By Category</h1>
        </div>
        <CategorySlider products={products} />
        <hr className="mb-10" />
      </div>
    </>
  );
};

export default Category;
