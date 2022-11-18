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
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        destination: 'https://front-server-3-2-10.herokuapp.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
