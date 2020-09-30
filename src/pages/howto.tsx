import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import SEO from 'react-seo-component'
import Layout from '../components/layout'
import { PostQueryData } from '../types'
import { metaData, navigation } from '../utils/data'

const Howto = ({ data }: PostQueryData) => {
    return (
        <>
            <Layout>
                <SEO
                    title={metaData.HowtoTitle}
                    description={metaData.HowtoDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.HowtoImage}`}
                    pathname={`${metaData.SiteUrl}${navigation.howto}`}
                    titleTemplate={metaData.PageTitle}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />
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
            </Layout>
        </>
    );
};

export const query = graphql`
  query SITE_HOWTO_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/howtos/"} }
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

export default Howto;
