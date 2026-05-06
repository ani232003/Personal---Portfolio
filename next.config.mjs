/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent laptop freezing
  reactStrictMode: false,

  // Performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimize images
  images: {
    formats: ['image/webp'],
  },
}

export default nextConfig