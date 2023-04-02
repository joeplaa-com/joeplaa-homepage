import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { Col, Container, Row } from 'reactstrap';
import NewTabLink from './newTabLink';
import Social from './social';
import { SectionProps } from '../typescript';
import { getAge } from '../utils/getAge';
import { metadata, settings, urls } from '../data/metadata';
import joepSuit from '../../public/images/joep-in-suit.jpg';

const About = ({ className }: SectionProps): ReactElement => {
    return (
        <section className={className} id="About">
            <Container className='mb-3 mt-3'>
                <Row>
                    <Col>
                        <h1 className='display-1 text-center text'>{metadata.componentAboutTitle}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' className={`col-${settings.breakpoint}-auto`}>
                        <div className={`my-3 my-${settings.breakpoint}-auto mx-auto shadow`} style={{ width: '240px' }}>
                            <Image
                                src={joepSuit}
                                width={300}
                                alt='Picture of Joep in fitting room, trying on a suit'
                                className="mx-auto"
                            />
                        </div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-between'>
                        <div>
                            <h2>Who is Joeplaa</h2>
                            <p>I&apos;m {metadata.authorFirstName}, {getAge('1985/01/14')} years old and currently living in <NewTabLink href='https://en.wikipedia.org/wiki/Lieshout'>Lieshout in The Netherlands</NewTabLink>. I went to Eindhoven to study mechanical engineering at <NewTabLink href='https://www.tue.nl/'>TU/e</NewTabLink> university. After working as a mechanical engineer for 7.5 years, I quit my &quot;dayjob&quot; and started working full time on my own company: <NewTabLink href='https://www.jodibooks.com'>jodiBooks</NewTabLink>.</p>
                            <p>At jodiBooks I have learned how to do front-end design and website hosting, which merged beautifully with my hobby: homelabbing.</p>
                        </div>
                        <div>
                            <Social color='dark' key='about' size='2rem' />
                        </div>
                        <div>
                            <h2>What is Joeplaa</h2>
                            <p>Joeplaa, pronounce &quot;you-p-laah&quot;, is an abbreviation of my full name: {metadata.authorFirstName} {metadata.authorLastName}. Initially I started using it to shorten my e-mail address, but it turned into my &quot;official&quot; handle <code>@joeplaa</code> everywhere on the web. I&apos;ve originally started joeplaa.com as my <Link href={urls.external.blog}>personal blog</Link>, which you can still find at <Link href={urls.external.blog}>{urls.external.blog}</Link>.</p>
                            <p>Now, with this website, joeplaa.com 2.0, I want to show you what I do. Check out my <Link href={urls.internal.portfolio}>portfolio</Link> and <Link href={urls.internal.services}>services</Link>. Have a look around and <Link href={urls.internal.contact}>let me know</Link> if you want to know more.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
