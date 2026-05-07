'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Zap, Download, ArrowUpRight } from 'lucide-react'

const workPhilosophy = [
  {
    icon: '🎯',
    title: 'Problem-First Development',
    desc: 'I start by understanding the problem before writing code. Every feature I build has a clear reason to exist — not just something that looks good in a demo.',
  },
  {
    icon: '🚀',
    title: 'Full-Stack Mindset',
    desc: 'I work across the entire stack — from building React UIs to designing PostgreSQL schemas and wiring up REST APIs. I own features end to end.',
  },
  {
    icon: '⚡',
    title: 'Performance Aware',
    desc: 'I pay attention to load times, responsive design, and cross-browser compatibility from the start — not as a last-minute fix.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    desc: 'I\'ve integrated OpenAI, Gemini, and Claude APIs into production projects — building chatbots, knowledge base systems, and AI-generated insights.',
  },
]

const skills = [
  {
    icon: Code2,
    title: 'Frontend',
    tags: ['React.js', 'Next.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    icon: Database,
    title: 'Backend & Data',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Firebase', 'Prisma ORM'],
  },
  {
    icon: Zap,
    title: 'AI & Tools',
    tags: ['OpenAI API', 'Gemini', 'Claude', 'REST APIs', 'Git', 'GitHub', 'Vercel', 'Python'],
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

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      id="about-section"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'var(--bg-2)' }}
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-violet-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section label */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'} className="mb-4">
          <span className="text-xs text-violet-400 uppercase tracking-[0.2em]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            02 / About
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          custom={1} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="text-[clamp(36px,5vw,60px)] font-bold leading-tight mb-6"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          I don&apos;t just write code —<br />
          <span className="text-[#8888aa]">I build products.</span>
        </motion.h2>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="text-[#8888aa] text-lg leading-relaxed max-w-2xl mb-14"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          Full-stack developer with hands-on experience building AI-powered SaaS applications,
          client websites, and real-time web apps. I care about clean code, good UX, and
          shipping things that actually work.
        </motion.p>

        {/* How I Work */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {workPhilosophy.map((item, i) => (
            <motion.div
              key={item.title}
              custom={3 + i * 0.5} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
              className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h3 className="font-semibold text-base mb-2 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                {item.title}
              </h3>
              <p className="text-[#8888aa] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          custom={7} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/[0.04] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-violet-500/15 border border-violet-500/20">
                  <skill.icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-xs text-[#8888aa] hover:text-violet-300 hover:border-violet-500/30 transition-colors"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Experience & Education */}
        <motion.div
          custom={8} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="grid md:grid-cols-2 gap-6 mb-10"
        >
          {/* Experience */}
          <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-emerald-500/25 hover:bg-emerald-500/[0.03] transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs uppercase tracking-[0.15em] text-[#55556a]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Experience
              </span>
            </div>

            <div className="mb-5">
              <p className="text-lg font-semibold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                Full Stack Developer Intern
              </p>
              <div className="flex items-center gap-1 mt-1">
                <p className="text-violet-400 text-sm">The WebPlant</p>
                <span className="text-[#55556a] text-sm">, Delhi</span>
              </div>
              <p className="text-xs mt-1 text-[#55556a]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Dec 2025 – Apr 2026
              </p>
            </div>

            <ul className="space-y-3 text-sm text-[#8888aa]">
              {[
                'Developed & optimized responsive web apps across 20+ client projects using React, Next.js & HubSpot CMS',
                'Built reusable, modular components improving development speed and consistency across projects',
                'Integrated CMS content with frontend interfaces for scalable, flexible web applications',
                'Improved cross-browser compatibility and UX across all client deliverables',
              ].map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-violet-500 mt-0.5 shrink-0">→</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-blue-500/25 hover:bg-blue-500/[0.03] transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs uppercase tracking-[0.15em] text-[#55556a]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Education
              </span>
            </div>

            <div className="mb-6">
              <p className="text-lg font-semibold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                Bachelor of Computer Applications
              </p>
              <p className="text-blue-400 text-sm mt-1">
                University of Petroleum &amp; Energy Studies
              </p>
              <p className="text-xs mt-1 text-[#55556a]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                2021 – 2024 · Dehradun
              </p>
            </div>

            <div className="pt-5 border-t border-white/[0.06]">
              <p className="text-xs uppercase tracking-[0.15em] text-[#55556a] mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Certification
              </p>
              <p className="font-semibold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                Full Stack Web Development
              </p>
              <p className="text-blue-400 text-sm mt-1">Coding Ninjas</p>
              <p className="text-xs mt-1 text-[#55556a]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Feb 2023 – Feb 2024
              </p>
              <p className="text-[#8888aa] text-xs mt-2">
                Generative AI · Frontend · Python · React Development
              </p>
            </div>
          </div>
        </motion.div>

        {/* Resume CTA */}
        <motion.div
          custom={9} variants={fadeUp} initial="hidden" animate={isInView ? 'show' : 'hidden'}
          className="flex justify-center"
        >
          <a
            href="/assests/Resume/Aniket-Pandey_Resume.pdf"
            download
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/[0.05] hover:bg-violet-500/15 border border-white/10 hover:border-violet-500/40 text-white rounded-full font-semibold text-sm transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Full Resume
            <span className="text-[#55556a] group-hover:text-violet-400 transition-colors">PDF</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}