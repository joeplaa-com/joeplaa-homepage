module.exports = {
    siteMetadata: {
        title: `joeplaa.com`, //sitetitle
        titleTemplate: `joeplaa.com`, //sitename
        description: `Helping people create their digital home.`, //sitedescription
        image: `/images/banner-www-com-white.png`,
        siteUrl: `https://www.joeplaa.com`,
        siteLanguage: `en-US`,
        siteLocale: `en_us`,
        twitterUsername: ``,
        authorName: `Joep van de Laarschot`,
    },
    plugins: [
        `gatsby-plugin-advanced-sitemap`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-remark-images`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: -64
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
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`, `.md`],
                gatsbyRemarkPlugins: [
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
                            maxWidth: 1200,
                            srcSetBreakpoints: [320, 480, 640, 960, 1280],
                            withWebp: true,
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
                usePreload: true,
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
