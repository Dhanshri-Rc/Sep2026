import { Globe, Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden pt-16 pb-8" style={{ background: '#06060A', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="absolute pointer-events-none" style={{
        bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: 700, height: 200, borderRadius: '50%',
        background: 'rgba(255,107,53,0.05)', filter: 'blur(60px)',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #FF6B35, #FF9F7A)', boxShadow: '0 0 18px rgba(255,107,53,0.35)' }}>
                <Globe size={17} style={{ color: '#0F0F14' }} />
              </div>
              <div className="tag" style={{ fontSize: '0.62rem' }}>WCSTPPGDS 2026</div>
            </div>
            <p className="text-ash-100/40 text-sm leading-relaxed max-w-sm font-body">
              World Conference on Social Transformation, Public Policy, and Global Development Studies.
              Reshaping global discourse through rigorous scholarship.
            </p>
            <div className="flex gap-3 mt-6">
              {[Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.07)', color: 'rgba(237,237,237,0.3)' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#FF6B35'; e.currentTarget.style.borderColor = 'rgba(255,107,53,0.35)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(237,237,237,0.3)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="tag mb-4" style={{ fontSize: '0.62rem' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {['About', 'Call for Papers', 'Submission', 'Important Dates', 'Committee', 'Registration'].map(l => (
                <li key={l}>
                  <a href="#" className="text-ash-100/40 text-sm font-body transition-colors"
                    onMouseEnter={e => e.currentTarget.style.color = '#FF6B35'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(237,237,237,0.4)'}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="tag mb-4" style={{ fontSize: '0.62rem' }}>Contact</h4>
            <ul className="space-y-3">
              {[
                { Icon: Mail,   text: 'wcstppgds2026@conference.edu' },
                { Icon: Phone,  text: '+1 (555) 321-9876' },
                { Icon: MapPin, text: 'Hybrid · Online & In-Person\nSeptember 2026' },
              ].map(({ Icon, text }, i) => (
                <li key={i} className="flex items-start gap-2.5 text-ash-100/40 text-sm font-body">
                  <Icon size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'rgba(255,107,53,0.6)' }} />
                  <span style={{ whiteSpace: 'pre-line' }}>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fire-rule mb-6" />
        <div className="flex flex-col sm:flex-row justify-between gap-3 text-ash-100/22 text-xs font-body">
          <p>© 2026 WCSTPPGDS. All rights reserved.</p>
          <p>Advancing scholarship · Transforming policy · Shaping futures</p>
        </div>
      </div>
    </footer>
  )
}
