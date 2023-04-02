import React, { ReactElement } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import { NextSeo } from 'next-seo';
import { content } from '../data/content';
import { metadata, settings, urls } from '../data/metadata';
import { useRouter } from 'next/router';

const PageNotFound = (): ReactElement => {
    const router = useRouter();
    return (
        <>
            <NextSeo
                title={metadata.siteTitle}
                description={metadata.siteDescription || 'nothin’'}
                openGraph={{
                    url: urls.internal.home,
                    title: metadata.siteTitle,
                    description: metadata.siteDescription,
                    images: [
                        {
                            url: urls.internal.public + metadata.siteImage

                        }
                    ]
                }}
            />

            <section className='section-fill gray-dark' id={content['404Title']}>
                <Container className={`text-center text-${settings.breakpoint}-left my-auto`}>
                    <Row>
                        <Col xs='12' sm='10' md='7' lg='5' xl='4' className='mx-auto'>
                            <h1 className='display-1'>{content['404Header']}</h1>
                            <h1>{content['404Title']}</h1>
                            <p>{content['404Message']}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' sm='10' md='7' lg='5' xl='4' className='mx-auto d-flex justify-content-between'>
                            <Button color='secondary' onClick={(): void => router.back()} className='capitalize'>{content.Back}</Button>
                            <Button color='secondary' href={urls.internal.home} className='capitalize'>{metadata.pageHomeTitle}</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default PageNotFound;
