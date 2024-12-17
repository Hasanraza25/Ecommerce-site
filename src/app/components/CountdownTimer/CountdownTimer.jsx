"use client";
import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
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

  // Update the time every second
  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval
  }, []);

  if (!isClient) {
    // Return nothing or fallback UI during server-side render
    return null;
  }

  return (
    <div className="flex justify-center text-black mx-10">
      {/* Time Sections */}
      <div className="flex space-x-2">
        {/* Days */}
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold tracking-wider mb-1">Days</span>
          <span className="text-4xl font-bold">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
        </div>

        {/* Colon between numbers */}
        <span className="text-4xl font-bold mt-[1.1rem] text-[#E07575]">:</span>

        {/* Hours */}
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold tracking-wider mb-1">Hours</span>
          <span className="text-4xl font-bold">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
        </div>

        {/* Colon between numbers */}
        <span className="text-4xl font-bold mt-[1.1rem] text-[#E07575]">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold tracking-wider mb-1">Minutes</span>
          <span className="text-4xl font-bold">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
        </div>

        {/* Colon between numbers */}
        <span className="text-4xl font-bold mt-[1.1rem] text-[#E07575]">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <span className="text-xs font-semibold tracking-wider mb-1">Seconds</span>
          <span className="text-4xl font-bold">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
