import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Section({ id, className = '', style, children, label, title, subtitle, center = false, sectionNum }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id={id} ref={ref} className={`relative py-20 lg:py-28 overflow-hidden ${className}`} style={style}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(label || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-14 relative ${center ? 'text-center' : ''}`}
          >
            {sectionNum && (
              <span className="section-num" style={{ right: center ? '50%' : 0, transform: center ? 'translateX(50%)' : 'none' }}>
                {sectionNum}
              </span>
            )}
            {label && <p className="tag mb-3">{label}</p>}
            {title && (
              <h2 className={`font-display font-bold text-ash-100 leading-tight mb-4 ${center ? 'mx-auto max-w-3xl' : ''}`}
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3.2rem)' }}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-ash-100/50 text-base sm:text-lg font-body leading-relaxed ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
                {subtitle}
              </p>
            )}
            <div className={`mt-5 h-0.5 w-20 ${center ? 'mx-auto' : ''}`}
              style={{ background: 'linear-gradient(90deg, #FF6B35, #2EFAC8)' }} />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
