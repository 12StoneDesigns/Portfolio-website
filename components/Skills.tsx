import React from "react";

const Skills: React.FC<{}> = () => {
  return (
    <section id="skills">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-center text-6xl pt-[35px] mb-5">
        SKILLS & CERTIFICATIONS
      </h2>
      <div className="container mx-auto 2xl">
        {/* Development Skills */}
        <div className="mb-8">
          <h3 className="text-[#00FFFF] text-2xl font-semibold mb-4">Development</h3>
          <div className="flex flex-wrap gap-3">
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              Python
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              JavaScript
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              TypeScript
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              Django
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              React
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              Node.js
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              PostgreSQL
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              MongoDB
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              Git
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              Docker
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              AWS
            </div>
            <div className="bg-transparent cursor-pointer rounded-3xl neon-blue py-2 px-5 border border-[#2E2E2E]">
              CI/CD
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-8">
          <h3 className="text-[#00FFFF] text-2xl font-semibold mb-4">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Web Development */}
            <div className="bg-[#0000001a] backdrop-blur-sm rounded-lg p-4">
              <h4 className="text-[#00FFFF] font-semibold mb-2">Web Development</h4>
              <ul className="text-[#00FFFF] space-y-2">
                <li>• Responsive Web Design Certification (freeCodeCamp)</li>
                <li>• JavaScript Algorithms and Data Structures (freeCodeCamp)</li>
                <li>• Front End Development Libraries (freeCodeCamp)</li>
              </ul>
            </div>

            {/* Python & Data Science */}
            <div className="bg-[#0000001a] backdrop-blur-sm rounded-lg p-4">
              <h4 className="text-[#00FFFF] font-semibold mb-2">Python & Data Science</h4>
              <ul className="text-[#00FFFF] space-y-2">
                <li>• Scientific Computing with Python (freeCodeCamp)</li>
                <li>• Data Analysis with Python (freeCodeCamp)</li>
                <li>• Machine Learning with Python (freeCodeCamp)</li>
              </ul>
            </div>

            {/* Additional Certifications */}
            <div className="bg-[#0000001a] backdrop-blur-sm rounded-lg p-4 md:col-span-2">
              <h4 className="text-[#00FFFF] font-semibold mb-2">Additional Certifications</h4>
              <ul className="text-[#00FFFF] space-y-2">
                <li>• Google Analytics Certification (Google)</li>
                <li>• Foundational C# with Microsoft (freeCodeCamp)</li>
                <li>• Agile with Atlassian Jira (Coursera)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
