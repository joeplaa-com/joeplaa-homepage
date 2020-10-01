import React from 'react'
import { Container } from 'reactstrap'
import Copyright from './copyright'
import Social from './social'
import { SectionProps } from '../types'

export default function Footer({ className }: SectionProps) {
    return (
        <footer className={className + ' ' + 'footer'}>
            <Container>
                <Copyright color='light' />
                <Social className='justify-content-center' color='light' size='1.25rem' />
            </Container>
        </footer>
    );
}