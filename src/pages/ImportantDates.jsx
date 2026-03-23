import { motion } from 'framer-motion'
import Section from '../components/Section'
import { AlertCircle } from 'lucide-react'

const dates = [
  { date: 'June 1, 2026',          label: 'Submission Portal Opens',          kind: 'normal' },
  { date: 'July 15, 2026',         label: 'Abstract Submission Deadline',      kind: 'highlight' },
  { date: 'July 31, 2026',         label: 'Full Paper Submission Deadline',    kind: 'highlight' },
  { date: 'August 10, 2026',       label: 'Early Bird Registration Closes',    kind: 'highlight' },
  { date: 'August 25, 2026',       label: 'Review Decisions Sent',             kind: 'normal' },
  { date: 'September 8, 2026',     label: 'Camera-Ready Manuscript Due',       kind: 'normal' },
  { date: 'September 15, 2026',    label: 'Regular Registration Deadline',     kind: 'normal' },
  { date: 'September 22, 2026',    label: 'Conference Programme Published',    kind: 'normal' },
  { date: 'September 17–19, 2026', label: '🌍 Conference Days',               kind: 'main' },
  { date: 'November 30, 2026',     label: 'Extended Journal Versions Due',     kind: 'normal' },
]

export default function ImportantDates() {
  return (
    <Section
      id="dates"
      label="Important Dates"
      title="Key Deadlines & Milestones"
      subtitle="All deadlines expire at 23:59 UTC. We strongly recommend submitting 48 hours ahead of deadline."
      style={{ background: '#0F0F14' }}
      sectionNum="08"
    >
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Spine */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, rgba(255,107,53,0.55), rgba(255,107,53,0.1), transparent)' }} />

          <div className="space-y-3">
            {dates.map(({ date, label, kind }, i) => (
              <motion.div
                key={date}
                initial={{ opacity: 0, x: -22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-5 group"
              >
                {/* Dot */}
                <div className="flex-shrink-0 relative z-10">
                  {kind === 'main'
                    ? <div className="tl-dot-main" />
                    : kind === 'highlight'
                    ? <div className="tl-dot" style={{ width: 12, height: 12 }} />
                    : <div className="w-2.5 h-2.5 rounded-full border flex-shrink-0"
                        style={{ borderColor: 'rgba(255,107,53,0.3)', background: '#0F0F14' }} />
                  }
                </div>

                {/* Row card */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-5 py-3.5 rounded-2xl transition-all duration-200"
                  style={{
                    border: kind === 'main'
                      ? '1px solid rgba(46,250,200,0.35)'
                      : kind === 'highlight'
                      ? '1px solid rgba(255,107,53,0.2)'
                      : '1px solid rgba(255,255,255,0.05)',
                    background: kind === 'main'
                      ? 'linear-gradient(90deg, rgba(46,250,200,0.08), rgba(22,22,30,0.4))'
                      : kind === 'highlight'
                      ? 'rgba(255,107,53,0.05)'
                      : 'rgba(22,22,30,0.35)',
                  }}
                >
                  <span className="font-body text-sm font-medium"
                    style={{ color: kind === 'main' ? '#2EFAC8' : kind === 'highlight' ? '#FF9F7A' : 'rgba(237,237,237,0.55)' }}>
                    {label}
                    {kind === 'main' && (
                      <span className="ml-2 text-[10px] px-2 py-0.5 rounded font-mono"
                        style={{ background: 'rgba(46,250,200,0.12)', color: '#2EFAC8', border: '1px solid rgba(46,250,200,0.25)' }}>
                        MAIN EVENT
                      </span>
                    )}
                  </span>
                  <span className="font-mono text-xs flex-shrink-0"
                    style={{ color: kind === 'main' ? 'rgba(46,250,200,0.65)' : 'rgba(237,237,237,0.3)' }}>
                    {date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-start gap-3 px-5 py-4 rounded-2xl"
          style={{ background: 'rgba(22,22,30,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <AlertCircle size={15} style={{ color: 'rgba(255,107,53,0.6)', flexShrink: 0, marginTop: 2 }} />
          <p className="text-ash-100/40 text-sm font-body leading-relaxed">
            Deadlines may be extended at the discretion of the organising committee. Subscribe to our
            newsletter or follow on social media for real-time deadline updates.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
