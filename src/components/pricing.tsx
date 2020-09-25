import React from 'react'
import { Container, Col, Row, Card, CardBody, CardDeck } from 'reactstrap'
import { IconContext } from 'react-icons'
import { SiGatsby, SiGithub, SiNextDotJs, SiWordpress } from 'react-icons/si'
import NewTabLink from './newTabLink'
import { data, urls } from '../utils/data'
import { PricingProps } from '../types'
import CloudFront from '../images/cloudfront.svg'
import LightSail from '../images/lightsail.svg'

const Pricing = (props: PricingProps) => {
    const { backgroundColor } = props;
    return (
        <section className={backgroundColor + ' ' + 'section-home'} id="Pricing">
            <Container className='text-center text-md-left my-md-auto mb-3 mt-3'>
                <Row>
                    <Col>
                        <h1 className='display-1'>{data.Pricing}</h1>
                    </Col>
                </Row>
                <CardDeck className='mt-3'>
                    <Card className='shadow'>
                        <CardBody>
                            <h2>{data.WebDesign}</h2>
                            <p>
                                There are countless ways to build a website, but I&apos;ll keep it simple and offer two:
                            </p>
                            <ol>
                                <li>A static website build with either <NewTabLink href='https://nextjs.org/'>Next.js</NewTabLink> or <NewTabLink href='https://www.gatsbyjs.com/'>Gatsby.js</NewTabLink>.</li>
                                <li>A dynamic website based on <NewTabLink href='https://wordpress.org/'>WordPress</NewTabLink>. </li>
                            </ol>
                            <hr />
                            <p>
                                Don't know what you want or need? Ask yourself these questions:
                            </p>
                            <ol>
                                <li>Do I want or need to update texts and images often? Take <strong>option 2</strong>.</li>
                                <li>Do I have very specific ideas or wishes about the looks? Take <strong>option 1</strong>.</li>
                            </ol>
                            <div className='text-center'>
                                <IconContext.Provider value={{ size: '40px' }}>
                                    <NewTabLink href='https://nextjs.org/' className='nav-padding-social'><SiNextDotJs /></NewTabLink>
                                    <NewTabLink href='https://www.gatsbyjs.com/' className='nav-padding-social'><SiGatsby /></NewTabLink>
                                    <NewTabLink href='https://wordpress.org/' className='nav-padding-social'><SiWordpress /></NewTabLink>
                                </IconContext.Provider>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className='shadow'>
                        <CardBody>
                            <h2>{data.WebHosting}</h2>
                            <p>When your website is finished, I&apos;ll share it through <NewTabLink href={urls.github}>Github</NewTabLink> or as a download. You can then upload the website to your own server or hosting service.</p>
                            <p>If you have no idea what I just said, don&apos;t worry. I can also do all of that for you. Added advantage of that is that you can easily ask me for small updates to your site.</p>
                            <hr />
                            <p></p>
                            <div className='text-center'>
                                <IconContext.Provider value={{ size: '40px' }}>
                                    <NewTabLink href={urls.github} className='nav-padding-social'><SiGithub /></NewTabLink>
                                    <NewTabLink href='https://aws.amazon.com/cloudfront/' className='nav-padding-social'><CloudFront height="40px" width="40px" /></NewTabLink>
                                    <NewTabLink href='https://aws.amazon.com/lightsail/' className='nav-padding-social'><LightSail height="40px" width="46px" /></NewTabLink>
                                </IconContext.Provider>
                            </div>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>
        </section >
    );
}

export default Pricing;