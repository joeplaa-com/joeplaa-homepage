import React from 'react'
import { Container } from 'reactstrap'
import Conditions from './conditions'
import Copyright from './copyright'
import Social from './social'
import { SectionProps } from '../types'

export default function Footer({ className }: SectionProps) {
    return (
        <footer className={className + ' ' + 'footer'}>
            <Container>
                <Copyright color='light' />
                <Social color='light' size='2rem' />
                <Conditions color='light' />
            </Container>
        </footer>
    );
}