import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack's native watcher doesn't reliably see changes made across the
  // Docker bind mount from the host, so dev runs on webpack instead (see
  // package.json's "dev" script), whose watcher we point at polling via
  // WATCHPACK_POLLING in docker-compose.yml.
  webpack: (config) => {
    config.watchOptions = {
      poll: 500,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
