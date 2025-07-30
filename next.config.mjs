/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  // WebContainer optimizations
  ...(process.env.NODE_ENV === "development" && {
    // Disable SWC minification for better WebContainer compatibility
    swcMinify: false,
    // Optimize webpack for development
    webpack: (config, { dev, isServer }) => {
      if (dev && !isServer) {
        // Optimize for hot reloading in WebContainer
        config.watchOptions = {
          poll: 1000,
          aggregateTimeout: 300,
        };
      }
      return config;
    },
  }),
  // Disable experimental features that cause issues in WebContainer
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
