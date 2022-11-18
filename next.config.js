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
        source: '/users/:path*',
        destination: 'https://front-server-3-2-10.herokuapp.com/:path*',
      },
      {
        source: '/login',
        destination: 'https://front-server-3-2-10.herokuapp.com/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'https://pre-onboarding-7th-3-2-10.vercel.app/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
