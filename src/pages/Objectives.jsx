// OBJECTIVES
import { motion } from 'framer-motion'
import Section from '../components/Section'

const objectives = [
  { num: '01', title: 'Advance Critical Social Theory',     desc: 'Promote cutting-edge theoretical frameworks that interrogate power, inequality, and structural transformation.' },
  { num: '02', title: 'Strengthen Policy Architectures',    desc: 'Generate actionable evidence informing sustainable, equitable policies at local, national and global scales.' },
  { num: '03', title: 'Bridge Research and Governance',     desc: 'Create direct channels between academic knowledge production and governmental and multilateral decision-making.' },
  { num: '04', title: 'Amplify Global South Voices',        desc: 'Centre perspectives, methodologies and solutions emerging from historically marginalised regions and communities.' },
  { num: '05', title: 'Foster Interdisciplinary Dialogue',  desc: 'Connect sociology, political science, economics, law and development studies in productive cross-disciplinary exchange.' },
  { num: '06', title: 'Cultivate Emerging Scholars',        desc: 'Provide mentored platforms for graduate students and early-career researchers to present and receive substantive feedback.' },
]

export default function Objectives() {
  return (
    <Section
      id="objectives"
      label="Conference Objectives"
      title="What We Set Out to Achieve"
      subtitle="Six interlocking objectives guide the curation, programming and community-building of WCSTPPGDS 2026."
      style={{ background: '#16161E' }}
      sectionNum="03"
      center
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {objectives.map(({ num, title, desc }, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5 }}
            className="ed-card p-6 group relative overflow-hidden"
          >
            <div className="absolute -top-2 -right-2 font-display font-bold select-none leading-none"
              style={{ fontSize: '5.5rem', color: 'rgba(255,107,53,0.045)', lineHeight: 1 }}>
              {num}
            </div>
            {/* Bottom hover accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              style={{ background: 'linear-gradient(90deg, #FF6B35, #2EFAC8)' }} />
            <div className="font-mono text-xs tracking-widest mb-3 relative z-10" style={{ color: '#FF6B35', opacity: 0.85 }}>{num}</div>
            <h3 className="font-display text-base font-bold text-ash-100 mb-2 relative z-10">{title}</h3>
            <p className="text-ash-100/45 text-sm font-body leading-relaxed relative z-10">{desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
