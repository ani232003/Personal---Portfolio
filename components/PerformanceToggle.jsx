'use client'

import { Settings } from 'lucide-react'
import { usePerformance } from '@/components/usePerformance'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PerformanceToggle() {
  const { mode, setMode } = usePerformance()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white/10 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white/20 transition-colors"
        aria-label="Performance Settings"
      >
        <Settings className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-16 right-0 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-xl min-w-[200px]"
          >
            <h3 className="font-semibold mb-3 text-sm">
              Performance Mode
            </h3>

            <div className="space-y-2">
              {['potato', 'balanced', 'high'].map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setMode(m)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                    mode === m
                      ? 'bg-white/20 font-semibold'
                      : 'hover:bg-white/10'
                  }`}
                >
                  {m === 'potato' && '🥔 Potato Mode'}
                  {m === 'balanced' && '⚖️ Balanced'}
                  {m === 'high' && '🚀 High Performance'}
                </button>
              ))}
            </div>

            <p className="text-xs text-white/60 mt-3">
              {mode === 'potato' && 'No 3D, minimal animations'}
              {mode === 'balanced' && 'Light animations only'}
              {mode === 'high' && 'Full 3D & effects'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}