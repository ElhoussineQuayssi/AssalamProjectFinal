/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // Increase the body size limit to 5 MB
    },
  },
}

module.exports = nextConfig
