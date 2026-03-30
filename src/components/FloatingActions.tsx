import { MessageCircle, PhoneCall } from 'lucide-react'

function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/905355271254"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle size={18} />
        WhatsApp
      </a>
      <a
        href="tel:05355271254"
        className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
      >
        <PhoneCall size={18} />
        Ara
      </a>
    </div>
  )
}

export default FloatingActions
