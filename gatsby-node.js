/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.tsx');

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

        const howtoPosts = result.data.allMdx.nodes.filter(node => node.fileAbsolutePath.includes('/howto/'));
        //const portfolioPosts = result.data.allMdx.nodes.filter(node => node.fileAbsolutePath.includes('/portfolio/'));
        //const wikiPosts = result.data.allMdx.nodes.filter(node => node.fileAbsolutePath.includes('/wiki/'));

        // create page for each mdx howto node
        howtoPosts.forEach((post, index) => {
            const previous =
                index === howtoPosts.length - 1 ? null : howtoPosts[index + 1];
            const next = index === 0 ? null : howtoPosts[index - 1];

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