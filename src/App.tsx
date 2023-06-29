import About from './components/About'
import Contact from './components/Contact'
import { Footer } from './components/Footer'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Team from './components/Events'
import Stores from './components/Stores'

function App () {
  return (
    <div>
      <Navbar />
      <main className='w-full h-screen overflow-y-auto overflow-x-hidden scroll-smooth snap-y snap-mandatory'>
        <div className='snap-center' id='inicio'>
          <Home />
        </div>
        <div className='snap-start' id='nosotros'>
          <About />
        </div>
        <div className='snap-start' id='eventos'>
          <Team />
        </div>
        <div className='snap-start' id='galeria'>
          <Gallery />
        </div>
        <div className='snap-start' id='comercios'>
          <Stores />
        </div>
        <div className='snap-start' id='contacto'>
          <Contact />
        </div>
        <div className='snap-center'>
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
