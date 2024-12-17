"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="p-4 pt-8 border-b-2 mytext">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg flex items-center lg:block">
          <Image
            src="/images/logo.png"
            alt="Company Logo"
            width={120}
            height={30}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="nav-items hidden lg:block">
          <nav>
            <ul className="flex">
              <Link href="#">
                <li className="mx-5 tracking-wider border-b-2 border-b-[#808080] font-medium">
                  Home
                </li>
              </Link>
              <Link href="#">
                <li className="mx-5 tracking-wider">Contact</li>
              </Link>
              <Link href="#">
                <li className="mx-5 tracking-wider">About</li>
              </Link>
              <Link href="#">
                <li className="mx-5 tracking-wider">Sign Up</li>
              </Link>
            </ul>
          </nav>
        </div>

        {/* Search Bar and Icons for Desktop */}
        <div className="hidden lg:flex flex-row">
          <div className="input-field relative w-72">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-2 px-4 rounded-md bg-[#f5f5f5] text-gray-700 focus:outline-none tracking-wider"
            />
            <div className="absolute top-0 right-4 flex items-center justify-center h-full text-gray-500">
              <Image
                src="/images/search.svg"
                alt="Search Logo"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="header-icons flex justify-between px-5">
            <Image
              src="/images/wishlist.svg"
              alt="Wishlist logo"
              width={35}
              height={30}
              className="mx-3"
            />
            <Image
              src="/images/cart.svg"
              alt="Cart Logo"
              width={35}
              height={30}
              className="mx-3"
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className={`text-white transform transition-transform duration-300 ${
              menuOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="30"
                height="30"
              >
                {/* Close Icon */}
                <path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L12 13.4l-6.3 6.3-1.4-1.4L10.6 12 4.3 5.7l1.4-1.4L12 10.6l6.3-6.3z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width="30"
                height="30"
              >
                {/* Menu Icon */}
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar for Mobile/Tablet */}
      {!menuOpen && (
        <div className="mt-4 lg:hidden px-4 z-10">
          <div className="input-field relative w-full">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-2 px-4 rounded-md bg-[#f5f5f5] text-gray-700 focus:outline-none tracking-wider"
            />
            <div className="absolute top-0 right-4 flex items-center justify-center h-full text-gray-500">
              <Image
                src="/images/search.svg"
                alt="Search Logo"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      )}

      {/* Mobile/Tablet Menu */}
      <div
        className={`lg:hidden bg-white w-full transition-transform duration-300 ease-in-out overflow-hidden z-20 border-t ${
          menuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          <Link href="#">
            <p className="text-lg tracking-wider">Home</p>
          </Link>
          <Link href="#">
            <p className="text-lg tracking-wider">Contact</p>
          </Link>
          <Link href="#">
            <p className="text-lg tracking-wider">About</p>
          </Link>
          <Link href="#">
            <p className="text-lg tracking-wider">Sign Up</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
