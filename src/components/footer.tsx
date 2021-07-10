import React from 'react';
import { Link } from './customLink';
import { Container, Col, Row } from 'reactstrap';
import Copyright from './copyright';
import NewTabLink from './newTabLink';
import Social from './social';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import useSiteSettings from '../hooks/useSiteSettings';
import { SectionProps } from '../types';
import { content } from '../utils/content';
import linkColor from '../utils/linkColor';

export default function Footer({ className }: SectionProps) {
    const { businessAddress1, businessAddress2, businessCoC, businessCountry, businessIBAN, businessName, businessVAT } = useSiteMetadata();
    const { ps, tos } = useSiteNavigation();
    const { breakpoint } = useSiteSettings();
    const color = 'light';
    const colorClassName = linkColor(color);
    return (
        <footer className={className + ' ' + 'footer'}>
            <Container>
                <Row className='text-center'>
                    <Col xs='12' className={`col-${breakpoint}-4 ml-${breakpoint}-auto mb-2 mt-2`}>
                        <h4 className="mb-2 mt-4">{content.CompanyAddress}</h4>
                        <NewTabLink className={colorClassName} href='https://www.google.com/maps/place/Ingenieur+Kalffstraat+43,+5617+BK+Eindhoven'>
                            <span>{businessAddress1}</span><br />
                            <span>{businessAddress2}</span><br />
                            <span>{businessCountry}</span>
                        </NewTabLink>
                    </Col>
                    <Col xs='12' className={`col-${breakpoint}-4 mb-2 mt-2`}>
                        <h4 className="mb-2 mt-4">{content.Conditions}</h4>
                        <Link className={colorClassName} to={tos}>{content.TermsOfService}</Link><br />
                        <Link className={colorClassName} to={ps}>{content.PrivacyStatement}</Link>
                        <span className={`d-none d-${breakpoint}-block`}>
                            <Social color={color} key='footer' size='2rem' />
                        </span>
                    </Col>
                    <Col xs='12' className={`col-${breakpoint}-4 mr-${breakpoint}-auto mb-2 mt-2`}>
                        <h4 className="mb-2 mt-4">{content.CompanyInfo}</h4>
                        <span className='text-light'>Name: {businessName}</span><br />
                        <span className='text-light'>IBAN: {businessIBAN}</span><br />
                        <span className='text-light'>CoC: {businessCoC}</span><br />
                        <span className='text-light'>VAT: {businessVAT}</span>
                    </Col>
                </Row>
                <span className={`d-${breakpoint}-none`}>
                    <Social color={color} key='footer' size='2rem' />
                </span>
                <Copyright color={color} />
            </Container>
        </footer>
    );
}