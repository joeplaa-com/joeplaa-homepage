import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import SEO from 'react-seo-component';
import { Container } from 'reactstrap';
import FilterCard from '../components/filterCard';
import Pagination from '../components/pagination';
import PostMore from '../components/postMore';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import { PageTemplateQueryProps } from '../types';
import formatAllTags from '../utils/formatAllTags';

const HowtoTemplate = ({ data, pageContext }: PageTemplateQueryProps): ReactElement => {
    const { pageHowtoDescription, pageHowtoImage, pageHowtoTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { howto } = useSiteNavigation();
    const posts = data.posts.nodes;
    const tags = formatAllTags(data.tags.group);
    const { currentPage, numPages } = pageContext;

    return (
        <>
            <SEO
                title={pageHowtoTitle}
                description={pageHowtoDescription || 'nothin’'}
                image={`${siteUrl}${pageHowtoImage}`}
                pathname={`${siteUrl}${howto}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill blue-light' id={pageHowtoTitle}>
                <Container className='my-auto'>
                    <FilterCard page={howto} tags={tags} template='howto' />
                    {posts.length > 0 && <PostMore posts={posts} />}
                    <Pagination currentPage={currentPage} numPages={numPages} path={howto} />
                </Container>
            </section>
        </>
    );
};

export const query = graphql`query howtoTemplate($skip: Int!, $limit: Int!) {
    posts: allMdx(
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {published: {eq: true}, series: {ne: true}}, fileAbsolutePath: {regex: "/content/howto/"}}
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
                        gatsbyImageData(width: 1080, breakpoints: [320, 640, 960], layout: CONSTRAINED)
                    }
                }
                date(formatString: "YYYY MMMM D")
                excerpt
                series
                tags
                title
            }
            fields {
                slug
                readingTime {
                    text
                }
            }
        }
    }
    tags: allMdx(
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {published: {eq: true}, series: {ne: true}}, fileAbsolutePath: {regex: "/content/howto/"}}
    ) {
        group(field: frontmatter___tags) {
            fieldValue
            totalCount
        }
    }
}`;

export default HowtoTemplate;
