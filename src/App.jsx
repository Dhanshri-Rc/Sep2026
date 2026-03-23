import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

import Navbar               from './components/Navbar'
import Footer               from './components/Footer'
import Hero                 from './pages/Hero'
import AboutSeries          from './pages/AboutSeries'
import AboutConference      from './pages/AboutConference'
import Objectives           from './pages/Objectives'
import Tracks               from './pages/Tracks'
import SubmissionGuidelines from './pages/SubmissionGuidelines'
import SubmissionProcess    from './pages/SubmissionProcess'
import PlagiarismPolicy     from './pages/PlagiarismPolicy'
import ImportantDates       from './pages/ImportantDates'
import Registration         from './pages/Registration'
import Publications         from './pages/Publications'
import Committee            from './pages/Committee'
import Contact              from './pages/Contact'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0F0F14', color: '#EDEDED' }}>
      <Navbar />

      <main>
        <Hero />
        <AboutSeries />
        <AboutConference />
        <Objectives />
        <Tracks />
        <SubmissionGuidelines />
        <SubmissionProcess />
        <PlagiarismPolicy />
        <ImportantDates />
        <Registration />
        <Publications />
        <Committee />
        <Contact />
      </main>

      <Footer />

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 14 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl flex items-center justify-center animate-glow-orange"
            style={{
              background: '#FF6B35',
              color: '#0F0F14',
              boxShadow: '0 4px 24px rgba(255,107,53,0.5)',
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={19} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
