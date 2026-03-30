import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import CleaningServicesPage from './pages/CleaningServicesPage'
import ConstructionServicesPage from './pages/ConstructionServicesPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,rgba(30,58,95,0.11),transparent_55%)]" />
        <div className="pointer-events-none absolute right-0 top-[360px] -z-10 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anasayfa" element={<HomePage />} />
          <Route path="/temizlik-hizmetleri" element={<CleaningServicesPage />} />
          <Route path="/insaat-hizmetleri" element={<ConstructionServicesPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}

export default App
