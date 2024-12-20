"use client";
import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter hook
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = usePathname(); // Initialize the router

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/sign-up" },
  ];

  return (
    <header className="pb-4 pt-8 px-4 border-b-2 mytext sticky top-0 bg-white z-40">
      <div className="container flex justify-between items-center mx-auto">
        <div className="text-white text-lg flex items-center lg:block">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Company Logo"
              width={120}
              height={30}
            />
          </Link>
        </div>

        <div className="nav-items hidden lg:block">
          <nav>
            <ul className="flex">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className={`mx-5 tracking-wider cursor-pointer relative hover:text-black ${
                    currentPath === item.path
                      ? "text-black font-medium pb-1"
                      : "text-gray-600"
                  }`}
                >
                  <Link href={item.path}>
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform duration-300 ease-in-out transform ${
                        currentPath === item.path ? "scale-x-100" : "scale-x-0"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden lg:flex flex-row">
          <div className="input-field relative w-72">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full py-2 px-4 rounded-md bg-[#f5f5f5] text-gray-700 focus:outline-none tracking-wider sm:text-sm"
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
                width={30}
                height={30}
              >
                <path d="M18.3 5.7L12 12l6.3 6.3-1.4 1.4L12 13.4l-6.3 6.3-1.4-1.4L10.6 12 4.3 5.7l1.4-1.4L12 10.6l6.3-6.3z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                width={30}
                height={30}
              >
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-[5rem] left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setMenuOpen(false)} // Close menu on click
              className={`text-lg tracking-wider relative ${
                currentPath === item.path
                  ? "text-black font-medium"
                  : "text-gray-600"
              }`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-black transition-transform duration-300 ease-in-out transform ${
                  currentPath === item.path ? "scale-x-100" : "scale-x-0"
                }`}
              ></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
