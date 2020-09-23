const siteMetadata = {
    title: `The Localhost Blog`,
    description: `This is my coding blog where I write about my coding journey.`,
    image: `/images/banner-www-com-white.png`,
    siteUrl: `https://joeplaa.com`,
    siteLanguage: `en-US`,
    siteLocale: `en_us`,
    twitterUsername: ``,
    authorName: `Joep van de Laarschot`,
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-advanced-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
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
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/posts`,
                name: `posts`,
            },
        },
    ],
}
