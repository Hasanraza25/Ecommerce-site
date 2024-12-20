import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="container flex flex-col lg:flex-row justify-center items-center mx-auto my-20 lg:space-x-10 space-y-20">
        <div className="bg-[#cbe4e8] lg:w-[60%] ">
          <img src="/images/mobile-shopping.svg" alt="" />
        </div>
        <div className="flex flex-col lg:space-y-10 lg:px-14 px-10 lg:w-[40%] w-full">
          <div className="space-y-5 lg:mb-0 mb-10">
            <h1 className="text-4xl">Create an Account</h1>
            <p>Enter your details below</p>
          </div>
          <form className="flex flex-col space-y-8 auth-fields mb-16">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email or Phone Number" />
            <input type="text" placeholder="Password" />
            <button
              type="submit"
              className="bg-[#db4444] hover:bg-[#fa4545] p-4 text-white text-lg"
              style={{ borderRadius: "0.3rem" }}
            >
              Create Account
            </button>
            <button
              className="flex border border-[#999999] justify-center space-x-5 p-4"
              style={{ borderRadius: "0.3rem" }}
            >
              <img src="/images/icons/google.svg" alt="" />
              <h3>Sign up with Google</h3>
            </button>
          </form>
          <div className="flex justify-center space-x-4 ">
            <h4 className="text-lg">Already have an account?</h4>
            <div className="relative">
              <Link href="/login" className="text-lg relative group pb-1 text-[#4d4d4d] font-semibold">
                Login
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#808080] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
