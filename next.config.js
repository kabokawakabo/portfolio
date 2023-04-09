/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["drive.google.com"], //読み込めない
        //formats: ["image/webp"],
    },
    /*
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'drive.google.com',
        },
      ],
    },
  },
  */
};

module.exports = nextConfig;
