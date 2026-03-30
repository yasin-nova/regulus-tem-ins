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
          Regulus Temizlik ve Insaat olarak kurumlara ve bireylere ozel temizlik, bakim ve insaat yonetimi
          cozumleri sunuyoruz. Uzun vadeli is ortakliklari kurmaya odaklanarak her projede kalite, guven ve
          surdurulebilirlik dengesini koruyoruz.
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
          Hizmet modelimizi ihtiyaca gore sekillendiriyor, proje baslangicindan teslim asamasina kadar raporlanabilir
          bir surec yonetimi sagliyoruz.
        </p>

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
