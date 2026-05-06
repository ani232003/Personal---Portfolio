import { Inter } from 'next/font/google'
import './globals.css'
import { PerformanceProvider } from '@/components/usePerformance'
import SmoothScroll from '@/components/SmoothScroll'
import PerformanceToggle from '@/components/PerformanceToggle'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Portfolio | Aniket Pandey',
  description: 'Full Stack Developer & UI/UX Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        <PerformanceProvider>
          <SmoothScroll>
            {children}
            <PerformanceToggle />
          </SmoothScroll>
        </PerformanceProvider>
      </body>
    </html>
  )
}