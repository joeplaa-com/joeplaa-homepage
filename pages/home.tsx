import { NextSeo } from 'next-seo'
import Img from 'react-optimized-image'
import { Container, Col, Row } from 'reactstrap'
import Layout from '../src/components/layout'
import { siteInfo, navigation } from '../src/lib/data'

export default function Home() {
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
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner-com.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa.com banner',
                        }
                    ]
                }}
            />
            <Layout siteDescription={siteInfo.HomeDescription} siteTitle={siteInfo.HomeTitle} >
                <Row>
                    <Col>
                        <div className='image-container'>
                            <Img
                                src={require('../src/assets/home-banner.jpg')}
                                alt={siteInfo.HomeTitle + '-banner'}
                                className='img-fluid'
                                webp
                                sizes={[320, 480, 640, 960, 1280, 1600, 1920]} />
                            <div className='overlay'>
                                <h1>{siteInfo.HomeTitle}</h1>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Layout>
        </>
    )
}
