import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dij4v6vtx/image/upload/**',
      },
    ],
  },
};

export default nextConfig;
