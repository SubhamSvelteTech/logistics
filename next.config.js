/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXTAUTH_URL : process.env.NEXTAUTH_URL
    },
    reactStrictMode: false,
    // typescript: {
    //     ignoreBuildErrors: true,
    //  },
}

module.exports = nextConfig
