import React from 'react'
import { Container, Col, Row, Card, CardBody, CardDeck } from 'reactstrap'
import { IconContext } from 'react-icons'
import { SiGatsby, SiGithub, SiNextDotJs, SiWordpress } from 'react-icons/si'
import Image from './image'
import NewTabLink from './newTabLink'
import { data, settings, urls } from '../utils/data'
import { BackgroundProps } from '../types'
import CloudFront from '../images/cloudfront.svg'
import LightSail from '../images/lightsail.svg'

const Services = ({ backgroundColor }: BackgroundProps) => {
    return (
        <section className={backgroundColor + ' ' + 'section-home'} id={data.Services}>
            <Container className='text-center text-md-left my-md-auto mb-3 mt-3'>
                <Row>
                    <Col>
                        <h1 className='display-1'>{data.Services}</h1>
                    </Col>
                </Row>
                <CardDeck>
                    <Card>
                        <CardBody className='d-flex flex-column justify-content-between'>
                            <div>
                                <h2>{data.WebDesign}</h2>
                                <p>There are countless ways to build a website, but I&apos;ll keep it simple and offer three:</p>
                                <ol>
                                    <li>A static website build with either <NewTabLink href={urls.nextjs}>Next.js</NewTabLink> or <NewTabLink href={urls.gatsbyjs}>Gatsby.js</NewTabLink>.</li>
                                    <li>A dynamic website based on <NewTabLink href={urls.wordpress}>WordPress</NewTabLink>. </li>
                                    <li>A static front-end (Gatsby or Next.js) with a CMS back-end (Ghost, NetlifyCMS, Strapi, WordPress).</li>
                                </ol>
                                <hr />
                                <p>Don't know what you want or need? Try these questions:</p>
                                <ol>
                                    <li>Do I have very specific ideas or wishes about the looks? Take <strong>option 1</strong>.</li>
                                    <li>Do I want or need to update texts and images often? Take <strong>option 2</strong>.</li>
                                    <li>Actually it's both... Well, can I wait a few weeks?* Then try <strong>option 3</strong>.</li>
                                </ol>
                            </div>
                            <div className='text-center'>
                                <em className='small'>*I&apos;m still figuring this out.</em>
                                <hr />
                                <IconContext.Provider value={{ size: settings.iconSize }}>
                                    <NewTabLink href={urls.nextjs} className='nav-padding-social'><SiNextDotJs /></NewTabLink>
                                    <NewTabLink href={urls.gatsbyjs} className='nav-padding-social'><SiGatsby /></NewTabLink>
                                    <NewTabLink href={urls.wordpress} className='nav-padding-social'><SiWordpress /></NewTabLink>
                                </IconContext.Provider>
                            </div>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody className='d-flex flex-column justify-content-between'>
                            <div>
                                <h2>{data.WebHosting}</h2>
                                <p>When your website is finished, I&apos;ll share it through <NewTabLink href={urls.github}>Github</NewTabLink> or as a download. You can then upload the website to your own server or hosting service.</p>
                                <p>If you have no idea what I just said, don&apos;t worry. I can also do all of that for you. Added advantage of that is that you can easily ask me for small updates to your site.</p>
                                <hr />
                                <ol>
                                    <li>Static websites will be hosted through <NewTabLink href={urls.awsCloudfront}>AWS CloudFront</NewTabLink>.</li>
                                    <li>Dynamic websites will be hosted on <NewTabLink href={urls.awsLightsail}>AWS LightSail</NewTabLink>.</li>
                                    <li>Option three is currently only possible if you host the site yourself.</li>
                                </ol>
                                <div className='my-3 my-md-auto mx-auto shadow' style={{ width: '100%' }}>
                                    <Image
                                        src={'lighthouse-wordpress.png'}
                                        alt={'Lighthouse score of my WordPress site on AWS Lightsail'}
                                        className="mx-auto"
                                    />
                                </div>
                            </div>
                            <div className='text-center'>
                                <hr />
                                <IconContext.Provider value={{ size: settings.iconSize }}>
                                    <NewTabLink href={urls.github} className='nav-padding-social'><SiGithub /></NewTabLink>
                                    <NewTabLink href={urls.awsCloudfront} className='nav-padding-social'><CloudFront height={settings.iconSize} width={settings.iconSize} /></NewTabLink>
                                    <NewTabLink href={urls.awsLightsail} className='nav-padding-social'><LightSail height={settings.iconSize} width={(parseInt(settings.iconSize) + 6).toString()} /></NewTabLink>
                                </IconContext.Provider>
                            </div>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>
        </section >
    );
}

export default Services;