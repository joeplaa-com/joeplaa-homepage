import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import SEO from 'react-seo-component'
import Layout from '../components/layout'
import PostBrowseButton from '../components/postBrowseButton'
import PostImage from '../components/postImage'
import { content, metaData } from '../utils/data'
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

            <section className='section-fill gray-medium' id={metaData.HowtoTitle}>
                <Container className='my-auto post-container'>
                    <div className='image-container'>
                        <PostImage path={false} title={title} picture={frontmatter.cover.childImageSharp} rounded={true} height={300} />
                        <div className='overlay-text rounded'>
                            <h1 className='display-3 text-center'>{title}</h1>
                            <h3><em>{content.HowtoDisclaimer}{' '}{date}</em></h3>
                        </div>
                    </div>

                    <div className='markdown'>
                        <MDXRenderer>{body}</MDXRenderer>
                        <hr />
                    </div>

                    <Row className='d-flex justify-content-between align-items-center'>
                        {!previous ? null : (
                            previous && (
                                <Col xs='12' sm='6' lg='5' xl='4'>
                                    <PostBrowseButton type='previous' to={previous.fields.slug} title={previous.frontmatter.title} />
                                </Col>
                            )
                        )}
                        {!next ? null : (
                            next && (
                                <Col xs='12' sm='6' lg='5' xl='4' className='d-flex justify-content-end mt-2 mt-sm-0'>
                                    <PostBrowseButton type='next' to={next.fields.slug} title={next.frontmatter.title} />
                                </Col>
                            )
                        )}
                    </Row>
                </Container>
            </section>
        </Layout>
    );
};

export const query = graphql`
  query blogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY DD MMMM")
        cover {
          publicURL
          childImageSharp {
              fluid(srcSetBreakpoints: [320, 640, 960]) {
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