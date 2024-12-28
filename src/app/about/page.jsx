"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AboutMain from "../components/AboutMain/AboutMain";
import AboutStats from "../components/AboutStats/AboutStats";
import AboutTeam from "../components/AboutTeam/AboutTeam";

const AboutPage = () => {
  return (
    <div className="container md:px-12 px-5 mx-auto my-20 mb-32">
      <h4 className="text-lg text-[#808080] mb-10">
        <Link href={"/"}>Home</Link> /{" "}
        <Link href={"/about"}>
          <span className="text-black"> About</span>
        </Link>
      </h4>
      <AboutMain />
      <AboutStats />
      <AboutTeam />
    </div>
  );
};

export default AboutPage;
