import React, { ReactElement } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Copyright from './copyright';
import NewTabLink from './newTabLink';
import Social from './social';
import { SectionProps } from '../typescript';
import { content } from '../data/content';
import linkColor from '../utils/linkColor';
import { metadata, settings, urls } from '../data/metadata';

export default function Footer({ className }: SectionProps): ReactElement {
    const color = 'light';
    const colorClassName = linkColor(color);
    return (
        <footer className={className + ' ' + 'footer'}>
            <Container>
                <Row className='text-center'>
                    <Col xs='12' className={`col-${settings.breakpoint}-4 ms-${settings.breakpoint}-auto mb-2 mt-2`}>
                        <h4 className="mb-2 mt-4">{content.CompanyAddress}</h4>
                        <span>{metadata.businessAddress1}</span><br />
                        <span>{metadata.businessAddress2}</span><br />
                        <span>{metadata.businessCountry}</span>
                    </Col>
                    <Col xs='12' className={`col-${settings.breakpoint}-4 mb-2 mt-2`}>
                        <h4 className="mb-2 mt-4">{content.Conditions}</h4>
                        <NewTabLink className={colorClassName} href={urls.external.tos}>{content.TermsOfService}</NewTabLink>
                        <span className={`d-none d-${settings.breakpoint}-block`}>
                            <Social color={color} key='footer1' size='2rem' />
                        </span>
                    </Col>
                    <Col xs='12' className={`col-${settings.breakpoint}-4 me-${settings.breakpoint}-auto mb-2 mt-2`}>
                        <h4 className="mb-2 mt-4">{content.CompanyInfo}</h4>
                        <span className='text-light'>Name: {metadata.businessName}</span><br />
                        <span className='text-light'>IBAN: {metadata.businessIBAN}</span><br />
                        <span className='text-light'>CoC: {metadata.businessCoC}</span><br />
                        <span className='text-light'>VAT: {metadata.businessVAT}</span>
                    </Col>
                </Row>
                <span className={`d-${settings.breakpoint}-none`}>
                    <Social color={color} key='footer2' size='2rem' />
                </span>
                <Copyright color={color} />
            </Container>
        </footer>
    );
}
