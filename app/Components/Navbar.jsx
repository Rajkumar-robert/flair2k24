"use client";

import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[90px] fixed w-full z-20 flex flex-col justify-center px-5 bg-transparent">
      <div className="flex justify-between  px-10 items-center rounded-lg  py-4">
        <Image src={"/assets/images/logo.png"} width={50} height={50}></Image>
        <div className="flex justify-evenly items-center gap-10 text-white text-sm">
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <a href="">Events</a>
          </div>
          <div>
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
