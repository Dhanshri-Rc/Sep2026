import Section from '../components/Section'
import Card from '../components/Card'
import { BookOpen, Star, ExternalLink } from 'lucide-react'

const pubs = [
  {
    name: 'Conference Proceedings',
    publisher: 'Springer Nature / Taylor & Francis',
    scope: 'All accepted full papers',
    indexed: ['Scopus', 'Web of Science', 'SpringerLink'],
    note: 'DOI-linked, ISBN-assigned proceedings published digitally within 30 days of the conference.',
  },
  {
    name: 'Journal of Social Policy Studies',
    publisher: 'Partner Journal · Open Access',
    scope: 'Best papers (by invitation)',
    indexed: ['SSCI Q1', 'DOAJ', 'EconLit'],
    note: 'Top 12% of accepted papers invited for extended journal submission with 5-week expedited peer review.',
  },
  {
    name: 'Global Development Review',
    publisher: 'Partner Journal · Hybrid OA',
    scope: 'Development-focused papers',
    indexed: ['ESCI', 'IBSS', 'Scopus Q2'],
    note: 'Dedicated outlet for interdisciplinary global development research with fast-track editorial processing.',
  },
]

export default function Publications() {
  return (
    <Section
      id="publications"
      label="Publications"
      title="Publish Your Research"
      subtitle="Three pathways to maximise the reach and impact of your scholarly contribution."
      style={{ background: '#0F0F14' }}
      sectionNum="10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-5">
        {pubs.map(({ name, publisher, scope, indexed, note }, i) => (
          <Card key={name} delay={i * 0.1} variant="ed" className="flex flex-col">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
              style={{ background: 'rgba(255,107,53,0.1)' }}>
              <BookOpen size={19} style={{ color: '#FF6B35' }} />
            </div>
            <h3 className="font-display text-lg font-bold text-ash-100 mb-1">{name}</h3>
            <p className="text-xs font-body mb-3" style={{ color: 'rgba(255,107,53,0.65)' }}>{publisher}</p>
            <p className="text-ash-100/45 text-sm font-body flex-1 mb-4">{note}</p>
            <p className="text-ash-100/28 text-xs font-body mb-3">
              Scope: <span className="text-ash-100/50">{scope}</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {indexed.map(idx => (
                <span key={idx} className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-lg font-body"
                  style={{ background: 'rgba(255,107,53,0.08)', color: 'rgba(255,159,122,0.8)', border: '1px solid rgba(255,107,53,0.14)' }}>
                  <Star size={8} /> {idx}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card variant="ed">
        <div className="flex items-start gap-4">
          <ExternalLink size={17} style={{ color: '#FF6B35', flexShrink: 0, marginTop: 2 }} />
          <div>
            <h4 className="font-display text-base font-bold text-ash-100 mb-2">Publication Timeline</h4>
            <p className="text-ash-100/45 text-sm font-body leading-relaxed">
              Camera-ready manuscripts are due 21 days post-acceptance. Digital proceedings are
              published online before the conference opens. Extended journal versions follow a
              separate 3–4 month editorial cycle. All authors retain copyright under a Creative
              Commons Attribution (CC BY 4.0) licence unless otherwise negotiated with the publisher.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
