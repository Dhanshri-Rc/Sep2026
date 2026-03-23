import { motion } from 'framer-motion'
import Section from '../components/Section'
import { Check, Zap } from 'lucide-react'

const plans = [
  {
    tier: 'Student',
    price: '$149',
    early: '$95',
    badge: null,
    features: [
      'Full virtual conference access',
      'Digital proceedings copy',
      'Certificate of participation',
      'All keynote live-streams',
      'Virtual networking sessions',
    ],
    missing: ['In-person venue access', 'Workshop participation', 'Policy brief access'],
  },
  {
    tier: 'Academic',
    price: '$295',
    early: '$195',
    badge: 'Most Popular',
    features: [
      'Full hybrid conference access',
      'Printed & digital proceedings',
      'Certificate of presentation',
      'All keynote & plenary sessions',
      'In-person networking reception',
      'Workshop participation',
      'Policy brief collection',
    ],
    missing: [],
  },
  {
    tier: 'Policy & NGO',
    price: '$445',
    early: '$315',
    badge: 'Premium',
    features: [
      'Full hybrid conference access',
      'Printed & digital proceedings',
      'Priority seating at all sessions',
      'All workshops included',
      'VIP gala dinner access',
      'Full policy brief archive',
      'Speaker introduction opportunity',
      'Post-conference recordings',
    ],
    missing: [],
  },
]

export default function Registration() {
  return (
    <Section
      id="registration"
      label="Registration"
      title="Secure Your Place"
      subtitle="Early bird rates available until 10 August 2026. All tiers include the full digital proceedings archive."
      style={{ background: '#16161E' }}
      sectionNum="09"
      center
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map(({ tier, price, early, badge, features, missing }, i) => (
          <motion.div
            key={tier}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -7 }}
            className={badge === 'Most Popular' ? 'price-featured' : 'price-plain'}
          >
            {badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold font-body flex items-center gap-1 whitespace-nowrap"
                style={badge === 'Most Popular'
                  ? { background: 'linear-gradient(135deg, #FF6B35, #FF9F7A)', color: '#0F0F14' }
                  : { background: 'rgba(46,250,200,0.12)', color: '#2EFAC8', border: '1px solid rgba(46,250,200,0.3)' }
                }>
                {badge === 'Most Popular' && <Zap size={11} />}
                {badge}
              </div>
            )}

            <div className="mb-5">
              <p className="tag mb-2" style={{ fontSize: '0.62rem' }}>{tier}</p>
              <div className="flex items-end gap-2">
                <span className="font-display text-4xl font-bold text-ash-100">{early}</span>
                <span className="text-ash-100/30 text-sm line-through mb-1 font-body">{price}</span>
              </div>
              <p className="text-xs font-body mt-1" style={{ color: 'rgba(255,107,53,0.65)' }}>
                Early bird · Until Aug 10
              </p>
            </div>

            <div className="fire-rule mb-5" />

            <ul className="space-y-2.5 flex-1 mb-6">
              {features.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-ash-100/65 text-sm font-body">
                  <Check size={13} style={{ color: '#FF6B35', flexShrink: 0, marginTop: 3 }} />
                  {f}
                </li>
              ))}
              {missing.map(f => (
                <li key={f} className="flex items-start gap-2.5 text-ash-100/22 text-sm font-body line-through">
                  <span className="w-3.5 flex-shrink-0 text-center text-xs mt-0.5">–</span>
                  {f}
                </li>
              ))}
            </ul>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className={`block text-center py-2.5 rounded-full text-sm font-semibold font-body transition-all ${
                badge === 'Most Popular' ? 'btn-fire' : 'btn-outline-fire'
              }`}
              style={{ justifyContent: 'center' }}
            >
              {badge === 'Most Popular' ? <span>Register — Academic</span> : `Register — ${tier}`}
            </motion.a>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center text-ash-100/30 text-xs font-body mt-8"
      >
        Group rates available for 3+ registrations from the same institution — contact us for a bespoke quote.
      </motion.p>
    </Section>
  )
}
