import type { Configuration } from 'webpack';
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
interface WebpackConfigFunction {
  (config: Configuration, context: { isServer: boolean }): Configuration;
}

const nextConfig: NextConfig = {
  webpack: ((config, { isServer }) => {
    if (!isServer) {
      config.resolve = config.resolve || {};
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
      };
    }
    return config;
  }) as WebpackConfigFunction
};


module.exports = nextConfig;