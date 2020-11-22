import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import FilterCard from '../components/filterCard'
import Pagination from '../components/pagination'
import PortfolioEntries from '../components/portfolioEntries'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { PostQueryProps } from '../types'
import { navigation } from '../utils/data'
import formatAllTags from '../utils/formatAllTags'

const PortfolioTemplate = ({ data, pageContext }: PostQueryProps) => {
    const { pagePortfolioDescription, pagePortfolioImage, pagePortfolioTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const entries = data.allMdx.nodes;
    const tags = formatAllTags(data.allMdx.group);
    const { currentPage, numPages } = pageContext;

    return (
        <>
            <SEO
                title={pagePortfolioTitle}
                description={pagePortfolioDescription || `nothin’`}
                image={`${siteUrl}${pagePortfolioImage}`}
                pathname={`${siteUrl}${navigation.portfolio}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill blue-medium' id={pagePortfolioTitle}>
                <Container className='text-left my-auto'>
                    <FilterCard page={navigation.portfolio} tags={tags} />
                    {entries.length > 0 && <PortfolioEntries posts={entries} />}
                    <Pagination currentPage={currentPage} numPages={numPages} path={navigation.portfolio} />
                </Container>
            </section>
        </>
    );
};

export const query = graphql`
  query portfolioTemplate($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/content/portfolio/"} }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          author
          cover {
            publicURL
            childImageSharp {
                fluid(srcSetBreakpoints: [320, 480, 640]) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          date(formatString: "YYYY MMMM D")
          excerpt
          tags
          title
        }
        body
        fields {
          slug
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default PortfolioTemplate; 
