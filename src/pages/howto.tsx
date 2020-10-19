import React, { lazy, Suspense } from 'react'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
const FilterCard = lazy(() => import('../components/filterCard'))
import Layout from '../components/layout'
import PostMore from '../components/postMore'
import RenderLoader from '../components/renderLoader'
import { PostQueryProps } from '../types'
import { metaData, navigation } from '../utils/data'
import formatAllTags from '../utils/formatAllTags'

const Howto = ({ data, location }: PostQueryProps) => {
    const posts = data.allMdx.nodes;
    const tags = formatAllTags(data.allMdx.group);

    const isSSR = typeof window === "undefined";
    return (
        <>
            <Layout>
                <SEO
                    title={metaData.HowtoTitle}
                    description={metaData.HowtoDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.HowtoImage}`}
                    pathname={`${metaData.SiteUrl}${navigation.howto}`}
                    titleTemplate={metaData.TitleTemplate}
                    titleSeparator={metaData.TitleSeparator}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className='section-fill blue-light' id={metaData.HowtoTitle}>
                    <Container className='my-auto'>
                        {!isSSR && (
                            <Suspense fallback={<RenderLoader />}>
                                <FilterCard pathname={location.pathname} tags={tags} />
                            </Suspense>
                        )}
                        {posts.length > 0 && <PostMore posts={posts} />}
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export const query = graphql`
  query SITE_HOWTO_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, series: { ne: true } }, fileAbsolutePath: {regex: "/content/howto/"} }
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

export default Howto;
