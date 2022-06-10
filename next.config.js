/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://localhost:8888/wordpress/graphql'],
  },  
}

module.exports = nextConfig
