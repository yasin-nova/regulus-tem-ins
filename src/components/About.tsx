import { Award, Shield, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionReveal from './SectionReveal'

const pillars = [
  {
    title: 'Deneyim',
    description: 'Kurumsal ve bireysel projelerde sahadan gelen tecrube ile olculu, planli hizmet.',
    icon: TrendingUp,
  },
  {
    title: 'Profesyonellik',
    description: 'Egitimli ekipler, standart operasyon planlari ve duzenli kalite takibi.',
    icon: Award,
  },
  {
    title: 'Guven',
    description: 'Sahada sureklilik, seffaf iletisim ve uzun vadeli is ortagi yaklasimi.',
    icon: Shield,
  },
]

function About() {
  return (
    <SectionReveal id="hakkimizda" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Hakkimizda</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-slate-600">
          Regulus Temizlik &amp; Insaat, Izmir merkezli profesyonel temizlik ve insaat proje yonetimi hizmetleri sunar.
          Kurumsal isletmelerden bireysel musteri taleplerine kadar her projede kalite, guven ve sureklilik odakli
          operasyon modeli ile calisir.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="relative h-44 sm:h-56">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
              alt="Regulus ekip ve operasyon yonetimi"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/35 to-transparent" />
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <article key={pillar.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-navy">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              </article>
            )
          })}
        </div>
        <div className="mt-8">
          <Link
            to="/hakkimizda"
            className="inline-flex rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Hakkimizda Sayfasina Git
          </Link>
        </div>
      </div>
    </SectionReveal>
  )
}

export default About
