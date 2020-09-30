import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import SEO from 'react-seo-component'
import Layout from '../components/layout'
import { content, metaData } from '../utils/data'
import { navigate } from '@reach/router'

const Home = () => {
    return (
        <>
            <Layout>
                <SEO
                    title={metaData.SiteTitle}
                    description={metaData.SiteDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.SiteImage}`}
                    pathname={`${metaData.SiteUrl}`}
                    titleTemplate={metaData.PageTitle}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className={'section-404'} id="404">
                    <Container className='text-center text-md-left my-auto'>
                        <Row>
                            <Col xs='12' sm='10' md='7' lg='5' xl='4' className='mx-auto'>
                                <h1 className='display-1'>{content['404Header']}</h1>
                                <h1>{content['404Title']}</h1>
                                <p>{content['404Message']}</p>
                                <Button onClick={() => navigate(-1)}>Back</Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default Home;
