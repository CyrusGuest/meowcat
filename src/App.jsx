import { useEffect } from 'react'
import SpaceBackground from './components/SpaceBackground.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Drip from './components/Drip.jsx'
import Reserve from './components/Reserve.jsx'
import Liquidity from './components/Liquidity.jsx'
import Future from './components/Future.jsx'
import Calculator from './components/Calculator.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Stats from './components/Stats.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    // support section anchors (#faq etc.) on hash navigation
    const onHash = () => {
      const id = window.location.hash.slice(1)
      if (id) {
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        })
      }
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <Navbar />
      <div className="relative z-10">
        <main>
          <Hero />
          <Ticker />
          <Drip />
          <Reserve />
          <Liquidity />
          <Future />
          <Calculator />
          <HowItWorks />
          <Stats />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  )
}
