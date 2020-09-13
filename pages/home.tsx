import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Img from 'react-optimized-image'
import { Card, CardBody, CardColumns, CardTitle, CardText, Col, Container, Row } from 'reactstrap'
import Layout from '../src/components/layout'
import { data, siteInfo, navigation } from '../src/lib/data'
import { getAge } from '../src/lib/getAge'

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
            <Layout siteDescription={siteInfo.HomeDescription} siteTitle={siteInfo.HomeTitle + siteInfo.PageTitle} >
                <div className='image-container shadow'>
                    <Img
                        src={require('../src/assets/home-banner-beach.jpg')}
                        alt={siteInfo.HomeTitle + '-banner'}
                        className='img-fluid'
                    />
                    <div className='overlay'>
                        <h1>{siteInfo.HomeTitle}</h1>
                    </div>
                </div>
                <Container fluid>
                    <CardColumns>
                        <Card outline color='primary'>
                            <CardBody>
                                <CardTitle><h4>What is Joeplaa?</h4></CardTitle>
                                <CardText>
                                    Joeplaa, pronounce &quot;you-p-laah&quot;, is an abbreviation of my full name: <strong>Joe</strong>p van de <strong>Laa</strong>rschot.
                                    Initially I started using it to shorten my e-mail address, but it turned into my &quot;official&quot; handle @joeplaa everywhere on the web. So obviously I had to use for this website too.
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card outline color='primary'>
                            <CardBody>
                                <CardTitle><h4>Who is Joeplaa?</h4></CardTitle>
                                <CardText>
                                    I&apos;m Joep, {getAge('1985/01/14')} years old and currently living in <a href='https://en.wikipedia.org/wiki/Eindhoven' target='_blank' rel='noopener noreferrer'>Eindhoven in The Netherlands</a>. I went to Eindhoven to study mechanical engineering at <a href='https://www.tue.nl/' target='_blank' rel='noopener noreferrer'>university</a>.
                                </CardText>
                                <CardText>
                                    After working as a mechanical engineer for 7.5 years, I quit my &quot;dayjob&quot; and started working full time on my own company: <a href='https://www.jodibooks.com' target='_blank' rel='noopener noreferrer'>jodiBooks</a>.
                                </CardText>
                                <CardText>
                                    At jodiBooks I have become the front-end and hosting specialist (website and app design). As Joeplaa I design and host websites for other people and companies.
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card outline color='primary'>
                            <CardBody>
                                <CardTitle><h4>Why joeplaa.com?</h4></CardTitle>
                                <CardText>
                                    I&apos;ve originally started joeplaa.com as my personal blog. I wanted to have a place where I could write about anything that I was interested in and you can still find <a href={navigation.blog}>my blog here</a>.
                                </CardText>
                                <CardText>
                                    Now, with this website, joeplaa.com 2.0, I want to show what I can do. It both is and contains my portfolio. Have a look around and let me know if you like my work.
                                </CardText>
                            </CardBody>
                        </Card>
                    </CardColumns>
                </Container >
            </Layout >
        </>
    )
}
