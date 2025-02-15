import Image from "next/image";
import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-center text-6xl pt-[35px] mb-5">
        EXPERIENCE
      </h2>
      <div className="container mx-auto 2xl">
        {/* 12Stone Designs */}
        <div className="md:flex md:flex-row md:justify-between pt-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              height={30}
              width={30}
              alt="12Stone Designs"
            />
            <p className="text-[#00FFFF] transition-all duration-300 hover:brightness-125">
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#39FF14] to-[#6600FF]">12Stone Designs /</span> AI Engineer
            </p>
          </div>
          <p className="text-[#00FFFF] md:pt-0 pt-3">Present</p>
        </div>
        <p className="text-[#00FFFF] pt-5 transition-all duration-300 hover:brightness-125">
          Leading the development of AI-driven web applications, focusing on innovative 
          solutions that combine artificial intelligence with user-centric design. 
          Specializing in creating intelligent systems that enhance user experience 
          and business efficiency.
        </p>
        <div className="flex-col flex sm:flex-row">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E] w-max">
            Python
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E] w-max">
            TensorFlow
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E] w-max">
            Node.js
          </div>
        </div>

        {/* Mutt Brewing Co. */}
        <div className="md:flex md:flex-row md:justify-between pt-10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              height={30}
              width={30}
              alt="Mutt Brewing Co."
            />
            <p className="text-[#00FFFF] transition-all duration-300 hover:brightness-125">
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#39FF14] to-[#6600FF]">Mutt Brewing Co. /</span> Digital Strategy Lead
            </p>
          </div>
          <p className="text-[#00FFFF] md:pt-0 pt-3">2022 - 2023</p>
        </div>
        <p className="text-[#00FFFF] pt-5 transition-all duration-300 hover:brightness-125">
          Spearheaded digital transformation initiatives, implementing modern web solutions 
          and automation systems to streamline operations and enhance customer experience.
        </p>
        <div className="flex-col flex sm:flex-row">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E] w-max">
            AWS
          </div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E] w-max">
            Docker
          </div>
        </div>

        {/* Lennox National Accounts */}
        <div className="md:flex md:flex-row md:justify-between pt-10">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              height={30}
              width={30}
              alt="Lennox National Accounts"
            />
            <p className="text-[#00FFFF] transition-all duration-300 hover:brightness-125">
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#39FF14] to-[#6600FF]">Lennox National Accounts /</span> Operations Engineer
            </p>
          </div>
          <p className="text-[#00FFFF] md:pt-0 pt-3">2020 - 2022</p>
        </div>
        <p className="text-[#00FFFF] pt-5 transition-all duration-300 hover:brightness-125">
          Developed and implemented automation solutions for operational processes, 
          resulting in significant efficiency improvements and cost savings. Led the 
          digital transformation of key business processes.
        </p>
        <div className="flex-col flex sm:flex-row">
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E] w-max">
            Python
          </div>
          <div className="bg-transparent mt-5 mr-2 cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E] w-max">
            SQL
          </div>
          <div className="bg-transparent mt-5 cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E] w-max">
            Automation
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
