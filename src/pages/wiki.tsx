import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { useState } from 'react'
import SEO from 'react-seo-component'
import { Collapse, Container, ListGroup, ListGroupItem } from 'reactstrap'
import Layout from '../components/layout'
import { PostQueryProps } from '../types'
import { metaData, navigation } from '../utils/data'

const Howto = ({ data }: PostQueryProps) => {
    const wikisFaq = [];
    const wikisPricing = [];
    const wikisProcedure = [];
    const wikisTechnologies = [];
    const [isOpen, setIsOpen] = useState({})

    data.allMdx.nodes.map(({ id, body, frontmatter }) => {
        if (frontmatter.tags.includes(metaData.WikiFaq.toLowerCase())) {
            wikisFaq.push(<>
                <ListGroupItem className='list-group-item-wiki' key={id} onClick={() => {
                    const newIsOpen = {
                        ...isOpen
                    }
                    newIsOpen[id] = !isOpen[id];
                    setIsOpen(newIsOpen)
                }}>
                    <h3>{frontmatter.title}</h3>
                    <Collapse isOpen={isOpen[id]}>
                        <MDXRenderer key={id}>{body}</MDXRenderer>
                    </Collapse>
                </ListGroupItem>
            </>)
        } else if (frontmatter.tags.includes(metaData.WikiPricing.toLowerCase())) {
            wikisPricing.push(<>
                <ListGroupItem className='list-group-item-wiki' key={id} onClick={() => {
                    const newIsOpen = {
                        ...isOpen
                    }
                    newIsOpen[id] = !isOpen[id];
                    setIsOpen(newIsOpen)
                }}>
                    <h3>{frontmatter.title}</h3>
                    <Collapse isOpen={isOpen[id]}>
                        <MDXRenderer key={id}>{body}</MDXRenderer>
                    </Collapse>
                </ListGroupItem>
            </>)
        } else if (frontmatter.tags.includes(metaData.WikiProcedure.toLowerCase())) {
            wikisProcedure.push(<>
                <ListGroupItem className='list-group-item-wiki' key={id} onClick={() => {
                    const newIsOpen = {
                        ...isOpen
                    }
                    newIsOpen[id] = !isOpen[id];
                    setIsOpen(newIsOpen)
                }}>
                    <h3>{frontmatter.title}</h3>
                    <Collapse isOpen={isOpen[id]}>
                        <MDXRenderer key={id}>{body}</MDXRenderer>
                    </Collapse>
                </ListGroupItem>
            </>)
        } if (frontmatter.tags.includes(metaData.WikiTechnologies.toLowerCase())) {
            wikisTechnologies.push(<>
                <ListGroupItem className='list-group-item-wiki' key={id} onClick={() => {
                    const newIsOpen = {
                        ...isOpen
                    }
                    newIsOpen[id] = !isOpen[id];
                    setIsOpen(newIsOpen)
                }}>
                    <h3>{frontmatter.title}</h3>
                    <Collapse isOpen={isOpen[id]}>
                        <MDXRenderer key={id}>{body}</MDXRenderer>
                    </Collapse>
                </ListGroupItem>
            </>)
        }
    })

    return (
        <>
            <Layout>
                <SEO
                    title={metaData.WikiTitle}
                    description={metaData.WikiDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.WikiImage}`}
                    pathname={`${metaData.SiteUrl}${navigation.wiki}`}
                    titleTemplate={metaData.TitleTemplate}
                    titleSeparator={metaData.TitleSeparator}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className='section-fill blue-dark' id={metaData.WikiTitle}>
                    <Container className='my-auto'>
                        <ListGroup id={metaData.WikiFaq}>
                            <ListGroupItem color='primary'><h2>General questions</h2></ListGroupItem>
                            {wikisFaq}
                        </ListGroup>
                        <ListGroup id={metaData.WikiProcedure}>
                            <ListGroupItem color='primary'><h2>What can you expect</h2></ListGroupItem>
                            {wikisProcedure}
                        </ListGroup>
                        <ListGroup id={metaData.WikiPricing}>
                            <ListGroupItem color='primary'><h2>Pricing details</h2></ListGroupItem>
                            {wikisPricing}
                        </ListGroup>
                        <ListGroup id={metaData.WikiTechnologies}>
                            <ListGroupItem color='primary'><h2>Technologies I use</h2></ListGroupItem>
                            {wikisTechnologies}
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
          date(formatString: "YYYY DD MMMM")
          excerpt
          tags
          title
        }
      }
    }
  }
`;

export default Howto;
