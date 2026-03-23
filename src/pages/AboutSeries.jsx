import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Section from '../components/Section'
import Card from '../components/Card'
import { Globe2, Award, BookMarked, TrendingUp } from 'lucide-react'

const highlights = [
  { icon: Globe2,     title: 'Global Reach',        desc: 'Scholars, policymakers and practitioners from 55+ countries driving cross-border dialogue.' },
  { icon: Award,      title: 'Double-Blind Review', desc: 'All papers undergo rigorous independent peer review to the highest academic standards.' },
  { icon: BookMarked, title: 'Indexed Publications',desc: 'Accepted work published in Scopus and SSCI-indexed journals and proceedings.' },
  { icon: TrendingUp, title: 'Policy Influence',    desc: 'Research outcomes directly cited in UN, World Bank, and national government reports.' },
]

export default function AboutSeries() {
  const imgRef = useRef(null)
  const inView  = useInView(imgRef, { once: true })

  return (
    <Section
      id="about"
      label="About the Series"
      title="Built on a Decade of Scholarly Impact"
      subtitle="The WCSTPPGDS series is the pre-eminent interdisciplinary forum bridging social science research and global policy action."
      style={{ background: '#16161E' }}
      sectionNum="01"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, x: -36 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden h-80 lg:h-[460px]"
        >
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=900&q=80"
            alt="Policy discussion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #16161E 0%, transparent 55%)' }} />
          <div className="absolute inset-0" style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: 'inherit', pointerEvents: 'none' }} />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
            className="absolute bottom-5 left-5 glass px-5 py-3 rounded-xl"
            style={{ backdropFilter: 'blur(16px)', background: 'rgba(22,22,30,0.7)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="font-display text-2xl font-bold fire-text">12+</div>
            <div className="text-ash-100/55 text-xs font-body">Years of Policy Scholarship</div>
          </motion.div>
        </motion.div>

        <div>
          <p className="text-ash-100/55 font-body text-base leading-relaxed mb-7">
            Since 2014, WCSTPPGDS has catalysed transformative conversations at the intersection of
            social change, governance, and sustainable development. Each edition convenes the thinkers
            who shape tomorrow's policy landscape.
          </p>
          <p className="text-ash-100/55 font-body text-base leading-relaxed mb-10">
            Our alumni network of over 4,000 researchers, practitioners and decision-makers continues
            to drive evidence-based change across six continents — from grassroots movements to multilateral negotiations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
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
        </div>
      </div>
    </Section>
  )
}
