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
          Izmir temizlik hizmetleri kapsaminda ofis, is yeri, apartman, villa ve yasam alanlari icin ihtiyaca ozel
          operasyon planlari hazirliyoruz. Profesyonel ekip, duzenli denetim ve dogru ekipman kullanimi ile hijyen
          standardini kalici hale getiriyoruz.
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
