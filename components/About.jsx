'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Zap, Download, ArrowRight } from 'lucide-react'

const skills = [
{
  icon: Code2,
  title: 'Frontend Development',
  description: 'Building responsive and interactive web applications with modern frameworks',
  tags: ['React.js', 'Next.js', 'HTML/CSS', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
},
{
  icon: Database,
  title: 'Backend & Databases',
  description: 'Building scalable backends with secure data management and optimization',
  tags: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Firebase', 'Prisma ORM'],
},
{
  icon: Zap,
  title: 'AI & APIs',
  description: 'Integrating cutting-edge AI and third-party APIs for smart solutions',
  tags: ['OpenAI API', 'Gemini', 'Claude', 'REST APIs', 'Authentication', 'WebSockets'],
},
]

const stats = [
{ label: 'Projects Built', value: '4+' },
{ label: 'Technologies', value: '15+' },
{ label: 'Years Learning', value: '2+' },
]

export default function About() {
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: '-100px' })

const handleDownloadResume = () => {
  // Create a link element and trigger download
  const link = document.createElement('a')
    link.href = '/assests/Resume/Aniket-Pandey_Resume.pdf' 
  link.download = 'Aniket-Pandey-Resume.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

return (
  <section ref={ref} className="min-h-screen py-20 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
    {/* Background gradient orb */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10" />

    <div className="max-w-6xl mx-auto relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
          I&apos;m a Full Stack Developer building AI-powered web applications using React and Next.js. 
          Passionate about creating scalable systems, integrating modern APIs, and solving complex problems with elegant code.
        </p>
        
        {/* Resume Download Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadResume}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold text-white transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
        >
          <Download className="w-5 h-5" />
          Download Resume
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-8 mb-20"
      >
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 text-center hover:border-purple-500/50 transition-colors">
            <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
              {stat.value}
            </p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative"
          >
            {/* Card Background with hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
            
            <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 group-hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
              <div className="mb-6 inline-block p-3 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-lg group-hover:from-purple-600/40 group-hover:to-blue-600/40 transition-all duration-300">
                <skill.icon className="w-8 h-8 text-purple-400 group-hover:text-blue-400 transition-colors" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                {skill.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 hover:bg-purple-500/20 rounded-full text-xs text-gray-300 hover:text-purple-300 transition-all duration-300 border border-transparent hover:border-purple-500/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience & Education Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* Experience Card */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
          
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 group-hover:border-green-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Experience
            </h3>
            
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-lg font-semibold text-white">Full Stack Intern</p>
                <p className="text-purple-400 font-medium">The WebPlant, Delhi</p>
                <p className="text-sm text-gray-500 mt-1">December 2025 – April 2026</p>
              </div>

              <ul className="text-gray-400 text-sm space-y-2 mt-4">
                <li className="flex gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Developed responsive web applications across 20+ client projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Built reusable components improving development consistency</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Integrated CMS content with frontend interfaces</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span>Enhanced cross-browser compatibility and UX</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur" />
          
          <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 group-hover:border-blue-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Education
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-lg font-semibold text-white">Bachelor of Computer Applications</p>
                <p className="text-blue-400 font-medium">University of Petroleum and Energy Studies</p>
                <p className="text-sm text-gray-500 mt-1">2021 – 2024 | CGPA: 6/10</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Certifications</p>
                <p className="text-blue-400 font-medium text-sm">Full Stack Web Development</p>
                <p className="text-sm text-gray-500 mt-1">Coding Ninjas (Feb 2023 – Feb 2024)</p>
                <p className="text-xs text-gray-600 mt-2">Generative AI • Frontend • Python • React Development</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)
}