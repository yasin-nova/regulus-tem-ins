import { BadgeCheck, ClipboardList, HardHat, ShieldCheck, Timer } from 'lucide-react'
import SectionReveal from './SectionReveal'

const constructionItems = [
  { title: 'Proje ve Tasarim Yonetimi', icon: ClipboardList },
  { title: 'Ihale ve Sozlesme Yonetimi', icon: BadgeCheck },
  { title: 'Zaman ve Maliyet Kontrolu', icon: Timer },
  { title: 'Yapim (Insaat) Yonetimi', icon: HardHat },
  { title: 'Risk ve Kalite Yonetimi', icon: ShieldCheck },
]

function Construction() {
  return (
    <SectionReveal id="insaat" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Insaat ve Proje Yonetimi Hizmetleri</h2>
        <p className="mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 text-slate-600">
          Projeleri bastan sona yoneten, isveren adina tum surecleri kontrol eden profesyonel cozum ortagi.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {constructionItems.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-navy">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              </article>
            )
          })}
        </div>
      </div>
    </SectionReveal>
  )
}

export default Construction
