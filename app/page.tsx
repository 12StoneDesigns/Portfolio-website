import About from "../components/About"
import Banner from "../components/Banner"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import Websites from "../components/Websites"

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <div 
        className="fixed inset-0 z-[-1]"
        style={{ 
          backgroundImage: "url('/LooperGroup2.png')", 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover', 
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          opacity: '0.3'
        }}
      />
      <Navbar />
      <div className="flex flex-col gap-20 relative z-10">
        <Banner />
        <About />
        <Experience />
        <Skills />
        <Websites />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
