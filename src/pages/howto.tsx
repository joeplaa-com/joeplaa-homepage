import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import Filter from '../components/filter'
import Layout from '../components/layout'
import PostHero from '../components/postHero'
import PostMore from '../components/postMore'
import { PostQueryProps } from '../types'
import { filterActionCreators } from '../store/actions/filter'
import { IRootState } from '../store/interfaces'
import currentPage from '../utils/currentPage'
import { metaData, navigation } from '../utils/data'
import filterTag from '../utils/filterTag'
import formatAllTags from '../utils/formatAllTags'

const Howto = ({ data }: PostQueryProps) => {
    const heroPost = data.allMdx.nodes[0];
    const morePosts = data.allMdx.nodes.slice(1);
    const page = currentPage(heroPost.fileAbsolutePath);
    const tags = formatAllTags(data.allMdx.group);

    const filterSelector = (state: IRootState) => state.filter;
    const filter = useSelector(filterSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(filterActionCreators.addTagsFilter(page, tags));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Layout>
                <SEO
                    title={metaData.HowtoTitle}
                    description={metaData.HowtoDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.HowtoImage}`}
                    pathname={`${metaData.SiteUrl}${navigation.howto}`}
                    titleTemplate={metaData.PageTitle}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className='section-fill blue-medium' id={metaData.WikiTitle}>
                    <Container className='text-center text-md-left my-auto'>
                        <Filter page={page} tags={tags} />
                        {heroPost && filterTag(heroPost, filter.userFilter[page]) && (
                            <PostHero excerpt={heroPost.excerpt} fields={heroPost.fields} fileAbsolutePath={heroPost.fileAbsolutePath} frontmatter={heroPost.frontmatter} />
                        )}

                        {morePosts.length > 0 && <PostMore posts={morePosts.filter((post) => (filterTag(post, filter.userFilter[currentPage(post.fileAbsolutePath)])))} />}
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export const query = graphql`
  query SITE_HOWTO_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/howto/"} }
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

export default Howto;
