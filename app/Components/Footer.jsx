import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex gap-10 h-30vh bg-black w-full">
      <div className="">
        <Image src={"/assets/images/logo.png"} width={50} height={50}></Image>
      </div>
    </div>
  );
};

export default Footer;
