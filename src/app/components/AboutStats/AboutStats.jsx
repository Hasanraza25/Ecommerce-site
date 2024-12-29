"use client"
import Image from "next/image";
import React, { useState } from "react";

const AboutStats = () => {
  const [isHovered, setIsHovered] = useState(null);

  const stats = [
    {
      id: 1,
      icon: "/images/about-icons/seller-active.svg",
      hoverIcon: '/images/about-icons/seller-active-hover.svg',
      title: "10.5k",
      description: "Sellers active our site",
    },
    {
      id: 2,
      icon: "/images/about-icons/dollar.svg",
      hoverIcon: '/images/about-icons/dollar-hover.svg',
      title: "33k",
      description: "Monthly Product Sale",
    },
    {
      id: 3,
      icon: "/images/about-icons/bag.svg",
      hoverIcon: '/images/about-icons/bag-hover.svg',
      title: "45.5k",
      description: "Customer active in our site",
    },
    {
      id: 4,
      icon: "/images/about-icons/money-bag.svg",
      hoverIcon: '/images/about-icons/money-bag-hover.svg',
      title: "25k",
      description: "Annual gross sale in our site",
    },
  ];
  return (
    <>
      <div className="flex mx-auto justify-center items-center my-20 gap-10 flex-wrap">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center justify-center text-center border rounded-lg py-6 px-8 transition-all duration-300 cursor-pointer w-72 ${
              isHovered === index ? "bg-[#db4444] scale-110 shadow-lg text-white" : ""
            }`}
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className={`bg-[#c1c0c1] p-3 rounded-full ${isHovered === index ? "bg-[#e67c7c]" : ""}`}>
              <div className={`bg-black p-3 rounded-full ${isHovered === index ? "bg-white" : ""} `}>
                <Image src={isHovered === index ? stat.hoverIcon : stat.icon} alt="" width={30} height={30} />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-extrabold">{stat.title}</h3>
            <p className="mt-3">{stat.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutStats;
