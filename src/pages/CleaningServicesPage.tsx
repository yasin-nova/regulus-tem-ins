import { CheckCircle2, Sparkles } from 'lucide-react'

const serviceGroups = [
  {
    title: 'Kurumsal Temizlik Hizmetleri',
    items: [
      'Ofis, plaza ve is merkezi temizligi',
      'AVM, magaza ve ortak alan bakim temizligi',
      'Saglik kurumu ve okul hijyen operasyonlari',
      'Insaat sonrasi ince temizlik ve teslim hazirligi',
    ],
  },
  {
    title: 'Bireysel Temizlik Hizmetleri',
    items: [
      'Ev, daire ve villa genel temizlik',
      'Tasima oncesi ve sonrasi detayli temizlik',
      'Apartman ortak alan ve merdiven temizligi',
      'Periyodik haftalik ve aylik temizlik paketleri',
    ],
  },
]

const processSteps = [
  {
    title: 'Kesif ve Ihtiyac Analizi',
    description:
      'Mekanin kullanim yogunlugu, metrekare bilgisi ve beklentileriniz analiz edilerek size ozel temizlik plani olusturulur.',
  },
  {
    title: 'Planlama ve Operasyon',
    description:
      'Gunluk, haftalik veya aylik periyotlar belirlenir; ekip, ekipman ve uygulama adimlari kontrollu sekilde sahaya aktarilir.',
  },
  {
    title: 'Denetim ve Sureklilik',
    description:
      'Hizmet kalitesi duzenli olarak denetlenir, geri bildirimler dogrultusunda operasyon surekli iyilestirilir.',
  },
]

const whyChooseUs = [
  'Kurumsal ve bireysel alanlara ozel temizlik paketleri',
  'Egitimli personel ve standart operasyon sureci',
  'Hizli kesif, net fiyatlandirma ve duzenli raporlama',
  'Hijyen, duzen ve memnuniyet odakli hizmet yaklasimi',
]

const cleaningGallery = [
  'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80',
]

function CleaningServicesPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
          <Sparkles size={16} className="text-gold" />
          Hijyen ve duzen odakli hizmet
        </p>
        <h1 className="mt-5 text-3xl font-semibold text-slate-900 sm:text-4xl">Temizlik Hizmetleri</h1>
        <p className="mt-5 max-w-3xl text-slate-600">
          Izmir temizlik hizmetleri kapsaminda ofis, is yeri, apartman, villa ve yasam alanlari icin ihtiyaca ozel
          operasyon planlari hazirliyoruz. Profesyonel ekip, duzenli denetim ve dogru ekipman kullanimi ile hijyen
          standardini kalici hale getiriyoruz.
        </p>
        <p className="mt-4 max-w-3xl text-slate-600">
          Isletmeler icin surekli temizlik operasyonu, bireysel musteriler icin ise detayli ve periyodik temizlik
          cozumleri sunarak mekana uygun, olculebilir ve surdurulebilir bir hizmet modeli uyguluyoruz.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="relative h-52 sm:h-64">
            <img
              src="https://images.unsplash.com/photo-1518826778770-a729fb53327c?auto=format&fit=crop&w=1600&q=80"
              alt="Temizlik operasyonu"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />
          </div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {cleaningGallery.map((image, index) => (
            <div key={image} className="overflow-hidden rounded-xl border border-slate-200">
              <img src={image} alt={`Temizlik hizmet gorseli ${index + 1}`} className="h-40 w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {serviceGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">{group.title}</h2>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-navy" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Temizlik Hizmet Surecimiz</h2>
            <div className="mt-5 space-y-4">
              {processSteps.map((step) => (
                <div key={step.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-slate-900">Neden Regulus Temizlik?</h2>
            <ul className="mt-5 space-y-3">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-navy" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80"
                alt="Temizlik ekibi uygulama"
                className="h-44 w-full object-cover"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default CleaningServicesPage
