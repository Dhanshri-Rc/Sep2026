import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'

const links = [
  // { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Conference',      href: '#about-conference' },

  { label: 'Call for papers',     href: '#tracks' },
  { label: 'Submission', href: '#submission' },
  { label: 'Register',   href: '#registration' },

  { label: 'Dates',      href: '#dates' },
  { label: 'Committee',  href: '#committee' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('#home')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={scrolled ? {
        background: 'rgba(15,15,20,0.82)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 4px 40px rgba(0,0,0,0.5)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 group">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #FF6B35, #FF9F7A)', boxShadow: '0 0 16px rgba(255,107,53,0.4)' }}
          >
            <Globe size={15} style={{ color: '#0F0F14' }} />
          </div>
          <div className="leading-none">
            <div className="tag" style={{ fontSize: '0.6rem' }}>WCSTPPGDS</div>
            <div className="text-ash-100/40 text-[10px] font-body hidden sm:block">Sep 2026 </div>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActive(l.href)}
              className="px-3 py-1.5 text-sm font-body font-medium rounded-lg transition-all duration-200"
              style={{
                color: active === l.href ? '#FF6B35' : 'rgba(237,237,237,0.55)',
                background: active === l.href ? 'rgba(255,107,53,0.08)' : 'transparent',
              }}
              onMouseEnter={e => { if (active !== l.href) { e.currentTarget.style.color = 'rgba(237,237,237,0.9)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}}
              onMouseLeave={e => { if (active !== l.href) { e.currentTarget.style.color = 'rgba(237,237,237,0.55)'; e.currentTarget.style.background = 'transparent' }}}
            >
              {l.label}
            </a>
          ))}
          <a href="#registration" className="btn-fire ml-3 text-sm py-2 px-5">
            <span>Register Now</span>
          </a>
        </div>

        {/* Mobile */}
        <button
          className="lg:hidden p-2 transition-colors"
          style={{ color: open ? '#FF6B35' : 'rgba(237,237,237,0.6)' }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div style={{ background: 'rgba(15,15,20,0.97)', borderTop: '1px solid rgba(255,255,255,0.06)' }} className="lg:hidden py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-1">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => { setActive(l.href); setOpen(false) }}
                className="py-2.5 px-3 rounded-xl text-sm font-medium font-body transition-colors"
                style={{ color: 'rgba(237,237,237,0.6)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#FF6B35'; e.currentTarget.style.background = 'rgba(255,107,53,0.06)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(237,237,237,0.6)'; e.currentTarget.style.background = 'transparent' }}
              >
                {l.label}
              </a>
            ))}
            <a href="#registration" className="btn-fire mt-2 justify-center text-sm py-2.5"><span>Register Now</span></a>
          </div>
        </div>
      )}
    </nav>
  )
}
