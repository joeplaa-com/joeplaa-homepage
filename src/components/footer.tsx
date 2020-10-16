import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Conditions from './conditions'
import Copyright from './copyright'
import Social from './social'
import { SectionProps } from '../types'

export default function Footer({ className }: SectionProps) {
    return (
        <footer className={className + ' ' + 'footer'}>
            <Container>
                <Row>
                    <Col xs='12' md='auto' className='ml-md-auto text-center text-md-right'>
                        <Copyright color='light' />
                    </Col>
                    <Col xs='12' md='auto' className='mr-md-auto text-center text-md-left'>
                        <Conditions color='light' />
                    </Col>
                </Row>
                <Social color='light' key='footer' size='2rem' />
            </Container>
        </footer>
    );
}