import { Globe, Mail, PhoneCall } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import BrandLogo from './BrandLogo'

const links = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Temizlik Hizmetleri', to: '/temizlik-hizmetleri' },
  { label: 'İnşaat Hizmetleri', to: '/insaat-hizmetleri' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'İletişim', to: '/iletisim' },
]

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#cfdff0] bg-footer-premium py-14">
      <div className="pointer-events-none absolute inset-0 bg-glass-sheen opacity-45" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link to="/">
            <BrandLogo alt="Regulus logo" className="h-20 w-56 sm:h-24 sm:w-72" />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-slate-700">
            Regulus Temizlik &amp; İnşaat, kurumsal ve bireysel hizmetlerde premium kalite ve güvenilir operasyon
            anlayışını bir araya getirir.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-brand-navy">Menü</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="transition-colors hover:text-brand-navy">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-brand-navy">Sosyal Medya</h3>
          <div className="mt-4 flex gap-3">
            {[Globe, Mail, PhoneCall].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="rounded-xl border border-[#c9d9eb] bg-white/60 p-2 text-slate-700 transition-colors hover:border-[#b9cde3] hover:bg-white hover:text-brand-navy"
                aria-label="Sosyal medya bağlantısı"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="relative mt-10 text-center text-xs text-slate-700/85">
        © {new Date().getFullYear()} Regulus Temizlik &amp; İnşaat. Tüm hakları saklıdır.
      </p>
    </footer>
  )
}

export default Footer
