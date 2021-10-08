import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import SEO from 'react-seo-component';
import { Container } from 'reactstrap';
import FilterCard from '../components/filterCard';
import PostMore from '../components/postMore';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import { TagTemplateQueryProps } from '../types';
import formatAllTags from '../utils/formatAllTags';

const HowtoTag = ({ data, pageContext }: TagTemplateQueryProps): ReactElement => {
    const { siteDescription, siteImage, siteLanguage, siteLocale, siteTitle, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { tagsHowto } = useSiteNavigation();
    const posts = data.posts.nodes;
    const tag = formatAllTags([{ fieldValue: pageContext.tagValue, totalCount: pageContext.totalCount }]);

    return (
        <>
            <SEO
                title={siteTitle}
                description={siteDescription || 'nothin’'}
                image={`${siteUrl}${siteImage}`}
                pathname={`${siteUrl}${pageContext.slug}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill blue-light' id={siteTitle}>
                <Container className='my-auto'>
                    <FilterCard page={tagsHowto} tags={tag} template='howto' />
                    {posts.length > 0 && <PostMore posts={posts} />}
                </Container>
            </section>
        </>
    );
};

export const query = graphql`query howtoTagsBySlug($tagValue: String) {
    posts: allMdx(
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {published: {eq: true}, series: {ne: true}, tags: {in: [$tagValue]}}, fileAbsolutePath: {regex: "/content/howto/"}}
    ) {
        nodes {
            id
            frontmatter {
                author
                cover {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(width: 960, breakpoints: [320, 640], layout: CONSTRAINED)
                    }
                }
                date(formatString: "YYYY MMMM D")
                excerpt
                tags
                title
            }
            fields {
                slug
            }
        }
    }
}`;

export default HowtoTag;
