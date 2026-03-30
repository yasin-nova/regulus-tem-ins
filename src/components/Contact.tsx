import { Mail, MapPin, Phone } from 'lucide-react'
import SectionReveal from './SectionReveal'

function Contact() {
  return (
    <SectionReveal id="iletisim" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Iletisim</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <form className="rounded-2xl border border-slate-200 bg-white p-7">
            <div className="space-y-5">
              <div>
                <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-navy">
                  Ad Soyad
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Ad Soyad"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-navy/40"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+90 5xx xxx xx xx"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-navy/40"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Mesajinizi yazin..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-navy/40"
                />
              </div>
              <button
                type="button"
                className="rounded-xl bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-[#254a73]"
              >
                Gonder
              </button>
            </div>
          </form>

          <aside className="rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="text-2xl font-semibold text-slate-900">Bize Ulasin</h3>
            <div className="mt-8 space-y-5 text-sm">
              <p className="flex items-start gap-3 text-slate-600">
                <MapPin size={18} className="mt-0.5 text-navy" />
                Istanbul, Turkiye
              </p>
              <p className="flex items-start gap-3 text-slate-600">
                <Phone size={18} className="mt-0.5 text-navy" />
                +90 (212) 000 00 00
              </p>
              <p className="flex items-start gap-3 text-slate-600">
                <Mail size={18} className="mt-0.5 text-navy" />
                info@regulus.com.tr
              </p>
            </div>
          </aside>
        </div>
      </div>
    </SectionReveal>
  )
}

export default Contact
