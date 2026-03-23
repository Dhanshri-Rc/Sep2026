import Section from '../components/Section'
import Card from '../components/Card'
import { ShieldAlert, Percent, RefreshCw, Ban } from 'lucide-react'

const policies = [
  {
    icon: Percent,
    title: 'Similarity Threshold',
    desc: 'All submissions are screened using iThenticate or Turnitin prior to review. Papers exceeding a 15% similarity index trigger editorial review. Self-plagiarism is treated identically to external plagiarism.',
  },
  {
    icon: RefreshCw,
    title: 'Borderline Revision Policy',
    desc: 'Manuscripts scoring 15–25% similarity may be returned for revision. Authors have 7 days to rephrase flagged passages and re-cite appropriately. Revised papers are re-screened before proceeding.',
  },
  {
    icon: Ban,
    title: 'Rejection & Sanctions',
    desc: 'Papers exceeding 25% similarity, or displaying clear intentional misappropriation of others\' work, are permanently rejected. Authors may be banned from future WCSTPPGDS submissions.',
  },
  {
    icon: ShieldAlert,
    title: 'Broader Research Misconduct',
    desc: 'Data fabrication, concurrent submission to competing venues, and ghost or gift authorship are serious violations that may be reported to authors\' institutions and funding agencies.',
  },
]

export default function PlagiarismPolicy() {
  return (
    <Section
      id="plagiarism"
      label="Research Integrity"
      title="Plagiarism & Ethics Policy"
      subtitle="WCSTPPGDS 2026 upholds full COPE guidelines and treats research integrity as non-negotiable at every stage."
      style={{ background: '#16161E' }}
      sectionNum="07"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {policies.map(({ icon: Icon, title, desc }, i) => (
          <Card key={title} delay={i * 0.08} variant="ed">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,107,53,0.1)' }}>
                <Icon size={17} style={{ color: '#FF6B35' }} />
              </div>
              <h3 className="font-display text-base font-bold text-ash-100">{title}</h3>
            </div>
            <p className="text-ash-100/45 text-sm font-body leading-relaxed">{desc}</p>
          </Card>
        ))}
      </div>

      <Card variant="ed">
        <h4 className="font-display text-base font-bold text-ash-100 mb-2">Our Open Science Commitment</h4>
        <p className="text-ash-100/45 text-sm font-body leading-relaxed">
          We encourage open-science practices: pre-registration, open data, and open-source methods where
          ethically permissible. Integrity concerns may be reported confidentially to our ethics committee at{' '}
          <span style={{ color: '#FF6B35' }}>ethics@wcstppgds2026.edu</span>. All committee members
          operate under strict conflict-of-interest disclosures aligned with COPE guidelines.
        </p>
      </Card>
    </Section>
  )
}
