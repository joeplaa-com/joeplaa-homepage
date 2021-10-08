import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container } from 'reactstrap';
import SEO from 'react-seo-component';
import useSiteMetadata from '../hooks/useSiteMetadata';
import { PageProps } from '../types';

const ConditionsTemplate = ({ data }: PageProps): ReactElement => {
    const { authorName, siteImage, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { body, fields, frontmatter } = data.mdx;
    const { title, date } = frontmatter;
    return (
        <>
            <SEO
                title={title}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                description={title + ' ' + date}
                image={`${siteUrl}${siteImage}`}
                pathname={`${siteUrl}/conditions/${fields.slug}`}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
                author={authorName}
                article={true}
                datePublished={date}
            />

            <section className='section-fill gray-medium' id={'Conditions'}>
                <Container className='my-auto post-container'>
                    <h3>{title}</h3>
                    <em>{date}</em>

                    <div className='markdown conditions'>
                        <MDXRenderer>{body}</MDXRenderer>
                    </div>
                </Container>
            </section>
        </>
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
