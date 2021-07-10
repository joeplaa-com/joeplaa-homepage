import React, { ReactElement } from 'react';
import { Link } from './customLink';
import { Container, Col, Row, Card, CardBody, CardDeck, Table } from 'reactstrap';
import { IconContext } from 'react-icons';
import { SiGatsby, SiGhost, SiGithub, SiNetlify, SiNextDotJs, SiStrapi, SiWordpress } from 'react-icons/si';
import NewTabLink from './newTabLink';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import useSitePricing from '../hooks/useSitePricing';
import useSiteSettings from '../hooks/useSiteSettings';
import useSiteUrls from '../hooks/useSiteUrls';
import CloudFront from '../svg/cloudfront.svg';
import LightSail from '../svg/lightsail.svg';
import { content } from '../utils/content';
import { SectionProps } from '../types';

const ServicesComponent = ({ className }: SectionProps): ReactElement => {
    const { componentPricingTitle } = useSiteMetadata();
    const { services } = useSiteNavigation();
    const { staticDesign, dynamicDesign, cmsDesign, customDesign, staticHosting, dynamicHosting, cmsHosting, cmsPlusHosting, domainHosting } = useSitePricing();
    const { breakpoint, iconSize } = useSiteSettings();
    const { awsCloudfront, awsLightsail, gatsbyjs, ghost, github, netlifycms, nextjs, strapi, wordpress } = useSiteUrls();
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
                                        <col span={1} style={{ width: '10%' }} />
                                        <col span={1} style={{ width: '65%' }} />
                                        <col span={1} style={{ width: '25%' }} />
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
                                            <td>Dynamic website based on <NewTabLink href={wordpress}>WordPress</NewTabLink> or a simple <NewTabLink href={ghost}>Ghost</NewTabLink> blog.</td>
                                            <td>{dynamicDesign}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Static front-end (<NewTabLink href={gatsbyjs}>Gatsby.js</NewTabLink> or <NewTabLink href={nextjs}>Next.js</NewTabLink>) with a CMS back-end (<NewTabLink href={ghost}>Ghost</NewTabLink>, <NewTabLink href={netlifycms}>NetlifyCMS</NewTabLink>, <NewTabLink href={strapi}>Strapi</NewTabLink>, <NewTabLink href={wordpress}>WordPress</NewTabLink>).</td>
                                            <td>{cmsDesign}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Custom</td>
                                            <td>{customDesign}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <p>More information in the <Link to={services}>Services</Link> section</p>
                                <hr />
                                <div className='text-center'>
                                    <IconContext.Provider value={{ size: iconSize }}>
                                        <NewTabLink href={gatsbyjs} className='nav-padding-social'><SiGatsby /></NewTabLink>
                                        <NewTabLink href={nextjs} className='nav-padding-social'><SiNextDotJs /></NewTabLink>
                                        <NewTabLink href={ghost} className='nav-padding-social'><SiGhost /></NewTabLink>
                                        <NewTabLink href={netlifycms} className='nav-padding-social'><SiNetlify /></NewTabLink>
                                        <NewTabLink href={strapi} className='nav-padding-social'><SiStrapi /></NewTabLink>
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
                                        <col span={1} style={{ width: '10%' }} />
                                        <col span={1} style={{ width: '65%' }} />
                                        <col span={1} style={{ width: '25%' }} />
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
                                            <td>Static websites hosted through <NewTabLink href={awsCloudfront}>AWS CloudFront</NewTabLink>.</td>
                                            <td>{staticHosting}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Dynamic websites hosted on <NewTabLink href={awsLightsail}>AWS LightSail</NewTabLink>.</td>
                                            <td>{dynamicHosting}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Pricing is dependent on the type of CMS you want: Ghost and WordPress {cmsHosting}, Strapi {cmsPlusHosting}. NetlifyCMS hosting is currently not possible.</td>
                                            <td>{cmsHosting}<br />-<br />{cmsPlusHosting}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Domain hosting/manage service.</td>
                                            <td>{domainHosting}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div>
                                <p>More information in the <Link to={services}>Services</Link> section</p>
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
};

export default ServicesComponent;