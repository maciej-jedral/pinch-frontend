import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack's native watcher doesn't reliably see changes made across the
  // Docker bind mount from the host, so dev runs on webpack instead (see
  // package.json's "dev" script), whose watcher we point at polling via
  // WATCHPACK_POLLING in docker-compose.yml. Production builds (e.g. on
  // Vercel) still use the default Turbopack build, which ignores the
  // webpack config above — the empty `turbopack` key just tells Next that's
  // intentional, per https://nextjs.org/docs/app/api-reference/next-config-js/turbopack.
  webpack: (config) => {
    config.watchOptions = {
      poll: 500,
      aggregateTimeout: 300,
    };
    return config;
  },
  turbopack: {},
};

export default nextConfig;
