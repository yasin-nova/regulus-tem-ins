import { ArrowRight, ClipboardCheck } from 'lucide-react'
import logo from '../assets/logo-regulus.svg'
import SectionReveal from './SectionReveal'

function Hero() {
  return (
    <SectionReveal id="ana-sayfa" className="mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-14">
        <img src={logo} alt="Regulus logo" className="mb-9 h-16 w-auto rounded-lg border border-slate-100 bg-white px-2 py-1" />
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
          <ClipboardCheck size={16} className="text-navy" />
          Kurumsal standartlarda izlenebilir hizmet
        </p>
        <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          Kurumsal Temizlik ve Insaatta Profesyonel Cozumler
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Planli, raporlanabilir ve yuksek standartli hizmet
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#iletisim"
            className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#254a73]"
          >
            Teklif Al
            <ArrowRight size={18} />
          </a>
          <a
            href="#hizmetler"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
          >
            Hizmetleri Incele
          </a>
        </div>
      </div>
    </SectionReveal>
  )
}

export default Hero
