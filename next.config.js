/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')


const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io']
  },
  pwa: {
    dest: 'public'
  }
})

module.exports = nextConfig