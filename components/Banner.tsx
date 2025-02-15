"use client";

import React from "react";
import Image from "next/image";

const Banner: React.FC<{}> = () => {
  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20] ">
      <div className="flex flex-col justify-center text-center">
        <div className="justify-center flex">
          <Image
            priority
            src="/logo.png"
            height={250}
            width={250}
            alt="Tyler Love"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col gap-6 mt-10 tracking-tighter text-7xl font-semibold max-w-[600px] w-auto h-auto">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] via-[#00FF99] to-[#6600FF] hover:from-[#6600FF] hover:via-[#00FF99] hover:to-[#00FF00] transition-all duration-500">
            Tyler Love
          </span>
        </div>
        <div className="flex justify-center">
          <p className="text-2xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#6600FF]">
            Crafting Intelligent Digital Solutions with Precision & Passion
          </p>
        </div>

        <p className="text-md text-[#00FFFF] my-5 max-w-[600px] transition-all duration-300 hover:brightness-125 hover:scale-105">
          Full Stack Developer & AI Engineer specializing in creating innovative solutions 
          that bridge the gap between human interaction and artificial intelligence.
        </p>
        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:your-email@example.com")}
            className="z-[1] padding-20 hover:bg-[#00FFFF] rounded-3xl text-[#00FFFF] font-semibold hover:text-black py-3 px-10 border-[0.1px] border-[#00FFFF] hover:border-transparent"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
