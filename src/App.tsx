import About from './components/About'
import Construction from './components/Construction'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(30,58,95,0.11),transparent_55%)]" />
        <div className="pointer-events-none absolute right-0 top-[360px] -z-10 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
        <Hero />
        <Services />
        <Construction />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}

export default App
