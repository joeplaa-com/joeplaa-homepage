import React, { ReactElement } from 'react';
import { Container, Card, CardBody, Row, Col } from 'reactstrap';
import { IconContext } from 'react-icons';
import { FaOpencart } from 'react-icons/fa';
import { SiAmazonaws, SiBamboo, SiGatsby, SiGhost, SiJenkins, SiJetbrains, SiMagento, SiNextdotjs, SiWoocommerce, SiWordpress } from 'react-icons/si';
import { Link } from './customLink';
import Image from './image';
import NewTabLink from './newTabLink';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
// import useSitePricing from '../hooks/useSitePricing';
import useSiteSettings from '../hooks/useSiteSettings';
import useSiteUrls from '../hooks/useSiteUrls';
import JodiBooksLogo from '../svg/jodibooks-logo.svg';
import { SectionProps } from '../types';
import { content } from '../utils/content';

const ServicesComponent = ({ className }: SectionProps): ReactElement => {
    const { componentPricingTitle } = useSiteMetadata();
    const { portfolio } = useSiteNavigation();
    // const { websiteDesign, websiteHosting } = useSitePricing();
    const { breakpoint, iconSize } = useSiteSettings();
    const { aws, bamboo, gatsbyjs, ghost, jenkins, jodibooks, magento, nextjs, opencart, teamcity, woocommerce, wordpress } = useSiteUrls();
    return (
        <section className={className} id={componentPricingTitle}>
            <Container className='mb-3 mt-3'>
                <Card className='mb-3'>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <h2>{content.WebsiteDesign}</h2>
                        <Row>
                            <Col className='d-flex flex-column justify-content-between'>
                                <p>Creating a website can be a lot of work. You want to spend your precious time on the things you are best at. Maybe you don&apos;t know where to start or you think you lack the skills to do it yourself. Or you already have a website but want to change or update it and need some help or advice.</p>
                                <p>No worries, I will help you out. I can build a new website from scratch or update your existing site. We&apos;ll discuss together what you want to achieve and do with your website and from there determine what kind of website you need. This can be a website with <NewTabLink href={nextjs}>Next.js</NewTabLink>, <NewTabLink href={gatsbyjs}>Gatsby.js</NewTabLink>, <NewTabLink href={ghost}>Ghost</NewTabLink> or <NewTabLink href={wordpress}>WordPress</NewTabLink>.</p>
                                <p>If those names say nothing to you, that&apos;s fine. I will explain when we get there. For now, have a look at my <Link to={portfolio}>portfolio</Link> to get a feel for what might be possible.</p>
                            </Col>
                            <Col xs='12' className={`col-${breakpoint}-auto`}>
                                <div className={`my-3 my-${breakpoint}-auto mx-auto shadow`} style={{ width: '320px' }}>
                                    <Image
                                        src='jodibooks-homepage.png'
                                        alt='Screenshot of the jodiBooks homepage'
                                        className="mx-auto"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className='text-center'>
                            <IconContext.Provider value={{ size: iconSize }}>
                                <NewTabLink href={gatsbyjs} className='nav-padding-social'><SiGatsby /></NewTabLink>
                                <NewTabLink href={nextjs} className='nav-padding-social'><SiNextdotjs /></NewTabLink>
                                <NewTabLink href={ghost} className='nav-padding-social'><SiGhost /></NewTabLink>
                                <NewTabLink href={wordpress} className='nav-padding-social'><SiWordpress /></NewTabLink>
                            </IconContext.Provider>
                        </div>
                    </CardBody>
                </Card>

                <Card className='mb-3'>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <h2>{content.WebshopSetup}</h2>
                        <Row>
                            <Col xs='12' className={`col-${breakpoint}-auto`}>
                                <div className={`my-3 my-${breakpoint}-auto mx-auto shadow`} style={{ width: '320px' }}>
                                    <Image
                                        src='webshop-example.png'
                                        alt='Screenshot of a webshop'
                                        className="mx-auto"
                                    />
                                </div>
                            </Col>
                            <Col className='d-flex flex-column justify-content-between'>
                                <p>A webshop can generate additional income, but setting it up can be a lot of work. You probably have better things to do.</p>
                                <p>That&apos;s where I come in. If you tell me what products you want to have in your webshop, I&apos;ll set it up. We&apos;ll discuss what information I need, like product images and descriptions. Depending on how many products you want to sell and how often you want to update your shop we&apos;ll use <NewTabLink href={opencart}>OpenCart</NewTabLink>, <NewTabLink href={woocommerce}>WooCommerce</NewTabLink> or <NewTabLink href={magento}>Magento</NewTabLink>.</p>
                            </Col>
                        </Row>
                        <hr />
                        <div className='text-center'>
                            <IconContext.Provider value={{ size: iconSize }}>
                                <NewTabLink href={magento} className='nav-padding-social'><SiMagento /></NewTabLink>
                                <NewTabLink href={opencart} className='nav-padding-social'><FaOpencart /></NewTabLink>
                                <NewTabLink href={woocommerce} className='nav-padding-social'><SiWoocommerce /></NewTabLink>
                            </IconContext.Provider>
                        </div>
                    </CardBody>
                </Card>

                <Card className='mb-3'>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <h2>{content.WebHosting}</h2>
                        <Row>
                            <Col className='d-flex flex-column justify-content-between'>
                                <p>Once you have a website (and/or webshop), it needs to be hosted on a server somewhere. You can off course choose almost any hoster you like. The websites I make do not use any exotic technologies that require special servers.</p>
                                <p>However, if you don&apos;t want the hassle of uploading and maintaining your website, I can do that too. This will be done on through <NewTabLink href={jodibooks}>jodiBooks</NewTabLink>, where we&apos;re hosting multiple websites for ourselves, but also for customers.</p>
                                <p>Depending on the type of website, it will be run through AWS CloudFront or AWS Lightsail. Again, don&apos;t worry if those names say nothing to you. Just remember that both will be very fast.</p>
                            </Col>
                            <Col xs='12' className={`col-${breakpoint}-auto`}>
                                <div className={`my-3 my-${breakpoint}-auto mx-auto shadow`} style={{ width: '320px' }}>
                                    <Image
                                        src='web-hosting-example.png'
                                        alt='screenshot grafana network traffic'
                                        className="mx-auto"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        <div className='text-center'>
                            <IconContext.Provider value={{ size: iconSize }}>
                                <NewTabLink href={aws} className='nav-padding-social'><SiAmazonaws /></NewTabLink>
                                <NewTabLink href={jodibooks} className='nav-padding-social'><JodiBooksLogo stroke="currentColor" fill='currentColor' /></NewTabLink>
                            </IconContext.Provider>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody className='d-flex flex-column justify-content-between'>
                        <h2>{content.Hosting}</h2>
                        <Row>
                            <Col xs='12' className={`col-${breakpoint}-auto`}>
                                <div className={`my-3 my-${breakpoint}-auto mx-auto shadow`} style={{ width: '320px' }}>
                                    <Image
                                        src='hosting-teamcity-example.png'
                                        alt='jodiBooks teamcity dashboard'
                                        className="mx-auto"
                                    />
                                </div>
                            </Col>
                            <Col className='d-flex flex-column justify-content-between'>
                                <p>At <NewTabLink href={jodibooks}>jodiBooks</NewTabLink> we use TeamCity to continuously test our software, automatically push new versions to our test environment and build our releases.</p>
                                <p>You need something similar for your software, but don&apos;t want the hassle of buying and maintaining your own hardware? Let me help you out.</p>
                                <p>We use <NewTabLink href={teamcity}>Teamcity</NewTabLink>, but if you prefer <NewTabLink href={bamboo}>Bamboo</NewTabLink>, <NewTabLink href={jenkins}>Jenkins</NewTabLink> or any other, that&apos;s no problem, just make sure you have the proper license.</p>
                            </Col>
                        </Row>
                        <hr />
                        <div className='text-center'>
                            <IconContext.Provider value={{ size: iconSize }}>
                                <NewTabLink href={teamcity} className='nav-padding-social'><SiJetbrains /></NewTabLink>
                                <NewTabLink href={bamboo} className='nav-padding-social'><SiBamboo /></NewTabLink>
                                <NewTabLink href={jenkins} className='nav-padding-social'><SiJenkins /></NewTabLink>
                            </IconContext.Provider>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </section>
    );
};

export default ServicesComponent;
