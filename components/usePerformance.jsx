'use client'

import { createContext, useContext, useState } from 'react'
import { isLowEndDevice, prefersReducedMotion } from '@/lib/utils'

const PerformanceContext = createContext(undefined)

export function PerformanceProvider({ children }) {
  const [mode, setMode] = useState(() => {
    if (
      typeof window !== 'undefined' &&
      (isLowEndDevice() || prefersReducedMotion())
    ) {
      return 'potato'
    }
    return 'balanced'
  })

  const contextValue = {
    mode,
    setMode,
    enable3D: mode === 'high',
    enableHeavyAnimations: mode !== 'potato',
    enableParticles: mode === 'high',
  }

  return (
    <PerformanceContext.Provider value={contextValue}>
      {children}
    </PerformanceContext.Provider>
  )
}

export function usePerformance() {
  const context = useContext(PerformanceContext)
  if (!context) {
    throw new Error('usePerformance must be used within PerformanceProvider')
  }
  return context
}