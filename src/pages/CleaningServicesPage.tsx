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
          Regulus olarak mekanin yapisina, kullanim yogunluguna ve hedeflenen hijyen standardina uygun operasyon
          plani hazirliyoruz. Egitimli ekip, dogru ekipman ve denetlenebilir sureclerle surdurulebilir temizlik
          hizmeti sunuyoruz.
        </p>

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
      </div>
    </section>
  )
}

export default CleaningServicesPage
