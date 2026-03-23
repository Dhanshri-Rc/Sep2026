import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { Lightbulb, Network, Presentation, Users } from 'lucide-react'

const features = [
  { icon: Lightbulb,    title: 'Keynote Programme',    desc: 'World leaders, Nobel laureates, and UN representatives share visionary addresses.' },
  { icon: Network,      title: 'Policy Clinics',       desc: 'Structured workshops translating research findings into actionable policy frameworks.' },
  { icon: Presentation, title: 'Research Showcases',   desc: 'Competitive paper, poster, and panel sessions across all thematic tracks.' },
  { icon: Users,        title: 'Networking Summits',   desc: 'Curated roundtables connecting researchers, funders, and government officials.' },
]

export default function AboutConference() {
  const imgRef = useRef(null)
  const inView  = useInView(imgRef, { once: true })

  return (
    <Section
      id="about-conference"
      label="2026 Edition"
      title="WCSTPPGDS 2026"
      subtitle="This year's theme — 'Designing Equitable Futures' — explores how scholarship can architect systems of justice, inclusion and resilience at every scale of governance."
      style={{ background: '#0F0F14' }}
      sectionNum="02"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <Card key={title} delay={i * 0.08} variant="ed" className="p-5">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(255,107,53,0.1)' }}>
                  <Icon size={17} style={{ color: '#FF6B35' }} />
                </div>
                <h4 className="text-ash-100 font-semibold text-sm mb-1.5 font-body">{title}</h4>
                <p className="text-ash-100/40 text-xs font-body leading-relaxed">{desc}</p>
              </Card>
            ))}
          </div>
          <p className="text-ash-100/50 font-body text-sm leading-relaxed">
            Held in hybrid format across September 2026, the conference spans three intensive days of plenary sessions,
            breakout workshops, evening receptions and a policy hackathon — all designed to move ideas from
            manuscript to movement.
          </p>
        </div>

        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, x: 36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 relative rounded-2xl overflow-hidden h-80 lg:h-[460px]"
        >
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
            alt="Global summit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0F0F14 0%, transparent 50%)' }} />
          <div className="absolute inset-0" style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'inherit', pointerEvents: 'none' }} />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="absolute bottom-5 right-5 glass px-5 py-3 rounded-xl text-right"
            style={{ backdropFilter: 'blur(16px)', background: 'rgba(15,15,20,0.75)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="font-display text-2xl font-bold mint-text">Sep 2026</div>
            <div className="text-ash-100/55 text-xs font-body">Hybrid Format</div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  )
}
