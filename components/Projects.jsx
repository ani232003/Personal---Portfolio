'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    number: '01',
    category: 'AI SAAS',
    title: 'ReplyAI',

    description:
      'Full-stack AI chatbot platform with real-time customer support, multi-user collaboration, and website embedding.',

    image: '/assests/Images/1.PNG',

    tech: [
      'Next.js',
      'OpenAI API',
      'PostgreSQL',
      'Tailwind CSS',
      'Authentication',
      'REST API',
    ],

    github: 'https://github.com/yourusername/replyai',

    live: 'https://replyai.vercel.app',
  },

  {
    number: '02',
    category: 'FINTECH',
    title: 'AI Finance Platform',

    description:
      'AI-powered finance dashboard for expense tracking, budgets, analytics, and smart financial insights.',

    image: '/assests/Images/Capture.PNG',

    tech: [
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'OpenAI API',
      'Tailwind CSS',
      'Cron Jobs',
    ],

    github: 'https://github.com/yourusername/ai-finance-platform',

    live: 'https://finance-ai.vercel.app',
  },

  {
    number: '03',
    category: 'AI CHAT',
    title: 'NovaTalk',

    description:
      'Real-time AI conversational assistant with markdown rendering and optimized chat experience.',

    image: '/assests/Images/nova.PNG',

    tech: [
      'React.js',
      'OpenAI API',
      'Markdown',
      'JavaScript',
      'State Management',
    ],

    github: 'https://github.com/yourusername/novatalk',

    live: 'https://novatalk.vercel.app',
  },

  {
    number: '04',
    category: 'WEB APP',
    title: 'Food Ordering System',

    description:
      'Responsive food ordering application with Firebase authentication and realtime database.',

    image: '/assests/Images/burger.PNG',

    tech: [
      'React.js',
      'Firebase',
      'Tailwind CSS',
      'Authentication',
      'Routing',
    ],

    github: 'https://github.com/yourusername/food-ordering-app',

    live: 'https://food-app.vercel.app',
  },
]

export default function Projects() {
  return (
    <section
      id="projects-section"
      className="min-h-screen bg-black text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-purple-400 uppercase tracking-[6px] text-sm mb-4">
            PORTFOLIO
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            I Make Incredible
            <br />
            <span className="text-purple-500">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex gap-8 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="
                min-w-[340px]
                md:min-w-[400px]
                h-[760px]
                rounded-[40px]
                bg-[#09090f]
                border border-white/10
                p-6
                relative
                overflow-hidden
                flex
                flex-col
                justify-between
                snap-center
                group
              "
            >

              {/* Purple Glow */}
              <div
                className="
                  absolute
                  w-60
                  h-60
                  bg-purple-600/20
                  blur-3xl
                  rounded-full
                  -bottom-16
                  -right-16
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                "
              />

              {/* Content */}
              <div className="relative z-10">

                <div className="flex items-start justify-between mb-10">

                  <h1 className="text-6xl md:text-7xl font-black text-white/90">
                    {project.number}
                  </h1>

                  <span className="text-gray-400 text-xs tracking-[4px]">
                    {project.category}
                  </span>

                </div>

                <h3 className="text-3xl font-bold leading-tight mb-5 max-w-[260px]">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm max-w-[320px] mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">

                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-white/5
                        border border-white/10
                        text-xs
                        text-gray-300
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5
                      py-2
                      rounded-full
                      bg-purple-600
                      hover:bg-purple-500
                      transition-all
                      text-sm
                      font-medium
                    "
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5
                      py-2
                      rounded-full
                      border border-white/10
                      hover:border-purple-500/40
                      hover:bg-white/5
                      transition-all
                      text-sm
                      font-medium
                    "
                  >
                    GitHub
                  </a>

                </div>

              </div>

              {/* Image */}
              <div className="relative z-10 rounded-[30px] overflow-hidden h-[260px]">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              {/* Hover Border */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[40px]
                  border
                  border-purple-500/0
                  group-hover:border-purple-500/30
                  transition-all
                  duration-500
                "
              />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}