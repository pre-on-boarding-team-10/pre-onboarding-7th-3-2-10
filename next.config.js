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
        destination: `http://localhost:3000/api/:path*`,
      },
      {
        source: '/users/:path*',
        destination: `http://localhost:4000/users/:path*`,
      },
      {
        source: '/userSetting',
        destination: `http://localhost:4000/userSetting`,
      },
      {
        source: '/accounts',
        destination: `http://localhost:4000/accounts`,
      },
    ];
  },
};

module.exports = nextConfig;
