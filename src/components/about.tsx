import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from './customLink'
import ImageAbout from './imageAbout'
import NewTabLink from './newTabLink'
import Social from './social'
import useSiteMetadata from '../hooks/useSiteMetadata'
import useSiteNavigation from '../hooks/useSiteNavigation'
import useSiteSettings from '../hooks/useSiteSettings'
import { SectionProps } from '../types'
import { getAge } from '../utils/getAge'

const About = ({ className }: SectionProps) => {
    const { authorFirstName, authorLastName, componentAboutTitle } = useSiteMetadata();
    const { blog, contact, portfolio, services } = useSiteNavigation();
    const { breakpoint } = useSiteSettings();
    return (
        <section className={className} id="About">
            <Container className='mb-3 mt-3'>
                <Row>
                    <Col>
                        <h1 className={`display-1 text-center text-${breakpoint}-left`}>{componentAboutTitle}</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' className={`col-${breakpoint}-auto`}>
                        <div className={`my-3 my-${breakpoint}-auto mx-auto shadow`} style={{ width: '240px' }}>
                            <ImageAbout
                                src={'joep-in-suit.jpg'}
                                alt={'Picture of Joep in fitting room, trying on a suit'}
                                className="mx-auto"
                            />
                        </div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-between'>
                        <div>
                            <h2>Who is Joeplaa</h2>
                            <p>I&apos;m {authorFirstName}, {getAge('1985/01/14')} years old and currently living in <NewTabLink href='https://en.wikipedia.org/wiki/Eindhoven'>Eindhoven in The Netherlands</NewTabLink>. I went to Eindhoven to study mechanical engineering at <NewTabLink href='https://www.tue.nl/'>TU/e</NewTabLink> university. After working as a mechanical engineer for 7.5 years, I quit my &quot;dayjob&quot; and started working full time on my own company: <NewTabLink href='https://www.jodibooks.com'>jodiBooks</NewTabLink>.</p>
                            <p>At jodiBooks I have learned how to do front-end design and website hosting. With that knowledge I will now help you create your homepage or assist you with running digital applications.</p>
                        </div>
                        <div>
                            <Social color='dark' key='about' size='2rem' />
                        </div>
                        <div>
                            <h2>What is Joeplaa</h2>
                            <p>Joeplaa, pronounce &quot;you-p-laah&quot;, is an abbreviation of my full name: {authorFirstName} {authorLastName}. Initially I started using it to shorten my e-mail address, but it turned into my &quot;official&quot; handle <code>@joeplaa</code> everywhere on the web. I&apos;ve originally started joeplaa.com as my <Link to={blog}>personal blog</Link>, which you can still find at <Link to={blog}>{blog}</Link>.</p>
                            <p>Now, with this website, joeplaa.com 2.0, I want to show you what I do. Check out my <Link to={portfolio}>portfolio</Link> and <Link to={services}>services</Link>. Have a look around and <Link to={contact}>let me know</Link> if you want to know more.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;