/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  env: {
    NEXT_PUBLIC_FRONT_BASE_URL: process.env.NEXT_PUBLIC_FRONT_BASE_URL,
    NEXT_PUBLIC_BACK_BASE_URL: process.env.NEXT_PUBLIC_BACK_BASE_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_FRONT_BASE_URL}/api/:path*`,
      },
      {
        source: '/login',
        destination: `${process.env.NEXT_PUBLIC_BACK_BASE_URL}/login`,
      },
      {
        source: '/users/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACK_BASE_URL}/users/:path*`,
      },
      {
        source: '/userSetting',
        destination: `${process.env.NEXT_PUBLIC_BACK_BASE_URL}/userSetting`,
      },
      {
        source: '/accounts',
        destination: `${process.env.NEXT_PUBLIC_BACK_BASE_URL}/accounts`,
      },
    ];
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
