import React from 'react'
import { Link } from './customLink'
import { Container, Col, Row, Card, CardBody, CardDeck, Table } from 'reactstrap'
import { IconContext } from 'react-icons'
import { SiGatsby, SiGhost, SiGithub, SiNetlify, SiNextDotJs, SiStrapi, SiWordpress } from 'react-icons/si'
import NewTabLink from './newTabLink'
import useSiteMetadata from '../hooks/useSiteMetadata'
import useSiteNavigation from '../hooks/useSiteNavigation'
import useSiteSettings from '../hooks/useSiteSettings'
import CloudFront from '../svg/cloudfront.svg'
import LightSail from '../svg/lightsail.svg'
import { content, pricing, urls } from '../utils/data'
import { SectionProps } from '../types'

const Pricing = ({ className }: SectionProps) => {
    const { componentPricingTitle } = useSiteMetadata();
    const { wiki } = useSiteNavigation();
    const { breakpoint, iconSize } = useSiteSettings();
    return (
        <section className={className} id={componentPricingTitle}>
            <Container className='mb-3 mt-3'>
                <Row>
                    <Col>
                        <h1 className={`display-1 text-center text-${breakpoint}-left`}>{componentPricingTitle}</h1>
                    </Col>
                </Row>
                <CardDeck>
                    <Card>
                        <CardBody className='d-flex flex-column justify-content-between'>
                            <div>
                                <h2>{content.WebDesign}</h2>
                                <Table striped responsive hover>
                                    <colgroup>
                                        <col span={1} style={{ width: "10%" }} />
                                        <col span={1} style={{ width: "65%" }} />
                                        <col span={1} style={{ width: "25%" }} />
                                    </colgroup>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>#</th>
                                            <th>Website type</th>
                                            <th>Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Static website build with either <NewTabLink href={urls.nextjs}>Next.js</NewTabLink> or <NewTabLink href={urls.gatsbyjs}>Gatsby.js</NewTabLink>.</td>
                                            <td>{pricing.staticDesign}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Dynamic website based on <NewTabLink href={urls.wordpress}>WordPress</NewTabLink> or a simple <NewTabLink href={urls.ghost}>Ghost</NewTabLink> blog.</td>
                                            <td>{pricing.dynamicDesign}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Static front-end (<NewTabLink href={urls.gatsbyjs}>Gatsby.js</NewTabLink> or <NewTabLink href={urls.nextjs}>Next.js</NewTabLink>) with a CMS back-end (<NewTabLink href={urls.ghost}>Ghost</NewTabLink>, <NewTabLink href={urls.netlifycms}>NetlifyCMS</NewTabLink>, <NewTabLink href={urls.strapi}>Strapi</NewTabLink>, <NewTabLink href={urls.wordpress}>WordPress</NewTabLink>).</td>
                                            <td>{pricing.cmsDesign}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Custom</td>
                                            <td>{pricing.customDesign}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <p>More information in the <Link to={wiki}>Wiki</Link> section</p>
                                <hr />
                                <div className='text-center'>
                                    <IconContext.Provider value={{ size: iconSize }}>
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
                                <Table striped responsive hover>
                                    <colgroup>
                                        <col span={1} style={{ width: "10%" }} />
                                        <col span={1} style={{ width: "65%" }} />
                                        <col span={1} style={{ width: "25%" }} />
                                    </colgroup>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>#</th>
                                            <th>Website type</th>
                                            <th>Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Static websites hosted through <NewTabLink href={urls.awsCloudfront}>AWS CloudFront</NewTabLink>.</td>
                                            <td>{pricing.staticHosting}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Dynamic websites hosted on <NewTabLink href={urls.awsLightsail}>AWS LightSail</NewTabLink>.</td>
                                            <td>{pricing.dynamicHosting}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Pricing is dependent on the type of CMS you want: Ghost and WordPress {pricing.cmsHosting}, Strapi {pricing.cmsPlusHosting}. NetlifyCMS hosting is currently not possible.</td>
                                            <td>{pricing.cmsHosting}<br/>-<br/>{pricing.cmsPlusHosting}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Domain hosting/manage service.</td>
                                            <td>{pricing.domainHosting}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <p>More information in the <Link to={wiki}>Wiki</Link> section</p>
                                <hr />
                                <div className='text-center'>
                                    <IconContext.Provider value={{ size: iconSize }}>
                                        <NewTabLink href={urls.github} className='nav-padding-social'><SiGithub /></NewTabLink>
                                        <NewTabLink href={urls.awsCloudfront} className='nav-padding-social'><CloudFront height={iconSize} width={iconSize} /></NewTabLink>
                                        <NewTabLink href={urls.awsLightsail} className='nav-padding-social'><LightSail height={iconSize} width={(parseInt(iconSize) + 6).toString()} /></NewTabLink>
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