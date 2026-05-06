'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: FiMail, label: 'Email', href: 'mailto:aad75p@gmail.com' },
  { icon: FiPhone, label: 'Phone', href: 'tel:+916392517737' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      id="contact-section"
      className="min-h-screen flex items-center justify-center px-4 bg-slate-950"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          I&apos;m always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hello, feel free to reach out!
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== 'Email' && social.label !== 'Phone' ? '_blank' : undefined}
              rel={social.label !== 'Email' && social.label !== 'Phone' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 flex items-center justify-center hover:scale-110 transition-all"
              aria-label={social.label}
              title={social.label}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="mailto:aad75p@gmail.com"
          className="inline-block px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Get In Touch
        </motion.a>

        <div className="mt-12 space-y-2">
          <p className="text-gray-400 text-sm">
            📧 <a href="mailto:aad75p@gmail.com" className="hover:text-purple-400 transition-colors">aad75p@gmail.com</a>
          </p>
          <p className="text-gray-400 text-sm">
            📱 <a href="tel:+916392517737" className="hover:text-purple-400 transition-colors">+91 6392517737</a>
          </p>
          <p className="text-gray-400 text-sm">
            📍 Kanpur, Uttar Pradesh, India
          </p>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} Aniket Pandey. Built with Next.js & Framer Motion
        </p>
      </motion.div>
    </section>
  )
}