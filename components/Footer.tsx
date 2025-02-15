"use client";
import React from "react";
import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC<{}> = () => {
  return (
    <div className="container mx-auto 2xl pt-[50px] pb-8">
      <div className="pb-10 justify-center flex">
        {Social_Icons.map((social) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1]"
            >
              <div className="w-[30px] h-[30px] relative mx-5">
                <Image
                  src={social.image}
                  fill
                  style={{ objectFit: "contain", filter: "drop-shadow(0 0 10px #00f3ff) brightness(0) saturate(100%) invert(80%) sepia(72%) saturate(4766%) hue-rotate(155deg) brightness(106%) contrast(107%)" }}
                  alt={social.alt}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-[#6600FF] text-center text-sm transition-all duration-300 hover:scale-105">
        Made by 12Stone Designs with Node.js
      </p>
    </div>
  );
};

export default Footer;
