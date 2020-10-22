/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const kebabCase = require("lodash").kebabCase;

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    return graphql(`
    {
        conditions: allMdx(
            filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { glob: "**/content/conditions/**/*.mdx" } }
            sort: { fields: [frontmatter___title], order: ASC }
        ) {
            nodes {
                fields {
                    slug
                }
                frontmatter {
                    title
                }
            }
        }
        howto: allMdx(
            filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { glob: "**/content/howto/**/*.mdx" } }
            sort: { fields: [frontmatter___title], order: ASC }
            limit: 1000
        ) {
            nodes {
                fields {
                    slug
                }
                frontmatter {
                    series
                    title
                }
            }
        }
        portfolio: allMdx(
            filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { glob: "**/content/portfolio/**/*.mdx" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 1000
        ) {
            nodes {
                fields {
                    slug
                }
                frontmatter {
                    title
                }
            }
        }
        tagsGroup: allMdx(limit: 2000, 
            filter: { frontmatter: { published: { eq: true } } }) {
            group(field: frontmatter___tags) {
                fieldValue
            }
        }
    }
    `).then(result => {
        if (result.errors) {
            throw result.errors;
        }

        // templates
        const howtoTemplate = path.resolve('src/templates/howtoTemplate.tsx');
        const howtoPostTemplate = path.resolve('src/templates/howtoPostTemplate.tsx');
        const portfolioTemplate = path.resolve('src/templates/portfolioTemplate.tsx');
        const portfolioPostTemplate = path.resolve('src/templates/portfolioPostTemplate.tsx');
        const conditionsTemplate = path.resolve('src/templates/conditionsTemplate.tsx');
        const tagsTemplate = path.resolve('src/templates/tagsTemplate.tsx');

        // data
        const conditions = result.data.conditions.nodes;
        const howto = result.data.howto.nodes;
        const portfolio = result.data.portfolio.nodes;
        //const wiki = result.data.wiki.nodes;
        const tags = result.data.tagsGroup.group;

        // pagination
        const postsPerPage = 6;
        const numHowtoPages = Math.ceil(howto.filter(post => post.frontmatter.series !== true).length / postsPerPage);
        const numPortfolioPages = Math.ceil(portfolio.length / postsPerPage);

        // create pagination pages for howto
        Array.from({ length: numHowtoPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/howto` : `/howto/${i + 1}`,
                component: howtoTemplate,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages: numHowtoPages,
                    currentPage: i + 1,
                },
            })
        })

        // create pagination pages for portolio
        Array.from({ length: numPortfolioPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
                component: portfolioTemplate,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages: numPortfolioPages,
                    currentPage: i + 1,
                },
            })
        })

        // create page for each conditions node
        conditions.forEach((post) => {
            const slug = post.fields.slug;
            createPage({
                path: `/conditions${slug}`,
                component: conditionsTemplate,
                context: {
                    slug,
                },
            });
        });

        // create page for each howto node
        howto.forEach((post, index) => {
            const slug = post.fields.slug;
            createPage({
                path: slug,
                component: howtoPostTemplate,
                context: {
                    slug,
                    previous: index === howto.length - 1 ? null : howto[index + 1],
                    next: index === 0 ? null : howto[index - 1],
                },
            });
        });

        // create page for each portfolio node
        portfolio.forEach((post, index) => {
            const slug = post.fields.slug;
            createPage({
                path: slug,
                component: portfolioPostTemplate,
                context: {
                    slug,
                    previous: index === howto.length - 1 ? null : howto[index + 1],
                    next: index === 0 ? null : howto[index - 1],
                },
            });
        });

        // create page for each tag
        tags.forEach(tag => {
            const slug = kebabCase(tag.fieldValue);
            createPage({
                path: `/tags/${slug}/`,
                component: tagsTemplate,
                context: {
                    slug: `/tags/${slug}/`,
                    tag: tag,
                    tagValue: tag.fieldValue
                },
            });
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `Mdx`) {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: `slug`,
            node,
            value,
        });
    }
};