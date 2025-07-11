// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets-cdn.trustwallet.com'],
  },
};

module.exports = nextConfig;
