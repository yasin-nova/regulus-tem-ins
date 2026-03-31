import { ClipboardCheck, HardHat, ShieldCheck, Timer } from 'lucide-react'
import SeoMeta from '../components/SeoMeta'

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

const projectFlow = [
  {
    title: 'On Hazirlik ve Planlama',
    description:
      'Proje hedefleri, butce sinirlari ve teslim takvimi netlestirilir. Teknik gereksinimler ve saha kosullari detayli olarak analiz edilir.',
  },
  {
    title: 'Uygulama ve Koordinasyon',
    description:
      'Sahadaki tum imalat adimlari is programina uygun ilerletilir. Ekipler arasi koordinasyon ve tedarik sureci duzenli olarak yonetilir.',
  },
  {
    title: 'Kontrol, Raporlama ve Teslim',
    description:
      'Kalite kontrolleri, maliyet ve ilerleme raporlari ile proje sureci seffaf sekilde izlenir; teslim asamasi planli olarak tamamlanir.',
  },
]

const sectors = ['Konut Projeleri', 'Ofis ve Ticari Yapilar', 'Kamu ve Kurumsal Binalar', 'Yenileme ve Donusum Projeleri']

const constructionGallery = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
]

function ConstructionServicesPage() {
  return (
    <section className="py-24">
      <SeoMeta
        title="Izmir Insaat Hizmetleri ve Proje Yonetimi | Regulus"
        description="Izmir insaat hizmetleri, proje planlama, saha koordinasyonu, maliyet ve kalite kontrolu. Regulus ile projelerinizi zamaninda ve kontrollu yonetin."
        path="/insaat-hizmetleri"
        keywords="izmir insaat hizmetleri, izmir proje yonetimi, insaat saha yonetimi izmir, maliyet kontrolu insaat"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Insaat Hizmetleri ve Proje Yonetimi',
          areaServed: 'Izmir',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Regulus Temizlik - Insaat',
          },
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Insaat Hizmetleri</h1>
        <p className="mt-5 max-w-3xl text-slate-600">
          Insaat hizmetleri alaninda proje planlama, saha koordinasyonu, maliyet kontrolu ve kalite takibini tek
          merkezden yonetiyoruz. Hedefimiz; projeleri teknik standartlara uygun, zamaninda ve kontrollu sekilde
          tamamlamaktir.
        </p>
        <p className="mt-4 max-w-3xl text-slate-600">
          Regulus olarak isveren adina karar surecini kolaylastiran, riskleri erken tespit eden ve saha uygulamasini
          denetlenebilir hale getiren bir proje yonetim modeli sunuyoruz.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="relative h-52 sm:h-64">
            <img
              src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80"
              alt="Insaat proje yonetimi"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {constructionGallery.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-xl border border-slate-200">
              <img src={image} alt={`Insaat hizmet gorseli ${index + 1}`} className="h-40 w-full object-cover" />
            </div>
          ))}
        </div>

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

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Proje Yonetim Surecimiz</h2>
            <div className="mt-5 space-y-4">
              {projectFlow.map((step) => (
                <div key={step.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
                alt="Proje planlama sureci"
                className="h-44 w-full object-cover"
              />
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Hizmet Verdigimiz Proje Tipleri</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {sectors.map((sector) => (
                <div key={sector} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {sector}
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Insaat saha uygulamasi"
                className="h-44 w-full object-cover"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default ConstructionServicesPage
