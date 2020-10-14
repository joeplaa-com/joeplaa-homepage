/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.tsx');
    const conditionsTemplate = path.resolve('src/templates/conditionsTemplate.tsx');

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
        tagsGroup: allMdx(limit: 2000) {
            group(field: frontmatter___tags) {
                fieldValue
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
                fileAbsolutePath
            }
        }
        tagsGroup: allMdx(limit: 2000) {
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
        //const portfolio = result.data.portfolio.nodes;
        //const wiki = result.data.wiki.nodes;

        // create page for each conditions node
        conditions.forEach((post) => {
            createPage({
                path: post.fields.slug,
                component: conditionsTemplate,
                context: {
                    slug: post.fields.slug,
                },
            });
        });

        // create page for each howto node
        howto.forEach((post, index) => {
            const previous =
                index === howto.length - 1 ? null : howto[index + 1];
            const next = index === 0 ? null : howto[index - 1];

            createPage({
                path: post.fields.slug,
                component: blogPostTemplate,
                context: {
                    slug: post.fields.slug,
                    previous,
                    next,
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