import React from "react";

const Music = () => {
  return (
    <>
      <div className="relative h-auto w-[90rem] mt-10 container mx-auto flex bg-black mb-20 ">
        {/* Slides container */}
        <div className="flex transition-transform duration-500 ease-in-out mt-20">
          <div className="flex-none w-full h-full flex items-center justify-start ">
            <div className="h-full text-white px-20">
              <div className="flex justify-between items-center w-[13rem]">
                <h3 className="text-[1.2rem] text-[#00ff66]">Categories</h3>
              </div>
              <h1 className="text-[3rem] mt-6 font-semibold leading-snug">
                Enhance Your Music Experience
              </h1>
              <div>
                <div className="flex flex-row items-center mt-10">
                  <h4 className="flex flex-col justify-center items-center leading-5 bg-white w-[4.7rem] h-[4.7rem] rounded-full text-black mr-8">
                    <span className="font-bold text-[1.3rem]">23</span>
                    <span className="text-sm">Hours</span>
                  </h4>
                  <h4 className="flex flex-col justify-center items-center leading-5 bg-white w-[4.7rem] h-[4.7rem] rounded-full text-black mr-8">
                    <span className="font-bold text-[1.3rem]">05</span>
                    <span className="text-sm">Days</span>
                  </h4>
                  <h4 className="flex flex-col justify-center items-center leading-5 bg-white w-[4.7rem] h-[4.7rem] rounded-full text-black mr-8">
                    <span className="font-bold text-[1.3rem]">59</span>
                    <span className="text-sm">Minutes</span>
                  </h4>
                  <h4 className="flex flex-col justify-center items-center leading-5 bg-white w-[4.7rem] h-[4.7rem] rounded-full text-black mr-8">
                    <span className="font-bold text-[1.3rem]">35</span>
                    <span className="text-sm">Seconds</span>
                  </h4>
                </div>
              </div>

              <div className="my-14">
                <button className="bg-[#00ff66] hover:bg-[#3cdf57] py-4 px-12 text-white rounded-[5px]">
                  Buy Now!
                </button>
              </div>
            </div>
          </div>
        </div>

        <img src="/images/music-player.svg" alt="" width={1500} height={1500} />
      </div>
    </>
  );
};

export default Music;
