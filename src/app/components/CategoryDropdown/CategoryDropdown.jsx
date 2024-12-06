"use client"
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
    <div className="bg-gray-800 text-white w-64 min-h-screen p-5">
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="my-4">
            <button
              onClick={() => toggleDropdown(index)}
              className="flex items-center w-full text-lg font-medium text-left hover:bg-gray-700 p-2 rounded text-black"
            >
              <span className="text-black">{category}</span>
              <svg
                className={`ml-2 w-4 h-4 transform transition-transform ${openCategory === index ? 'rotate-0' : '-rotate-90'} text-black`}
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
              <ul className="mt-2 pl-4">
                {/* Add subcategories here */}
                <li className="my-2 text-gray-300 hover:bg-gray-700 p-2 rounded">
                  <a href="#">Subcategory 1</a>
                </li>
                <li className="my-2 text-gray-300 hover:bg-gray-700 p-2 rounded">
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
