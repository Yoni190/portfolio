import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import PixelSnow from "./components/PixelSnow"


function App() {

  return (
    <div>
      <PixelSnow
        pixelResolution={500}
        className='z-0'
      />
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
