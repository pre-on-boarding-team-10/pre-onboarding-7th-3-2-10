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
        destination: 'https://front-server-3-2-10.herokuapp.com/users/:path*',
      },
      {
        source: '/login',
        destination: 'https://front-server-3-2-10.herokuapp.com/login',
      },
    ];
  },
};

module.exports = nextConfig;
