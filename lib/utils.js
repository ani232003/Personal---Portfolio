import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Performance detection
export const isLowEndDevice = () => {
  if (typeof window === 'undefined') return false

  // Check for low memory
  const memory = navigator.deviceMemory
  if (memory && memory < 4) return true

  // Check for slow CPU
  const cores = navigator.hardwareConcurrency
  if (cores && cores < 4) return true

  return false
}

// Reduced motion preference
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}