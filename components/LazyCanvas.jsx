'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Lazy load Three.js - only loads when needed!
const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-blue-500/10 animate-pulse">
        <p className="text-sm text-white/60">Loading 3D...</p>
      </div>
    ),
  }
)

export default function LazyCanvas({ children, className }) {
  return (
    <Suspense fallback={<div className="w-full h-full bg-black/20" />}>
      <Canvas
        className={className}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
        frameloop="demand"
        gl={{
          antialias: false,
          powerPreference: 'high-performance',
          alpha: true,
        }}
      >
        {children}
      </Canvas>
    </Suspense>
  )
}