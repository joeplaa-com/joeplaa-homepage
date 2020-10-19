import React from 'react'
import { graphql, Link } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import FilterCard from '../components/filterCard'
import Layout from '../components/layout'
import PostMore from '../components/postMore'
import { PostQueryProps } from '../types'
import { metaData } from '../utils/data'
import formatAllTags from '../utils/formatAllTags'

const Tag = ({ data, location, pageContext }: PostQueryProps) => {
    const posts = data.allMdx.nodes;
    const tags = formatAllTags([pageContext.tag]);
    const { currentPage, numPages } = pageContext;
    return (
        <>
            <Layout>
                <SEO
                    title={metaData.SiteTitle}
                    description={metaData.SiteDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.SiteImage}`}
                    pathname={`${metaData.SiteUrl}${pageContext.slug}`}
                    titleTemplate={metaData.TitleTemplate}
                    titleSeparator={metaData.TitleSeparator}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className='section-fill blue-light' id={metaData.SiteTitle}>
                    <Container className='my-auto'>
                        <FilterCard pathname={location.pathname} tags={tags} />
                        {posts.length > 0 && <PostMore posts={posts} />}
                        <hr />
                        {Array.from({ length: numPages }, (_, i) => (
                            <Link key={`pagination-number${i + 1}`} to={`/portfolio/${i === 0 ? "" : i + 1}`}>
                                {i + 1}
                            </Link>
                        ))}
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export const query = graphql`
  query tagsBySlug($tagValue: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, tags: { in: [$tagValue] } } }
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
          tags
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default Tag;
