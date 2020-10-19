import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Container } from 'reactstrap'
import SEO from 'react-seo-component'
import Layout from '../components/layout'
import { metaData } from '../utils/data'
import { PostTemplateProps } from '../types'

const ConditionsTemplate = ({ data }: PostTemplateProps) => {
    const { body, fields, frontmatter } = data.mdx;
    const { title, date } = frontmatter;
    return (
        <Layout>
            <SEO
                title={title}
                titleTemplate={metaData.TitleTemplate}
                titleSeparator={metaData.TitleSeparator}
                description={title + ' ' + date}
                image={`${metaData.SiteUrl}${metaData.SiteImage}`}
                pathname={`${metaData.SiteUrl}/conditions/${fields.slug}`}
                siteLanguage={metaData.SiteLanguage}
                siteLocale={metaData.SiteLocale}
                twitterUsername={metaData.TwitterUsername}
                author={metaData.AuthorName}
                article={true}
                datePublished={date}
            />

            <section className='section-fill gray-medium' id={metaData.WikiTitle}>
                <Container className='my-auto post-container'>
                    <h3>{title}</h3>
                    <em>{date}</em>

                    <div className='markdown conditions'>
                        <MDXRenderer>{body}</MDXRenderer>
                    </div>
                </Container>
            </section>
        </Layout>
    );
};

export const query = graphql`
  query conditionsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM D")
      }
      body
      fields {
        slug
      }
    }
  }
`;

export default ConditionsTemplate;