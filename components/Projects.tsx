import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-center text-6xl pt-[35px] mb-5">
        PROJECTS
      </h2>
      <div className="container mx-auto 2xl px-4">
        <div className="flex-col flex md:flex-row mt-10 gap-8 justify-center">
          {/* Conversify AI */}
          <Link href="https://github.com/12StoneDesigns/Conversify-AI" target="_blank" rel="noopener noreferrer" className="z-[1] w-full">
            <div className="flex flex-col md:flex-row items-center mb-5 bg-[#0000001a] backdrop-blur-sm rounded-lg overflow-hidden hover:bg-[#ffffff0a] transition-all duration-250 w-full">
              <div className="w-[250px] h-[250px] relative m-4 mx-auto md:mx-4">
                <Image
                  src="/FirstProject.png"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  alt="Conversify AI"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 text-center md:text-left">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-2xl transition-all duration-250 hover:scale-105">Conversify AI</p>
                <p className="text-[#00FFFF] text-sm transition-all duration-250 hover:brightness-125">
                  Advanced conversational AI assistant
                  featuring context-aware responses and personality adaptation.
                </p>
              </div>
            </div>
          </Link>
          {/* Game Sentinel */}
          <Link href="https://github.com/12StoneDesigns/Game-Sentinel" target="_blank" rel="noopener noreferrer" className="z-[1] w-full">
            <div className="flex flex-col md:flex-row items-center mb-5 bg-[#0000001a] backdrop-blur-sm rounded-lg overflow-hidden hover:bg-[#ffffff0a] transition-all duration-250 w-full">
              <div className="w-[250px] h-[250px] relative m-4 mx-auto md:mx-4">
                <Image
                  src="/SecondProject.png"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  alt="Game Sentinel"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 text-center md:text-left">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-2xl transition-all duration-250 hover:scale-105">Game Sentinel</p>
                <p className="text-[#00FFFF] text-sm transition-all duration-250 hover:brightness-125">
                  Automated testing framework
                  player behavior and detect bugs in real-time.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row gap-8 justify-center mt-8">
          {/* Resolve IQ */}
          <Link href="https://github.com/12StoneDesigns/Resolve-IQ" target="_blank" rel="noopener noreferrer" className="z-[1] w-full">
            <div className="flex flex-col md:flex-row items-center mb-5 bg-[#0000001a] backdrop-blur-sm rounded-lg overflow-hidden hover:bg-[#ffffff0a] transition-all duration-250 w-full">
              <div className="w-[250px] h-[250px] relative m-4 mx-auto md:mx-4">
                <Image
                  src="/ThirdProject.png"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  alt="Resolve IQ"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 text-center md:text-left">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-2xl transition-all duration-250 hover:scale-105">Resolve IQ</p>
                <p className="text-[#00FFFF] text-sm transition-all duration-250 hover:brightness-125">
                  Smart complaint management system
                  categorization and resolution suggestions.
                </p>
              </div>
            </div>
          </Link>
          {/* CryptoSage */}
          <Link href="https://github.com/12StoneDesigns/CryptoSage" target="_blank" rel="noopener noreferrer" className="z-[1] w-full">
            <div className="flex flex-col md:flex-row items-center mb-5 bg-[#0000001a] backdrop-blur-sm rounded-lg overflow-hidden hover:bg-[#ffffff0a] transition-all duration-250 w-full">
              <div className="w-[250px] h-[250px] relative m-4 mx-auto md:mx-4">
                <Image
                  src="/CryptoSageProject.png"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  alt="CryptoSage"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 text-center md:text-left">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-2xl transition-all duration-250 hover:scale-105">CryptoSage</p>
                <p className="text-[#00FFFF] text-sm transition-all duration-250 hover:brightness-125">
                  ML-powered cryptocurrency analysis tool
                  investment insights using intermarket data.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row gap-8 justify-center mt-8">
          {/* DocSynth */}
          <Link href="https://github.com/12StoneDesigns/DocSynth" target="_blank" rel="noopener noreferrer" className="z-[1] w-full">
            <div className="flex flex-col md:flex-row items-center mb-5 bg-[#0000001a] backdrop-blur-sm rounded-lg overflow-hidden hover:bg-[#ffffff0a] transition-all duration-250 w-full">
              <div className="w-[250px] h-[250px] relative m-4 mx-auto md:mx-4">
                <Image
                  src="/DocSynthProject.png"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  alt="DocSynth"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 text-center md:text-left">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-2xl transition-all duration-250 hover:scale-105">DocSynth</p>
                <p className="text-[#00FFFF] text-sm transition-all duration-250 hover:brightness-125">
                  AI-powered document summarization tool
                  generates concise summaries from complex documents.
                </p>
              </div>
            </div>
          </Link>
          {/* WingMate-AI */}
          <Link href="https://github.com/12StoneDesigns/WingMate-AI" target="_blank" rel="noopener noreferrer" className="z-[1] w-full">
            <div className="flex flex-col md:flex-row items-center mb-5 bg-[#0000001a] backdrop-blur-sm rounded-lg overflow-hidden hover:bg-[#ffffff0a] transition-all duration-250 w-full">
              <div className="w-[250px] h-[250px] relative m-4 mx-auto md:mx-4">
                <Image
                  src="/WingMateAIProject.png"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  alt="WingMate-AI"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 text-center md:text-left">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-2xl transition-all duration-250 hover:scale-105">WingMate-AI</p>
                <p className="text-[#00FFFF] text-sm transition-all duration-250 hover:brightness-125">
                  NLP-powered social interaction assistant
                  suggestions and social cues analysis.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row gap-8 justify-center mt-8">
          {/* AIorNOT */}
          <Link href="https://github.com/12StoneDesigns/AIorNot" target="_blank" rel="noopener noreferrer" className="z-[1] w-full">
            <div className="flex flex-col md:flex-row items-center mb-5 bg-[#0000001a] backdrop-blur-sm rounded-lg overflow-hidden hover:bg-[#ffffff0a] transition-all duration-250 w-full">
              <div className="w-[250px] h-[250px] relative m-4 mx-auto md:mx-4">
                <Image
                  src="/AIorNOTProject.png"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  alt="AIorNOT"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 text-center md:text-left">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-2xl transition-all duration-250 hover:scale-105">AIorNOT</p>
                <p className="text-[#00FFFF] text-sm transition-all duration-250 hover:brightness-125">
                  Content verification tool
                  AI-generated content across multiple media types.
                </p>
              </div>
            </div>
          </Link>
          {/* SoundPainter */}
          <Link href="#" className="z-[1] w-full">
            <div className="flex flex-col md:flex-row items-center mb-5 bg-[#0000001a] backdrop-blur-sm rounded-lg overflow-hidden hover:bg-[#ffffff0a] transition-all duration-250 w-full">
              <div className="w-[250px] h-[250px] relative m-4 mx-auto md:mx-4">
                <Image
                  src="/SoundPainterProject.png"
                  fill
                  sizes="250px"
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                  alt="SoundPainter"
                />
              </div>
              <div className="p-6 flex flex-col gap-4 flex-1 text-center md:text-left">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#6600FF] font-semibold text-2xl transition-all duration-250 hover:scale-105">SoundPainter</p>
                <p className="text-[#00FFFF] text-sm transition-all duration-250 hover:brightness-125">
                  Creative tool that transforms audio
                  creating unique visual representations of sound.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
