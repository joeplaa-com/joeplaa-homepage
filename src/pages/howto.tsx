import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import SEO from 'react-seo-component'
import Image from '../components/image'
import { Layout } from '../components/layout'
import { useSiteMetadata } from '../hooks/useSiteMetadata'

export default ({ data }) => {
    const {
        description,
        title,
        titleTemplate,
        image,
        siteUrl,
        siteLanguage,
        siteLocale,
        twitterUsername,
    } = useSiteMetadata()
    return (
        <>
            <Layout>
                <SEO
                    title={title}
                    titleTemplate={titleTemplate}
                    description={description || `nothin’`}
                    image={`${siteUrl}${image}`}
                    pathname={siteUrl}
                    siteLanguage={siteLanguage}
                    siteLocale={siteLocale}
                    twitterUsername={twitterUsername}
                />
                <main>
                    {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
                        <div key={id}>
                            <Link to={fields.slug}>
                                {
                                    !!frontmatter.cover ? (
                                        <Img fluid={frontmatter.cover.childImageSharp.fluid} />
                                    ) : null
                                }
                                <h1>{frontmatter.title}</h1>
                                <p>{frontmatter.date}</p>
                                <p>{excerpt}</p>
                            </Link>
                        </div>
                    ))}
                </main>
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