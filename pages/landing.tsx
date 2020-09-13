import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { Card, CardBody, CardColumns, CardText, CardTitle, Container } from 'reactstrap'
import LandingImage from '../src/components/landing-image'
import Layout from '../src/components/layout'
import { data, siteInfo, navigation } from '../src/lib/data'

export default function Landing() {
    return (
        <>
            <NextSeo
                title={siteInfo.HomeTitle}
                titleTemplate={siteInfo.SiteTitle + ' | %s'}
                description={siteInfo.HomeDescription}
                openGraph={{
                    url: process.env.NEXT_PUBLIC_URL + navigation.home,
                    title: siteInfo.HomeTitle,
                    description: siteInfo.HomeDescription,
                    images: [
                        {
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa banner',
                        },
                        {
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner-blog.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa blog banner',
                        },
                        {
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner-com.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa.com banner',
                        },
                        {
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner-howto.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa how-to banner',
                        },
                        {
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner-website.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa website banner',
                        }
                    ]
                }}
            />
            <Layout siteDescription={siteInfo.LandingDescription} siteTitle={siteInfo.LandingTitle + siteInfo.PageTitle} >
                <Container>
                    <section>
                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={navigation.blog}><a>{data.Blog}</a></Link></h5></CardTitle>
                                    <LandingImage title='joeplaa blog' picture='assets/banner-blog.png' link={navigation.blog} />
                                    <CardText>
                                        My blog with subjects from diet to mindset and psychology to sociology and politics.
                                    </CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={navigation.howto}><a>{data.Howto}</a></Link></h5></CardTitle>
                                    <LandingImage title='joeplaa how-to' picture='assets/banner-howto.png' link={navigation.howto} />
                                    <CardText>
                                        How-to&apos;s on: Ubuntu, file-sharing, virtual machines and website hosting.
                                    </CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={navigation.pricing}><a>{data.Pricing}</a></Link></h5></CardTitle>
                                    <LandingImage title='joeplaa pricing' picture='assets/banner-com.png' link={navigation.pricing} />
                                    <CardText>
                                        Pricing of my services: website design and hosting.
                                    </CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={navigation.portfolio}><a>{data.Portfolio}</a></Link></h5></CardTitle>
                                    <LandingImage title='joeplaa portfolio' picture='assets/banner-websites.png' link={navigation.portfolio} />
                                    <CardText>
                                        Examples of my work in my portfolio.
                                    </CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={navigation.books}><a>{data.Books}</a></Link></h5></CardTitle>
                                    <LandingImage title='joeplaa recommended books' picture='assets/banner-blog.png' link={navigation.books} />
                                    <CardText>
                                        Recommended books
                                    </CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link href={navigation.videos}><a>{data.Videos}</a></Link></h5></CardTitle>
                                    <LandingImage title='joeplaa recommended videos' picture='assets/banner-blog.png' link={navigation.videos} />
                                    <CardText>
                                        Recommended videos
                                    </CardText>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    </section>
                </Container>
            </Layout>
        </>
    )
}
