"use client";
import { useState } from 'react';

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="container ml-40 me-10 w-[24rem] min-h-screen p-5 border-r-2">
      <ul>
        {categories.map((category, index) => (
          <li key={index} className=" ">
            <button
              onClick={() => toggleDropdown(index)}
              className="flex items-center w-full text-lg p-2 font-medium text-left rounded text-black hover:bg-gray-100"
            >
              <span className="text-black">{category}</span>
              <svg
                className={`ml-auto w-5 h-5 transform transition-transform font-bold ${openCategory === index ? 'rotate-0' : '-rotate-90'} text-black`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {openCategory === index && (
              <ul className="mt-1 pl-4">
                <li className="my-1 text-black p-2 rounded hover:bg-gray-100">
                  <a href="#">Subcategory 1</a>
                </li>
                <li className="my-1 text-black p-2 rounded hover:bg-gray-100">
                  <a href="#">Subcategory 2</a>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
