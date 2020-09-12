import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { Card, CardBody, CardColumns, CardText, CardTitle, Container } from 'reactstrap'
import HeroPost from '../src/components/hero-post'
import LandingImage from '../src/components/landing-image'
import Layout from '../src/components/layout'
import { getAllPosts } from '../src/lib/api'
import { mdFields } from '../src/lib/constants'
import { data, siteInfo, navigation } from '../src/lib/data'
import { AllPostsProps } from '../src/types'

export default function Instagram({ allPosts }: AllPostsProps) {
    const heroPost = allPosts[0]
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
            <Layout siteDescription={siteInfo.InstagramDescription} siteTitle={siteInfo.InstagramTitle + siteInfo.PageTitle} >
                <Container>
                    <section>
                        <CardColumns>
                            {heroPost && (
                                <HeroPost
                                    title={heroPost.title}
                                    coverImage={heroPost.coverImage}
                                    date={heroPost.date}
                                    author={heroPost.author}
                                    slug={heroPost.slug}
                                    excerpt={heroPost.excerpt}
                                    tags={heroPost.tags}
                                    page={navigation.blog}
                                />
                            )}
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
                                    <CardTitle><h5><Link href={navigation.portfolio}><a>{data.Portfolio}</a></Link></h5></CardTitle>
                                    <LandingImage title='joeplaa portfolio' picture='assets/banner-websites.png' link={navigation.portfolio} />
                                    <CardText>
                                        You can find examples of my work in my portfolio on this website.
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
                                    <CardTitle><h5><Link href={navigation.recommended}><a>{data.Recommended}</a></Link></h5></CardTitle>
                                    <LandingImage title='joeplaa recommendations' picture='assets/banner-com.png' link={navigation.portfolio} />
                                    <CardText>
                                        I grow, learn and change my mind and I&apos;ll very probably have to keep doing that and I hope you will join me.
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

export async function getStaticProps() {
    const allPosts = getAllPosts(mdFields, navigation.blog);

    return {
        props: { allPosts },
    }
}
