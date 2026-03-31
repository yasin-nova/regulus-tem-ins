import { Award, Shield, Users } from 'lucide-react'
import SeoMeta from '../components/SeoMeta'

const values = [
  {
    title: 'Guvenilirlik',
    description: 'Taahhut ettigimiz isi zamaninda, seffaf iletisimle ve olculebilir sonuc odagiyla tamamlariz.',
    icon: Shield,
  },
  {
    title: 'Profesyonel Ekip',
    description: 'Her projede egitimli ekipler ve standart operasyon adimlariyla tutarli hizmet kalitesi sunariz.',
    icon: Users,
  },
  {
    title: 'Kalite Yaklasimi',
    description: 'Temizlikten insaata kadar tum sureclerde denetim ve surekli iyilestirme prensibiyle ilerleriz.',
    icon: Award,
  },
]

const milestones = [
  'Ihtiyaca ozel hizmet planlamasi',
  'Sahada standart operasyon disiplini',
  'Duzenli kalite kontrol ve raporlama',
  'Uzun vadeli musteri memnuniyeti odagi',
]

const aboutGallery = [
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
]

function AboutPage() {
  return (
    <section className="py-24">
      <SeoMeta
        title="Hakkimizda | Izmir Temizlik ve Insaat Firmasi Regulus"
        description="Regulus Temizlik - Insaat, Izmir merkezli kurumsal temizlik, bireysel temizlik ve insaat proje yonetimi alaninda guvenilir hizmet sunar."
        path="/hakkimizda"
        keywords="izmir temizlik firmasi, izmir insaat firmasi, hakkimizda regulus, profesyonel temizlik izmir"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Hakkimizda</h1>
        <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">
          Regulus Temizlik ve Insaat, Izmir merkezli hizmet anlayisiyla kurumsal temizlik, bireysel temizlik ve
          insaat proje yonetimi alanlarinda faaliyet gosterir. Her projede ihtiyaca uygun planlama, uzman ekip ve
          duzenli kalite kontrol sureclerini esas alir.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
          Musteri memnuniyeti odakli calisma modelimiz sayesinde tekliflendirme, uygulama ve teslim adimlarinda
          seffaf iletisim sunuyor; uzun vadeli guvenilir cozum ortagi olmayi hedefliyoruz.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="relative h-52 sm:h-64">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt="Regulus ekip calismasi"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {aboutGallery.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-xl border border-slate-200">
              <img src={image} alt={`Kurumsal ekip gorseli ${index + 1}`} className="h-40 w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-navy">
                  <Icon size={20} />
                </div>
                <h2 className="text-lg font-semibold text-slate-900">{value.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Calisma Ilkemiz</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Her projede once ihtiyaci dogru analiz eder, ardindan isin kapsamina uygun kaynak planlamasi yapariz.
              Uygulama surecinde kaliteyi duzenli denetler, operasyonu musteri beklentisine gore surekli
              iyilestiririz.
            </p>
            <ul className="mt-5 space-y-3">
              {milestones.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <Shield size={18} className="mt-0.5 shrink-0 text-navy" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                alt="Ekip koordinasyonu"
                className="h-44 w-full object-cover"
              />
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Sektor Tecrubemiz</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Kurumsal tesislerden bireysel yasam alanlarina kadar farkli olcekte projelerde edindigimiz saha tecrubesi
              sayesinde, her iste hizli uyum ve dogru cozum uretme kabiliyetine sahibiz.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80"
                alt="Kurumsal hizmet yaklasimi"
                className="h-44 w-full object-cover"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
