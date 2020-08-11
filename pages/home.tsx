import React from 'react';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Button, Col, Container, Jumbotron, ListGroup, ListGroupItem, ListGroupItemHeading, Row } from 'reactstrap';
import { FaBox, FaCalendarAlt, FaCheck, FaCoins, FaMobile, FaReceipt, FaShoppingCart, FaUser } from 'react-icons/fa';
import Layout from '../src/components/Layout';
import detectWebp from '../src/functions/detectWebp';
import nl from '../src/data/nl.json';
import settings from '../src/data/settings.json';

const Masthead = () => {
    return (
        <section className="masthead text-center" style={{
            backgroundImage: `url(${detectWebp() ? require('../src/assets/banner.jpg?webp') : require('../src/assets/banner.jpg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Col xs="12" className="overlay"></Col>
            <Container>
                <Row>
                    <Col xs="12" sm="10" md="6" lg="4" className="mx-auto my-auto">
                        <h1 className="d-none d-md-block">jodiBooks Beauty</h1>
                        <h4 className="m-4 mt-sm-0">Samen maken wij het salonpakket dat bijna net zo leuk is als je werk.</h4>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const Home = () => {
    return (
        <>
            <NextSeo
                title={nl.HomePageTitle}
                titleTemplate='jodiBooks.com | %s'
                description={nl.HomePageDescription}
                openGraph={{
                    url: process.env.NEXT_PUBLIC_URL + '/home',
                    title: nl.HomePageTitle,
                    description: nl.HomePageDescription,
                    images: [
                    ]
                }}
            />

            <Layout title={nl.HomePageTitle}>
                <Masthead />
            </Layout >
        </>
    );
};

export default Home;
