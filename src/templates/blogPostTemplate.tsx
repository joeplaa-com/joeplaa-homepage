import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Container } from 'reactstrap'
import SEO from 'react-seo-component'
import Layout from '../components/layout'
import PostImage from '../components/postImage'
import { metaData } from '../utils/data'
import { PostTemplateProps } from '../types'

const PostTemplate = ({ data, pageContext }: PostTemplateProps) => {
    const { body, excerpt, fields, frontmatter } = data.mdx;
    const { title, date, cover } = frontmatter;
    const { previous, next } = pageContext;
    return (
        <Layout>
            <SEO
                title={title}
                titleTemplate={metaData.TitleTemplate}
                titleSeparator={metaData.TitleSeparator}
                description={excerpt}
                image={
                    cover === null
                        ? `${metaData.SiteUrl}${metaData.SiteImage}`
                        : `${metaData.SiteUrl}${cover.publicURL}`
                }
                pathname={`${metaData.SiteUrl}${fields.slug}`}
                siteLanguage={metaData.SiteLanguage}
                siteLocale={metaData.SiteLocale}
                twitterUsername={metaData.TwitterUsername}
                author={metaData.AuthorName}
                article={true}
                datePublished={date}
                dateModified={new Date(Date.now()).toISOString()}
            />

            <section className='section-fill gray-medium' id={metaData.WikiTitle}>
                <Container className='my-auto post-container'>
                    <h3>{title}</h3>
                    <em>How-to written and screenshots taken on {date}</em>
                    <PostImage path={false} title={title} picture={frontmatter.cover.childImageSharp}/>

                    <div className='markdown'>
                        <MDXRenderer>{body}</MDXRenderer>
                    </div>

                    {!previous ? null : (
                        <>
                            {previous && (
                                <Link to={previous.fields.slug}>
                                    <p>{previous.frontmatter.title}</p>
                                </Link>
                            )}
                        </>
                    )}
                    {!next ? null : (
                        <>
                            {next && (
                                <Link to={next.fields.slug}>
                                    <p>{next.frontmatter.title}</p>
                                </Link>
                            )}
                        </>
                    )}
                </Container>
            </section>
        </Layout>
    );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
          childImageSharp {
              fluid(srcSetBreakpoints: [320, 640, 960, 1080]) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        author
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;

export default PostTemplate;