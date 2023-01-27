/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_BASE_URL}`],
    unoptimized: true,
  },
};

module.exports = nextConfig;
