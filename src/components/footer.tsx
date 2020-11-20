import React from 'react'
import { Link } from 'gatsby'
import { Container, Col, Row } from 'reactstrap'
import Copyright from './copyright'
import NewTabLink from './newTabLink'
import Social from './social'
import { SectionProps } from '../types'
import { content, metaData, navigation } from '../utils/data'
import linkColor from '../utils/linkColor'

export default function Footer ({ className }: SectionProps) {
    const color = 'light';
    const colorClassName = linkColor(color);
    return (
        <footer className={className + ' ' + 'footer'}>
            <Container>
                <Row className='text-center'>
                    <Col xs='12' md='4' className='ml-md-auto mb-2 mt-2'>
                        <h4 className="mb-2 mt-4">{content.CompanyAddress}</h4>
                        <NewTabLink className={colorClassName} href='https://www.google.com/maps/place/Ingenieur+Kalffstraat+43,+5617+BK+Eindhoven'>
                            <span>{metaData.BusinessAddress1}</span><br />
                            <span>{metaData.BusinessAddress2}</span><br />
                            <span>{metaData.BusinessCountry}</span>
                        </NewTabLink>
                    </Col>
                    <Col xs='12' md='4' className='mb-2 mt-2'>
                        <h4 className="mb-2 mt-4">{content.Conditions}</h4>
                        <Link className={colorClassName} to={navigation.tos}>{content.TermsOfService}</Link><br />
                        <Link className={colorClassName} to={navigation.ps}>{content.PrivacyStatement}</Link>
                        <span className='d-none d-md-block'>
                            <Social color={color} key='footer' size='2rem' />
                        </span>
                    </Col>
                    <Col xs='12' md='4' className='mr-md-auto mb-2 mt-2'>
                        <h4 className="mb-2 mt-4">{content.CompanyInfo}</h4>
                        <span className='text-light'>Name: {metaData.BusinessName}</span><br />
                        <span className='text-light'>IBAN: {metaData.BusinessIBAN}</span><br />
                        <span className='text-light'>CoC: {metaData.BusinessCoC}</span><br />
                        <span className='text-light'>VAT: {metaData.BusinessVAT}</span>
                    </Col>
                </Row>
                <span className='d-md-none'>
                    <Social color={color} key='footer' size='2rem' />
                </span>
                <Copyright color={color} />
            </Container>
        </footer>
    );
}