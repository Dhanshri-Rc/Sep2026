import { motion } from 'framer-motion'
import Section from '../components/Section'
import { Upload, Search, MessageSquare, CheckCircle, BookOpen, Mic } from 'lucide-react'

const steps = [
  { icon: Upload,        num: '01', title: 'Prepare & Submit',       desc: 'Register on the submission portal and upload your anonymised manuscript in PDF or DOCX. Remove all author identifiers for blind review.' },
  { icon: Search,        num: '02', title: 'Editorial Screening',    desc: 'The editorial team verifies scope, formatting, and runs automated plagiarism screening within 5 working days of submission.' },
  { icon: MessageSquare, num: '03', title: 'Double-Blind Review',    desc: 'At least two independent experts evaluate the work on originality, theoretical rigour, methodology, and policy relevance.' },
  { icon: CheckCircle,   num: '04', title: 'Decision Notification',  desc: 'Authors receive Accept, Minor Revision, Major Revision, or Reject decisions alongside full anonymised reviewer reports.' },
  { icon: BookOpen,      num: '05', title: 'Camera-Ready Upload',    desc: 'Accepted authors submit the final manuscript with signed copyright form within 21 days of the acceptance notification.' },
  { icon: Mic,           num: '06', title: 'Presentation',           desc: 'Authors present live (in-person or virtual) and participate in structured Q&A with peers, policymakers and practitioners.' },
]

export default function SubmissionProcess() {
  return (
    <Section
      id="submission-process"
      label="Submission Process"
      title="From Draft to Podium"
      subtitle="A rigorous six-step workflow ensuring every submission receives the scholarly attention it deserves."
      style={{ background: '#0F0F14' }}
      sectionNum="06"
      center
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Centre spine */}
        <div className="absolute top-0 bottom-0 hidden md:block"
          style={{ left: '50%', width: 1, transform: 'translateX(-50%)',
            background: 'linear-gradient(to bottom, rgba(255,107,53,0.5), rgba(255,107,53,0.15), transparent)' }} />

        <div className="space-y-8">
          {steps.map(({ icon: Icon, num, title, desc }, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={`flex items-center gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                {/* Card */}
                <div className={`flex-1 ed-card p-5 group ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(255,107,53,0.1)' }}>
                      <Icon size={15} style={{ color: '#FF6B35' }} />
                    </div>
                    <h3 className="font-display text-base font-bold text-ash-100">{title}</h3>
                  </div>
                  <p className="text-ash-100/45 text-sm font-body leading-relaxed">{desc}</p>
                </div>

                {/* Centre node */}
                <div className="hidden md:flex flex-col items-center z-10">
                  <div className="tl-dot" />
                  <div className="font-mono text-[10px] mt-1" style={{ color: 'rgba(255,107,53,0.5)' }}>{num}</div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            )
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mt-14 text-center"
      >
        <a href="#contact" className="btn-fire inline-flex items-center gap-2">
          <span className="flex items-center gap-2"><Upload size={15} /> Submit Your Paper</span>
        </a>
        <p className="text-ash-100/30 text-xs font-body mt-3">Submission portal opens 1 June 2026</p>
      </motion.div>
    </Section>
  )
}
