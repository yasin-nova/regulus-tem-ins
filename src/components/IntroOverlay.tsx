import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

const SESSION_KEY = 'regulus_intro_seen'

function IntroOverlay() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return !sessionStorage.getItem(SESSION_KEY)
  })

  useEffect(() => {
    if (visible) sessionStorage.setItem(SESSION_KEY, '1')
  }, [visible])

  useEffect(() => {
    if (!visible) return
    const timer = window.setTimeout(() => setVisible(false), 4800)
    return () => window.clearTimeout(timer)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/65 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative w-full max-w-2xl rounded-3xl border border-white/25 bg-gradient-to-br from-brand-navy via-[#274a79] to-brand-navy p-6 text-white shadow-premium sm:p-8"
          >
            <button
              type="button"
              aria-label="Kapat"
              onClick={() => setVisible(false)}
              className="absolute right-4 top-4 rounded-full border border-white/25 bg-white/10 p-2 transition-colors hover:bg-white/20"
            >
              <X size={16} />
            </button>

            <p className="badge-premium border-white/20 bg-white/10 text-white">Hos Geldiniz</p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
              Regulus Temizlik ve Insaat ile ihtiyaciniza uygun profesyonel hizmet
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-100 sm:text-base">
              Kurumsal ve bireysel tum hizmet taleplerinizde, hizli kesif, net fiyatlandirma ve duzenli operasyon
              anlayisiyla yaninizdayiz.
            </p>

            <div className="mt-6">
              <button type="button" onClick={() => setVisible(false)} className="btn-primary">
                Siteye Devam Et
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroOverlay
