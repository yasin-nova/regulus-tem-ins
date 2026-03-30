import { Globe, Mail, PhoneCall } from 'lucide-react'
import logo from '../assets/logo-regulus.svg'

const links = [
  { label: 'Ana Sayfa', href: '#ana-sayfa' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Insaat', href: '#insaat' },
  { label: 'Hakkimizda', href: '#hakkimizda' },
  { label: 'Iletisim', href: '#iletisim' },
]

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <img src={logo} alt="Regulus logo" className="h-14 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-slate-600">
            Regulus Temizlik &amp; Insaat, kurumsal ve bireysel hizmetlerde premium kalite ve guvenilir operasyon
            anlayisini bir araya getirir.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">Menu</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-navy">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">Sosyal Medya</h3>
          <div className="mt-4 flex gap-3">
            {[Globe, Mail, PhoneCall].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="rounded-xl border border-slate-200 p-2 text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-navy"
                aria-label="Sosyal medya baglantisi"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Regulus Temizlik &amp; Insaat. Tum haklari saklidir.
      </p>
    </footer>
  )
}

export default Footer
