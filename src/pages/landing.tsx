import React from 'react'
import SEO from 'react-seo-component'
import { Link } from '../components/customLink'
import { Container, Card, CardBody, CardColumns, CardTitle, CardText, Row } from 'reactstrap'
import useSiteMetadata from '../hooks/useSiteMetadata'
import BannerBlog from '../svg/banner-blog.svg'
import BannerBlogRecommended from '../svg/banner-blog-recommended.svg'
import BannerWwwCom from '../svg/banner-www-com.svg'
import BannerWwwHowto from '../svg/banner-www-howto.svg'
import BannerWwwPortfolio from '../svg/banner-www-portfolio.svg'
import BannerWwwWebsites from '../svg/banner-www-websites.svg'
import { content, navigation } from '../utils/data'

const Landing = () => {
    const { componentPricingDescription, componentPricingTitle, componentServicesDescription, componentServicesTitle, pageHowtoDescription, pageHomeImage, pageHowtoTitle, pageLandingDescription, pageLandingTitle, pagePortfolioDescription, pagePortfolioTitle, pageRecommendedDescription, pageRecommendedTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    return (
        <>
            <SEO
                title={pageLandingTitle}
                description={pageLandingDescription || `nothin’`}
                image={`${siteUrl}${pageHomeImage}`}
                pathname={`${siteUrl}${navigation.home}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill blue-dark' id={pageLandingTitle}>
                <Container className='text-center text-md-left my-auto'>
                    <Row>
                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.howto}>{pageHowtoTitle}</Link></h5></CardTitle>
                                    <Link to={navigation.howto}><BannerWwwHowto width='300px' /></Link>
                                    <CardText>{pageHowtoDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.services}>{componentServicesTitle}</Link></h5></CardTitle>
                                    <Link to={navigation.services}><BannerWwwWebsites width='300px' /></Link>
                                    <CardText>{componentServicesDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.pricing}>{componentPricingTitle}</Link></h5></CardTitle>
                                    <Link to={navigation.pricing}><BannerWwwCom width='300px' /></Link>
                                    <CardText>{componentPricingDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.portfolio}>{pagePortfolioTitle}</Link></h5></CardTitle>
                                    <Link to={navigation.portfolio}><BannerWwwPortfolio width='300px' /></Link>
                                    <CardText>{pagePortfolioDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.blog}>{content.Blog}</Link></h5></CardTitle>
                                    <Link to={navigation.blog}><BannerBlog width='300px' /></Link>
                                    <CardText>My blog with subjects from diet to mindset and psychology to sociology and politics.</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.recommended}>{pageRecommendedTitle}</Link></h5></CardTitle>
                                    <Link to={navigation.recommended}><BannerBlogRecommended width='300px' /></Link>
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
