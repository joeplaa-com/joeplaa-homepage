import React from 'react'
import { Container } from 'reactstrap'
import Copyright from './copyright'
import Social from './social'

export default function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Copyright color='light' />
                <Social className='justify-content-center' color='light' size='1.25rem' />
            </Container>
        </footer>
    );
}