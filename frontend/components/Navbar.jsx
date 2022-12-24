import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 py-2 rounded dark:bg-[#2C74B3]">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
            <Image
              src="/assets/logo.svg"
              className="h-[100px] mr-3"
              alt="Trust Logo"
              width="150"
              height="100"
            />
            <span className="self-center text-xl uppercase font-semibold whitespace-nowrap dark:text-black">
              Trust App
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
