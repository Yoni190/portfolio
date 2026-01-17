import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import PixelSnow from "./components/PixelSnow"
import { useRef } from "react"


function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    // Generic scroll function
    const scrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div>
      <PixelSnow
        pixelResolution={500}
        className='z-0'
      />

      <div ref={homeRef}>
        <Hero scrollToRef={aboutRef}/>
      </div>

      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      <div ref={aboutRef}>
        <About />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

export default App
