import About from "@/components/About";
import Banner from "@/components/Banner";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main 
      className="h-full w-full min-h-screen" 
      style={{ 
        backgroundImage: "url('/LooperGroup2.png')", 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <Navbar />
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
