import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { useState } from 'react'
import SEO from 'react-seo-component'
import { Collapse, Container, ListGroup, ListGroupItem } from 'reactstrap'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { PostQueryProps } from '../types'
import { navigation } from '../utils/data'

const Howto = ({ data }: PostQueryProps) => {
    const { componentWikiFaq, componentWikiPricing, componentWikiProcedure, pageWikiDescription, pageWikiImage, pageWikiTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();

    const wikisFaq = [];
    const wikisPricing = [];
    const wikisProcedure = [];
    const [isOpen, setIsOpen] = useState({})

    function createListItem (id, body, frontmatter) {
        return (
            <ListGroupItem className='list-group-item-wiki markdown' tag="button" key={id} onClick={() => {
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
        )
    }

    data.allMdx.nodes.map(({ id, body, frontmatter }) => {
        if (frontmatter.category.includes(componentWikiFaq.toLowerCase())) {
            wikisFaq.push(createListItem(id, body, frontmatter))
        } else if (frontmatter.category.includes(componentWikiPricing.toLowerCase())) {
            wikisPricing.push(createListItem(id, body, frontmatter))
        } else if (frontmatter.category.includes(componentWikiProcedure.toLowerCase())) {
            wikisProcedure.push(createListItem(id, body, frontmatter))
        }
    })

    return (
        <>
            <SEO
                title={pageWikiTitle}
                description={pageWikiDescription || `nothin’`}
                image={`${siteUrl}${pageWikiImage}`}
                pathname={`${siteUrl}${navigation.wiki}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill blue-dark' id={pageWikiTitle}>
                <Container className='my-auto'>
                    <ListGroup id={componentWikiFaq}>
                        <ListGroupItem color='primary'><h2>General questions</h2></ListGroupItem>
                        {wikisFaq}
                    </ListGroup>
                    <ListGroup id={componentWikiProcedure}>
                        <ListGroupItem color='primary'><h2>What can you expect</h2></ListGroupItem>
                        {wikisProcedure}
                    </ListGroup>
                    <ListGroup id={componentWikiPricing}>
                        <ListGroupItem color='primary'><h2>Pricing details</h2></ListGroupItem>
                        {wikisPricing}
                    </ListGroup>
                </Container>
            </section>
        </>
    );
};

export const query = graphql`
    query SITE_WIKI_QUERY {
        allMdx(
            sort: { fields: [frontmatter___title], order: ASC }
            filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/content/wiki/"} }
        ) {
            nodes {
                id
                body
                frontmatter {
                    category
                    date(formatString: "YYYY MMMM D")
                    excerpt
                    title
                }
            }
        }
        site {
            siteMetadata {
                metadata {
                    componentWikiFaq
                    componentWikiPricing
                    componentWikiProcedure
                    pageWikiDescription
                    pageWikiImage
                    pageWikiTitle
                    siteLanguage
                    siteLocale
                    siteUrl
                    titleSeparator
                    titleTemplate
                    twitterUsername
                }
            }
        }
    }
`;

export default Howto;
