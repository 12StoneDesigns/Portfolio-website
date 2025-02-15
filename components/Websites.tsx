"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Websites: React.FC<{}> = () => {
  return (
    <section id="websites">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-center text-6xl pt-[35px] mb-5">
        WEBSITES I&apos;VE BUILT
      </h2>
      <div className="container mx-auto 2xl px-4">
        <div className="flex-col flex md:flex-row mt-10 gap-8 justify-center">
          {/* 12Stone Designs */}
          <Link href="https://12stonedesigns.com" target="_blank" rel="noopener noreferrer" className="z-[1] w-full">
            <div className="flex flex-col md:flex-row items-center mb-5 bg-[#0000001a] backdrop-blur-sm rounded-lg overflow-hidden hover:bg-[#ffffff0a] transition-all duration-250 w-full">
              <div className="w-[250px] h-[250px] relative m-4 mx-auto md:mx-4">
                <Image
                  src="/12stone-designs-high-resolution-logo.png"
                  fill
                  sizes="250px"
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                  alt="12Stone Designs"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 text-center md:text-left">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-2xl transition-all duration-250 hover:scale-105">12Stone Designs</p>
                <p className="text-[#00FFFF] text-sm transition-all duration-250 hover:brightness-125">
                  Digital agency specializing in AI-powered solutions and innovative web development.
                </p>
              </div>
            </div>
          </Link>
          {/* Portfolio Website */}
          <Link href="/" className="z-[1] w-full">
            <div className="flex flex-col md:flex-row items-center mb-5 bg-[#0000001a] backdrop-blur-sm rounded-lg overflow-hidden hover:bg-[#ffffff0a] transition-all duration-250 w-full">
              <div className="w-[250px] h-[250px] relative m-4 mx-auto md:mx-4">
                <Image
                  src="/logo.png"
                  fill
                  sizes="250px"
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                  alt="Portfolio Website"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 text-center md:text-left">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-2xl transition-all duration-250 hover:scale-105">Portfolio Website</p>
                <p className="text-[#00FFFF] text-sm transition-all duration-250 hover:brightness-125">
                  Modern portfolio showcasing my expertise in Full Stack Development and AI Engineering, built with Next.js and Tailwind CSS.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Websites;
