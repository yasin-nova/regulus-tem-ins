import { motion } from 'framer-motion'
import logo from '../assets/logo-regulus.svg'

type BrandLogoProps = {
  alt?: string
  className?: string
  animateOnLoad?: boolean
}

function BrandLogo({ alt = 'Regulus logo', className = '', animateOnLoad = false }: BrandLogoProps) {
  const base = (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <img src={logo} alt={alt} className="h-full w-full object-contain" />
    </div>
  )

  if (!animateOnLoad) return base

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {base}
    </motion.div>
  )
}

export default BrandLogo
