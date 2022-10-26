import { CreatePagesArgs } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import { kebabCase } from 'lodash';
import path from 'path';

exports.createPages = ({ actions, graphql }): CreatePagesArgs => {
    const { createPage } = actions;
    return graphql(`
    {
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
        portfolioTags: allMdx(
            filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: { glob: "**/content/portfolio/**/*.mdx" } }
            limit: 2000
        ) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
    `).then(result => {
        if (result.errors) {
            throw result.errors;
        }

        // templates
        const portfolioTemplate = path.resolve('src/templates/portfolioTemplate.tsx');
        const portfolioPostTemplate = path.resolve('src/templates/portfolioPostTemplate.tsx');
        const portfolioTagTemplate = path.resolve('src/templates/portfolioTagTemplate.tsx');

        // data
        const portfolio = result.data.portfolio.nodes;
        const portfolioTags = result.data.portfolioTags.group;

        // pagination
        const postsPerPage = 12;
        const numPortfolioPages = Math.ceil(portfolio.length / postsPerPage);

        // create pagination pages for portolio
        Array.from({ length: numPortfolioPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? '/portfolio' : `/portfolio/${i + 1}`,
                component: portfolioTemplate,
                context: { // PageTemplateContextProps
                    currentPage: i + 1,
                    limit: postsPerPage,
                    numPages: numPortfolioPages,
                    skip: i * postsPerPage
                }
            });
        });

        // create page for each portfolio node
        portfolio.forEach((post, index) => {
            const slug = post.fields.slug;
            createPage({
                path: slug,
                component: portfolioPostTemplate,
                context: { // PageContextProps
                    slug,
                    previous: index === portfolio.length - 1 ? null : portfolio[index + 1],
                    next: index === 0 ? null : portfolio[index - 1]
                }
            });
        });

        // create page for each portfolio tag
        portfolioTags.forEach(tag => {
            const slug = kebabCase(tag.fieldValue);
            createPage({ // TagTemplateContextProps
                path: `/portfolio/tags/${slug}/`,
                component: portfolioTagTemplate,
                context: {
                    slug: `/portfolio/tags/${slug}/`,
                    tagValue: tag.fieldValue,
                    totalCount: tag.totalCount
                }
            });
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }): void => {
    const { createNodeField } = actions;
    if (node.internal.type === 'Mdx') {
        const value = createFilePath({ node, getNode });
        createNodeField({
            name: 'slug',
            node,
            value
        });
    }
};
