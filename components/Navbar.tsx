"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          title="Tyler Love"
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/logo.png"
            alt="Tyler Love - Full Stack Developer & AI Engineer"
            width={40}
            height={40}
            priority
            className="w-[40px] h-[40px]"
          />
        </a>

        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("mailto:your-email@example.com")}
className="z-[1] bg-transparent padding-10 cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-neon-blue py-2 px-5"
          >
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
