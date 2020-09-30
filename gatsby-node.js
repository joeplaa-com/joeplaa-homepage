/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);
const _ = require("lodash");

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.tsx');
    const tagTemplate = path.resolve("src/templates/tags.tsx")

    return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
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
    }
  `).then(result => {
        if (result.errors) {
            throw result.errors;
        }

        const posts = result.data.allMdx.nodes;

        // create page for each mdx node
        posts.forEach((post, index) => {
            const previous =
                index === posts.length - 1 ? null : posts[index + 1];
            const next = index === 0 ? null : posts[index - 1];

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

        // Extract tag data from query
        const tags = result.data.tagsGroup.group
        // Make tag pages
        tags.forEach(tag => {
            createPage({
                path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
                component: tagTemplate,
                context: {
                    tag: tag.fieldValue,
                },
            })
        })
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