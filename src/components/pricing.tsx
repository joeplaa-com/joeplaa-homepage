import React from 'react'
import { Link } from './customLink'
import { Container, Col, Row, Card, CardBody, CardDeck, Table } from 'reactstrap'
import { IconContext } from 'react-icons'
import { SiGatsby, SiGhost, SiGithub, SiNextDotJs, SiWordpress } from 'react-icons/si'
import NewTabLink from './newTabLink'
import useSiteMetadata from '../hooks/useSiteMetadata'
import useSiteNavigation from '../hooks/useSiteNavigation'
import useSitePricing from '../hooks/useSitePricing'
import useSiteSettings from '../hooks/useSiteSettings'
import useSiteUrls from '../hooks/useSiteUrls'
import CloudFront from '../svg/cloudfront.svg'
import LightSail from '../svg/lightsail.svg'
import { content } from '../utils/content'
import { SectionProps } from '../types'

const Pricing = ({ className }: SectionProps) => {
    const { componentPricingTitle } = useSiteMetadata();
    const { services } = useSiteNavigation();
    const { staticDesign, dynamicDesign, staticHosting, dynamicHosting, computeCPU, computeRAM, computeNetworkOut, computeStorage } = useSitePricing();
    const { breakpoint, iconSize } = useSiteSettings();
    const { awsCloudfront, awsLightsail, gatsbyjs, ghost, github, nextjs, wordpress } = useSiteUrls();
    return (
        <section className={className} id={componentPricingTitle}>
            <Container className='mb-3 mt-3'>
                <Row>
                    <Col>
                        <h1 className={`display-1 text-center text-${breakpoint}-left`}>{componentPricingTitle}</h1>
                        <p>More information in the <Link to={services}>Services</Link> section</p>
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
                                            <td>Static website build with either <NewTabLink href={nextjs}>Next.js</NewTabLink> or <NewTabLink href={gatsbyjs}>Gatsby.js</NewTabLink>.</td>
                                            <td>{staticDesign}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Dynamic website with <NewTabLink href={wordpress}>WordPress</NewTabLink> or a simple <NewTabLink href={ghost}>Ghost</NewTabLink> blog.</td>
                                            <td>{dynamicDesign}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <hr />
                                <div className='text-center'>
                                    <IconContext.Provider value={{ size: iconSize }}>
                                        <NewTabLink href={gatsbyjs} className='nav-padding-social'><SiGatsby /></NewTabLink>
                                        <NewTabLink href={nextjs} className='nav-padding-social'><SiNextDotJs /></NewTabLink>
                                        <NewTabLink href={ghost} className='nav-padding-social'><SiGhost /></NewTabLink>
                                        <NewTabLink href={wordpress} className='nav-padding-social'><SiWordpress /></NewTabLink>
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
                                            <td>Next.js or Gatsby.js website hosted through <NewTabLink href={awsCloudfront}>AWS CloudFront</NewTabLink>.</td>
                                            <td>{staticHosting}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>WordPress or Ghost website hosted on <NewTabLink href={awsLightsail}>AWS LightSail</NewTabLink>.</td>
                                            <td>{dynamicHosting}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <hr />
                                <div className='text-center'>
                                    <IconContext.Provider value={{ size: iconSize }}>
                                        <NewTabLink href={github} className='nav-padding-social'><SiGithub /></NewTabLink>
                                        <NewTabLink href={awsCloudfront} className='nav-padding-social'><CloudFront height={iconSize} width={iconSize} /></NewTabLink>
                                        <NewTabLink href={awsLightsail} className='nav-padding-social'><LightSail height={iconSize} width={(parseInt(iconSize) + 6).toString()} /></NewTabLink>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody className='d-flex flex-column justify-content-between'>
                            <div>
                                <h2>{content.ComputeHosting}</h2>
                                <Table striped responsive hover>
                                    <colgroup>
                                        <col span={1} style={{ width: "10%" }} />
                                        <col span={1} style={{ width: "65%" }} />
                                        <col span={1} style={{ width: "25%" }} />
                                    </colgroup>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>#</th>
                                            <th>Per hour</th>
                                            <th>Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>vCPU</td>
                                            <td>{computeCPU}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Memory [GB]</td>
                                            <td>{computeRAM}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Storage [GB]</td>
                                            <td>{computeStorage}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Table striped responsive hover>
                                    <colgroup>
                                        <col span={1} style={{ width: "10%" }} />
                                        <col span={1} style={{ width: "65%" }} />
                                        <col span={1} style={{ width: "25%" }} />
                                    </colgroup>
                                    <thead className='thead-dark'>
                                        <tr>
                                            <th>#</th>
                                            <th>Per GB</th>
                                            <th>Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>network traffic out</td>
                                            <td>{computeNetworkOut}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <hr />
                                <div className='text-center'>
                                    <IconContext.Provider value={{ size: iconSize }}>
                                        <NewTabLink href={github} className='nav-padding-social'><SiGithub /></NewTabLink>
                                        <NewTabLink href={awsCloudfront} className='nav-padding-social'><CloudFront height={iconSize} width={iconSize} /></NewTabLink>
                                        <NewTabLink href={awsLightsail} className='nav-padding-social'><LightSail height={iconSize} width={(parseInt(iconSize) + 6).toString()} /></NewTabLink>
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