const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const withModernizr = require("next-plugin-modernizr");

module.exports = withBundleAnalyzer(
    withModernizr(
        withOptimizedImages({
            // these are the default values so you don't have to provide them if they are good enough for your use-case.
            // but you can overwrite them here with any valid value you want.
            handleImages: ['jpg', 'jpeg', 'png', 'svg', 'webp'],
            inlineImageLimit: 8192,
            imagesFolder: 'images',
            imagesName: '[name]-[hash].[ext]',
            imagesOutputPath: 'static/images',
            optimizeImages: true,
            optimizeImagesInDev: false,
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
