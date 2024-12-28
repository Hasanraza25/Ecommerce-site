import React from "react";

const AboutMain = () => {
  return (
    <>
      <div className="flex flex-wrap gap-20 lg:gap-0 items-center justify-center">
        <div className="flex flex-col lg:w-1/2 lg:mt-30 mt-20">
          <h1 className="text-5xl font-bold tracking-wider mb-10">Our Story</h1>
          <p className="tracking-wider lg:w-[80%] mb-10">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="tracking-wider lg:w-[80%]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-end">
          <img
            src="/images/about-side-image.svg"
            alt=""
            className="w-full md:w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default AboutMain;
