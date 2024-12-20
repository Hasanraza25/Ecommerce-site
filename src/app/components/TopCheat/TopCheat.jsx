"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const TopCheat = () => {
  const [language, setLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="bg-black text-white py-3 px-4 hidden md:block">
      <div className="flex lg:justify-center md:justify-between items-center">
        <div className="flex items-center">
          <h4 className="text-sm mr-4 text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h4>

            <a href='#' className="text-blue-400 underline hover:text-blue-600">
              Shop Now
            </a>
        </div>
       
      </div>
      <div className="absolute lg:right-20 right-10 top-3">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-base flex items-center"
          >
            {language}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 bg-white text-black  border mt-2 w-28 rounded shadow-lg z-30">
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleLanguageChange('English')}
              >
                English
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleLanguageChange('German')}
              >
                German
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleLanguageChange('Français')}
              >
                Français
              </li>
            </ul>
          )}
        </div>
    </div>
  );
};

export default TopCheat;
