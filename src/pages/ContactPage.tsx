import Contact from '../components/Contact'
import SeoMeta from '../components/SeoMeta'

function ContactPage() {
  return (
    <>
      <SeoMeta
        title="Iletisim | Izmir Temizlik ve Insaat Teklif Al"
        description="Izmir temizlik ve insaat hizmetleri icin Regulus ile iletisime gecin. Hizli geri donus, yerinde kesif ve seffaf tekliflendirme."
        path="/iletisim"
        keywords="izmir temizlik iletisim, izmir insaat teklif, temizlik fiyat teklifi izmir, regulus iletisim"
      />
      <section className="pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="relative h-52 sm:h-64">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
                alt="Iletisim ve kurumsal destek"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">Hizli Geri Donus</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Talebinizi ilettikten sonra en kisa surede size donus yaparak kesif ve teklif surecini baslatiyoruz.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">Yerinde Kesif</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Hizmetin kapsamini dogru belirlemek icin ihtiyac halinde yerinde kesif yapip net bir plan sunuyoruz.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-base font-semibold text-slate-900">Seffaf Teklif</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Hizmet kalemlerini acikca belirten, surpriz maliyet icermeyen seffaf bir tekliflendirme yapiyoruz.
              </p>
            </article>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
            ].map((image, index) => (
              <div key={image} className="overflow-hidden rounded-xl border border-slate-200">
                <img src={image} alt={`Iletisim sureci gorseli ${index + 1}`} className="h-36 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </>
  )
}

export default ContactPage
