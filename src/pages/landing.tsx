import React, { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import { Container, Card, CardBody, CardColumns, CardTitle, CardText, Row } from 'reactstrap';
import BannerBlog from '../svg/banner-blog.svg';
import BannerBlogRecommended from '../svg/banner-blog-recommended.svg';
import BannerWwwHowto from '../svg/banner-www-howto.svg';
import BannerWwwWebsites from '../svg/banner-www-websites.svg';
import { content } from '../data/content';
import Link from 'next/link';
import { metadata, settings, urls } from '../data/metadata';

const Landing = (): ReactElement => {
    return (
        <>
            <NextSeo
                title={metadata.pageLandingTitle}
                description={metadata.pageLandingDescription || 'nothin’'}
                openGraph={{
                    url: urls.internal.landing,
                    title: metadata.pageLandingTitle,
                    description: metadata.pageLandingDescription,
                    images: [
                        {
                            url: urls.internal.public + metadata.pageHomeImage,
                            
                        }
                    ]
                }}
            />

            <section className='section-fill blue-dark' id={metadata.pageLandingTitle}>
                <Container className={`text-center text-${settings.breakpoint}-left my-auto`}>
                    <Row>
                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={urls.external.wiki}>{metadata.pageWikiTitle}</Link></h5></CardTitle>
                                    <Link href={urls.external.wiki}><BannerWwwHowto width='300px' /></Link>
                                    <CardText>{metadata.pageWikiDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={urls.internal.services}>{metadata.componentServicesTitle}</Link></h5></CardTitle>
                                    <Link href={urls.internal.services}><BannerWwwWebsites width='300px' /></Link>
                                    <CardText>{metadata.componentServicesDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={urls.external.blog}>{content.Blog}</Link></h5></CardTitle>
                                    <Link href={urls.external.blog}><BannerBlog width='300px' /></Link>
                                    <CardText>My blog with subjects from diet to mindset and psychology to sociology and politics.</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={urls.external.recommended}>{metadata.pageRecommendedTitle}</Link></h5></CardTitle>
                                    <Link href={urls.external.recommended}><BannerBlogRecommended width='300px' /></Link>
                                    <CardText>{metadata.pageRecommendedDescription}</CardText>
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
