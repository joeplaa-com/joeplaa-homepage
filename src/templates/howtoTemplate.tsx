import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import FilterCard from '../components/filterCard'
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import PostMore from '../components/postMore'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { PostQueryProps } from '../types'
import { navigation } from '../utils/data'
import formatAllTags from '../utils/formatAllTags'

const HowtoTemplate = ({ data, pageContext }: PostQueryProps) => {
    const { pageHowtoDescription, pageHowtoImage, pageHowtoTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const posts = data.allMdx.nodes;
    const tags = formatAllTags(data.allMdx.group);
    const { currentPage, numPages } = pageContext;

    return (
        <>
            <Layout>
                <SEO
                    title={pageHowtoTitle}
                    description={pageHowtoDescription || `nothin’`}
                    image={`${siteUrl}${pageHowtoImage}`}
                    pathname={`${siteUrl}${navigation.howto}`}
                    titleTemplate={titleTemplate}
                    titleSeparator={titleSeparator}
                    siteLanguage={siteLanguage}
                    siteLocale={siteLocale}
                    twitterUsername={twitterUsername}
                />

                <section className='section-fill blue-light' id={pageHowtoTitle}>
                    <Container className='my-auto'>
                        <FilterCard page={navigation.howto} tags={tags} />
                        {posts.length > 0 && <PostMore posts={posts} />}
                        <Pagination currentPage={currentPage} numPages={numPages} path={navigation.howto} />
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export const query = graphql`
  query howtoTemplate($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, series: { ne: true } }, fileAbsolutePath: {regex: "/content/howto/"} }
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
                fluid(srcSetBreakpoints: [320, 640, 960]) {
                ...GatsbyImageSharpFluid_withWebp
              }
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
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default HowtoTemplate;
