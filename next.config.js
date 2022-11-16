/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // enabling this will enable SSR for Tailwind
    optimizeCss: true,
  },
};

module.exports = nextConfig;
