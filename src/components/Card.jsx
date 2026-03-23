import { motion } from 'framer-motion'

export default function Card({ children, className = '', delay = 0, variant = 'glass' }) {
  const cls = variant === 'ed' ? 'ed-card' : 'glass-card'
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`${cls} p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}
