import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import SEO from 'react-seo-component';
import { Container } from 'reactstrap';
import FilterCard from '../components/filterCard';
import Pagination from '../components/pagination';
import PortfolioEntries from '../components/portfolioEntries';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import { PageTemplateQueryProps } from '../types';
import formatAllTags from '../utils/formatAllTags';

const PortfolioTemplate = ({ data, pageContext }: PageTemplateQueryProps): ReactElement => {
    const { pagePortfolioDescription, pagePortfolioImage, pagePortfolioTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { portfolio } = useSiteNavigation();
    const entries = data.posts.nodes;
    const tags = formatAllTags(data.tags.group);
    const { currentPage, numPages } = pageContext;

    return (
        <>
            <SEO
                title={pagePortfolioTitle}
                description={pagePortfolioDescription || 'nothin’'}
                image={`${siteUrl}${pagePortfolioImage}`}
                pathname={`${siteUrl}${portfolio}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill blue-medium' id={pagePortfolioTitle}>
                <Container className='text-left my-auto'>
                    <FilterCard page={portfolio} tags={tags} template='portfolio' />
                    {entries.length > 0 && <PortfolioEntries posts={entries} />}
                    <Pagination currentPage={currentPage} numPages={numPages} path={portfolio} />
                </Container>
            </section>
        </>
    );
};

export const query = graphql`query portfolioTemplate($skip: Int!, $limit: Int!) {
    posts: allMdx(
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {published: {eq: true}}, fileAbsolutePath: {regex: "/content/portfolio/"}}
        limit: $limit
        skip: $skip
    ) {
        nodes {
            id
            frontmatter {
                author
                cover {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(width: 640, breakpoints: [320, 480], layout: CONSTRAINED)
                    }
                }
                date(formatString: "YYYY MMMM D")
                excerpt
                tags
                title
            }
            body
            fields {
                slug
            }
        }
    }
    tags: allMdx(
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {published: {eq: true}}, fileAbsolutePath: {regex: "/content/portfolio/"}}
    ) {
        group(field: frontmatter___tags) {
            fieldValue
            totalCount
        }
    }
}`;

export default PortfolioTemplate;
