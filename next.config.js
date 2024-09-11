/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  images: {
    domains: ["3.109.50.224", "homeivf-patient.s3.amazonaws.com"],
  },
  reactStrictMode: true,
  // typescript: {
  //     ignoreBuildErrors: true,
  //  },
};

module.exports = nextConfig;
