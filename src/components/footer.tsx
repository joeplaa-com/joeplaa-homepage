import React from 'react'
import { Container } from 'reactstrap'
import Copyright from './copyright'
import Social from './social'
import { BackgroundProps } from '../types'

export default function Footer({ backgroundColor }: BackgroundProps) {
    return (
        <footer className={backgroundColor + ' ' + 'footer'}>
            <Container>
                <Copyright color='light' />
                <Social className='justify-content-center' color='light' size='1.25rem' />
            </Container>
        </footer>
    );
}