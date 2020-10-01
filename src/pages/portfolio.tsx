import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import Filter from '../components/filter'
import Layout from '../components/layout'
import PortfolioEntries from '../components/portfolioEntries'
import { PostQueryData } from '../types'
import { filterActionCreators } from '../store/actions/filter'
import currentPage from '../utils/currentPage'
import { metaData, navigation } from '../utils/data'
import filterTag from '../utils/filterTag'
import formatAllTags from '../utils/formatAllTags'

const Portfolio = ({ data }: PostQueryData) => {
    const page = currentPage(data.allMdx.nodes[0].fileAbsolutePath);
    const tags = formatAllTags(data.allMdx.group);

    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(filterActionCreators.addTagsFilter(page, tags));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Layout>
                <SEO
                    title={metaData.PortfolioTitle}
                    description={metaData.PortfolioDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.PortfolioImage}`}
                    pathname={`${metaData.SiteUrl}${navigation.portfolio}`}
                    titleTemplate={metaData.PageTitle}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className='section-fill blue-dark' id={metaData.PortfolioTitle}>
                    <Container className='text-center text-md-left my-auto'>
                        <Filter page={page} tags={tags} />
                        <PortfolioEntries posts={data.allMdx.nodes.filter((post) => (filterTag(post, filter.userFilter[currentPage(post.fileAbsolutePath)])))} />
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export const query = graphql`
  query SITE_PORTFOLIO_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/portfolio/"} }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          author
          cover {
            publicURL
            childImageSharp {
                fluid(maxWidth: 1920, srcSetBreakpoints: [320, 480, 640, 960, 1280, 1600, 1920]) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          date(formatString: "YYYY MMMM Do")
          excerpt
          tags
          title
        }
        fileAbsolutePath
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

export default Portfolio; 
