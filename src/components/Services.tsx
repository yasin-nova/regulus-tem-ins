import { Building2, Home, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionReveal from './SectionReveal'

type ServiceItem = {
  title: string
  description: string
  buttonLabel?: string
}

const b2bServices: ServiceItem[] = [
  { title: 'Banka Temizligi', description: 'Sube ve merkezlerde guvenlik odakli, duzenli ve detayli temizlik.', buttonLabel: 'Detay' },
  { title: 'Belediye Temizligi', description: 'Kamu binalarinda surecli ve planli hijyen yonetimi.', buttonLabel: 'Detay' },
  { title: 'Okul ve Egitim Kurumu Temizligi', description: 'Siniflar, idari alanlar ve ortak kullanim noktalarinda hijyen standardi.', buttonLabel: 'Detay' },
  { title: 'Hastane ve Saglik Kurumu Temizligi', description: 'Saglik mevzuatina uygun, disiplinli ve sterilizasyon destekli temizlik.', buttonLabel: 'Detay' },
  { title: 'Ofis Temizligi', description: 'Verimli calisma alanlari icin gunluk ve periyodik ofis bakimi.', buttonLabel: 'Detay' },
  { title: 'AVM ve Magaza Temizligi', description: 'Musteri deneyimini guclendiren vitrin ve ortak alan temizligi.', buttonLabel: 'Detay' },
  { title: 'Fabrika ve Sanayi Temizligi', description: 'Uretim alanlarina uygun ekipmanlarla derinlemesine endustriyel temizlik.', buttonLabel: 'Detay' },
  { title: 'Insaat Sonrasi Temizlik', description: 'Teslim oncesi detayli kaba ve ince temizlik sureclerinin yonetimi.', buttonLabel: 'Detay' },
  { title: 'Oteller ve Konaklama Temizligi', description: 'Misafir memnuniyeti odakli oda, lobi ve ortak alan hizmetleri.', buttonLabel: 'Detay' },
  { title: 'Restoran ve Kafe Temizligi', description: 'Servis ve mutfak alanlarinda hijyen ve denetim odakli calisma.', buttonLabel: 'Detay' },
  { title: 'Yat Temizligi', description: 'Yat ve marina alanlarinda premium detay temizlik hizmeti.' },
]

const b2cServices: ServiceItem[] = [
  { title: 'Ev / Hane Temizligi', description: 'Yasam alanlari icin guvenilir ve duzenli periyodik temizlik.', buttonLabel: 'Detay ve bolgeler' },
  { title: 'Daire Temizligi', description: 'Tasima oncesi veya sonrasi kapsamli daire temizligi.', buttonLabel: 'Detay ve bolgeler' },
  { title: 'Apartman Temizligi', description: 'Merdiven, giris, asansor ve ortak alanlarda surekli hijyen.', buttonLabel: 'Detay ve bolgeler' },
  { title: 'Villa Temizligi', description: 'Genis yasam alanlarina ozel planli ve detayli temizlik.', buttonLabel: 'Detay ve bolgeler' },
]

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <article className="group rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
      {item.buttonLabel && (
        <button
          type="button"
          className="mt-5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors group-hover:border-navy/20 hover:bg-slate-50"
        >
          {item.buttonLabel}
        </button>
      )}
    </article>
  )
}

function Services() {
  const [showAllB2B, setShowAllB2B] = useState(false)
  const [showAllB2C, setShowAllB2C] = useState(false)

  return (
    <SectionReveal id="hizmetler" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-11">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
            <Building2 size={16} /> Kurumsal Temizlik (B2B)
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Kurumsal Cozumler</h2>
        </div>
        <motion.div
          className="mb-7 overflow-hidden rounded-2xl border border-slate-200"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative h-44 sm:h-52">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1400&q=80"
              alt="Kurumsal temizlik hizmetleri"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/45 to-transparent" />
            <p className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 text-xs font-semibold text-slate-800 sm:text-sm">
              Kurumsal alanlarda guvenilir ve denetlenebilir temizlik
            </p>
          </div>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {b2bServices.map((item, index) => (
            <motion.div
              key={item.title}
              className={index >= 3 && !showAllB2B ? 'hidden sm:block' : ''}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.25) }}
            >
              <ServiceCard item={item} />
            </motion.div>
          ))}
        </div>
        {b2bServices.length > 3 && (
          <div className="mt-5 sm:hidden">
            <button
              type="button"
              onClick={() => setShowAllB2B((prev) => !prev)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              {showAllB2B ? 'Daha Az Goster' : 'Devamini Gor'}
            </button>
          </div>
        )}

        <div className="mb-11 mt-24">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
            <Home size={16} /> Bireysel / Ev ve Konut Temizligi (B2C)
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Yasam Alanlari Hizmetleri</h2>
        </div>
        <motion.div
          className="mb-7 overflow-hidden rounded-2xl border border-slate-200"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div className="relative h-44 sm:h-52">
            <img
              src="https://images.unsplash.com/photo-1520038410233-7141be7e6f97?auto=format&fit=crop&w=1400&q=80"
              alt="Yasam alani temizlik hizmetleri"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/45 to-transparent" />
            <p className="absolute bottom-4 left-4 rounded-lg bg-white/90 px-3 py-2 text-xs font-semibold text-slate-800 sm:text-sm">
              Ev ve konutlar icin detayli, planli ve premium hizmet
            </p>
          </div>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {b2cServices.map((item, index) => (
            <motion.div
              key={item.title}
              className={index >= 3 && !showAllB2C ? 'hidden sm:block' : ''}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.25) }}
            >
              <ServiceCard item={item} />
            </motion.div>
          ))}
        </div>
        {b2cServices.length > 3 && (
          <div className="mt-5 sm:hidden">
            <button
              type="button"
              onClick={() => setShowAllB2C((prev) => !prev)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              {showAllB2C ? 'Daha Az Goster' : 'Devamini Gor'}
            </button>
          </div>
        )}
      </div>
      <div className="mx-auto mt-14 flex max-w-7xl items-center gap-2 px-4 text-sm font-medium text-slate-500 sm:px-6 lg:px-8">
        <Sparkles size={16} className="text-gold" />
        Tum hizmetler statik tanitim amacli sunulmustur.
      </div>
    </SectionReveal>
  )
}

export default Services
