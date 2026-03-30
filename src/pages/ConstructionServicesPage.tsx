import { ClipboardCheck, HardHat, ShieldCheck, Timer } from 'lucide-react'

const constructionServices = [
  {
    title: 'Proje Planlama ve Koordinasyon',
    description: 'Proje hedeflerini netlestirir, is programini olusturur ve tum paydaslari ortak takvimde toplar.',
    icon: ClipboardCheck,
  },
  {
    title: 'Saha ve Uygulama Yonetimi',
    description: 'Sahadaki imalat adimlarini teknik kriterlere gore denetler ve uygulama kalitesini surekli izler.',
    icon: HardHat,
  },
  {
    title: 'Zaman ve Maliyet Kontrolu',
    description: 'Ilerleme raporlariyla gecikme risklerini erken tespit eder, butce disiplinini korur.',
    icon: Timer,
  },
  {
    title: 'Kalite ve Risk Yonetimi',
    description: 'Is guvenligi, kalite kriterleri ve mevzuat uyumlulugu icin proaktif kontrol mekanizmasi sunar.',
    icon: ShieldCheck,
  },
]

function ConstructionServicesPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Insaat Hizmetleri</h1>
        <p className="mt-5 max-w-3xl text-slate-600">
          Insaat projelerinde isveren adina planlama, koordinasyon ve uygulama takibini bir arada yurutuyoruz.
          Amacimiz, projenin kalite hedeflerinden sapmadan zamaninda ve kontrollu sekilde tamamlanmasi.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {constructionServices.map((service) => {
            const Icon = service.icon
            return (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-navy">
                  <Icon size={20} />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ConstructionServicesPage
