'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Calendar } from 'lucide-react'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const socials = [
  {
    icon: FiGithub,
    label: 'GitHub',
    href: 'https://github.com/ani232003', // TODO: replace with your real GitHub URL
    display: 'github.com/ani232003',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aniket-pandey23', // TODO: replace with your real LinkedIn URL
    display: 'linkedin.com/in/aniket-pandey23',
  },
  {
    icon: FiMail,
    label: 'Email',
    href: 'mailto:aniketpandey.in23@gmail.com',
    display: 'aniketpandey.in23@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    href: 'tel:+916392517737',
    display: '+91 6392517737',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      id="contact-section"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'var(--bg-2)' }}
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">

        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="mb-4 text-center"
        >
          <span
            className="text-xs text-violet-400 uppercase tracking-[0.2em]"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            04 / Get In Touch
          </span>
        </motion.div>

        <motion.h2
          custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="text-[clamp(36px,5vw,64px)] font-bold leading-tight mb-6 text-center"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Let&apos;s Build Something{' '}
          <span className="text-violet-400">Great</span>
        </motion.h2>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="text-[#8888aa] text-lg leading-relaxed text-center mb-14 max-w-2xl mx-auto"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          I&apos;m open to full-time roles, freelance projects, and interesting collaborations.
          Feel free to reach out — I respond within 24 hours.
        </motion.p>

        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-4 mb-12"
        >
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== 'Email' && social.label !== 'Phone' ? '_blank' : undefined}
              rel={social.label !== 'Email' && social.label !== 'Phone' ? 'noopener noreferrer' : undefined}
              custom={3 + i * 0.5} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
              className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 group-hover:bg-violet-500/20 transition-colors">
                  <social.icon className="w-5 h-5 text-violet-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-xs text-[#55556a] uppercase tracking-wider mb-1"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {social.label}
                  </p>
                  <p className="text-white font-medium group-hover:text-violet-300 transition-colors text-sm truncate">
                    {social.display}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          custom={7} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="flex items-center justify-center gap-2 text-[#8888aa] mb-12"
        >
          <MapPin className="w-4 h-4 shrink-0" />
          <span className="text-sm">Kanpur, Uttar Pradesh, India</span>
        </motion.div>

        <motion.div
          custom={8} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="mailto:aniketpandey.in23@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30"
          >
            <FiMail className="w-4 h-4" />
            Send Me an Email
          </a>
          <a
            href="/assests/Aniket-Pandey_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.04] text-white rounded-full font-semibold text-sm transition-all duration-200"
          >
            <Calendar className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          custom={9} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="mt-20 pt-8 border-t border-white/[0.06] text-center"
        >
          <p className="text-sm text-[#55556a]">
            © {new Date().getFullYear()} Aniket Pandey. Built with Next.js &amp; Framer Motion
          </p>
          <p className="text-xs text-[#55556a] mt-2">
            Designed &amp; developed with attention to detail
          </p>
        </motion.div>

      </div>
    </section>
  )
}