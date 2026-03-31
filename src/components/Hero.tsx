import { ArrowRight, Building2, CheckCircle2, ClipboardCheck, Sparkles } from 'lucide-react'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from './BrandLogo'
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
    visualImage: string
  }
> = {
  temizlik: {
    title: 'Izmir profesyonel temizlik hizmetlerinde guvenilir cozum ortagi',
    description:
      'Ofis, hastane, okul, site ve yasam alanlari icin ihtiyaca ozel temizlik planlari hazirliyor; hijyen, duzen ve sureklilik odakli hizmet sunuyoruz.',
    points: ['Kuruma ve mekana ozel operasyon plani', 'Egitimli ekip ve kalite kontrol sureci', 'Periyodik, gunluk ve detayli temizlik secenekleri'],
    stat: 'Izmir temizlik firmasi',
    ctaLabel: 'Temizlik Hizmetlerini Gor',
    ctaTo: '/temizlik-hizmetleri',
    visualLabel: 'Temizlik Hizmetleri',
    visualImage:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80',
  },
  insaat: {
    title: 'Insaat ve proje yonetiminde zamaninda, kontrollu ve kaliteli teslim',
    description:
      'Konut, ticari ve kurumsal projelerde planlama, saha yonetimi ve kalite denetimini bir arada yurutarak sureci basindan sonuna kadar takip ediyoruz.',
    points: ['Proje planlama ve uygulama koordinasyonu', 'Maliyet, zaman ve is programi takibi', 'Risk, kalite ve is guvenligi odakli yonetim'],
    stat: 'Insaat proje yonetimi',
    ctaLabel: 'Insaat Hizmetlerini Gor',
    ctaTo: '/insaat-hizmetleri',
    visualLabel: 'Insaat Hizmetleri',
    visualImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
  },
}

function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const [activeTab, setActiveTab] = useState<HeroTab>('temizlik')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [serviceType, setServiceType] = useState('Banka Temizligi')
  const current = useMemo(() => heroContent[activeTab], [activeTab])
  const isNameValid = fullName.trim().length > 1
  const serviceOptions = [
    'Banka Temizligi',
    'Belediye Temizligi',
    'Okul ve Egitim Kurumu Temizligi',
    'Hastane ve Saglik Kurumu Temizligi',
    'Ofis Temizligi',
    'AVM ve Magaza Temizligi',
    'Fabrika ve Sanayi Temizligi',
    'Insaat Sonrasi Temizlik',
    'Oteller ve Konaklama Temizligi',
    'Restoran ve Kafe Temizligi',
    'Yat Temizligi',
    'Ev / Hane Temizligi',
    'Daire Temizligi',
    'Apartman Temizligi',
    'Villa Temizligi',
    'Proje ve Tasarim Yonetimi',
    'Ihale ve Sozlesme Yonetimi',
    'Zaman ve Maliyet Kontrolu',
    'Yapim (Insaat) Yonetimi',
    'Risk ve Kalite Yonetimi',
  ]
  const whatsappText = `Merhaba, ben ${fullName || 'ismini belirtmeyen bir musteri'}. ${
    phone ? `Telefon numaram: ${phone}. ` : ''
  }${serviceType} hizmeti ile alakali bilgi almak istiyorum.`
  const whatsappUrl = `https://wa.me/905355271254?text=${encodeURIComponent(whatsappText)}`
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  })
  const blobYTop = useTransform(scrollYProgress, [0, 1], [0, -28])
  const blobYBottom = useTransform(scrollYProgress, [0, 1], [0, 32])

  return (
    <SectionReveal id="ana-sayfa" className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        <motion.div
          className="border-b border-slate-100 bg-slate-900 p-4 sm:p-5"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Hizli Iletisim</p>
          <div className="grid gap-3 md:grid-cols-[1fr_1fr_1.2fr_auto]">
            <input
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Ad Soyad"
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300/80 outline-none transition focus:border-gold/60"
            />
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Telefon"
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300/80 outline-none transition focus:border-gold/60"
            />
            <select
              value={serviceType}
              onChange={(event) => setServiceType(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white outline-none transition focus:border-gold/60"
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option} className="text-slate-900">
                  {option}
                </option>
              ))}
            </select>
            <motion.a
              href={isNameValid ? whatsappUrl : undefined}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!isNameValid}
              whileHover={isNameValid ? { scale: 1.03 } : undefined}
              whileTap={isNameValid ? { scale: 0.98 } : undefined}
              className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors ${
                isNameValid
                  ? 'bg-gold text-slate-900 hover:bg-[#f7cf63]'
                  : 'cursor-not-allowed bg-slate-300 text-slate-600'
              }`}
            >
              Iletisime Gec
            </motion.a>
          </div>
          {!isNameValid && <p className="mt-2 text-xs text-red-200">Lutfen devam etmek icin Ad Soyad giriniz.</p>}
        </motion.div>

        <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white p-5 sm:p-7">
          <BrandLogo alt="Regulus logo" className="mb-5 h-14 w-36 border border-slate-100 bg-white px-2 py-1" animateOnLoad />
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 sm:text-sm">
            <ClipboardCheck size={15} className="text-navy" />
            Izmir temizlik ve insaat hizmetlerinde uzman ekip
          </p>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Regulus Temizlik ve Insaat ile ihtiyaciniza uygun profesyonel hizmet
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Kurumsal ve bireysel tum hizmet taleplerinizde, hizli kesif, net fiyatlandirma ve duzenli operasyon
            anlayisiyla yaninizdayiz.
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

          <div ref={heroRef} className="mt-6 grid items-stretch gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <AnimatePresence mode="wait">
              <motion.article
                key={`content-${activeTab}`}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
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
                  className="btn-primary gap-2"
                >
                  {current.ctaLabel}
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/iletisim"
                  className="btn-secondary gap-2"
                >
                  Iletisim Sayfasi
                </Link>
              </div>
              </motion.article>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.article
                key={`visual-${activeTab}`}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white sm:p-7"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.32, ease: 'easeOut' }}
              >
              <img src={current.visualImage} alt={current.visualLabel} className="absolute inset-0 h-full w-full object-cover opacity-35" />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/85 via-navy/70 to-slate-900/55" />
              <motion.div
                className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-gold/20 blur-2xl"
                style={{ y: blobYTop }}
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-navy/50 blur-3xl"
                style={{ y: blobYBottom }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">One Cikan Hizmet</p>
                <p className="mt-3 text-3xl font-semibold sm:text-4xl">{current.visualLabel}</p>
                <div className="mt-6 grid gap-3 text-sm sm:text-base">
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    Hizli kesif ve teklif sureci ile ihtiyaca ozel planlama
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    Egitimli ekipler ve duzenli saha denetimi ile yuksek hizmet kalitesi
                  </div>
                  <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    Kurumsal ve bireysel projelerde zamaninda ve guvenilir teslim
                  </div>
                </div>
              </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}

export default Hero
