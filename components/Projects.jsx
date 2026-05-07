'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Zap, Code2, Clock } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { useRef } from 'react'

const projects = [
  {
    number: '01',
    category: 'AI SAAS',
    title: 'ReplyAI',
    tagline: 'Embeddable AI Chatbot Platform',
    metrics: [
      { icon: Code2, label: 'Complexity', value: 'Full Stack' },
      { icon: Zap,   label: 'Response Time', value: '< 2s' },
      { icon: Clock, label: 'Build Time', value: '4 weeks' },
    ],
    problem: 'Businesses waste hours answering the same support questions repeatedly with no scalable solution',
    solution:
      'Full-stack SaaS platform where businesses embed a custom-trained AI chatbot on their site — built with multi-tenant auth, a knowledge-base editor, and real-time chat UI.',
    highlights: [
      'Multi-tenant architecture with isolated knowledge bases per workspace',
      'Real-time streaming responses via Server-Sent Events',
      'Embeddable widget deployable via a single <script> tag',
    ],
    image: '/Images/1.PNG',
    tech: ['Next.js 14', 'OpenAI API', 'PostgreSQL', 'Prisma', 'Tailwind', 'Auth.js'],
    github: 'https://github.com/ani232003/AI-SUPPORT-CHAT.git',
    live: 'https://ai-support-chat-seven.vercel.app/',
  },
  {
    number: '02',
    category: 'FINTECH',
    title: 'AI Finance Dashboard',
    tagline: 'Personal Finance Tracker with AI Insights',
    metrics: [
      { icon: Code2, label: 'Complexity', value: 'Full Stack' },
      { icon: Zap,   label: 'Charts Built', value: '6 Types' },
      { icon: Clock, label: 'Build Time', value: '3 weeks' },
    ],
    problem: 'Most finance apps show raw numbers but give no actionable guidance on where money actually goes',
    solution:
      'AI-powered dashboard that categorizes transactions, visualizes spending patterns across 6 chart types, and generates plain-English weekly summaries via GPT-4.',
    highlights: [
      'Automated daily digest emails via cron jobs + Resend API',
      'Secure session-based auth with protected routes',
      'Responsive data visualizations with Chart.js',
    ],
    image: '/Images/Capture.PNG',
    tech: ['Next.js 14', 'Prisma', 'PostgreSQL', 'OpenAI', 'Chart.js', 'Cron'],
    github: 'https://github.com/ani232003/AI-FINANCIAL-PLATFORM.git',
    live: 'https://ai-financial-platform-3i9i.vercel.app/',
  },
  {
    number: '03',
    category: 'AI CHAT',
    title: 'NovaTalk',
    tagline: 'Clean AI Chat Interface with Markdown',
    metrics: [
      { icon: Code2, label: 'Type', value: 'Frontend' },
      { icon: Zap,   label: 'Render', value: 'Streaming' },
      { icon: Clock, label: 'Build Time', value: '1 week' },
    ],
    problem: "OpenAI's raw API is powerful but needs a polished UI to actually feel like a usable product",
    solution:
      'Minimal chat interface with token-by-token streaming, full markdown + code syntax highlighting, and persistent conversation history in localStorage.',
    highlights: [
      'Token streaming for instant real-time responses',
      'Prism.js syntax highlighting for 20+ languages',
      'Conversation history persisted across sessions',
    ],
    image: '/Images/nova.PNG',
    tech: ['React.js', 'OpenAI API', 'Markdown', 'Prism.js', 'LocalStorage'],
    github: 'https://github.com/ani232003/Gemi.git',
    live: 'https://gemi-ten.vercel.app/',
  },
  {
    number: '04',
    category: 'WEB APP',
    title: 'Food Ordering System',
    tagline: 'Firebase-Powered Restaurant App',
    metrics: [
      { icon: Code2, label: 'Auth', value: 'Firebase' },
      { icon: Zap,   label: 'Updates', value: 'Real-time' },
      { icon: Clock, label: 'Build Time', value: '2 weeks' },
    ],
    problem: 'Building a real-time ordering flow with auth, cart state, and live updates is a common but genuinely complex frontend challenge',
    solution:
      'Mobile-first food ordering app with Firebase auth, Firestore real-time updates, cart management, and a complete order-status tracking flow.',
    highlights: [
      'Firestore real-time listeners for live order status',
      'Persistent cart state managed with React Context',
      'Protected routes with Firebase Auth + React Router',
    ],
    image: '/Images/burger.PNG',
    tech: ['React.js', 'Firebase', 'Firestore', 'Tailwind CSS', 'React Router'],
    github: 'https://github.com/ani232003/Quick-Bite-.git',
    live: 'https://burgerbite-smoky.vercel.app/',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      id="projects-section"
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span
            className="text-xs text-violet-400 uppercase tracking-[0.2em] mb-4 block"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            01 / Featured Work
          </span>
          <h2
            className="text-[clamp(36px,5vw,64px)] font-bold leading-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Projects Built to{' '}
            <span className="text-[#8888aa]">Learn by Doing</span>
          </h2>
          <p
            className="text-[#8888aa] text-lg mt-4 max-w-2xl"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Personal projects that tackle real-world problems — each one chosen to push into new technical territory and ship something worth showing.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isInView }) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
    >
      {/* Content */}
      <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>

        <div className="flex items-start justify-between">
          <div>
            <span
              className="text-xs text-violet-400 uppercase tracking-[0.15em]"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {project.category}
            </span>
            <h3
              className="text-4xl font-bold mt-2 mb-1"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {project.title}
            </h3>
            <p className="text-[#8888aa] text-sm italic">{project.tagline}</p>
          </div>
          <span className="text-6xl font-bold text-white/5 select-none" style={{ fontFamily: 'Syne, sans-serif' }}>
            {project.number}
          </span>
        </div>

        {/* Honest metrics */}
        <div className="grid grid-cols-3 gap-4">
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-violet-500/30 hover:bg-violet-500/5 transition-all"
            >
              <metric.icon className="w-4 h-4 text-violet-400 mb-2" />
              <p className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                {metric.value}
              </p>
              <p className="text-xs text-[#55556a] uppercase tracking-wider mt-0.5">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Problem / What I Built */}
        <div className="space-y-3">
          <div className="p-5 rounded-xl border border-red-500/10 bg-red-500/5">
            <p
              className="text-xs text-red-400 uppercase tracking-wider mb-2"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              ⚠️ Problem
            </p>
            <p className="text-sm text-[#8888aa] leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-5 rounded-xl border border-emerald-500/10 bg-emerald-500/5">
            <p
              className="text-xs text-emerald-400 uppercase tracking-wider mb-2"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              ✓ What I Built
            </p>
            <p className="text-sm text-white/90 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-2">
          <p
            className="text-xs text-[#55556a] uppercase tracking-wider"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Technical Highlights
          </p>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-[#8888aa]">
                <span className="text-violet-500 mt-0.5 shrink-0">→</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs text-[#8888aa] hover:text-violet-300 hover:border-violet-500/30 transition-colors"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/30"
          >
            Live Demo
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.04] text-white rounded-full font-semibold text-sm transition-all duration-200"
          >
            <FiGithub className="w-4 h-4" />
            Source Code
          </a>
        </div>
      </div>

      {/* Image */}
      <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
        <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/30 transition-all duration-500">
          <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/5 transition-all duration-500 z-10 pointer-events-none" />
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

    </motion.div>
  )
}