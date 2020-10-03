import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import SEO from 'react-seo-component'
import Layout from '../../components/layout'
import { content, metaData } from '../../utils/data'
import { navigate } from '@reach/router'

const PrivacyStatement = () => {
    return (
        <>
            <Layout>
                <SEO
                    title={metaData.PrivacyTitle}
                    description={metaData.PrivacyDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.SiteImage}`}
                    pathname={`${metaData.SiteUrl}`}
                    titleTemplate={metaData.TitleTemplate}
                    titleSeparator={metaData.TitleSeparator}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className='section-fill gray-dark' id={metaData.PrivacyTitle}>
                    <Container className='text-center text-md-left my-auto'>
                        <Row>
                            <Col xs='12' sm='10' md='7' lg='5' xl='4' className='mx-auto'>
                                <h1 className='display-1'>{metaData.PrivacyTitle}</h1>
                                <h1>{metaData.PrivacyDescription}</h1>
                                <p>Eeek!</p>
                                <Button onClick={() => navigate(-1)}>{content.Back}</Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export default PrivacyStatement;
