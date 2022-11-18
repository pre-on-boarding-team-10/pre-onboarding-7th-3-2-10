/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  env: {
    NEXT_PUBLIC_API_BASEURL: process.env.NEXT_PUBLIC_API_BASEURL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://localhost:3000/api/:path*',
      },
      {
        source: '/:path*',
        destination: 'https://localhost:4000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
