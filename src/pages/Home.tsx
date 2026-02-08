import { AnimatedBackground } from '../components/common/AnimatedBackground'
import { About } from '../components/sections/About'
import { Hero } from '../components/sections/Hero'
import { Navbar } from '../components/sections/Navbar'
import Burmese from '../components/sections/Burmese'
import Modern from '../components/sections/Modern'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-10">
          <Hero />
          <About />
          <Burmese />
          <Modern />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Home
