"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Music = () => {
  const targetDate = new Date("2024-12-20T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="relative mt-10 flex flex-col lg:flex-row justify-between bg-black mb-20 md:mx-10 sm:mx-4 mx-32 lg:mx-40 music-container">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full text-white px-10 lg:px-20 mt-10 lg:mt-20">
          <h3 className="text-[1.2rem] text-[#00ff66]">Categories</h3>
          <h1 className="text-[2rem] lg:text-[3rem] mt-6 font-semibold leading-snug">
            Enhance Your Music Experience
          </h1>
          <div className="flex flex-wrap justify-center lg:justify-start items-center mt-10 gap-4">
            <div className="flex flex-col items-center justify-center bg-white text-black w-16 h-16 sm:w-16 sm:h-16 rounded-full">
              <span className="text-base sm:text-xs font-bold">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-xs">Hours</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-black w-16 h-16 sm:w-16 sm:h-16 rounded-full">
              <span className="text-base sm:text-xs font-bold">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-xs">Days</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-black w-16 h-16 sm:w-16 sm:h-16 rounded-full">
              <span className="text-base sm:text-xs font-bold">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-xs">Minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-black w-16 h-16 sm:w-16 sm:h-16 rounded-full">
              <span className="text-base sm:text-xs font-bold">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-xs">Seconds</span>
            </div>
          </div>

          <div className="my-10 ">
            <button className="bg-[#00ff66] hover:bg-[#3cdf57] py-4 px-12 text-white rounded-md">
              Buy Now!
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full relative mt-10 lg:mt-0">
          <div className="relative h-64 lg:h-full w-full">
            <Image
              src="/images/music-player.svg"
              alt="Music Player"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Music;
