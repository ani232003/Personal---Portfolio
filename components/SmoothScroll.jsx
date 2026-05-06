'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { usePerformance } from '@/components/usePerformance'

export default function SmoothScroll({ children }) {
  const { mode } = usePerformance()

  useEffect(() => {
    // Disable smooth scroll in potato mode
    if (mode === 'potato') return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [mode])

  return <>{children}</>
}