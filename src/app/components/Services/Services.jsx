import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <>
      <div className="container flex flex-wrap justify-center items-center lg:space-x-20 sm:space-y-10 mx-auto my-40">
        <div className="flex flex-col items-center justify-center text-center mr-10 lg:mr-0 sm:mr-0">
          <Image src="images/services/truck.svg" alt="" width={80} height={80} />
          <h3 className="mt-6 text-xl font-extrabold mx-auto text-center">FREE AND FAST DELIVERY</h3>
          <p className="mt-3">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Image src="images/services/music.svg" alt="" width={80} height={80} />
          <h3 className="mt-5 text-xl font-extrabold">24/7 CUSTOMER SERVICE</h3>
          <p className="mt-3">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-10 lg:mt-0 sm:mt-0">
          <Image src="images/services/tick.svg" alt="" width={80} height={80} />
          <h3 className="mt-5 text-xl font-extrabold">MONEY BACK GUARANTEE</h3>
          <p className="mt-3">We reurn money within 30 days</p>
        </div>
      </div>
    </>
  );
};

export default Services;
