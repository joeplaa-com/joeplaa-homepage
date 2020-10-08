/* eslint-disable compat/compat */
const siteAddress = new URL("https://www.joeplaa.com");
const siteMetadata = {
    title: `joeplaa.com`, //sitetitle
    titleTemplate: `joeplaa.com`, //sitename
    description: `Helping people create their digital home.`, //sitedescription
    image: `/images/banner-www-com.png`,
    siteUrl: siteAddress.href,
    siteLanguage: `en-US`,
    siteLocale: `en_us`,
    twitterUsername: ``,
    authorName: `Joep van de Laarschot`,
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-advanced-sitemap`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-preact`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-webpack-bundle-analyser-v2`,
        `gatsby-remark-images`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -64
            }
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
                exclude: /(node_modules|.cache|public)/,
                options: {
                    emitWarning: true,
                    failOnError: false
                }
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `joeplaa.com`,
                short_name: `joeplaa.com`,
                description: `Helping people create their digital home.`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#07b1c2`,
                display: `standalone`,
                icon: `src/images/icon.png`,
                icon_options: {
                    purpose: `any maskable`,
                }
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            offsetY: `100`,
                            maintainCase: false,
                            removeAccents: true,
                            elements: [`h1`, `h2`, `h3`],
                        }
                    },
                    {
                        resolve: `gatsby-remark-copy-linked-files`,
                        options: {
                            destinationDir: `downloads`,
                            ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `webp`],
                        },
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "nofollow noreferrer"
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            linkImagesToOriginal: true,
                            maxWidth: 960,
                            srcSetBreakpoints: [320, 640, 960],
                            withWebp: true,
                            showCaptions: ['title'],
                        },
                    }
                ],
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /svg/
                }
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                env: {
                    development: {
                        policy: [{ userAgent: '*', disallow: ['/'] }]
                    },
                    production: {
                        policy: [{ userAgent: '*', allow: '/' }]
                    }
                }
            }
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: "www-joeplaa-com",
                protocol: siteAddress.protocol.slice(0, -1),
                hostname: siteAddress.hostname,
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                stripMetadata: true,
                defaultQuality: 70,
            },
        },
        {
            resolve: `gatsby-plugin-webfonts`,
            options: {
                fonts: {
                    google: [
                        {
                            family: "Roboto Mono",
                            variants: ["300", "400", "500", "600", "700"],
                        },
                        {
                            family: "Roboto",
                            variants: ["300", "400", "500", "600", "700"],
                        },
                        {
                            family: "Ubuntu Mono",
                            variants: ["300", "400", "500", "600", "700"],
                        },
                        {
                            family: "Ubuntu",
                            variants: ["300", "400", "500", "600", "700"],
                        },
                    ],
                },
                useMinify: true,
                usePreload: false,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            maintainCase: false,
                            removeAccents: true,
                            elements: [`h1`, `h2`, `h3`],
                        }
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/authors`,
                name: `authors`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/howto`,
                name: `howto`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
                name: `images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/portfolio`,
                name: `portfolio`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/wiki`,
                name: `wiki`,
            },
        },
    ],
}
