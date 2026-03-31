import { BadgeCheck, ClipboardList, HardHat, ShieldCheck, Timer } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import SectionReveal from './SectionReveal'

const constructionItems = [
  { title: 'Proje ve Tasarim Yonetimi', icon: ClipboardList },
  { title: 'Ihale ve Sozlesme Yonetimi', icon: BadgeCheck },
  { title: 'Zaman ve Maliyet Kontrolu', icon: Timer },
  { title: 'Yapim (Insaat) Yonetimi', icon: HardHat },
  { title: 'Risk ve Kalite Yonetimi', icon: ShieldCheck },
]

function Construction() {
  const [showAllConstruction, setShowAllConstruction] = useState(false)

  return (
    <SectionReveal id="insaat" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-5 lg:grid-cols-[1fr_0.9fr]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Insaat ve Proje Yonetimi Hizmetleri</h2>
            <p className="mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 text-slate-600">
              Projeleri bastan sona yoneten, isveren adina tum surecleri kontrol eden profesyonel cozum ortagi.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
              alt="Insaat saha yonetimi"
              className="h-48 w-full object-cover sm:h-56"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/70 via-slate-900/35 to-transparent" />
          </div>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {constructionItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                className={`rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] ${
                  index >= 3 && !showAllConstruction ? 'hidden sm:block' : ''
                }`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.25) }}
              >
                <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-navy">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              </motion.article>
            )
          })}
        </div>
        {constructionItems.length > 3 && (
          <div className="mt-5 sm:hidden">
            <button
              type="button"
              onClick={() => setShowAllConstruction((prev) => !prev)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              {showAllConstruction ? 'Daha Az Goster' : 'Devamini Gor'}
            </button>
          </div>
        )}
      </div>
    </SectionReveal>
  )
}

export default Construction
