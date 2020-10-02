import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import SEO from 'react-seo-component'
import Layout from '../../components/layout'
import { content, metaData } from '../../utils/data'
import { navigate } from '@reach/router'

const TermsOfService = () => {
    return (
        <>
            <Layout>
                <SEO
                    title={metaData.TermsTitle}
                    description={metaData.TermsDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.SiteImage}`}
                    pathname={`${metaData.SiteUrl}`}
                    titleTemplate={metaData.PageTitle}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className='section-fill gray-dark' id={metaData.TermsTitle}>
                    <Container className='text-center text-md-left my-auto'>
                        <Row>
                            <Col xs='12' sm='10' md='7' lg='5' xl='4' className='mx-auto'>
                                <h1 className='display-1'>{metaData.TermsTitle}</h1>
                                <h1>{metaData.TermsDescription}</h1>
                                <p>Oook!</p>
                                <Button onClick={() => navigate(-1)}>{content.Back}</Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default TermsOfService;
