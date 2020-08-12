import React, { ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import { Col, Row } from 'reactstrap';
import Layout from '../src/components/Layout';
import detectWebp from '../src/functions/detectWebp';
import en from '../src/data/en.json';

const Masthead = () => {
    return (
        <section className="masthead text-center" style={{
            backgroundImage: `url(${detectWebp() ? require('../src/assets/banner.jpg?webp') : require('../src/assets/banner.jpg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Col xs="12" className="overlay"></Col>
            <Row>
                <Col xs="12" sm="10" md="6" lg="4" className="mx-auto my-auto">
                    <h1 className="d-none d-md-block">jodiBooks Beauty</h1>
                    <h4 className="m-4 mt-sm-0">Samen maken wij het salonpakket dat bijna net zo leuk is als je werk.</h4>
                </Col>
            </Row>
        </section>
    );
};

const Blog = ():ReactElement => {
    return (
        <>
            <NextSeo
                title={en.HomePageTitle}
                titleTemplate='jodiBooks.com | %s'
                description={en.HomePageDescription}
                openGraph={{
                    url: process.env.NEXT_PUBLIC_URL + '/home',
                    title: en.HomePageTitle,
                    description: en.HomePageDescription,
                    images: [
                    ]
                }}
            />

            <Layout title={en.HomePageTitle}>
                <Masthead />
            </Layout >
        </>
    );
};

export default Blog;
