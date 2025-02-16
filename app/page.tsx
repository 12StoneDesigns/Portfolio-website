import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Websites from "@/components/Websites";

export default function Home() {
  return (
    <main className="h-screen w-full relative">
      <div 
        className="absolute inset-0 z-[-1]"
        style={{ 
          backgroundImage: "url('/LooperGroup2.png')", 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: '50%', 
          backgroundPosition: 'center',
          opacity: '0.3'
        }}
      />
      <Navbar />
      <div className="flex flex-col gap-20 relative z-10">
        <Banner />
        <About />
        <Experience />
        <Websites />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
