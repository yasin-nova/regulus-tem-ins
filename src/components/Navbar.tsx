import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logo-regulus.svg'

const menuItems = [
  { label: 'Ana Sayfa', href: '#ana-sayfa' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Insaat', href: '#insaat' },
  { label: 'Hakkimizda', href: '#hakkimizda' },
  { label: 'Iletisim', href: '#iletisim' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#ana-sayfa" className="shrink-0">
          <img src={logo} alt="Regulus Temizlik ve Insaat logosu" className="h-12 w-auto" />
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-lg border border-slate-200 p-2 text-navy transition hover:bg-slate-50 md:hidden"
          aria-label="Menuyu ac veya kapat"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors duration-200 hover:text-navy">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <ul className="space-y-2 border-t border-slate-100 px-4 py-3 text-sm font-medium text-slate-700 md:hidden">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block rounded-lg px-3 py-2 transition hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar
