"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AccountDropdown from "../AccountDropdown/AccountDropdown";
import { useCart } from "@/app/context/CartContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isWishlistHovered, setIsWishlistHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isUserHovered, setIsUserHovered] = useState(false);
  const currentPath = usePathname();
  const dropdownRef = useRef(null);
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the clicked element is outside the dropdown container
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    const handleRouteChange = () => {
      setDropdownOpen(false);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [dropdownOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
    { name: "Sign Up", path: "/sign-up" },
  ];

  return (
    <>
      <header className="lg:pb-4 pb-2 pt-8 px-8 lg:border-b-2 mytext sticky top-0 bg-white z-40">
        <div className="container flex justify-between items-center mx-auto">
          <div className="text-white text-lg flex items-center lg:block">
            <Link
              href="/"
              className="text-black text-[1.7rem] tracking-wide font-bold lg:ml-7"
            >
              Exculsive
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
                          currentPath === item.path
                            ? "scale-x-100"
                            : "scale-x-0"
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
                style={{ borderRadius: "0.3rem" }}
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
            {currentPath !== "/sign-up" && currentPath !== "/login" && (
              <div className="header-icons flex justify-between px-5 space-x-3">
                <Link
                  href="/wishlist"
                  className=" hover:bg-[#db4444] rounded-full w-11 h-11 text-center flex justify-center"
                >
                  <Image
                    src={
                      isWishlistHovered
                        ? "/images/wishlist-white.svg"
                        : "/images/wishlist.svg"
                    }
                    alt="Wishlist logo"
                    width={40}
                    height={30}
                    className="mx-3 "
                    onMouseEnter={() => setIsWishlistHovered(true)}
                    onMouseLeave={() => setIsWishlistHovered(false)}
                  />
                </Link>
                <Link
                  href="/cart"
                  className="relative hover:bg-[#db4444] rounded-full w-11 h-11 text-center flex justify-center items-center"
                  onMouseEnter={() => setIsCartHovered(true)}
                  onMouseLeave={() => setIsCartHovered(false)}
                >
                  <Image
                    src={
                      isCartHovered
                        ? "/images/cart-white.svg"
                        : "/images/cart.svg"
                    }
                    alt="Cart Logo"
                    width={35}
                    height={30}
                    className="mx-3"
                  />
                  {/* Cart Count Badge */}
                  <span className="absolute top-0 right-0 text-xs font-bold text-white bg-[#db4444] rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                </Link>

                <div
                  className="relative hover:bg-[#db4444] rounded-full w-10 h-10 flex justify-center items-center transition duration-300 dropdown-container"
                  ref={dropdownRef}
                  onMouseEnter={() => setIsUserHovered(true)}
                  onMouseLeave={() => setIsUserHovered(false)}
                >
                  <button
                    onClick={toggleDropdown}
                    className="focus:outline-none"
                  >
                    <Image
                      src={
                        isUserHovered
                          ? "/images/icons/user.svg"
                          : "/images/user.svg"
                      }
                      alt="User Logo"
                      width={35}
                      height={35}
                      className=""
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-12 right-0 shadow-lg border-none rounded-md w-72">
                      <AccountDropdown />
                    </div>
                  )}
                </div>
              </div>
            )}
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
          className={`lg:hidden block absolute left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ease-in-out ${
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
                onClick={() => setMenuOpen(false)}
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
          {currentPath !== "/sign-up" && currentPath !== "/login" && (
            <div className="header-icons flex justify-between px-5 pt-2">
              <Link
                href="/wishlist"
                className=" hover:bg-[#db4444] rounded-full w-10 h-10 text-center flex justify-center"
              >
                <Image
                  src={
                    isWishlistHovered
                      ? "/images/wishlist-white.svg"
                      : "/images/wishlist.svg"
                  }
                  alt="Wishlist logo"
                  width={40}
                  height={30}
                  className="mx-3 "
                  onMouseEnter={() => setIsWishlistHovered(true)}
                  onMouseLeave={() => setIsWishlistHovered(false)}
                />
              </Link>
              <Link
                href="/cart"
                className="relative hover:bg-[#db4444] rounded-full w-11 h-11 text-center flex justify-center items-center"
                onMouseEnter={() => setIsCartHovered(true)}
                onMouseLeave={() => setIsCartHovered(false)}
              >
                <Image
                  src={
                    isCartHovered
                      ? "/images/cart-white.svg"
                      : "/images/cart.svg"
                  }
                  alt="Cart Logo"
                  width={35}
                  height={30}
                  className="mx-3"
                />
                {/* Cart Count Badge */}
                <span className="absolute top-0 right-0 text-xs font-bold text-white bg-[#db4444] rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </Link>
              <div
                className="relative hover:bg-[#db4444] rounded-full w-10 h-10 flex justify-center items-center transition duration-300"
                onMouseEnter={() => setIsUserHovered(true)}
                onMouseLeave={() => setIsUserHovered(false)}
              >
                <button onClick={toggleDropdown} className="focus:outline-none">
                  <Image
                    src={
                      isUserHovered
                        ? "/images/icons/user.svg"
                        : "/images/user.svg"
                    }
                    alt="User Logo"
                    width={35}
                    height={35}
                    className=""
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-12 right-0 shadow-lg border-none rounded-md w-72">
                    <AccountDropdown />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="lg:hidden px-8">
        <div className="input-field relative w-full mt-5">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full py-2 px-4 rounded-md bg-[#f5f5f5] text-gray-700 focus:outline-none tracking-wider sm:text-sm"
            style={{ borderRadius: "0.3rem" }}
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
    </>
  );
};

export default Header;
