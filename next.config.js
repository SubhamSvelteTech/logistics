/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  images: {
    domains: ["logistics.be.homeivf.in", "homeivf-patient.s3.amazonaws.com"],
  },
  reactStrictMode: true,
  // typescript: {
  //     ignoreBuildErrors: true,
  //  },
};

module.exports = nextConfig;
