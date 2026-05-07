import './globals.css'
import { PerformanceProvider } from '@/components/usePerformance'
import SmoothScroll from '@/components/SmoothScroll'
import PerformanceToggle from '@/components/PerformanceToggle'

export const metadata = {
  title: 'Aniket Pandey — Full-Stack Developer & AI Builder',
  description:
    'Full-stack developer specializing in AI-powered SaaS applications. Building with Next.js, TypeScript, PostgreSQL, and OpenAI. Open to opportunities.',
  keywords: [
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'AI Developer',
    'SaaS Developer',
    'Aniket Pandey',
    'Frontend Developer',
    'Node.js',
  ],
  authors: [{ name: 'Aniket Pandey', url: 'https://aniketpandey.dev' }],
  openGraph: {
    title: 'Aniket Pandey — Full-Stack Developer & AI Builder',
    description:
      'Building AI-powered web applications used in production. Expert in Next.js, TypeScript & PostgreSQL.',
    url: 'https://aniketpandey.dev',
    siteName: 'Aniket Pandey Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aniket Pandey — Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aniket Pandey — Full-Stack Developer & AI Builder',
    description:
      'Building AI-powered web applications. Next.js, TypeScript, PostgreSQL specialist.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          src="https://ai-support-chat-seven.vercel.app/widget.js"
          data-id="474a9a61-a80a-4770-a0d7-3fc22735f72a"
          async>
        </script>
      </head>
      <body className="min-h-screen antialiased">
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