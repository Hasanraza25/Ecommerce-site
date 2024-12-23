import React from "react";

const CheckOut = () => {
  return (
    <div className="container px-8 mx-auto overflow-hidden my-20">
      <h4 className="text-lg text-[#808080] mb-10">
        Home / My Account / Product / View Cart /{" "}
        <span className="text-black"> CheckOut</span>
      </h4>
      <div className="container">
        <h1 className="text-3xl font-medium tracking-wide py-5">
          Billing Details
        </h1>
        <form action="">
          <div className="flex justify-between mt-4 w-full space-x-20">
            <ul className="text-[#999999] text-sm tracking-wide space-y-4 w-full">
              <li className="space-y-1 w-full">
                <h5>First Name</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Company Name</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Street Address</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Apartment, floor, etc. &#40;optional&#41;</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Town/City*</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Phone Number*</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <li>
                <h5>Email Address*</h5>
                <input
                  type="text"
                  className="bg-[#f5f5f5] w-full rounded-[5px] py-3 px-2 "
                />
              </li>
              <div className="flex space-x-2 items-center">
                <input
                  type="checkbox"
                  id="save-info"
                  className="peer hidden" // Hide default checkbox
                />
                <label
                  htmlFor="save-info"
                  className="w-5 h-5 border-2 border-gray-300 rounded-sm peer-checked:bg-red-500 peer-checked:border-red-500 peer-checked:ring-2 peer-checked:ring-white peer-checked:ring-offset-2 cursor-pointer"
                >
                  <svg
                    className="w-full h-full text-white peer-checked:block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </label>
                <p>Save this information for faster check-out next time</p>
              </div>
            </ul>
           <div>
            
           </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
