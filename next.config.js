/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    eslint: {
        // ESLint managed on the workspace level
        ignoreDuringBuilds: true
    },
    images: {
        unoptimized: true
    },
    trailingSlash: true,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    webpack: (config) => {
        return config;
    }
};

module.exports = withBundleAnalyzer(nextConfig);
