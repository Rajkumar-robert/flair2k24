"use client";

import React from "react";
import Image from "next/image";

const Navbar = ({ className }) => {
  return (
    <div
      className={` fixed w-full z-20 flex flex-col justify-center px-5 sm:py-2 bg-black sm:bg-transparent ${className}`}
    >
      <div className="flex justify-between sm:px-10 items-center rounded-lg py-2 ">
        <Image src={"/assets/images/licet-logo.png"} height={80} width={80} />
        <div className="flex justify-evenly items-center gap-10 text-white text-sm">
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">Events</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
