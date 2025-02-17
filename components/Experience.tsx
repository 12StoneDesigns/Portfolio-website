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
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#39FF14] to-[#6600FF]">12Stone Designs /</span> Founder & Digital Solutions Architect
            </p>
          </div>
          <p className="text-[#00FFFF] md:pt-0 pt-3">Present</p>
        </div>
        <p className="text-[#00FFFF] pt-5 transition-all duration-300 hover:brightness-125">
          Developed AI-powered web applications that enhance automation, efficiency, and scalability.
          Designed and deployed RESTful APIs and microservices to support dynamic, high-performance systems.
          Integrated machine learning models for real-time data analysis and predictive insights.
          Created responsive, intuitive front-end experiences using React and modern UI/UX principles.
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
          <p className="text-[#00FFFF] md:pt-0 pt-3">2022 - 2024</p>
        </div>
        <p className="text-[#00FFFF] pt-5 transition-all duration-300 hover:brightness-125">
          Led a complete digital transformation, implementing online ordering and AI-driven customer analytics.
          Developed a dynamic, high-performance website using React and Django, increasing online engagement by 40%.
          Devised and executed targeted marketing strategies using SEO, Google Analytics, and automated campaigns.
          Optimized cloud infrastructure and databases to improve site speed and reliability.
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
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#39FF14] to-[#6600FF]">Lennox National Accounts /</span> Operations Manager
            </p>
          </div>
          <p className="text-[#00FFFF] md:pt-0 pt-3">2013 - 2022</p>
        </div>
        <p className="text-[#00FFFF] pt-5 transition-all duration-300 hover:brightness-125">
          Oversaw multi-state HVAC operations, ensuring compliance and operational excellence.
          Developed and deployed automated tracking systems to improve service dispatch efficiency.
          Negotiated vendor contracts, reducing operational expenses by 15%.
          Implemented workforce management tools to optimize scheduling and resource allocation.
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
