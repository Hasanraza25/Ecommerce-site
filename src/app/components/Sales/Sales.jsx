"use client";
import React, { useEffect, useState } from "react";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import ProductSlider from "../Products/ProductSlider";
import { ClipLoader } from "react-spinners";
import { client } from "@/sanity/lib/client";

export const revalidate = 10;

const Sales = () => {
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const targetDate = new Date("2025-01-10T00:00:00");

  useEffect(() => {
    const getFlashSaleProducts = async () => {
      try {
        const query = `*[_type == 'products' && 'flash' in section] | order(_createdAt desc){
          name, "currentSlug": slug.current, image, price, description, discountedPrice, originalPrice, discount, rating, isNew, buyers, stockStatus
        }`;
        const data = await client.fetch(query); // Fetch directly from Sanity
        setFlashSaleProducts(data);
      } catch (err) {
        setError("Failed to fetch products!");
      } finally {
        setLoading(false);
      }
    };

    getFlashSaleProducts();
  }, []);

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
        <button className="red-button py-3 px-6 sm:py-4 sm:px-10">
          View All Products
        </button>
      </div>

      <hr className="mb-6 md:mb-10" />
    </div>
  );
};

export default Sales;
