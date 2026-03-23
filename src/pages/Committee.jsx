import { motion } from 'framer-motion'
import Section from '../components/Section'
import { User } from 'lucide-react'

const committee = {
  organizing: [
    { name: 'Prof. Fatima Al-Hassan',    role: 'Conference Chair',      org: 'Sciences Po, France' },
    { name: 'Dr. Marcus Thompson',       role: 'Program Co-Chair',      org: 'LSE, United Kingdom' },
    { name: 'Prof. Adaeze Okafor',       role: 'Program Co-Chair',      org: 'University of Nairobi, Kenya' },
    { name: 'Dr. Raj Patel',             role: 'Publications Chair',    org: 'Columbia University, USA' },
    { name: 'Dr. Marta Gonzalez',        role: 'Workshop Coordinator',  org: 'FLACSO, Argentina' },
    { name: 'Prof. Haruto Nakamura',     role: 'Local Arrangements',    org: 'University of Tokyo, Japan' },
  ],
  program: [
    { name: 'Prof. Elena Vasilieva',     role: 'Social Transformation', org: 'HSE University, Russia' },
    { name: 'Dr. Kwame Mensah',          role: 'Public Policy Track',   org: 'University of Ghana' },
    { name: 'Prof. Ingrid Andersson',    role: 'Development Studies',   org: 'Uppsala University, Sweden' },
    { name: 'Dr. Leila Boutros',         role: 'Human Rights Track',    org: 'American University, Beirut' },
    { name: 'Prof. Daniel Kim',          role: 'Political Economy',     org: 'Seoul National University' },
    { name: 'Dr. Priya Subramaniam',     role: 'Tech & Society Track',  org: 'IIM Bangalore, India' },
  ],
  advisory: [
    { name: 'Prof. Amartya Sen',         org: 'Harvard University, USA' },
    { name: 'Dr. Ha-Joon Chang',         org: 'SOAS University of London, UK' },
    { name: 'Prof. Achille Mbembe',      org: 'University of the Witwatersrand, SA' },
    { name: 'Dr. Jayati Ghosh',          org: 'University of Massachusetts, USA' },
  ],
}

function MemberCard({ name, role, org, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="ed-card p-4 flex items-start gap-3"
    >
      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255,107,53,0.15), rgba(22,22,30,0.5))',
          border: '1px solid rgba(255,107,53,0.15)',
        }}>
        <User size={15} style={{ color: 'rgba(255,107,53,0.65)' }} />
      </div>
      <div className="min-w-0">
        <p className="text-ash-100 text-sm font-semibold font-body truncate">{name}</p>
        {role && <p className="text-xs font-body" style={{ color: 'rgba(255,107,53,0.65)' }}>{role}</p>}
        <p className="text-ash-100/35 text-xs font-body mt-0.5 leading-snug">{org}</p>
      </div>
    </motion.div>
  )
}

function GroupHeading({ label }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, rgba(255,107,53,0.45), transparent)' }} />
      <h3 className="font-display text-lg font-bold text-ash-100 px-2 whitespace-nowrap">{label}</h3>
      <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, rgba(255,107,53,0.45), transparent)' }} />
    </div>
  )
}

export default function Committee() {
  return (
    <Section
      id="committee"
      label="Organizing Team"
      title="Conference Committee"
      subtitle="A distinguished international body of scholars, practitioners and policymakers guiding every aspect of WCSTPPGDS 2026."
      style={{ background: '#16161E' }}
      sectionNum="11"
    >
      <div className="space-y-12">
        <div>
          <GroupHeading label="Organizing Committee" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {committee.organizing.map((m, i) => <MemberCard key={m.name} {...m} delay={i * 0.06} />)}
          </div>
        </div>
        <div>
          <GroupHeading label="Programme Committee" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {committee.program.map((m, i) => <MemberCard key={m.name} {...m} delay={i * 0.06} />)}
          </div>
        </div>
        <div>
          <GroupHeading label="International Advisory Board" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {committee.advisory.map((m, i) => <MemberCard key={m.name} {...m} delay={i * 0.06} />)}
          </div>
        </div>
      </div>
    </Section>
  )
}
