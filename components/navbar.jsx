'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Work', href: '#projects-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Contact', href: '#contact-section' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 bg-[#080810]/80 backdrop-blur-xl border-b border-white/5' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="relative group"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>AP</span>
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-violet-500 group-hover:w-full transition-all duration-300" />
          </motion.a>

          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/[0.08] backdrop-blur-md rounded-full px-2 py-1.5">
                      {navLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                          className="px-5 py-1.5 text-sm text-[#8888aa] hover:text-white transition-colors rounded-full hover:bg-white/[0.08] font-medium"
                          style={{ fontFamily: 'DM Sans, sans-serif' }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
              Open to work
            </div>
            <a
              href="https://github.com/ani232003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25"
            >
              GitHub
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 w-4' : 'w-4'}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#080810]/95 backdrop-blur-xl border-b border-white/5 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-left text-lg font-bold text-white/80 hover:text-white transition-colors py-2 border-b border-white/5"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-2 text-sm text-emerald-400 mt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
              Open to work
            </div>
            <a
              href="/assests/Aniket-Pandey_Resume.pdf"
              download
              className="mt-2 w-full text-center px-4 py-3 bg-violet-600 text-white rounded-lg font-semibold text-sm"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}