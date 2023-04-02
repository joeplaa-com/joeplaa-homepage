import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import React, { ReactElement } from 'react';
import { Container, Card, CardBody, CardColumns, CardTitle, CardText, Row } from 'reactstrap';
import BannerBlog from '../svg/banner-blog.svg';
import BannerBlogRecommended from '../svg/banner-blog-recommended.svg';
import BannerWwwHowto from '../svg/banner-www-howto.svg';
import BannerWwwDefault from '../svg/banner-www-default.svg';
import LogoJodiBooks from '../svg/logo-jodibooks.svg';
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
                            url: urls.internal.public + metadata.pageHomeImage
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
                                    <CardTitle><h5><Link href={urls.external.jodibooks}>jodiBooks</Link></h5></CardTitle>
                                    <Link href={urls.external.jodibooks}><Image src={LogoJodiBooks} width={100} alt='jodibooks logo' /></Link>
                                    <CardText>{metadata.pageWikiDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={urls.external.wiki}>{metadata.pageWikiTitle}</Link></h5></CardTitle>
                                    <Link href={urls.external.wiki}><Image src={BannerWwwHowto} width={300} alt='how to banner' /></Link>
                                    <CardText>{metadata.pageWikiDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={urls.internal.tree}>{metadata.pageFamilyTreeTitle}</Link></h5></CardTitle>
                                    <Link href={urls.internal.tree}><Image src={BannerWwwDefault} width={300} alt='default site banner' /></Link>
                                    <CardText>{metadata.pageFamilyTreeDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={urls.external.blog}>{metadata.pageBlogTitle}</Link></h5></CardTitle>
                                    <Link href={urls.external.blog}><Image src={BannerBlog} width={300} alt='blog banner' /></Link>
                                    <CardText>{metadata.pageBlogDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={urls.external.recommended}>{metadata.pageRecommendedTitle}</Link></h5></CardTitle>
                                    <Link href={urls.external.recommended}><Image src={BannerBlogRecommended} width={300} alt='blog recommended banner' /></Link>
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
