/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXTAUTH_URL : process.env.NEXTAUTH_URL
    },
    // typescript: {
    //     ignoreBuildErrors: true,
    //  },
}

module.exports = nextConfig
