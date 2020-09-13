import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { Card, CardBody, CardColumns, CardText, CardTitle, Container } from 'reactstrap'
import Layout from '../src/components/layout'
import { data, siteInfo, navigation } from '../src/lib/data'

export default function Pricing() {
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
            <Layout siteDescription={siteInfo.PricingDescription} siteTitle={siteInfo.PricingTitle + siteInfo.PageTitle} >
                <Container>
                    <section>
                        Pricing table
                    </section>
                </Container>
            </Layout>
        </>
    )
}
