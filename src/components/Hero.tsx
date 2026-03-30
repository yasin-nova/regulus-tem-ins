import { ArrowRight, Building2, CheckCircle2, ClipboardCheck, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
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
    ctaLabel: string
    ctaTo: string
    visualLabel: string
  }
> = {
  temizlik: {
    title: 'Temizlikte surekli kalite ve premium operasyon standardi',
    description:
      'Kurumsal ve bireysel alanlarda planli ekip yonetimi, kontrol listeleri ve raporlanabilir sureclerle hijyen standardinizi koruyoruz.',
    points: ['Gunluk / periyodik operasyon plani', 'Raporlanabilir saha yonetimi', 'Kuruma ozel hijyen standardi'],
    stat: 'Kurumsal temizlik odagi',
    ctaLabel: 'Temizlik Hizmetlerini Gor',
    ctaTo: '/temizlik-hizmetleri',
    visualLabel: 'Temizlik Hizmetleri',
  },
  insaat: {
    title: 'Insaat projelerinde uctan uca kontrol ve net ilerleme',
    description:
      'Planlama, saha koordinasyonu, kalite denetimi ve maliyet kontrolunu tek merkezden yoneterek projenizi guvenli sekilde tamamlatiyoruz.',
    points: ['Ihale ve sozlesme takibi', 'Zaman-maliyet performans yonetimi', 'Risk ve kalite guvence sureci'],
    stat: 'Insaat yonetimi odagi',
    ctaLabel: 'Insaat Hizmetlerini Gor',
    ctaTo: '/insaat-hizmetleri',
    visualLabel: 'Insaat Hizmetleri',
  },
}

function Hero() {
  const [activeTab, setActiveTab] = useState<HeroTab>('temizlik')
  const current = useMemo(() => heroContent[activeTab], [activeTab])

  return (
    <SectionReveal id="ana-sayfa" className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white p-5 sm:p-7">
          <img src={logo} alt="Regulus logo" className="mb-5 h-14 w-auto rounded-lg border border-slate-100 bg-white px-2 py-1" />
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 sm:text-sm">
            <ClipboardCheck size={15} className="text-navy" />
            Premium operasyon - mobil ve kurumsal odakli hizmet deneyimi
          </p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Temizlik ve Insaat hizmetlerinde ilk bakista net yonlendirme
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Musterilerinizin ilk gordugu alan olarak Hero bolumunu, hizmete hizli erisim ve guven veren premium bir
            gorunumle karsiliyoruz.
          </p>
        </div>

        <div className="p-5 sm:p-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-sm">
            Hizmet Alani Secin
          </p>
          <div className="grid grid-cols-2 gap-3 rounded-2xl bg-slate-50 p-2 sm:max-w-md">
            <button
              type="button"
              onClick={() => setActiveTab('temizlik')}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition sm:text-base ${
                activeTab === 'temizlik'
                  ? 'bg-navy text-white shadow-[0_8px_24px_rgba(30,58,95,0.28)]'
                  : 'text-slate-700 hover:bg-white'
              }`}
            >
              <Sparkles size={18} />
              Temizlik
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('insaat')}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition sm:text-base ${
                activeTab === 'insaat'
                  ? 'bg-navy text-white shadow-[0_8px_24px_rgba(30,58,95,0.28)]'
                  : 'text-slate-700 hover:bg-white'
              }`}
            >
              <Building2 size={18} />
              Insaat
            </button>
          </div>

          <div className="mt-6 grid items-stretch gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                <Sparkles size={14} className="text-gold" />
                {current.stat}
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">{current.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{current.description}</p>
              <ul className="mt-5 space-y-2.5">
                {current.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-700 sm:text-base">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-navy" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={current.ctaTo}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#254a73]"
                >
                  {current.ctaLabel}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/iletisim"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                  Hemen Iletisime Gec
                </Link>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white sm:p-7">
              <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-gold/20 blur-2xl" />
              <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-navy/50 blur-3xl" />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">One Cikan Hizmet</p>
                <p className="mt-3 text-3xl font-semibold sm:text-4xl">{current.visualLabel}</p>
                <div className="mt-6 grid gap-3 text-sm sm:text-base">
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    Mobilde tek dokunusla ilgili hizmet sayfasina yonlendirme
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    Webde net hiyerarsi ve premium marka algisi
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    Donusume odakli CTA yapisi ile daha hizli teklif toplama
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

export default Hero
