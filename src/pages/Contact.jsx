import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const contacts = [
  { icon: Mail,   label: 'Email',    value: 'wcstppgds2026@conference.edu',        href: 'mailto:wcstppgds2026@conference.edu' },
  { icon: Phone,  label: 'Phone',    value: '+1 (555) 321-9876',                   href: 'tel:+15553219876' },
  { icon: MapPin, label: 'Location', value: 'Hybrid · Online & In-Person\nSeptember 2026', href: '#' },
]

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' })
  const [sent,    setSent]    = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1500)
  }

  return (
    <Section
      id="contact"
      label="Get in Touch"
      title="Contact Us"
      subtitle="Questions about submissions, registration, or the programme? Our team responds within 48 hours."
      style={{ background: '#0F0F14' }}
      sectionNum="12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* Info column */}
        <div className="lg:col-span-2 space-y-5">
          {contacts.map(({ icon: Icon, label, value, href }, i) => (
            <motion.a
              key={label} href={href}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ x: 5 }}
              className="ed-card p-4 flex items-start gap-4 block"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200"
                style={{ background: 'rgba(255,107,53,0.1)' }}>
                <Icon size={17} style={{ color: '#FF6B35' }} />
              </div>
              <div>
                <p className="text-ash-100/30 text-xs font-body mb-0.5">{label}</p>
                <p className="text-ash-100/70 text-sm font-body leading-relaxed"
                  style={{ whiteSpace: 'pre-line' }}>{value}</p>
              </div>
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="ed-card p-5"
          >
            <h4 className="font-display text-base font-bold text-ash-100 mb-2">Office Hours</h4>
            <p className="text-ash-100/40 text-sm font-body leading-relaxed">
              Monday – Friday<br />9:00 AM – 5:00 PM UTC
              <span className="block mt-1 text-xs" style={{ color: 'rgba(255,107,53,0.55)' }}>
                Response guaranteed within 48 hours
              </span>
            </p>
          </motion.div>
        </div>

        {/* Form column */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="lg:col-span-3 ed-card p-6 sm:p-8"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ background: 'rgba(255,107,53,0.1)', boxShadow: '0 0 30px rgba(255,107,53,0.2)' }}>
                <CheckCircle size={32} style={{ color: '#FF6B35' }} />
              </div>
              <h3 className="font-display text-xl font-bold text-ash-100 mb-2">Message Sent!</h3>
              <p className="text-ash-100/45 text-sm font-body">We'll respond within 48 hours.</p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                className="btn-outline-fire mt-6 text-sm py-2 px-5"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <h3 className="font-display text-xl font-bold text-ash-100 mb-6">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'name',  label: 'Full Name',     placeholder: 'Prof. Jane Smith',      type: 'text' },
                  { name: 'email', label: 'Email Address', placeholder: 'jane@university.edu',   type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label className="block text-ash-100/38 text-xs font-body mb-1.5 tracking-wide">{f.label}</label>
                    <input
                      type={f.type} name={f.name} value={form[f.name]} onChange={handle}
                      placeholder={f.placeholder} required
                      className="form-input"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-ash-100/38 text-xs font-body mb-1.5 tracking-wide">Subject</label>
                <select name="subject" value={form.subject} onChange={handle} required className="form-input"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(237,237,237,0.75)' }}>
                  <option value="">Select a topic…</option>
                  <option>Paper Submission</option>
                  <option>Registration Inquiry</option>
                  <option>Technical Support</option>
                  <option>Speaker / Keynote</option>
                  <option>Sponsorship</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-ash-100/38 text-xs font-body mb-1.5 tracking-wide">Message</label>
                <textarea
                  name="message" value={form.message} onChange={handle}
                  placeholder="Write your message here…" required rows={5}
                  className="form-input resize-none"
                />
              </div>

              <motion.button
                type="submit" disabled={loading}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="btn-fire w-full justify-center"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 rounded-full animate-spin"
                      style={{ borderColor: 'rgba(15,15,20,0.3)', borderTopColor: '#0F0F14' }} />
                    Sending…
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send size={14} /> Send Message
                  </span>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  )
}
