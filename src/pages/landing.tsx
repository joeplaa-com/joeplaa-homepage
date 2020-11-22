import React from 'react'
import SEO from 'react-seo-component'
import { Link } from '../components/customLink'
import { Container, Card, CardBody, CardColumns, CardTitle, CardText, Row } from 'reactstrap'
import useSiteMetadata from '../hooks/useSiteMetadata'
import useSiteNavigation from '../hooks/useSiteNavigation'
import useSiteSettings from '../hooks/useSiteSettings'
import BannerBlog from '../svg/banner-blog.svg'
import BannerBlogRecommended from '../svg/banner-blog-recommended.svg'
import BannerWwwCom from '../svg/banner-www-com.svg'
import BannerWwwHowto from '../svg/banner-www-howto.svg'
import BannerWwwPortfolio from '../svg/banner-www-portfolio.svg'
import BannerWwwWebsites from '../svg/banner-www-websites.svg'
import { content } from '../utils/content'

const Landing = () => {
    const { componentPricingDescription, componentPricingTitle, componentServicesDescription, componentServicesTitle, pageHowtoDescription, pageHomeImage, pageHowtoTitle, pageLandingDescription, pageLandingTitle, pagePortfolioDescription, pagePortfolioTitle, pageRecommendedDescription, pageRecommendedTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { blog, home, howto, portfolio, pricing, recommended, services } = useSiteNavigation();
    const { breakpoint } = useSiteSettings();
    return (
        <>
            <SEO
                title={pageLandingTitle}
                description={pageLandingDescription || `nothin’`}
                image={`${siteUrl}${pageHomeImage}`}
                pathname={`${siteUrl}${home}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill blue-dark' id={pageLandingTitle}>
                <Container className={`text-center text-${breakpoint}-left my-auto`}>
                    <Row>
                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={howto}>{pageHowtoTitle}</Link></h5></CardTitle>
                                    <Link to={howto}><BannerWwwHowto width='300px' /></Link>
                                    <CardText>{pageHowtoDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={services}>{componentServicesTitle}</Link></h5></CardTitle>
                                    <Link to={services}><BannerWwwWebsites width='300px' /></Link>
                                    <CardText>{componentServicesDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={pricing}>{componentPricingTitle}</Link></h5></CardTitle>
                                    <Link to={pricing}><BannerWwwCom width='300px' /></Link>
                                    <CardText>{componentPricingDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={portfolio}>{pagePortfolioTitle}</Link></h5></CardTitle>
                                    <Link to={portfolio}><BannerWwwPortfolio width='300px' /></Link>
                                    <CardText>{pagePortfolioDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={blog}>{content.Blog}</Link></h5></CardTitle>
                                    <Link to={blog}><BannerBlog width='300px' /></Link>
                                    <CardText>My blog with subjects from diet to mindset and psychology to sociology and politics.</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={recommended}>{pageRecommendedTitle}</Link></h5></CardTitle>
                                    <Link to={recommended}><BannerBlogRecommended width='300px' /></Link>
                                    <CardText>{pageRecommendedDescription}</CardText>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Landing;
