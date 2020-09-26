const data = require("./src/utils/data.js")

module.exports = {
    siteMetadata: data.meta,
    plugins: [
        `gatsby-plugin-advanced-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        {
            resolve: "gatsby-plugin-anchor-links",
            options: {
                offset: 0
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: data.meta.title, //
                short_name: data.meta.title, //
                description: data.meta.description, //
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
            },
            gatsbyRemarkPlugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 590,
                    },
                },
            ],
            plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 590,
                    },
                },
            ],
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /images/
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
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
                name: `images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/howtos`,
                name: `howtos`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/portfolio`,
                name: `portfolio`,
            },
        },
    ],
}
