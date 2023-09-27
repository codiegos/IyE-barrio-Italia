import About from './components/About'
import Contact from './components/Contact'
import {Footer} from './components/Footer'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Team from './components/Events'
import Stores from './components/Stores'

function App() {
  return (
    <>
      <Navbar />
      <main className='w-full h-screen scroll-smooth'>
        <Home />
        <About />
        <Team />
        <Gallery />
        <Stores />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
