import { navigate } from '@reach/router';
import React, { ReactElement } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import SEO from 'react-seo-component';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import useSiteSettings from '../hooks/useSiteSettings';
import { content } from '../data/content';

const PageNotFound = (): ReactElement => {
    const { pageHomeTitle, siteDescription, siteImage, siteLanguage, siteLocale, siteTitle, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { home } = useSiteNavigation();
    const { breakpoint } = useSiteSettings();
    return (
        <>
            <SEO
                title={siteTitle}
                description={siteDescription}
                image={`${siteUrl}${siteImage}`}
                pathname={`${siteUrl}`}
                titleSeparator={titleSeparator}
                titleTemplate={titleTemplate}
                siteLanguage={siteLanguage} // get language from i18n
                siteLocale={siteLocale} // get locale from i18n
                twitterUsername={twitterUsername}
            />

            <section className='section-fill gray-dark' id={content['404Title']}>
                <Container className={`text-center text-${breakpoint}-left my-auto`}>
                    <Row>
                        <Col xs='12' sm='10' md='7' lg='5' xl='4' className='mx-auto'>
                            <h1 className='display-1'>{content['404Header']}</h1>
                            <h1>{content['404Title']}</h1>
                            <p>{content['404Message']}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' sm='10' md='7' lg='5' xl='4' className='mx-auto d-flex justify-content-between'>
                            <Button color='secondary' onClick={(): Promise<void> => navigate(-1)} className='capitalize'>{content.Back}</Button>
                            <Button color='secondary' href={home} className='capitalize'>{pageHomeTitle}</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default PageNotFound;
