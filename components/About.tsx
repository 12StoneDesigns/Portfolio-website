import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px]">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#39FF14] to-[#6600FF] font-semibold text-6xl mb-5">ABOUT ME</h1>
        <p className="text-[#00FFFF] text-center transition-all duration-300 hover:brightness-125 hover:scale-105">
          As a Full Stack Developer & AI Engineer, I thrive at the intersection of 
          cutting-edge technology and practical solutions. My expertise spans across 
          the full software development lifecycle, with a particular focus on 
          AI-driven applications and intelligent systems.
          <br />
          <br />
          I specialize in developing sophisticated AI solutions while maintaining 
          a strong foundation in full-stack development. My approach combines 
          technical excellence with innovative problem-solving, ensuring that each 
          project not only meets but exceeds expectations. Whether it&apos;s crafting 
          AI-powered tools or building robust web applications, I bring a blend of 
          creativity and technical precision to every challenge.
        </p>
      </div>
    </section>
  );
};

export default About;
