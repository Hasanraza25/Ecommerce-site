"use client"
import Link from "next/link";
import React, { useState } from "react";

const AccountPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="container px-8 mx-auto overflow-hidden my-20">
      <div className="flex justify-between">
        <h4 className="text-lg text-[#808080] mb-10">
          Home / <span className="text-black"> My Account</span>
        </h4>
        <h4 className="text-lg text-black mb-10">
          Welcome! <span className="text-[#db4444]"> Hasan Raza</span>
        </h4>
      </div>

      {/* Sidebar Toggle Button (visible only on mobile/tablet) */}
      <button
        className="lg:hidden text-black text-xl mb-5 inset-y-0"
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰ {/* Menu icon */}
      </button>

      <div className="flex flex-wrap text-lg justify-around gap-10">
        {/* Sidebar */}
        <div
          className={`lg:flex flex-col space-y-6 transform transition-all duration-300 ease-in-out ${
            isSidebarOpen ? "fixed top-0 left-0 z-50 w-3/4 h-full bg-white shadow-lg p-6 transform transition-all duration-300 ease-in-out" : "hidden"
          }`}
        >
          <div className="space-y-4">
            {/* Sidebar Close Button */}
            <button
              className="lg:hidden text-black text-xl mb-5"
              onClick={() => setIsSidebarOpen(false)}
            >
              &larr; {/* Back Arrow icon */}
            </button>
            <h4 className="font-bold tracking-wider text-xl">
              Manage My Account
            </h4>
            <ul className="flex flex-col justify-end items-start ml-8 space-y-3">
              <Link href={"#"}>
                <li>My Profile</li>
              </Link>
              <Link href={"#"}>
                <li>Address Book</li>
              </Link>
              <Link href={"#"}>
                <li>My Payment Options</li>
              </Link>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold tracking-wider text-xl">My Orders</h4>
            <ul className="flex flex-col justify-end items-start ml-8 space-y-3">
              <Link href={"#"}>
                <li>My Returns</li>
              </Link>
              <Link href={"#"}>
                <li>My Cancellations</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex flex-col flex-wrap rounded-lg shadow-lg md:p-20 p-5 lg:w-[70%] mdd:w-full bg-white">
          <form action="" className="flex flex-wrap gap-6 w-full items-start">
            <div className="flex flex-wrap justify-between w-full gap-6">
              {/* First Name */}
              <div className="w-full lg:w-[48%]">
                <label className="text-sm font-semibold text-gray-600 mb-2 block">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Md"
                  className="bg-[#f5f5f5] p-3 text-lg sm:text-sm text-[#828282] rounded-lg outline-none w-full"
                />
              </div>

              {/* Last Name */}
              <div className="w-full lg:w-[48%]">
                <label className="text-sm font-semibold text-gray-600 mb-2 block">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Rimel"
                  className="bg-[#f5f5f5] p-3 text-lg sm:text-sm text-[#828282] rounded-lg outline-none w-full"
                />
              </div>

              {/* Email */}
              <div className="w-full lg:w-[48%]">
                <label className="text-sm font-semibold text-gray-600 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="rimel111@gmail.com"
                  className="bg-[#f5f5f5] p-3 text-lg sm:text-sm text-[#828282] rounded-lg outline-none w-full"
                />
              </div>

              {/* Address */}
              <div className="w-full lg:w-[48%]">
                <label className="text-sm font-semibold text-gray-600 mb-2 block">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Kingston, 5236, United State"
                  className="bg-[#f5f5f5] p-3 text-lg sm:text-sm text-[#828282] rounded-lg outline-none w-full"
                />
              </div>
            </div>

            {/* Password Changes */}
            <div className="w-full mt-8">
              <label className="text-sm font-semibold text-gray-600 mb-4 block">
                Password Changes
              </label>
              <div className="flex flex-wrap gap-6">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="bg-[#f5f5f5] p-3 text-lg sm:text-sm text-[#828282] rounded-lg outline-none w-full"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="bg-[#f5f5f5] p-3 text-lg sm:text-sm text-[#828282] rounded-lg outline-none w-full"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="bg-[#f5f5f5] p-3 text-lg sm:text-sm text-[#828282] rounded-lg outline-none w-full"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between w-full mt-6">
              <button
                type="button"
                className="text-gray-600 bg-transparent hover:underline py-3 px-6 sm:hidden ml-auto rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#db4444] hover:bg-[#fa4545] text-lg sm:text-base py-3 px-12 sm:w-full text-white rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
