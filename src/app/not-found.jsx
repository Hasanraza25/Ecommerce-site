import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="container md:px-12 px-5 mx-auto my-20 mb-40">
      <h4 className="text-lg text-[#808080] mb-10">
        <Link href={"/"}>Home</Link> /{" "}
        <Link href={"/not-found"}>
          <span className="text-black"> 404 Error</span>
        </Link>
      </h4>

      <div className="flex flex-col item-center justify-center text-center mx-auto gap-5">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold">Oops! Page Not Found</h2>
        <p className="text-lg tracking-wider">
        Your visited page not found. You may go home page.
        </p>
        <Link href={"/"}>
          <button className="bg-[#db4444] hover:bg-[#fa4545] py-3 px-12 lg:w-auto w-full text-white ml-auto rounded-[5px]">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
