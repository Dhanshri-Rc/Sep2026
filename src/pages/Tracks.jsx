import { motion } from 'framer-motion'
import Section from '../components/Section'

const tracks = [
  {
    id: 'T1', title: 'Social Transformation & Movements',
    img: 'https://images.unsplash.com/photo-1591189863430-ab87e120f312?w=800&q=80',
    overlay: 'linear-gradient(to bottom, rgba(255,107,53,0.45), rgba(15,15,20,0.97))',
    topics: ['Civil Society', 'Social Movements', 'Collective Action', 'Identity Politics', 'Intersectionality'],
  },
  {
    id: 'T2', title: 'Public Policy & Governance',
    img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    overlay: 'linear-gradient(to bottom, rgba(46,250,200,0.25), rgba(15,15,20,0.97))',
    topics: ['Policy Design', 'Institutional Reform', 'Comparative Politics', 'Democracy', 'Public Administration'],
  },
  {
    id: 'T3', title: 'Global Development Studies',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    overlay: 'linear-gradient(to bottom, rgba(255,159,122,0.4), rgba(15,15,20,0.97))',
    topics: ['Sustainable Development', 'Poverty Reduction', 'SDG Progress', 'Aid Effectiveness', 'South-South Cooperation'],
  },
  {
    id: 'T4', title: 'Human Rights & Social Justice',
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
    overlay: 'linear-gradient(to bottom, rgba(255,107,53,0.35), rgba(15,15,20,0.97))',
    topics: ['International Human Rights', 'Transitional Justice', 'Gender Equality', 'Disability Rights', 'Refugee Policy'],
  },
  {
    id: 'T5', title: 'Political Economy & Finance',
    img: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=800&q=80',
    overlay: 'linear-gradient(to bottom, rgba(46,250,200,0.2), rgba(15,15,20,0.97))',
    topics: ['Global Finance', 'Inequality', 'Trade Policy', 'Labour Markets', 'Economic Justice'],
  },
  {
    id: 'T6', title: 'Technology, Society & Digital Rights',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    overlay: 'linear-gradient(to bottom, rgba(255,107,53,0.3), rgba(15,15,20,0.97))',
    topics: ['Digital Governance', 'AI & Society', 'Surveillance', 'Data Rights', 'Platform Politics'],
  },
]

export default function Tracks() {
  return (
    <Section
      id="tracks"
      label="Research Tracks"
      title="Six Thematic Tracks"
      subtitle="From grassroots movements to global governance — covering the full spectrum of social transformation research."
      style={{ background: '#0F0F14' }}
      sectionNum="04"
      center
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map(({ id, title, img, overlay, topics }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="track-card group"
          >
            <div className="track-img">
              <img src={img} alt={title} />
              <div className="absolute inset-0" style={{ background: overlay }} />
              <div className="absolute top-3 left-3 font-mono text-xs tracking-widest px-2 py-1 rounded-lg"
                style={{ background: 'rgba(15,15,20,0.6)', color: '#FF6B35', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,107,53,0.2)' }}>
                {id}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-[1.05rem] font-bold text-ash-100 mb-3 leading-snug">{title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {topics.map(t => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-lg font-body"
                    style={{ background: 'rgba(255,107,53,0.08)', color: 'rgba(255,159,122,0.85)', border: '1px solid rgba(255,107,53,0.14)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
        className="text-center text-ash-100/35 text-sm font-body mt-10">
        An Open Track accepts interdisciplinary submissions spanning multiple themes — with editorial approval.
      </motion.p>
    </Section>
  )
}
