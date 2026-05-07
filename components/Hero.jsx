'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { usePerformance } from '@/components/usePerformance'

const techStack = [
  'React.js', 'Next.js', 'Node.js', 'PostgreSQL',
  'OpenAI API', 'Prisma', 'Tailwind CSS', 'Firebase',
]

const stats = [
  { value: '4', label: 'Projects Built' },
  { value: '20+', label: 'Client Websites' },
  { value: '1', label: 'Internship' },
]

const socials = [
  { icon: FiGithub, href: 'https://github.com/ani232003', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/aniket-pandey23', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:aniketpandey.in23@gmail.com', label: 'Email' },
]

export default function Hero() {
  const { enableHeavyAnimations } = usePerformance()

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden grid-bg">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-600/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">

          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-4 py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
              Open to full-time roles &amp; freelance
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-[clamp(44px,8vw,88px)] font-bold leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Hi, I&apos;m Aniket —<br />
            <span className="relative inline-block">
              <span className="text-violet-400">Full-Stack</span>
              <span className="absolute -bottom-1 left-0 w-full h-px bg-violet-400/40" />
            </span>{' '}
            Developer.
          </motion.h1>

          {/* Sub-headline — from resume profile summary */}
          <motion.p
            variants={item}
            className="text-lg text-[#8888aa] leading-relaxed mb-10 max-w-2xl"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            I build AI-powered web applications using React and Next.js — with experience in
            SaaS platforms,{' '}
            <span className="text-violet-300/80">API integration</span>,
            authentication, PostgreSQL, and scalable system design.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/30 hover:gap-3"
            >
              View My Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.04] text-white rounded-full font-semibold text-sm transition-all duration-200"
            >
              Let&apos;s Talk
            </button>
          </motion.div>

          {/* Stats — only real numbers from resume */}
          <motion.div variants={item} className="flex flex-wrap gap-x-10 gap-y-4 mb-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  {stat.value}
                </p>
                <p className="text-xs text-[#55556a] mt-0.5 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Tech stack — only what's in resume */}
          <motion.div variants={item} className="mb-12">
            <p className="text-xs text-[#55556a] uppercase tracking-[0.15em] mb-3">Tech Stack</p>
            <div className="flex gap-3 flex-wrap">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.07] text-xs text-[#8888aa]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="flex items-center gap-5">
            <span className="text-xs text-[#55556a] uppercase tracking-wider">Find me on</span>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/[0.08] hover:border-violet-500/40 bg-white/[0.03] hover:bg-violet-500/10 flex items-center justify-center text-[#8888aa] hover:text-violet-300 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>

      {enableHeavyAnimations && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#55556a]"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#55556a] to-transparent" />
        </motion.div>
      )}
    </section>
  )
}