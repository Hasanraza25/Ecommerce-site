import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="container flex flex-col lg:flex-row justify-center items-center mx-auto my-20 lg:space-x-10 space-y-20 login-container">
        <div className="bg-[#cbe4e8] lg:w-[60%] login-one">
          <img src="/images/mobile-shopping.svg" alt="" />
        </div>
        <div className="flex flex-col lg:space-y-10 lg:px-14 px-10 lg:w-[40%] w-full login-two">
          <div className="space-y-5 lg:mb-0 mb-10">
            <h1 className="text-4xl font-bold">Log in to Exclusive</h1>
            <p>Enter your details below</p>
          </div>
          <form className="flex flex-col space-y-8 auth-fields mb-16">
            <input type="text" placeholder="Email or Phone Number" />
            <input type="text" placeholder="Password" />
            <div className="flex justify-between items-center sm:flex-col sm:space-y-5">
              <button
                type="submit"
                className="bg-[#db4444] hover:bg-[#fa4545] p-4 px-16 text-white text-lg"
                style={{ borderRadius: "0.3rem" }}
              >
                Login
              </button>
              <Link href="#" className="text-[#db4444] text-lg hover:underline">Forget Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
