import Link from "next/link";
import React from "react";

const AccountDropdown = () => {
  return (
    <>
      <div className="container backdrop-blur-lg bg-[#6f6072]/60 text-white border-none flex flex-col justify-center px-5 py-3 space-y-7" style={{ borderRadius: '0.4rem'}}>
        <div className="relative flex space-x-5 items-center mt-3">
          <img src="/images/icons/user.svg" alt="" />
          <Link href="/account">
            <h3 className="-ml-2">Manage My Account</h3>
          </Link>
        </div>
        <div className="flex space-x-5 items-center">
          <img src="/images/icons/mallbag.svg" alt="" />
          <Link href="#">
            <h3>My Order</h3>
          </Link>
        </div>
        <div className="flex space-x-5 items-center">
          <img src="/images/icons/cancel.svg" alt="" />
          <Link href="#">
            <h3>My Cancellation</h3>
          </Link>
        </div>
        <div className="flex space-x-5 items-center">
          <img src="/images/icons/review.svg" alt="" />
          <Link href="#">
            <h3>My Reviews</h3>
          </Link>
        </div>
        <div className="flex space-x-5 items-center">
          <img src="/images/icons/logout.svg" alt="" />
          <Link href="/login">
            <h3 className="ml-1">Logout</h3>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AccountDropdown;
