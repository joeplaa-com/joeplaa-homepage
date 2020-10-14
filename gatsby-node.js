/* eslint-disable @typescript-eslint/no-var-requires */
const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
    const blogPostTemplate = path.resolve('src/templates/blogPostTemplate.tsx');

    return graphql(`
    {
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
          fileAbsolutePath
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
      wiki: allMdx(
        filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { glob: "**/content/wiki/**/*.mdx" } }
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

        const howto = result.data.howto.nodes;
        //const portfolio = result.data.portfolio.nodes;
        //const wiki = result.data.wiki.nodes;

        // create page for each mdx howto node
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