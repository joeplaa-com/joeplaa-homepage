import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import Layout from '../components/layout'
import { metaData, navigation } from '../utils/data'
import { PostQueryData } from '../types'

const Portfolio = ({ data }: PostQueryData) => {
    return (
        <>
            <Layout>
                <SEO
                    title={metaData.PortfolioTitle}
                    description={metaData.PortfolioDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.PortfolioImage}`}
                    pathname={`${metaData.SiteUrl}${navigation.portfolio}`}
                    titleTemplate={metaData.PageTitle}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className='section-fill blue-dark' id={metaData.WikiTitle}>
                    <Container className='text-center text-md-left my-auto'>
                        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
                            <div key={id}>
                                <Link to={fields.slug}>
                                    {
                                        frontmatter.cover ? (
                                            <Img fluid={frontmatter.cover.childImageSharp.fluid} />
                                        ) : null
                                    }
                                    <h1>{frontmatter.title}</h1>
                                    <p>{frontmatter.date}</p>
                                    <p>{excerpt}</p>
                                </Link>
                            </div>
                        ))}
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export const query = graphql`
  query SITE_PORTFOLIO_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/portfolio/"} }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          cover {
            publicURL
            childImageSharp {
                fluid(maxWidth: 1000, srcSetBreakpoints: [320, 480, 640, 960]) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default Portfolio; 
