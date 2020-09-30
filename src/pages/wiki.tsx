import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { useState } from 'react'
import SEO from 'react-seo-component'
import { Collapse, Container, ListGroup, ListGroupItem } from 'reactstrap'
import Layout from '../components/layout'
import { PostQueryData } from '../types'
import { metaData, navigation } from '../utils/data'

const Howto = ({ data }: PostQueryData) => {
    const wikis = [];
    const [isOpen, setIsOpen] = useState({})

    data.allMdx.nodes.map(({ id, body, excerpt, frontmatter }) => {
        wikis.push(<>
            <ListGroupItem tag="button" href="#" onClick={() => {
                const newIsOpen = {
                    ...isOpen
                }
                newIsOpen[id] = !isOpen[id];
                setIsOpen(newIsOpen)
            }} className='wiki-card' key={id}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.excerpt || excerpt}</p>
                <Collapse isOpen={isOpen[id]}>
                    <MDXRenderer key={id}>{body}</MDXRenderer>
                </Collapse>
            </ListGroupItem>
        </>)
    })

    return (
        <>
            <Layout>
                <SEO
                    title={metaData.WikiTitle}
                    description={metaData.WikiDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.WikiImage}`}
                    pathname={`${metaData.SiteUrl}${navigation.wiki}`}
                    titleTemplate={metaData.PageTitle}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className='section-fill wiki' id={metaData.WikiTitle}>
                    <Container className='text-center text-md-left my-auto'>
                        <ListGroup>
                            {wikis}
                        </ListGroup>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export const query = graphql`
  query SITE_WIKI_QUERY {
    allMdx(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/wiki/"} }
    ) {
      nodes {
        id
        body
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          excerpt
        }
      }
    }
  }
`;

export default Howto;
