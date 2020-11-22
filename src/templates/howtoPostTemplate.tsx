import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Col, Row } from 'reactstrap'
import SEO from 'react-seo-component'
import Filter from '../components/filter'
import PostBrowseButton from '../components/postBrowseButton'
import PostImage from '../components/postImage'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { content, navigation } from '../utils/data'
import formatPostTags from '../utils/formatPostTags'
import { PageTemplateProps } from '../types'

const PostTemplate = ({ data, location, pageContext }: PageTemplateProps) => {
    const { authorName, pageHowtoTitle, siteImage, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { body, fields, frontmatter } = data.mdx;
    const { title, excerpt, date, cover } = frontmatter;
    const { previous, next } = pageContext;
    const tags = formatPostTags(frontmatter.tags);
    return (
        <>
            <SEO
                title={title}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                description={excerpt}
                image={
                    cover === null
                        ? `${siteUrl}${siteImage}`
                        : `${siteUrl}${cover.publicURL}`
                }
                pathname={`${siteUrl}${fields.slug}`}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
                author={authorName}
                article={true}
                datePublished={date}
                dateModified={new Date(Date.now()).toISOString()}
            />

            <section className='section-fill gray-medium' id={pageHowtoTitle}>
                <Container className='my-auto post-container'>
                    <Filter buttonType={location.state?.prevPathname ? 'back' : 'more'} page={navigation.howto} className='mb-3' tags={tags} />
                    <div className='d-md-none post-header'>
                        <h1 className='display-3 text-center'>{title}</h1>
                    </div>
                    <div className='image-container'>
                        <PostImage path={false} title={title} picture={frontmatter.cover.childImageSharp} rounded={true} />
                        <div className="d-none d-md-block image-overlay-blur"></div>
                        <div className='d-none d-md-block image-overlay-text rounded'>
                            <h1 className='display-3 text-center'>{title}</h1>
                        </div>
                    </div>

                    <div className='markdown'>
                        <em>{content.HowtoDisclaimer}{' '}{date}</em>
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
        </>
    );
};

export const query = graphql`
  query howtoPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        excerpt
        date(formatString: "YYYY MMMM D")
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
      fields {
        slug
      }
    }
  }
`;

export default PostTemplate;