import { Award, Shield, Users } from 'lucide-react'

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

function AboutPage() {
  return (
    <section className="py-24">
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
      </div>
    </section>
  )
}

export default AboutPage
