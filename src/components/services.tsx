import React, { ReactElement } from 'react';
import { Container, Card, CardBody, Row, Col } from 'reactstrap';
import { IconContext } from 'react-icons';
import { SiBlender, SiGatsby, SiGhost, SiGithub, SiNextDotJs, SiWordpress } from 'react-icons/si';
import { Link } from './customLink';
import Image from './image';
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
    const { portfolio } = useSiteNavigation();
    const { websiteDesign, websiteHosting } = useSitePricing();
    const { breakpoint, iconSize } = useSiteSettings();
    const { awsCloudfront, awsLightsail, blender, gatsbyjs, ghost, github, jodibooks, nextjs, wordpress } = useSiteUrls();
    return (
        <section className={className} id={componentPricingTitle}>
            <Container className='mb-3 mt-3'>
                <Card className='mb-3'>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <h2>{content.WebDesign}</h2>
                        <Row>
                            <Col className='d-flex flex-column justify-content-between'>
                                <p>Creating a website can be a lot of work. You want to spend your precious time on the things you are best at. Maybe you don&apos;t know where to start or you think you lack the skills to do it yourself. Or you already have a website but want to change or update it and need some help or advice.</p>
                                <p>No worries, I will help you out. I can build a new website from scratch or update your existing site. We&apos;ll discuss together what you want to achieve and do with your website and from there determine what kind of website you need. This can be a website with <NewTabLink href={nextjs}>Next.js</NewTabLink>, <NewTabLink href={gatsbyjs}>Gatsby.js</NewTabLink>, <NewTabLink href={ghost}>Ghost</NewTabLink> or <NewTabLink href={wordpress}>WordPress</NewTabLink>.</p>
                                <p>If those names say nothing to you, that&apos;s fine. I will explain when we get there. For now, have a look at my <Link to={portfolio}>portfolio</Link> to get a feel for what might be possible.</p>
                            </Col>
                            <Col xs='12' className={`col-${breakpoint}-auto`}>
                                <div className={`my-3 my-${breakpoint}-auto mx-auto shadow`} style={{ width: '320px' }}>
                                    <Image
                                        src={'jodibooks-homepage.png'}
                                        alt={'Picture of Joep in fitting room, trying on a suit'}
                                        className="mx-auto"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className='text-center'>
                            <IconContext.Provider value={{ size: iconSize }}>
                                <NewTabLink href={gatsbyjs} className='nav-padding-social'><SiGatsby /></NewTabLink>
                                <NewTabLink href={nextjs} className='nav-padding-social'><SiNextDotJs /></NewTabLink>
                                <NewTabLink href={ghost} className='nav-padding-social'><SiGhost /></NewTabLink>
                                <NewTabLink href={wordpress} className='nav-padding-social'><SiWordpress /></NewTabLink>
                            </IconContext.Provider>
                        </div>
                    </CardBody>
                </Card>

                <Card className='mb-3'>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <h2>{content.WebHosting}</h2>
                        <Row>
                            <Col xs='12' className={`col-${breakpoint}-auto`}>
                                <div className={`my-3 my-${breakpoint}-auto mx-auto shadow`} style={{ width: '320px' }}>
                                    <Image
                                        src={'jodibooks-homepage.png'}
                                        alt={'Picture of Joep in fitting room, trying on a suit'}
                                        className="mx-auto"
                                    />
                                </div>
                            </Col>
                            <Col className='d-flex flex-column justify-content-between'>
                                <p>Once you have a website, it needs to be hosted on a server somewhere. You can choose almost any hoster you like. The websites I make do not use any exotic technologies that require special servers.</p>
                                <p>However, if you don&apos;t want the hassle of uploading and maintaining your website, I can do that too. This will be done on through <NewTabLink href={jodibooks}>jodiBooks</NewTabLink>, where we&apos;re hosting multiple websites: our own, but also for customers.</p>
                                <p>Depending on the type of website, it will be run through <NewTabLink href={nextjs}>AWS CloudFront</NewTabLink> or <NewTabLink href={nextjs}>AWS Lightsail</NewTabLink>. Again, don&apos;t worry if those names say nothing to you. Just remember that both will be very fast.</p>
                            </Col>
                        </Row>
                        <hr />
                        <div className='text-center'>
                            <IconContext.Provider value={{ size: iconSize }}>
                                <NewTabLink href={github} className='nav-padding-social'><SiGithub /></NewTabLink>
                                <NewTabLink href={awsCloudfront} className='nav-padding-social'><CloudFront height={iconSize} width={iconSize} /></NewTabLink>
                                <NewTabLink href={awsLightsail} className='nav-padding-social'><LightSail height={iconSize} width={(parseInt(iconSize) + 6).toString()} /></NewTabLink>
                            </IconContext.Provider>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <h2>{content.ComputeHosting}</h2>
                        <Row>
                            <Col className='d-flex flex-column justify-content-between'>
                                <p></p>
                            </Col>
                            <Col xs='12' className={`col-${breakpoint}-auto`}>
                                <div className={`my-3 my-${breakpoint}-auto mx-auto shadow`} style={{ width: '320px' }}>
                                    <Image
                                        src={'jodibooks-homepage.png'}
                                        alt={'Picture of Joep in fitting room, trying on a suit'}
                                        className="mx-auto"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className='text-center'>
                            <IconContext.Provider value={{ size: iconSize }}>
                                <NewTabLink href={blender} className='nav-padding-social'><SiBlender /></NewTabLink>
                            </IconContext.Provider>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </section >
    );
};

export default ServicesComponent;