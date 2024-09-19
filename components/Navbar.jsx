"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-20 flex flex-col justify-center px-5 sm:py-2 bg-black sm:bg-transparent ${className}`}
    >
      <div
        className={`flex justify-between sm:px-10 items-center rounded-lg py-3 ${
          isScrolled ? "bg-black" : ""
        }`}
      >
        <Image src="/assets/images/licet-logo.png" height={60} width={60} />
        <div className={`flex justify-evenly items-center gap-10 text-sm `}>
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
