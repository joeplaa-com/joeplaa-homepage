import * as React from 'react';
import { Col, Row } from 'reactstrap';
import constants from '../data/constants.json';
import nl from '../data/nl.json';

const Footer = () => (
    <footer id="footer" className="col-12 col-xl-10 mx-auto mt-5">
        <Row>
            <Col xs="12" sm="6">
                <div>{nl.Shared_Layout_SendEmail}</div>
                <div><a href={"mailto:" + constants.settings.supportEmail}>{constants.settings.supportEmail}</a></div>
            </Col>
            <Col xs="12" sm="6" className="text-sm-right">
                <span>jodiBooks Beauty </span><span>{constants.settings.version}</span>
            </Col>
        </Row>
    </footer>
)

export default Footer;
