/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  images: {
    domains: ["192.168.15.49", "homeivf-patient.s3.amazonaws.com"],
  },
  reactStrictMode: true,
  // typescript: {
  //     ignoreBuildErrors: true,
  //  },
};

module.exports = nextConfig;
