import Link from "next/link";
import React from "react";

const AccountPage = () => {
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
      <div className="flex text-lg">
        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <h4 className="font-bold tracking-wider text-xl">Manage My Account</h4>
            <ul className="flex flex-col justify-end items-start ml-8 space-y-3">
              <Link href={'#'}><li>My Profile</li></Link>
              <Link href={'#'}><li>Address Book</li></Link>
              <Link href={'#'}><li>My Payment Options</li></Link>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold tracking-wider text-xl">My Orders</h4>
            <ul className="flex flex-col justify-end items-start ml-8 space-y-3">
            <Link href={'#'}><li>My Returns</li></Link>
            <Link href={'#'}><li>My Cancellations</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
