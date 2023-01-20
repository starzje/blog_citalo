/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['localhost:1337', 'localhost', 'via.placeholder.com'],
  },
};

module.exports = nextConfig;
