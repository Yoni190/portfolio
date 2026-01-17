import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import PixelSnow from "./components/PixelSnow"
import Projects from "./components/Projects"


function App() {

  return (
    <div>
      <PixelSnow
        pixelResolution={500}
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
