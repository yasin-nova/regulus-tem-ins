import { ArrowRight, Building2, CheckCircle2, ClipboardCheck, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import heroVisual from '../assets/hero.png'
import logo from '../assets/logo-regulus.svg'
import SectionReveal from './SectionReveal'

type HeroTab = 'temizlik' | 'insaat'

const heroContent: Record<
  HeroTab,
  {
    title: string
    description: string
    points: string[]
    stat: string
  }
> = {
  temizlik: {
    title: 'Kurumsal Temizlikte Surecli ve Yuksek Standartli Hizmet',
    description:
      'Banka, hastane, ofis ve tum kurumsal alanlarda planli operasyon, denetlenebilir surec ve profesyonel ekip destegi sunuyoruz.',
    points: ['Gunluk / periyodik operasyon plani', 'Raporlanabilir saha yonetimi', 'Kuruma ozel hijyen standardi'],
    stat: 'Kurumsal temizlik odagi',
  },
  insaat: {
    title: 'Insaat ve Proje Yonetiminde Uctan Uca Kontrol',
    description:
      'Tasarimdan teslime kadar zaman, maliyet ve kaliteyi birlikte yoneten profesyonel proje koordinasyonu ile sureci guvence altina aliyoruz.',
    points: ['Ihale ve sozlesme takibi', 'Zaman-maliyet performans yonetimi', 'Risk ve kalite guvence sureci'],
    stat: 'Insaat yonetimi odagi',
  },
}

function Hero() {
  const [activeTab, setActiveTab] = useState<HeroTab>('temizlik')
  const current = useMemo(() => heroContent[activeTab], [activeTab])

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

        <div className="mt-8 inline-flex rounded-xl border border-slate-200 bg-slate-50 p-1">
          <button
            type="button"
            onClick={() => setActiveTab('temizlik')}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${
              activeTab === 'temizlik' ? 'bg-navy text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Temizlik
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('insaat')}
            className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${
              activeTab === 'insaat' ? 'bg-navy text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Insaat
          </button>
        </div>

        <div className="mt-7 grid items-stretch gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
              <Sparkles size={14} className="text-gold" />
              {current.stat}
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">{current.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{current.description}</p>
            <ul className="mt-5 space-y-2">
              {current.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-navy" />
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-navy p-6 text-white">
            <img
              src={heroVisual}
              alt={activeTab === 'temizlik' ? 'Temizlik hizmeti gorseli' : 'Insaat hizmeti gorseli'}
              className="h-full w-full rounded-xl object-cover opacity-45"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/80 via-navy/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-sm text-slate-100">
                {activeTab === 'temizlik'
                  ? 'Temizlik operasyonlarinda sureklilik, denetim ve hijyen odakli yaklasim.'
                  : 'Insaat yonetiminde zaman, maliyet ve kaliteyi es zamanli kontrol eden planlama.'}
              </p>
            </div>
            <div className="absolute right-5 top-5 rounded-full bg-white/15 p-3 text-gold">
              {activeTab === 'temizlik' ? <Sparkles size={20} /> : <Building2 size={20} />}
            </div>
          </article>
        </div>

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
