/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withOptimizedImages = require('next-optimized-images');
const withModernizr = require("next-plugin-modernizr");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const redirects = require('./src/build/redirects');

module.exports = withBundleAnalyzer(
    withModernizr(
        withOptimizedImages({
            async redirects () {
                return redirects
            },
            webpack(config) {
                config.node = { fs: 'empty' }
                return config
            },
            // these are the default values so you don't have to provide them if they are good enough for your use-case.
            // but you can overwrite them here with any valid value you want.
            handleImages: ['jpg', 'jpeg', 'png', 'svg', 'webp'],
            inlineImageLimit: 8192,
            imagesFolder: 'src/assets',
            imagesName: '[name]-[hash].[ext]',
            imagesOutputPath: 'static/assets',
            optimizeImages: true,
            optimizeImagesInDev: true,
            removeOriginalExtension: true,
            mozjpeg: {
                quality: 80
            },
            optipng: {
                optimizationLevel: 3
            },
            svgo: {
                // enable/disable svgo plugins here
            },
            webp: {
                preset: 'default',
                quality: 75
            }
        })
    )
);
