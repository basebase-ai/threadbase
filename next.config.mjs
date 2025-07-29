/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  // Development optimizations
  ...(process.env.NODE_ENV === "development" && {
    // Enable faster refresh
    swcMinify: false,
    // Optimize webpack for development
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        // Optimize for hot reloading
        config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
        };
      }
      return config;
    },
  }),
};

export default nextConfig;
