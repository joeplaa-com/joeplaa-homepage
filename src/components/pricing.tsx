import React from 'react'
import { Link } from 'gatsby'
import { Container, Col, Row, Card, CardBody, CardDeck, Table } from 'reactstrap'
import { IconContext } from 'react-icons'
import { SiGatsby, SiGhost, SiGithub, SiNetlify, SiNextDotJs, SiStrapi, SiWordpress } from 'react-icons/si'
import NewTabLink from './newTabLink'
import CloudFront from '../svg/cloudfront.svg'
import LightSail from '../svg/lightsail.svg'
import { content, metaData, navigation, settings, urls } from '../utils/data'
import { SectionProps } from '../types'

const Pricing = ({ className }: SectionProps) => {
    return (
        <section className={className} id={metaData.PricingTitle}>
            <Container className='mb-3 mt-3'>
                <Row>
                    <Col>
                        <h1 className='display-1 text-center text-md-left'>{metaData.PricingTitle}</h1>
                    </Col>
                </Row>
                <CardDeck>
                    <Card>
                        <CardBody className='d-flex flex-column justify-content-between'>
                            <div>
                                <h2>{content.WebDesign}</h2>
                                <Table striped hover>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>Option</th>
                                            <th>Website type</th>
                                            <th>Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Static website build with either <NewTabLink href={urls.nextjs}>Next.js</NewTabLink> or <NewTabLink href={urls.gatsbyjs}>Gatsby.js</NewTabLink>.</td>
                                            <td>&euro;500</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Dynamic website based on <NewTabLink href={urls.wordpress}>WordPress</NewTabLink> or a simple <NewTabLink href={urls.ghost}>Ghost</NewTabLink> blog.</td>
                                            <td>&euro;750</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Static front-end (<NewTabLink href={urls.gatsbyjs}>Gatsby.js</NewTabLink> or <NewTabLink href={urls.nextjs}>Next.js</NewTabLink>) with a CMS back-end (<NewTabLink href={urls.ghost}>Ghost</NewTabLink>, <NewTabLink href={urls.netlifycms}>NetlifyCMS</NewTabLink>, <NewTabLink href={urls.strapi}>Strapi</NewTabLink>, <NewTabLink href={urls.wordpress}>WordPress</NewTabLink>).</td>
                                            <td>&euro;750</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Custom</td>
                                            <td>TBD</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <p>More information in the <Link to={navigation.wiki}>Wiki</Link> section</p>
                                <hr />
                                <div className='text-center'>
                                    <IconContext.Provider value={{ size: settings.iconSize }}>
                                        <NewTabLink href={urls.gatsbyjs} className='nav-padding-social'><SiGatsby /></NewTabLink>
                                        <NewTabLink href={urls.nextjs} className='nav-padding-social'><SiNextDotJs /></NewTabLink>
                                        <NewTabLink href={urls.ghost} className='nav-padding-social'><SiGhost /></NewTabLink>
                                        <NewTabLink href={urls.netlifycms} className='nav-padding-social'><SiNetlify /></NewTabLink>
                                        <NewTabLink href={urls.strapi} className='nav-padding-social'><SiStrapi /></NewTabLink>
                                        <NewTabLink href={urls.wordpress} className='nav-padding-social'><SiWordpress /></NewTabLink>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody className='d-flex flex-column justify-content-between'>
                            <div>
                                <h2>{content.WebHosting}</h2>
                                <Table striped hover>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>Option</th>
                                            <th>Website type</th>
                                            <th>Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Static websites hosted through <NewTabLink href={urls.awsCloudfront}>AWS CloudFront</NewTabLink>.</td>
                                            <td>&euro;5</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Dynamic websites hosted on <NewTabLink href={urls.awsLightsail}>AWS LightSail</NewTabLink>.</td>
                                            <td>&euro;10</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Pricing is dependent on the type of CMS you want: Ghost and WordPress &euro;15, Strapi &euro;20. NetlifyCMS hosting is currently not possible.</td>
                                            <td>&euro;15+</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <p>More information in the <Link to={navigation.wiki}>Wiki</Link> section</p>
                                <hr />
                                <div className='text-center'>
                                    <IconContext.Provider value={{ size: settings.iconSize }}>
                                        <NewTabLink href={urls.github} className='nav-padding-social'><SiGithub /></NewTabLink>
                                        <NewTabLink href={urls.awsCloudfront} className='nav-padding-social'><CloudFront height={settings.iconSize} width={settings.iconSize} /></NewTabLink>
                                        <NewTabLink href={urls.awsLightsail} className='nav-padding-social'><LightSail height={settings.iconSize} width={(parseInt(settings.iconSize) + 6).toString()} /></NewTabLink>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>
        </section >
    );
}

export default Pricing;