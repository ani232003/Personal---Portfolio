import './globals.css'
import { PerformanceProvider } from '@/components/usePerformance'
import SmoothScroll from '@/components/SmoothScroll'
import PerformanceToggle from '@/components/PerformanceToggle'
import Script from 'next/script'

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
        <link rel="canonical" href="https://aniketpandey.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aniket Pandey" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="min-h-screen antialiased">
        <PerformanceProvider>
          <SmoothScroll>
            {children}
            <PerformanceToggle />
          </SmoothScroll>
        </PerformanceProvider>

        <Script
          src="https://ai-support-chat-seven.vercel.app/widget.js"
          data-id="474a9a61-a80a-4770-a0d7-3fc22735f72a"
          strategy="lazyOnload"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Aniket Pandey",
            "url": "https://aniketpandey.dev",
            "sameAs": [
              "https://github.com/ani232003",
              "https://www.linkedin.com/in/aniket-pandey23"
            ],
            "jobTitle": "Full-Stack Developer & AI Builder",
            "description": "Full-stack developer specializing in AI-powered SaaS applications. Building with Next.js, TypeScript, PostgreSQL, and OpenAI. Open to opportunities."
          }) }}
        />
      </body>
    </html>
  )
}