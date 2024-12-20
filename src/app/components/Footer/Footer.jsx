import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="container footer-container flex flex-wrap items-start sm:items-center sm:justify-center sm:text-center px-10 text-white md:space-y-0 mx-auto py-20 md:justify-between">
          <div className="flex flex-col w-60">
            <h3 className="text-2xl font-bold tracking-widest mb-5">
              Exclusive
            </h3>
            <h5 className="text-xl mb-4">Subscribe</h5>
            <p className="text-md tracking-wide mb-3">
              Get 10% off your first order
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-2 bg-black p-3 tracking-wide"
                style={{ borderRadius: "0.3rem" }}
              />
              <img
                src="images/icons/arrow-map.svg"
                alt="Arrow Icon"
                className="absolute right-4 bottom-0 transform translate-y-[-75%]"
              />
            </div>
          </div>

          <div className="flex flex-col w-60 two">
            <h3 className="text-2xl font-medium tracking-wide mb-5">Support</h3>
            <ul className="space-y-5 text-base tracking-wide">
              <li>111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>
                <Link
                  href="mailto:exclusive@gmail.com"
                  className="hover:underline"
                >
                  exclusive@gmail.com
                </Link>
              </li>
              <li>
                <Link href="tel:+88015888889999" className="hover:underline">
                  +88015-88888-9999
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-60 md:mt-20 lg:mt-0 three">
            <h3 className="text-2xl font-medium tracking-wide mb-5">Account</h3>
            <ul className="space-y-5 text-base tracking-wide">
              <li>
                <Link href="/account" className="hover:underline">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:underline">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:underline">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-60 md:mt-20 lg:mt-0 four">
            <h3 className="text-2xl font-medium tracking-wide mb-5">
              Quick Link
            </h3>
            <ul className="space-y-5 text-base tracking-wide">
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:underline">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col w-60 md:mt-20 lg:mt-0 five flex-none">
            <h3 className="text-2xl font-medium tracking-wide mb-5">
              Download App
            </h3>
            <p className="text-sm tracking-wide text-[#afafaf] mb-2">
              Save $3 with App New User Only
            </p>
            <img src="images/download-app.svg" alt="Download App" />
            <div className="icons flex space-x-9 mt-5">
              <Link href="https://facebook.com">
                <img src="images/icons/facebook.svg" alt="Facebook" />
              </Link>
              <Link href="https://twitter.com">
                <img src="images/icons/twitter.svg" alt="Twitter" />
              </Link>
              <Link href="https://instagram.com">
                <img src="images/icons/instagram.svg" alt="Instagram" />
              </Link>
              <Link href="https://linkedin.com">
                <img src="images/icons/linkedin.svg" alt="LinkedIn" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-[#afafaf] text-center tracking-wide border-t border-t-[#afafaf] py-3 sm:text-sm">&copy; Copyright Hasan Raza 2024. All right reserved</div>
      </div>
    </>
  );
};

export default Footer;
