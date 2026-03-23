import Section from '../components/Section'
import Card from '../components/Card'
import { FileText, AlignLeft, Languages, ShieldCheck, AlertTriangle } from 'lucide-react'

const guidelines = [
  { icon: FileText, title: 'Paper Length', items: ['Full Research Papers: 6,000–8,000 words', 'Short Papers / Works-in-Progress: 3,000–5,000 words', 'Poster Abstracts: 500–800 words', 'Policy Briefs: 2,000–3,500 words'] },
  { icon: AlignLeft, title: 'Formatting', items: ['APA 7th Edition citation style required', 'Times New Roman 12pt or Calibri 11pt', 'Double-spaced body text, 2.5cm margins', 'Structured abstract of 150–250 words', 'Up to 6 keywords below abstract'] },
  { icon: Languages, title: 'Language', items: ['English is the official conference language', 'Non-English papers accepted with full English translation', 'Bilingual presentations are permitted', 'Language support available on request'] },
  { icon: ShieldCheck, title: 'Ethical Standards', items: ['Original, unpublished work only', 'IRB/ethics approval required for human subjects research', 'Generative AI usage must be disclosed in methodology', 'All potential conflicts of interest must be declared'] },
]

export default function SubmissionGuidelines() {
  return (
    <Section id="submission" label="Submission Guidelines" title="Guidelines for Authors"
      subtitle="All manuscripts must meet these standards to be admitted to the peer review process."
      style={{ background: '#16161E' }} sectionNum="05"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {guidelines.map(({ icon: Icon, title, items }, i) => (
          <Card key={title} delay={i * 0.08} variant="ed">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,107,53,0.1)' }}>
                <Icon size={17} style={{ color: '#FF6B35' }} />
              </div>
              <h3 className="font-display text-lg font-bold text-ash-100">{title}</h3>
            </div>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item} className="flex items-start gap-2.5 text-ash-100/50 text-sm font-body">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: 'rgba(255,107,53,0.55)' }} />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
      <Card variant="ed" className="border-orange-500/15" style={{ borderColor: 'rgba(255,107,53,0.18)', background: 'rgba(255,107,53,0.04)' }}>
        <div className="flex items-start gap-3">
          <AlertTriangle size={17} style={{ color: '#FF6B35', flexShrink: 0, marginTop: 2 }} />
          <div>
            <h4 className="font-body font-semibold text-sm mb-1" style={{ color: '#FF9F7A' }}>AI Writing Disclosure Policy</h4>
            <p className="text-ash-100/50 text-sm font-body leading-relaxed">
              Authors using generative AI tools (ChatGPT, Claude, Gemini, etc.) must disclose this in their Methods section. AI systems cannot be listed as co-authors. The submitting author bears full scholarly responsibility for the work's integrity and accuracy.
            </p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
