/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const kebabCase = require("lodash").kebabCase;

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const howtoTemplate = path.resolve('src/templates/howtoTemplate.tsx');
    const portfolioTemplate = path.resolve('src/templates/portfolioTemplate.tsx');
    const conditionsTemplate = path.resolve('src/templates/conditionsTemplate.tsx');
    const tagsTemplate = path.resolve('src/templates/tagsTemplate.tsx');

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
        portfolio: allMdx(
            filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { glob: "**/content/portfolio/**/*.mdx" } }
            sort: { fields: [frontmatter___date], order: DESC }
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

        const conditions = result.data.conditions.nodes;
        const howto = result.data.howto.nodes;
        const portfolio = result.data.portfolio.nodes;
        //const wiki = result.data.wiki.nodes;
        const tags = result.data.tagsGroup.group;

        // create page for each conditions node
        conditions.forEach((post) => {
            const slug = post.fields.slug;
            createPage({
                path: `/conditions/${slug}/`,
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
                component: howtoTemplate,
                context: {
                    slug,
                    previous: index === howto.length - 1 ? null : howto[index + 1],
                    next: index === 0 ? null : howto[index - 1],
                },
            });
        });

        // create page for each howto node
        portfolio.forEach((post, index) => {
            const slug = post.fields.slug;
            createPage({
                path: slug,
                component: portfolioTemplate,
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