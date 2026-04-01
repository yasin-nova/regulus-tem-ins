import { Menu, X } from 'lucide-react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { MouseEvent } from 'react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BrandLogo from './BrandLogo'

const menuItems = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Temizlik Hizmetleri', to: '/temizlik-hizmetleri' },
  { label: 'İnşaat Hizmetleri', to: '/insaat-hizmetleri' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'İletişim', to: '/iletisim' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const ctaX = useMotionValue(0)
  const ctaY = useMotionValue(0)
  const springX = useSpring(ctaX, { stiffness: 220, damping: 18, mass: 0.35 })
  const springY = useSpring(ctaY, { stiffness: 220, damping: 18, mass: 0.35 })

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleCtaMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const offsetX = (event.clientX - bounds.left - bounds.width / 2) * 0.12
    const offsetY = (event.clientY - bounds.top - bounds.height / 2) * 0.12
    ctaX.set(Math.max(-5, Math.min(5, offsetX)))
    ctaY.set(Math.max(-5, Math.min(5, offsetY)))
  }

  const handleCtaLeave = () => {
    ctaX.set(0)
    ctaY.set(0)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[#dbe7f4] bg-navbar-premium/95 shadow-soft backdrop-blur-xl'
          : 'border-b border-transparent bg-navbar-premium/70 backdrop-blur-lg'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="shrink-0" onClick={() => setIsOpen(false)}>
          <BrandLogo alt="Regulus Temizlik ve İnşaat logosu" className="h-20 w-56 sm:h-24 sm:w-72" animateOnLoad />
        </NavLink>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-lg border border-[#d6e4f3] bg-white/85 p-2 text-brand-navy transition hover:bg-white md:hidden"
          aria-label="Menüyü aç veya kapat"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-brand-navy ${isActive ? 'text-brand-navy' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <motion.div
              style={{ x: springX, y: springY }}
              onMouseMove={handleCtaMove}
              onMouseLeave={handleCtaLeave}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <NavLink to="/iletisim" className="btn-primary px-4 py-2 text-xs">
                Teklif Al
              </NavLink>
            </motion.div>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <ul className="space-y-2 border-t border-[#dbe7f4] bg-navbar-premium/95 px-4 py-3 text-sm font-medium text-slate-700 backdrop-blur-lg md:hidden">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="block rounded-lg px-3 py-2 transition hover:bg-brand-sky/60"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
