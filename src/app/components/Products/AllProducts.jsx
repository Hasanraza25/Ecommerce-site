"use client"
import React, { useEffect, useState } from "react";
import AllProductSlider from "./AllProductSlider";
import { ClipLoader } from "react-spinners";

const AllProducts = () => {
  const [ourProducts, setOurProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOurProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();

        const filteredProducts = data.products.filter((product) =>
          product.categories.includes("our-products")
        );
        setOurProducts(filteredProducts);
      } catch (err) {
        setError("Failed to Fetch Products!");
      } finally {
        setLoading(false);
      }
    };

    getOurProducts();
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <ClipLoader color="#db4444" size={80} />
      </div>
    );
  }

  if (error) {
    return <p className="text-center">{error}</p>;
  }

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
          <button className="red-button py-4 px-10">
            Explore Our Products
          </button>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
