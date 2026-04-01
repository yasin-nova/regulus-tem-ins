import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import SectionReveal from './SectionReveal'

function Contact() {
  const whatsappMessage =
    'Merhaba, Regulus Temizlik ve İnşaat hizmetleri hakkında bilgi ve fiyat teklifi almak istiyorum.'
  const whatsappUrl = `https://wa.me/905355271254?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <SectionReveal id="iletisim" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">İletişim</h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="text-2xl font-semibold text-slate-900">Hazır Mesaj ile WhatsApp</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Hizmet talebinizi form doldurmadan hızlıca iletmek için aşağıdaki butona tıklayabilirsiniz. Hazır mesaj
              ile ekibimize doğrudan ulaşırsınız.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              WhatsApp ile İletişime Geç
            </a>
            <p className="mt-4 text-xs text-slate-500">
              Hazır mesaj sadece sizin tarafınızdan gönderilir; ziyaretçilere otomatik mesaj gitmez.
            </p>
          </article>

          <aside className="rounded-2xl border border-slate-200 bg-white p-7">
            <h3 className="text-2xl font-semibold text-slate-900">Bize Ulaşın</h3>
            <div className="mt-8 space-y-5 text-sm">
              <p className="flex items-start gap-3 text-slate-600">
                <MapPin size={18} className="mt-0.5 text-navy" />
                İzmir, Türkiye
              </p>
              <p className="flex items-start gap-3 text-slate-600">
                <Phone size={18} className="mt-0.5 text-navy" />
                05355271254
              </p>
              <p className="flex items-start gap-3 text-slate-600">
                <Mail size={18} className="mt-0.5 text-navy" />
                info@regulus.com.tr
              </p>
            </div>
          </aside>
        </div>
      </div>
    </SectionReveal>
  )
}

export default Contact
