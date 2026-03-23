import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Globe, Users, BookOpen } from 'lucide-react'

const stats = [
  { icon: Calendar, value: 'Sep 2026',  label: 'Conference' },
  { icon: Globe,    value: 'Hybrid',    label: 'Format' },
  { icon: Users,    value: '700+',      label: 'Scholars' },
  { icon: BookOpen, value: '55+',       label: 'Countries' },
]

const tickerItems = [
  'Social Transformation', 'Public Policy', 'Global Development', 'Governance Studies',
  'Human Rights', 'Sustainable Development', 'Policy Reform', 'Civil Society',
  'Social Transformation', 'Public Policy', 'Global Development', 'Governance Studies',
  'Human Rights', 'Sustainable Development', 'Policy Reform', 'Civil Society',
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* BG image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85"
          alt="World Conference"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(110deg, #0F0F14 40%, rgba(15,15,20,0.9) 65%, rgba(15,15,20,0.5) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0F0F14 0%, transparent 50%)' }} />
      </div>

      {/* Ambient glow orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute pointer-events-none"
        style={{ top: '25%', right: '15%', width: 480, height: 480, borderRadius: '50%', background: '#FF6B35', filter: 'blur(110px)', opacity: 0.09 }}
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute pointer-events-none"
        style={{ bottom: '20%', left: '20%', width: 380, height: 380, borderRadius: '50%', background: '#2EFAC8', filter: 'blur(100px)', opacity: 0.07 }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-3xl">

            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{ border: '1px solid rgba(255,107,53,0.28)', background: 'rgba(255,107,53,0.07)', backdropFilter: 'blur(8px)' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#FF6B35' }} />
              <span className="tag" style={{ fontSize: '0.62rem' }}>Siare Conference · September 2026</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 38 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display font-bold leading-[1.04] mb-6 text-ash-100"
                style={{ fontSize: 'clamp(2.4rem, 5.5vw, 3rem)' }}>
                Social{' '}
                <span className="fire-text">Transformation</span>
                <br />& Public{' '}
                <span className="mint-text">Policy</span>
                <br />
                <span style={{ color: 'rgba(237,237,237,0.55)', fontStyle: 'italic', fontSize: '0.75em' }}>
                  for Global Development
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-ash-100/55 text-base sm:text-lg font-body leading-relaxed mb-10 max-w-xl"
            >
              The world's foremost gathering of social scientists, policy architects and development practitioners —
              converging to redefine the frameworks that shape our shared futures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <motion.a href="#submission" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-fire">
                <span className="flex items-center gap-2">Submit Paper <ArrowRight size={15} /></span>
              </motion.a>
              <motion.a href="#about" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="btn-outline-fire">
                Explore Programme
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}
                >
                  <Icon size={14} style={{ color: '#FF6B35' }} />
                  <div>
                    <div className="text-ash-100 font-semibold text-sm font-body">{value}</div>
                    <div className="text-ash-100/35 text-[11px] font-body">{label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 w-full overflow-hidden py-3 border-y" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(15,15,20,0.6)', backdropFilter: 'blur(10px)' }}>
        <div className="marquee-track">
          {tickerItems.map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-6 font-body text-sm font-medium whitespace-nowrap"
              style={{ color: i % 2 === 0 ? 'rgba(237,237,237,0.45)' : '#FF6B35' }}>
              {item}
              <span style={{ color: 'rgba(46,250,200,0.4)', fontSize: '1.2rem' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="tag" style={{ fontSize: '0.58rem' }}>Scroll</span>
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, #FF6B35, transparent)' }} />
      </motion.div>
    </section>
  )
}
