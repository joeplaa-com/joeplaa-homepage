import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import FilterCard from '../components/filterCard'
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import PortfolioEntries from '../components/portfolioEntries'
import { PostQueryProps } from '../types'
import { metaData, navigation } from '../utils/data'
import formatAllTags from '../utils/formatAllTags'

const PortfolioTemplate = ({ data, location, pageContext }: PostQueryProps) => {
    const entries = data.allMdx.nodes;
    const tags = formatAllTags(data.allMdx.group);
    const { currentPage, numPages } = pageContext;

    return (
        <>
            <Layout>
                <SEO
                    title={metaData.PortfolioTitle}
                    description={metaData.PortfolioDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.PortfolioImage}`}
                    pathname={`${metaData.SiteUrl}${navigation.portfolio}`}
                    titleTemplate={metaData.TitleTemplate}
                    titleSeparator={metaData.TitleSeparator}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className='section-fill blue-medium' id={metaData.PortfolioTitle}>
                    <Container className='text-left my-auto'>
                        <FilterCard pathname={location.pathname} tags={tags} />
                        {entries.length > 0 && <PortfolioEntries posts={entries} />}
                        <Pagination currentPage={currentPage} numPages={numPages} path={navigation.portfolio} />
                    </Container>
                </section>
            </Layout>
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
