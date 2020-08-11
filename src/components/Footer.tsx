import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Copyright from './Copyright';
import SocialButtons from './SocialButtons';
import settings from '../data/settings.json';
import { ISocialButton } from '../store/interfaces';

const Footer = () => (
    <Container>
        <Row className="text-center mt-4">
            <Col xs="12">
                <SocialButtons size={28} className="text-light" buttons={settings.social as ISocialButton[]} />
            </Col>
            <Col xs="12">
                <Copyright />
            </Col>
        </Row>
    </Container>
);

export default Footer;
